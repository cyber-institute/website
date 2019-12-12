import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SwirlyLines from './SwirlyLines/Animation'
import Heading from './Heading/Heading'
import Fonts from './Heading/Fonts'

import './style.css'

class App extends Component {
  render () {
    return (
      <>
        <SwirlyLines />
        <Heading />
        <Fonts />
      </>
    )
  }
}

const wrapper = document.getElementById('container')
ReactDOM.render(<App />, wrapper)
