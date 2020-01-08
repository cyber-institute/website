import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import AppBar from './AppBar/AppBar'
import Heading from './Heading/Heading'
import Sine from './Sine/Canvas'
import Body from './Body/Body'
import Square from './Sine/Square'
import BodyMenuItem from './BodyMenuItem/BodyMenuItem'
import Quote from './Quote/Quote'
import BodyMenuItemSwapped from './BodyMenuItemSwapped/BodyMenuItemSwapped'
import Miniq from './Miniq/Miniq'

import './swirly_lines.js'

import 'flexboxgrid/dist/flexboxgrid.min.css'
import './style.css'

class App extends Component {
  render () {
    return (
      <>
        <AppBar />
        <Heading />
        <div style={{ position: 'relative' }}>
          <Sine />
          <Body />
          <Square />
          {/* <img src={convergence} /> */}
        </div>
        <BodyMenuItem />
        <Quote />
        <BodyMenuItemSwapped />
        <Miniq />
      </>
    )
  }
}

const wrapper = document.getElementById('container')
ReactDOM.render(<App />, wrapper)
