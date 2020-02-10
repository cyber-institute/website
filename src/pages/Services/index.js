import React from 'react'

import CyberMasteryContent from './CyberMasteryContent'
import CourseInformationBlurb from './CourseInformationBlurb'
import ExecutiveEducation from './ExecutiveEducation'

import Banner from '../common/Banner'
import Slider from '../common/Slider'

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
      <div className='container-fluid'>
        <div
          className='row' style={{
            marginTop: '8rem'
          }}
        >
          <Slider name='Cyber Mastery'>
            <CyberMasteryContent />
          </Slider>
          <Slider name='Graduate Diploma'>
            <GraduateDiploma />
          </Slider>
        </div>
      </div>
      <ExecutiveEducation />
    </div>
  </>

const GraduateDiploma = () =>
  <div className='row'>
    <div className='col-md-offset-1 col-md-10'>
      <CourseInformationBlurb
        courseLength='1 year full-time study'
        enrolment='Enrolment information coming in near future'
        commencingCohort='2021 (with some modules available from mid-2020)'
        includes='Micro modules'
      />
      <div style={{
        marginTop: '2rem'
      }}
      >
        <p>Based on the Cyber Masters, a Graduate Diploma can be achieved through the completion of modules to the required number of academic credits.
          <br /><br />
As with the Masters, it will run full-time, end-to-end from 2021. In the meantime, some modules will be available from mid-2020. Information about enrolment will be available in the near future.
        </p>
      </div>
    </div>
  </div>

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
