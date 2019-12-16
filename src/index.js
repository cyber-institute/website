import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import AppBar from './AppBar/AppBar'
import Heading from './Heading/Heading'
import Body from './Body/Body'
import Sine from './Sine/Canvas'
import Fonts from './Heading/Fonts'

import convergence from '../img/convergence.jpg'

import './swirly_lines.js'

import './style.css'

class App extends Component {
  render () {
    return (
      <>
        <AppBar />
        <Heading />
        <div style={{ position: 'relative' }}>
          <Body />
          {/* <Sine /> */}
          <img src={convergence} />
        </div>
        {/* <Fonts /> */}
      </>
    )
  }
}

const wrapper = document.getElementById('container')
ReactDOM.render(<App />, wrapper)
