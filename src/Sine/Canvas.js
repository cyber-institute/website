/* eslint-disable camelcase */
import React, { Component } from 'react'

const canvas_width = window.innerWidth

export default class Canvas extends Component {
  constructor (props) {
    super(props)
    this.canvasRef = React.createRef()
    this.state = {}
  }

  drawSine (scrollTop) {
    const pixel_depth = window.devicePixelRatio
    const canvas = this.canvasRef.current
    if(canvas)
    {
    canvas.style.zIndex = -1
    canvas.style.left = '0px'
    canvas.style.width = '100%'

    const display_width = canvas.offsetWidth
    const display_height = 900

    canvas.width = display_width * pixel_depth
    canvas.height = display_height * pixel_depth

    const ctx = canvas.getContext('2d')
    ctx.lineWidth = 5
    ctx.strokeStyle = 'rgba(82, 49, 120, 0.1)'

    const height = ctx.canvas.height

    const length = 2

    ctx.beginPath()
    for (let i = 0; i < canvas_width * length; i++) {
      ctx.lineTo(i, height / 2 + -1 * 160 * Math.sin((i / 160) + scrollTop / 100))
    }
    ctx.stroke()
  }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll.bind(this))
    this.drawSine()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  // https://stackoverflow.com/questions/29725828/update-style-of-a-component-onscroll-in-react-js
  // Parallax effect can be introduced from above link
  handleScroll (event) {
    const scrollTop = window.scrollY

    this.drawSine(scrollTop)
  }

  render () {
    console.log(this.state.transform)
    return (
      <canvas
        style={{
          position: 'absolute',
          bottom: '7rem'
          // top: 0
        }} ref={this.canvasRef}
      />
    )
  }
}
