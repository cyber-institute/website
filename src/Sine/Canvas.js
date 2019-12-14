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

    const display_width = canvas.offsetWidth
    const display_height = window.innerHeight

    canvas.width = display_width * pixel_depth
    canvas.height = display_height * pixel_depth

    const ctx = canvas.getContext('2d')
    ctx.lineWidth = 1
    ctx.strokeStyle = '#52317822'
    const L = 2000
    const NUM_LINES = 50

    function curve (k, i) {
      return (display_height*0.5*pixel_depth)*(1 + Math.cos(k*Math.PI*2/NUM_LINES + (16*Math.PI*2*i+100)/L)*Math.exp(-(0.001*i*i)))
    }


    for (let k=0; k<NUM_LINES; k++) {
      ctx.beginPath()
      ctx.moveTo(0, curve(k, 0))
      for (let i=1; i<L; i++) {
        ctx.lineTo(i*10, curve(k, i))
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
