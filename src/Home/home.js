import React, { Component } from 'react'

import Heading from './../Heading/Heading'
import Sine from './../Sine/Canvas'
import Body from './../Body/Body'
import Square from './../Sine/Square'
import BodyMenuItem from './../BodyMenuItem/BodyMenuItem'
import Quote from './../Quote/Quote'
import BodyMenuItemSwapped from './../BodyMenuItemSwapped/BodyMenuItemSwapped'
import PurpleBodyMenuItem from './../PurpleBodyMenuItem/PurpleBodyMenuItem'
import FirstBanner from './FirstBanner'
import SecondBanner from './SecondBanner'

import laptop from '../../img/laptop.jpg'
import team from '../../img/team.jpg'
import whatWeOffer from '../../img/whatWeOffer.jpg'

import './../flexboxgrid.css'
import './../style.css'

class Home extends Component {
  render () {
    return (
      <>

        <Heading />
        <div style={{ position: 'relative' }}>
          <Sine />
          <Body />
          <Square />
        </div>
        <Quote />
        <BodyMenuItem
          top='01 About'
          heading='Explore Cyber'
          text='Mission-driven. Exploratory. Interdisciplinary and inclusive in nature. Trusted adviser to decision makers.'
          buttonText='About Cyber Institute'
          img={laptop}
          transforms
        />
        <FirstBanner />
        <BodyMenuItemSwapped
          top='02 Team'
          heading='Meet the Team'
          text='Want a career at the Cyber Institute?'
          buttonText='Find out more'
          img={team}
          transforms
        />
        <SecondBanner />
        <PurpleBodyMenuItem
          top='03 Services'
          heading='What we Offer'
          text='Courses, operations, research and innovation, and partnerships.  The Cyber Institute is developing its research, analytical and communication capability to shape and occupy the space of a trusted adviser to decision-makers in government and industry.'
          buttonText='Find out more'
          img={whatWeOffer}
          transforms
        />
      </>
    )
  }
}

export default Home
