/* eslint-disable camelcase */
import React, { Component } from 'react'

const SIZE = 64

const canvas_width = window.innerWidth
const canvas_height = window.innerHeight

export default class Canvas extends Component {
  constructor (props) {
    super(props)
    this.canvasRef = React.createRef()
  }

  componentDidMount () {
    // const canvas = this.canvasRef.current
    // const context = canvas.getContext('2d')
    // context.fillRect(0, 0, canvas.width, canvas.height)
  }

  componentDidUpdate () {
    const { lines } = this.props
    const canvas = this.canvasRef.current
    canvas.width = canvas_width * 2
    canvas.height = canvas_height * 2
    const ctx = canvas.getContext('2d')
    ctx.lineWidth = 1
    ctx.strokeStyle = '#ccc'
    const pixel_depth = window.devicePixelRatio

    ctx.beginPath()
    for (let i = 0; i < lines.length; i++) {
      for (let j = 0; j < lines[i].length - 1; j++) {
        ctx.moveTo(pixel_depth * canvas_width / (SIZE - 1) * j, pixel_depth * (canvas_height * 0.5 + lines[i][j]))
        ctx.lineTo(pixel_depth * canvas_width / (SIZE - 1) * (j + 1), pixel_depth * (canvas_height * 0.5 + lines[i][j + 1]))
      }
    }
    ctx.clearRect(0, 0, canvas_width * 2, canvas_height * 2)
    ctx.stroke()
  }

  render () {
    return (
      <canvas ref={this.canvasRef} />
    )
  }
}
