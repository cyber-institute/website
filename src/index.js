import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import AppBar from './AppBar/AppBar'
import Heading from './Heading/Heading'
import Body from './Body/Body'
import Sine from './Sine/Canvas'
import Fonts from './Heading/Fonts'

import './swirly_lines.js'

import './style.css'

class App extends Component {
  render () {
    return (
      <>
        <AppBar />
        <Heading />
        <Body />
      {/*<Sine />*/}
        <Fonts />
      </>
    )
  }
}

const wrapper = document.getElementById('container')
ReactDOM.render(<App />, wrapper)
