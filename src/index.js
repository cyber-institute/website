import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import AppBar from './AppBar/AppBar'
import SwirlyLines from './SwirlyLines/Animation'
import Heading from './Heading/Heading'
import Body from './Body/Body'
import Fonts from './Heading/Fonts'

import './style.css'

class App extends Component {
  render () {
    return (
      <>
        <AppBar />
        <SwirlyLines />
        <Heading />
        <Body />
        <Fonts />
      </>
    )
  }
}

const wrapper = document.getElementById('container')
ReactDOM.render(<App />, wrapper)
