/* eslint-disable camelcase */
import React from 'react'

import Canvas from './Canvas'

let frame_number = 0
const MAX_FRAME_NUMBER = 100000
const CLOCKS = 50
const NUM_LINES = 128
const SIZE = 64

const canvas_width = window.innerWidth
const canvas_height = window.innerHeight

export default class Animation extends React.Component {
  constructor (props) {
    super(props)
    const lines = new Array(NUM_LINES)
    const lines_v = new Array(NUM_LINES)
    for (let i = 0; i < NUM_LINES; i++) {
      lines[i] = new Float32Array(SIZE)
      lines_v[i] = new Float32Array(SIZE)
      for (let j = 0; j < SIZE; j++) {
        lines[i][j] = 300 * Math.sin(j * 3 / 4 * Math.PI / (SIZE - 1) + i * Math.PI / NUM_LINES)
        lines_v[i][j] = 0
      }
    }
    this.state = { x: 0, y: 0, lines, lines_v }
    this.updateAnimationState = this.updateAnimationState.bind(this)
  }

  componentDidMount () {
    // eslint-disable-next-line no-undef
    this.rAF = requestAnimationFrame(this.updateAnimationState)
  }

  updateAnimationState () {
    const { lines, lines_v } = this.state
    for (let k = 0; k < CLOCKS; k++) {
      for (let i = 0; i < NUM_LINES; i++) {
        let prev_point = lines[i][0]
        let curr_point = 0
        for (let j = 1; j < SIZE - 1; j++) {
          curr_point = lines[i][j]
          lines_v[i][j] = 0.99999 * (lines_v[i][j] + 0.0000005 * (prev_point - 2 * lines[i][j] + lines[i][j + 1]))
          lines[i][j] += 0.01 * (prev_point - 2 * lines[i][j] + lines[i][j + 1])
          lines[i][j] += lines_v[i][j]
          const dx = 0.01 * (this.state.x - canvas_width / SIZE * j)
          const dy = 0.01 * (this.state.y - (canvas_height * 0.5 + lines[i][j]))
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
    this.setState(prevState => ({ lines, lines_v }))
    // eslint-disable-next-line no-undef
    this.rAF = requestAnimationFrame(this.updateAnimationState)
  }

  componentWillUnmount () {
    // eslint-disable-next-line no-undef
    cancelAnimationFrame(this.rAF)
  }

  _onMouseMove (e) {
    this.setState({ x: e.screenX, y: e.screenY })
  }

  render () {
    return (
      <div onMouseMove={this._onMouseMove.bind(this)}>
        <Canvas lines={this.state.lines} />
      </div>
    )
  }
}
