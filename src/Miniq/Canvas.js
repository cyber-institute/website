import React, { Component } from 'react'

const SIZE = 25

export default class Canvas extends Component {
  constructor (props) {
    super(props)
    this.canvasRef = React.createRef()
    // Initial state
    const arr = []
    for (let i = 0; i < SIZE; i++) {
      arr[i] = []
      for (let j = 0; j < SIZE; j++) {
        const g = Math.exp(-0.8 * ((i - 0.5 * (SIZE - 1)) * (i - 0.5 * (SIZE - 1)) + (j - 0.5 * (SIZE - 1)) * (j - 0.5 * (SIZE - 1))))
        arr[i][j] = [50 * g, 0]
      }
    }

    for (let k = 0; k < SIZE; k++) {
      arr[k][0] = [0, 0]
      arr[k][SIZE - 1] = [0, 0]
      arr[0][k] = [0, 0]
      arr[SIZE - 1][k] = [0, 0]
    }

    this.state = {
      arr
    }
  }

  componentDidMount () {
    // const canvas = this.canvasRef.current
    // const context = canvas.getContext('2d')
    // context.fillRect(0, 0, canvas.width, canvas.height)

    const { arr } = this.state
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
        ctx.fillRect(i * 4 + j * 4, i * 6 + j * 6, 2, 2)
        ctx.fillStyle = '#0ff'
        ctx.fillRect(i * 4 + j * 4, i * 6 + j * 6, 2, 2)
      }
    }
  }

  render () {
    return (
      <canvas
        ref={this.canvasRef} style={{
          margin: 'auto',
          display: 'block',
          width: 830,
          height: 500
        }}
      />
    )
  }
}
