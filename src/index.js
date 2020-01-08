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
import Miniq from './Miniq/Canvas'
import PurpleBodyMenuItem from './PurpleBodyMenuItem/PurpleBodyMenuItem'

import laptop from '../img/laptop.jpg'

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
        <BodyMenuItem
          top='01 About'
          heading='Explore Cyber'
          text='Mission-driven. Exploratory. Interdisciplinary and inclusive in nature. Trusted adviser to decision makers.'
          buttonText='About Cyber Institute'
          img={laptop}
        />
        <Quote />
        <BodyMenuItemSwapped />
        {/* <Miniq /> */}
        <PurpleBodyMenuItem />
        <BodyMenuItem
          top='04 Blog'
          heading='Blog & Insights'
          text='Here is some text to help with styling and whatnot. No real purpose for this text, except for the assistance in styling of the posts.'
          buttonText='Find out more'
          img={laptop}
        />
        <BodyMenuItem
          top='05 Partnerships'
          heading='Strategic Partnering'
          // text=''
          buttonText='Find out more about partnerships'
          img={laptop}
        />
        <BodyMenuItem
          top='06 Education'
          heading='Education'
          text="Let's hear it for education!"
          buttonText='Find out more'
          img={laptop}
        />
        <BodyMenuItem
          top='07 Operations'
          heading='Operations'
          text='Lira to add'
          buttonText='Find out more'
          img={laptop}
        />
        <BodyMenuItem
          top='08 Research'
          heading='Research'
          text='The Cyber Institute will direct its focus towards initiatives which take a deep perspective on cyber.'
          buttonText='Find out more'
          img={laptop}
        />
        <BodyMenuItem
          top='09 Case Studies'
          heading='Case Studies'
          text='Here is some text to help with styling and whatnot. No real purpose for this text, except for the assistance in styling of the posts.'
          buttonText='Find out more'
          img={laptop}
        />
      </>
    )
  }
}

const wrapper = document.getElementById('container')
ReactDOM.render(<App />, wrapper)
