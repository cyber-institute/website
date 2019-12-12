/* eslint-disable camelcase */
import React, { Component } from 'react'

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
    const { x, y } = this.props
    const canvas = this.canvasRef.current
    canvas.width = canvas_width * 2
    canvas.height = canvas_height * 2
    const ctx = canvas.getContext('2d')
    ctx.lineWidth = 1
    ctx.strokeStyle = '#ccc'
    ctx.fillRect(x * 2, y * 2, 10, 10)
  }

  render () {
    return (
      <canvas ref={this.canvasRef} />
    )
  }
}
