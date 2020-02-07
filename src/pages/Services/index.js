import React from 'react'

import Banner from '../common/Banner'

import banner from './banner.jpg'

export default () =>
  <>
    <Banner {...{ banner }} />
    <div
      className='container-fluid' style={{
        marginTop: '12rem'
      }}
    >
      <div className='row'>
        <div className='col-md-offset-1 col-md-5'>
          <Heading>
            Courses
          </Heading>
        </div>
        <div style={{
          width: '100%',
          position: 'relative',
          marginBottom: '2rem'
        }}
        >
          <div
            className='dottedLineHorizontal' style={{
              width: '85%',
              position: 'absolute',
              right: '-1rem'
            }}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-offset-1 col-md-5'>
          <p>
        The challenges presented by cyber in the modern world require more than technology skills. Non-technologists need to appreciate how the technology affects their work, and how it may change the world in the future.<br /><br />

We’ve had this problem before: the world shifts, and managers, leaders and decision-makers find that they need new skills and ways of thinking, new ways to understand the issues and their interconnectedness, and new ways of framing both problems and possible solutions.<br /><br />

That’s why the Cyber Institute is offering a different way of learning, which includes updating and building the ideas, knowledge and experiences needed to tackle this new world.<br /><br />

We call it building your Cyber Mastery.
          </p>
        </div>
      </div>
    </div>
  </>

const Heading = ({ children }) =>
  <h2
    className='Black right2rem-md' style={{
      fontSize: '61px',
      color: 'rgb(82, 49, 120)',
      margin: 0,
      position: 'relative'
    }}
  >
    {children}
  </h2>
