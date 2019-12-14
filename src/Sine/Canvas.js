/* eslint-disable camelcase */
import React, { Component } from 'react'

export default class Canvas extends Component {
  constructor (props) {
    super(props)
    this.canvasRef = React.createRef()
  }

  handleCanvasRef (element) {
    const pixel_depth = window.devicePixelRatio;
    const canvas = element
    canvas.style.zIndex = -1
    canvas.style.left = '0px'
    canvas.style.width = '100%'
    canvas.style.height = '100vh'
    canvas.style.border = '1px solid #000'

    const display_width = canvas.offsetWidth
    const display_height = window.innerHeight

    canvas.width = display_width * pixel_depth
    canvas.height = display_height * pixel_depth

    const ctx = canvas.getContext('2d')
    ctx.lineWidth = 1
    ctx.strokeStyle = '#52317822'
    ctx.beginPath()
    const L = 500
    const NUM_LINES = 30
    for (let k=0; k<NUM_LINES; k++) {
      const line = new Float32Array(L)
      for (let i=0; i<L; i++) {
        line[i] = (display_height*0.5*pixel_depth)*(1 + Math.cos(k*Math.PI*2/NUM_LINES + (4*Math.PI*2*i+100)/L)*Math.exp(-(0.001*i*i)))
      }
      ctx.moveTo(0, line[0])
      for (let i=1; i<L; i++) {
        ctx.lineTo(i*10, line[i])
      }
      ctx.stroke()
    }
  }

  render () {
    return (
      <canvas ref={this.handleCanvasRef} />
    )
  }
}
