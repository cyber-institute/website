import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render () {
    return (
      'Hello'
    )
  }
}

const wrapper = document.getElementById('container')
ReactDOM.render(<App />, wrapper)
