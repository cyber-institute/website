/* eslint-disable camelcase */
import React from 'react'


const SIZE = 64
const MAX_FRAME_NUMBER = 100000
const CLOCKS = 50
const NUM_LINES = 128

const window_width = window.innerWidth
const window_height = window.innerHeight
const pixel_depth = window.devicePixelRatio

let frame_number = 0

const containerStyle = {
  position: 'absolute',
  zIndex: -1
}

export default class Animation extends React.Component {
  bindCanvas = (element) => {
    this.lines = new Array(NUM_LINES)
    this.lines_v = new Array(NUM_LINES)
    for (let i = 0; i < NUM_LINES; i++) {
      this.lines[i] = new Float32Array(SIZE)
      this.lines_v[i] = new Float32Array(SIZE)
      for (let j = 0; j < SIZE; j++) {
        this.lines[i][j] = 300 * Math.sin(j * 3 / 4 * Math.PI / (SIZE - 1) + i * Math.PI / NUM_LINES)
        this.lines_v[i][j] = 0
      }
    }
    this.mouse_x = 0
    this.mouse_y = 0
    this.canvas = element
    this.canvas.width = window_width * pixel_depth
    this.canvas.height = window_height * pixel_depth
    this.ctx = this.canvas.getContext('2d')
    this.ctx.lineWidth = 1
    this.ctx.strokeStyle = '#52317822'
    this.offsetTop = this.canvas.getBoundingClientRect().top
    this.rAF = window.requestAnimationFrame(this.mainLoop)

    window.addEventListener('mousemove', (e) => {
      this.mouse_x = e.pageX
      this.mouse_y = e.pageY - this.offsetTop
    })
  }

  componentWillUnmount () {
    window.cancelAnimationFrame(this.rAF)
  }

  mainLoop = () => {
    const { ctx, mouse_x, mouse_y, lines, lines_v } = this

    for (let k = 0; k < CLOCKS; k++) {
      for (let i = 0; i < NUM_LINES; i++) {
        let prev_point = lines[i][0]
        let curr_point = 0
        for (let j = 1; j < SIZE - 1; j++) {
          curr_point = lines[i][j]
          lines_v[i][j] = 0.99999 * (lines_v[i][j] + 0.0000005 * (prev_point - 2 * lines[i][j] + lines[i][j + 1]))
          lines[i][j] += 0.01 * (prev_point - 2 * lines[i][j] + lines[i][j + 1]) + lines_v[i][j]
          const dx = 0.01 * (mouse_x - window_width / SIZE * j)
          const dy = 0.01 * (mouse_y - (window_height * 0.5 + lines[i][j]))
          const d = dx * dx + dy * dy
          const p = 1 / (d > 1 ? d : 1)
          lines[i][j] -= 0.03 * dy / Math.abs(dy || 1) * p
          prev_point = curr_point
        }
        lines[i][0] = 300 * Math.sin(Math.PI * 2 * frame_number / MAX_FRAME_NUMBER + i * Math.PI / NUM_LINES)
        lines[i][SIZE - 1] = 300 * Math.sin(Math.PI * 2 * frame_number / MAX_FRAME_NUMBER + 3 / 4 * Math.PI + i * Math.PI / NUM_LINES)
      }
      frame_number++
      if (frame_number === MAX_FRAME_NUMBER) {
        frame_number = 0
      }
    }

    ctx.beginPath()
    for (let i = 0; i < lines.length; i++) {
      for (let j = 0; j < lines[i].length - 1; j++) {
        ctx.moveTo(pixel_depth * window_width / (SIZE - 1) * j, pixel_depth * (window_height * 0.5 + lines[i][j]))
        ctx.lineTo(pixel_depth * window_width / (SIZE - 1) * (j + 1), pixel_depth * (window_height * 0.5 + lines[i][j + 1]))
      }
    }
    ctx.clearRect(0, 0, window_width * 2, window_height * 2)
    ctx.stroke()

    this.rAF = window.requestAnimationFrame(this.mainLoop)
  }

  render () {
    return (
      <div
        onMouseMove={this._onMouseMove}
        style={containerStyle}
      >
        <canvas ref={this.bindCanvas} />
      </div>
    )
  }
}
