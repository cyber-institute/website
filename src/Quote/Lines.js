/* eslint-disable camelcase */
import React, { Component } from 'react'

const height = window.innerHeight
const canvas_width = window.innerWidth

export default class Canvas extends Component {
  constructor (props) {
    super(props)
    this.canvasRef = React.createRef()
    this.state = {}
  }

  drawLine (ctx, xPos) {
    ctx.beginPath()
    for (let i = 0; i < height / 2 * length; i++) {
      // ctx.lineTo(i, height / 2 + 200 * Math.sign(Math.sin((i / 160) - scrollTop / 200)))
      ctx.lineTo(xPos, i)
    }
    ctx.stroke()
  }

  drawSine (scrollTop) {
    const pixel_depth = window.devicePixelRatio
    const canvas = this.canvasRef.current
    canvas.style.zIndex = -1
    canvas.style.left = '0px'
    canvas.style.width = '100%'

    const { y } = canvas.getBoundingClientRect()

    const display_width = canvas.offsetWidth
    const display_height = 900

    canvas.width = display_width * pixel_depth
    // canvas.height = display_height * pixel_depth

    const ctx = canvas.getContext('2d')
    ctx.lineWidth = 5

    const height = ctx.canvas.height

    const length = 2

    // const xPositions = [300, 350, 400, 700, 750, 800, 1100, 1150, 1200]

    // console.log(scrollTop)
    // console.log(height)
    console.log(height)

    // xPositions.forEach(xPos =)
    ctx.strokeStyle = 'rgba(82, 49, 120, 0.2)'
    ctx.beginPath()
    for (let i = 0; i < height / 3 * length; i++) {
      // ctx.lineTo(i, height / 2 + 200 * Math.sign(Math.sin((i / 160) - scrollTop / 200)))
      ctx.lineTo(300, i)
    }
    ctx.stroke()
    ctx.beginPath()
    for (let i = 0; i < height / 3 * length; i++) {
      // ctx.lineTo(i, height / 2 + 200 * Math.sign(Math.sin((i / 160) - scrollTop / 200)))
      ctx.lineTo(350, i)
    }
    ctx.stroke()
    ctx.beginPath()
    for (let i = 0; i < height / 3 * length; i++) {
      // ctx.lineTo(i, height / 2 + 200 * Math.sign(Math.sin((i / 160) - scrollTop / 200)))
      ctx.lineTo(400, i)
    }
    ctx.stroke()
    ctx.strokeStyle = 'rgba(241, 241, 241)'
    ctx.beginPath()
    for (let i = 0; i < height / 3 * length; i++) {
      // ctx.lineTo(i, height / 2 + 200 * Math.sign(Math.sin((i / 160) - scrollTop / 200)))
      ctx.lineTo(700, i + y / 5)
    }
    ctx.stroke()
    ctx.beginPath()
    for (let i = 0; i < height / 3 * length; i++) {
      // ctx.lineTo(i, height / 2 + 200 * Math.sign(Math.sin((i / 160) - scrollTop / 200)))
      ctx.lineTo(750, i + y / 5)
    }
    ctx.stroke()
    ctx.beginPath()
    for (let i = 0; i < height / 3 * length; i++) {
      // ctx.lineTo(i, height / 2 + 200 * Math.sign(Math.sin((i / 160) - scrollTop / 200)))
      ctx.lineTo(800, i + y / 5)
    }
    ctx.stroke()
    ctx.strokeStyle = 'rgba(82, 49, 120, 0.2)'
    ctx.beginPath()
    for (let i = 0; i < height / 3 * length; i++) {
      // ctx.lineTo(i, height / 2 + 200 * Math.sign(Math.sin((i / 160) - scrollTop / 200)))
      ctx.lineTo(1100, i)
    }
    ctx.stroke()
    ctx.beginPath()
    for (let i = 0; i < height / 3 * length; i++) {
      // ctx.lineTo(i, height / 2 + 200 * Math.sign(Math.sin((i / 160) - scrollTop / 200)))
      ctx.lineTo(1150, i)
    }
    ctx.stroke()
    ctx.beginPath()
    for (let i = 0; i < height / 3 * length; i++) {
      // ctx.lineTo(i, height / 2 + 200 * Math.sign(Math.sin((i / 160) - scrollTop / 200)))
      ctx.lineTo(1200, i)
    }
    ctx.stroke()
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
    this.drawSine()
  }

  render () {
    console.log(this.state.transform)
    return (
      <canvas
        style={{
          position: 'relative',
          // bottom: '7rem'
          top: '4rem',
          height: '100%'
        }} ref={this.canvasRef}
      />
    )
  }
}
