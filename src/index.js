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
import PurpleBodyMenuItem from './PurpleBodyMenuItem/PurpleBodyMenuItem'
import Links from './Links/Links'
import Footer from './Footer/Footer'

import laptop from '../img/laptop.jpg'
import blog from '../img/blogs.jpg'

import About from './pages/About/index'

import './swirly_lines'

// import 'flexboxgrid/dist/flexboxgrid.min.css'
import './flexboxgrid.css'
import './style.css'

class App extends Component {
  render () {
    return (
      <>
        <AppBar />
        <About />
        <Footer />
      </>
    )
  }
}

const wrapper = document.getElementById('container')
ReactDOM.render(<App />, wrapper)
