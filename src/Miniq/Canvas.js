import React, { Component } from 'react'

const SIZE = 25

export default class Canvas extends Component {
  constructor (props) {
    super(props)
    this.canvasRef = React.createRef()
  }

  componentDidUpdate () {
    const { arr } = this.props
    const canvas = this.canvasRef.current
    const ctx = canvas.getContext('2d')
    const ctxWidth = ctx.canvas.width
    const ctxHeight = ctx.canvas.height
    ctx.clearRect(0, 0, ctxWidth, ctxHeight)
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        const re = arr[i][j][0]
        const im = arr[i][j][1]
        ctx.fillStyle = '#faa'
        ctx.fillRect(i * 16 + j * 16, 300 - 2 * re - i * 6 + j * 6, 2, 2)
        ctx.fillStyle = '#0ff'
        ctx.fillRect(i * 16 + j * 16, 300 - 2 * im - i * 6 + j * 6, 2, 2)
      }
    }

    // isRendering = false
  }

  render () {
    return (
      <canvas ref={this.canvasRef} />
    )
  }
}
