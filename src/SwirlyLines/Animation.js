import React from 'react'

import Canvas from './Canvas'

export default class Animation extends React.Component {
  constructor (props) {
    super(props)
    this.state = { angle: 0, x: 0, y: 0 }
    this.updateAnimationState = this.updateAnimationState.bind(this)
  }

  componentDidMount () {
    this.rAF = requestAnimationFrame(this.updateAnimationState)
  }

  updateAnimationState () {
    this.setState(prevState => ({ angle: prevState.angle + 1 }))
    this.rAF = requestAnimationFrame(this.updateAnimationState)
  }

  componentWillUnmount () {
    cancelAnimationFrame(this.rAF)
  }

  _onMouseMove (e) {
    this.setState({ x: e.screenX, y: e.screenY })
  }

  render () {
    return (
      <div onMouseMove={this._onMouseMove.bind(this)}>
        <Canvas angle={this.state.angle} />
      </div>
    )
  }
}
