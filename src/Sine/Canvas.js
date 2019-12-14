/* eslint-disable camelcase */
import React, { Component } from 'react'

const canvas_width = window.innerWidth
const canvas_height = window.innerHeight

export default class Canvas extends Component {
  constructor (props) {
    super(props)
    this.canvasRef = React.createRef()
  }

  plotSine (ctx) {
    var width = ctx.canvas.width
    var height = ctx.canvas.height
    var scale = 20

    ctx.beginPath()
    ctx.lineWidth = 32
    ctx.strokeStyle = 'rgb(66,44,255)'

    var x = 0
    var y = 0
    var amplitude = 640
    var frequency = 640
    // ctx.moveTo(x, y)
    while (x < width / 2) {
      y = height / 2 + amplitude * Math.sin(x / frequency)
      ctx.lineTo(x, y)
      x = x + 1
    }
    ctx.stroke()
  }

  componentDidMount () {
    const canvas = this.canvasRef.current
    canvas.width = canvas_width * 2
    canvas.height = canvas_height * 2
    const context = canvas.getContext('2d')
    this.plotSine(context)
    // context.fillRect(0, 0, canvas.width, canvas.height)
  }

  render () {
    return (
      <canvas ref={this.canvasRef} />
    )
  }
}
