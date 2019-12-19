import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import AppBar from './AppBar/AppBar'
import Heading from './Heading/Heading'
import Body from './Body/Body'
import Sine from './Sine/Canvas'
import BodyMenuItem from './BodyMenuItem/BodyMenuItem'
import Quote from './Quote/Quote'

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
          <Body />
          <Sine />
          {/* <img src={convergence} /> */}
        </div>
        <BodyMenuItem />
        <Quote />
      </>
    )
  }
}

const wrapper = document.getElementById('container')
ReactDOM.render(<App />, wrapper)
