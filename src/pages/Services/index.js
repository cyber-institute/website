import React from 'react'

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
      <div
        className='row' style={{
          marginTop: '8rem'
        }}
      >
        <div className='col-md-offset-1 col-md-10'>
          <Slider name='Cyber Mastery'>
            <CyberMasteryContent />
          </Slider>
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

const CyberMasteryContent = () =>
  <>
    <div className='row'>
      <div className='col-md-offset-1 col-md-5'>
        <div>
      Course Length: 1 year full-time study
        </div>
        <div>
        Enrolment information coming in near future
        </div>
        <p>Its core principles are:</p>
        {
          Object.entries(content).map(([title, content], index) => {
            if (index % 2 === 0) {
              return (
                <div>
                  <h3>{index + 1}. {title}</h3>
                  <p>{content}</p>
                </div>
              )
            }
          })
        }
      </div>
      <div className='col-md-5'>
        <div>
      Commencing cohort: 2021 (with some modules available from mid-2020)
        </div>
        <div>
        Includes: Micro modules & Three capstone projects
        </div>
        {
          Object.entries(content).map(([title, content], index) => {
            if (index % 2 !== 0) {
              return (
                <div>
                  <h3>{index + 1}. {title}</h3>
                  <p>{content}</p>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  </>

const content = {
  Interdisiplinarity: 'The problems presented by cyber are difficult precisely because they do not fit neatly into traditional ways of thinking or managing problems, solutions, opportunities and risks',
  'Experiential learning': 'We believe the best way to understand core insights and concepts is to apply them. That it is why we’ll be working closely with people across the University to offer you real-time experience as appropriate, as well using a range of tools to help your learning',

  'Conceptual thinking': 'We could teach content and description, but that’s inflexible and would age quickly. It is much better to help you to understand and develop the conceptual frameworks you can adjust and apply to meet the unexpected',

  'Individuals and teams': 'While it’s important that you learn as an individual, cyber is inherently a team effort. Through our program you’ll understand better your own strengths and weaknesses, and how to work well with a diverse range of stakeholders and skill sets; and,',

  Responsiveness: 'We want to ensure that we cover what we consider to be the core craft of cyber and associated topics and offer it in a way that recognises the demanding schedules and needs of busy professionals. Moreover, we know that it is the network of friends you will build as you test yourselves together that will stay with you and help you in future roles. We see this as a core outcome of the program.'
}
