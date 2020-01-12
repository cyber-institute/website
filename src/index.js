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
import Miniq from './Miniq/Miniq'
import PurpleBodyMenuItem from './PurpleBodyMenuItem/PurpleBodyMenuItem'
import Card from './Card/Card'
import Footer from './Footer/Footer'

import laptop from '../img/laptop.jpg'
import blog from '../img/blogs.jpg'

import ai from '../img/ai1.jpg'
import education from '../img/educationHeader.jpg'
import operations from '../img/electronics.jpg'
import research from '../img/aboutus.jpg'
import caseStudies from '../img/ideas.jpg'

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
          transforms
        />
        <Quote />
        <BodyMenuItemSwapped />
        <div style={{ position: 'relative' }}>
          <Miniq />
          <PurpleBodyMenuItem />
        </div>
        <BodyMenuItem
          top='04 Blog'
          heading='Blog & Insights'
          text='Here is some text to help with styling and whatnot. No real purpose for this text, except for the assistance in styling of the posts.'
          buttonText='Find out more'
          img={blog}
        />
        <div
          className='row' style={{
            marginTop: '10rem'
          }}
        >
          <div className='col-xs-offset-2 col-xs-4'>
            <div
              style={{
                marginBottom: '1em',
                color: 'rgb(50, 50, 50)',
                letterSpacing: '.05em',
                fontSize: '.72rem'
              }}
              className='Medium'
            >
            05 More
            </div>
            <div
              className='largerHeading Bold' style={{
                paddingTop: '0.4em',
                borderTop: '1px solid currentColor',
                marginBottom: '2.1rem'
              }}
            >
            Links
            </div>
          </div>
        </div>
        <div
          className='row'
        >
          <div className='col-xs-2 col-xs-offset-2'>
            <Card title='Partnerships' text='Find out more about partnerships at the Cyber Institute.' img={ai} />
          </div>
          <div className='col-xs-2 col-xs-offset-1'>
            <Card title='Education' text="Let's hear it for education!" img={education} />
          </div>
          <div className='col-xs-2 col-xs-offset-1'>
            <Card title='Operations' text='Lira to add' img={operations} />
          </div>
        </div>
        <div
          className='row' style={{
            marginTop: '2rem'
          }}
        >
          <div className='col-xs-2 col-xs-offset-3'>
            <Card title='Research' text='The Cyber Institute will direct its focus towards initiatives which take a deep perspective on cyber.' img={research} />
          </div>
          <div className='col-xs-2 col-xs-offset-2'>
            <Card title='Case Studies' text='Here is some text to help with styling and whatnot. No real purpose for this text.' img={caseStudies} />
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

const wrapper = document.getElementById('container')
ReactDOM.render(<App />, wrapper)
