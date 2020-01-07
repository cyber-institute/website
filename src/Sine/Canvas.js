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
    ctx.lineWidth = 1
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

  handleCanvasRef (element) {
    // const canvas = element
    // canvas.width = canvas_width * 2
    // canvas.height = canvas_height * 2
    // const context = canvas.getContext('2d')
    // this.plotSine(context)

    const pixel_depth = window.devicePixelRatio
    const canvas = element
    canvas.style.zIndex = -1
    canvas.style.left = '0px'
    canvas.style.width = '100%'
    // canvas.width = canvas_width
    // canvas.height = canvas_height * 2
    // canvas.style.height = '100vh'

    const display_width = canvas.offsetWidth
    const display_height = 900// window.innerHeight

    canvas.width = display_width * pixel_depth
    canvas.height = display_height * pixel_depth

    const ctx = canvas.getContext('2d')
    ctx.lineWidth = 5
    ctx.strokeStyle = 'rgba(82, 49, 120, 0.1)'
    const L = 2000
    const NUM_LINES = 50

    function curve (k, i) {
      return (display_height * 0.5 * pixel_depth) * (1 + Math.cos(k * Math.PI * 2 / NUM_LINES + (16 * Math.PI * 2 * i + 100) / L) * Math.exp(-(0.001 * i * i)))
    }

    const height = ctx.canvas.height

    const length = 2

    ctx.beginPath()
    for (let i = 0; i < canvas_width * length; i++) {
      ctx.lineTo(i, height / 2 + -1 * 160 * Math.sin(i / 160)
        // * Math.exp(-0.000001 * Math.pow(i, 2.5))
      )
    }
    ctx.stroke()

    // ctx.strokeStyle = '#523178'

    // ctx.beginPath()
    // for (let i=0; i<canvas_width * length; i++) {
    //   ctx.lineTo(i, height / 2 + 160 * Math.sin(i / 160)
    //     * Math.exp(-0.000001 * Math.pow(i, 2.5))
    //   )
    // }
    // ctx.stroke()

    // ctx.strokeStyle = '#322354'

    // ctx.beginPath()
    // for (let i=0; i<canvas_width * length; i++) {
    //   ctx.lineTo(i, height / 2 + 2 * 160 * -1 * Math.sin(i / 160 + Math.PI / 2)
    //     * Math.exp(-0.000003 * Math.pow(i, 2.5))
    //   )
    // }
    // ctx.stroke()

    // ctx.strokeStyle = '#5e3178'

    // ctx.beginPath()
    // for (let i=0; i<canvas_width * length; i++) {
    //   ctx.lineTo(i, height / 2 + 2 * 160 * Math.sin(i / 160 + Math.PI / 3)
    //     * Math.exp(-0.000003 * Math.pow(i, 2.5))
    //   )
    // }
    // ctx.stroke()

    // for (let k=0; k<NUM_LINES; k++) {
    //   ctx.beginPath()
    //   // ctx.moveTo(0, curve(k, 0))
    //   for (let i=1; i<L; i++) {
    //     ctx.lineTo(i*10, curve(k, i))
    //   }
    //   ctx.stroke()
    // }
  }

  render () {
    return (
      <canvas
        style={{
          position: 'absolute',
          bottom: '7rem'
          // top: 0
        }} ref={this.handleCanvasRef.bind(this)}
      />
    )
  }
}
