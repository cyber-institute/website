import React from 'react'

import Card from '../Card/Card'

import ai from '../../img/ai1.jpg'
import education from '../../img/educationHeader.jpg'
import operations from '../../img/electronics.jpg'
import research from '../../img/aboutus.jpg'
import caseStudies from '../../img/ideas.jpg'

export default () =>
  <>
    <div className='container-fluid'>
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
      <div className='container-fluid'>
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
      </div>
    </div>
    <div className='container-fluid'>
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
    </div>
  </>
