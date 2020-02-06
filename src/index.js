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

import './swirly_lines'

// import 'flexboxgrid/dist/flexboxgrid.min.css'
import './flexboxgrid.css'
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
        </div>
        <BodyMenuItem
          top='01 About'
          heading='Explore Cyber'
          text='Mission-driven. Exploratory. Interdisciplinary and inclusive in nature. Trusted adviser to decision makers.'
          buttonText='About Cyber Institute'
          img={laptop}
          transforms
        />
        <Quote />
        <BodyMenuItemSwapped />
        <div style={{ position: 'relative' }}>
          <PurpleBodyMenuItem />
        </div>
        <BodyMenuItem
          top='04 Blog'
          heading='Blog & Insights'
          text='Here is some text to help with styling and whatnot. No real purpose for this text, except for the assistance in styling of the posts.'
          buttonText='Find out more'
          img={blog}
        />
        <Links />
        <Footer />
      </>
    )
  }
}

const wrapper = document.getElementById('container')
ReactDOM.render(<App />, wrapper)
