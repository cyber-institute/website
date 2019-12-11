import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SwirlyLines from './SwirlyLines/Animation'

import './style.css'

class App extends Component {
  render () {
    return (
      <SwirlyLines />
    )
  }
}

const wrapper = document.getElementById('container')
ReactDOM.render(<App />, wrapper)
