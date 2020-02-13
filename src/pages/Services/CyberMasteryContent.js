import React from 'react'

import { Image } from './index'
import CourseInformationBlurb from './CourseInformationBlurb'

export default ({ image1, image2 }) =>
  <>
    <div className='row'>
      <div className='col-md-offset-1 col-md-10'>
        <CourseInformationBlurb
          courseLength='1 year full-time study'
          enrolment='Enrolment information coming in near future'
          commencingCohort='2021 (with some modules available from mid-2020)'
          includes='Micro modules & Three capstone projects'
        />
        <div style={{
          marginTop: '2rem'
        }}
        >
          <p>Its core principles are:</p>
        </div>
      </div>
    </div>
    <div className='row'>
      <div className='col-md-offset-1 col-md-5'>
        <h3
          className='Light'
          style={{
            fontSize: '38px'
          }}
        >1. Interdisiplinarity
        </h3>
        <p>The problems presented by cyber are difficult precisely because they do not fit neatly into traditional ways of thinking or managing problems, solutions, opportunities and risks.</p>
      </div>
      <div
        className='col-md-5 marginTop4rem-md'
      >
        <h3
          className='Light' style={{
            fontSize: '38px'
          }}
        >2. Experiential learning
        </h3>
        <p>We believe the best way to understand core insights and concepts is to apply them. That it is why we’ll be working closely with people across the University to offer you real-time experience as appropriate, as well using a range of tools to help your learning.</p>
      </div>
    </div>
    <div className='row'>
      <div
        className='col-md-offset-1 col-md-5'
      >
        <h3
          className='Light' style={{
            fontSize: '38px'
          }}
        >3. Conceptual thinking
        </h3>
        <p>We could teach content and description, but that’s inflexible and would age quickly. It is much better to help you to understand and develop the conceptual frameworks you can adjust and apply to meet the unexpected.</p>
      </div>
      <div
        className='col-md-5 marginTop4rem-md'
      >
        <h3
          className='Light' style={{
            fontSize: '38px'
          }}
        >4. Individuals and teams
        </h3>
        <p>While it’s important that you learn as an individual, cyber is inherently a team effort. Through our program you’ll understand better your own strengths and weaknesses, and how to work well with a diverse range of stakeholders and skill sets; and,</p>
      </div>
    </div>
    <div className='row'>
      <div
        className='col-md-offset-1 col-md-5'
      >
        <h3
          className='Light' style={{
            fontSize: '38px'
          }}
        >5. Responsiveness
        </h3>
        <p>We want to ensure that we cover what we consider to be the core craft of cyber and associated topics and offer it in a way that recognises the demanding schedules and needs of busy professionals. Moreover, we know that it is the network of friends you will build as you test yourselves together that will stay with you and help you in future roles. We see this as a core outcome of the program.</p>
      </div>
    </div>
    <div>
      <div
        className='row bottom-xs positionRelative columnReverse-sm'
      >
        <div
          className='col-md-offset-1 col-md-8'
        >
          <div
            className='dottedLineHorizontal displayNone-sm' style={{
              width: '5%',
              position: 'absolute',
              left: '-2rem'
            }}
          />
          <p>
    The Cyber Mastery program can be taken as stand-alone modules as available, in the form of Executive Education. Once assessment is completed successfully, you will receive a micro-credential from the Australian National University. Successfully complete enough micro-credentials, including from mandatory modules, and you will earn a Graduate Diploma in Cyber. Successfully complete the assessment for the three capstone modules after that, including an individual project and scenario, and you will be awarded a Master of Cyber.
          </p>
        </div>
        <div className='col-md-3 margin4RemAuto-sm'>
          <Image img={image1} />
        </div>
      </div>
      <div
        className='row positionRelative marginTop4rem-md'
      >
        <div className='col-md-3 margin4RemAuto-sm'>
          <Image img={image2} />
        </div>
        <div
          className='col-md-8 rightAlign-md'
        >
          <div
            className='dottedLineHorizontal displayNone-sm' style={{
              width: '5%',
              position: 'absolute',
              right: '-2rem'
            }}
          />
          <p>
As an ANU Master of Cyber, you will have demonstrated the understanding of the technology, the social and ethical ethos, and the strategic nous, to become an influential leader. A leader better able to comprehend the changes in our world now, and to help shape the future.
            <br /><br />

Because we are also building and applying new ways of designing, developing and delivering this program, modules will be offered as they are developed.  Please keep an eye on our website to see how we are going, and what’s becoming available.  Once a full suite of courses is available, we expect you will be able to undertake the full suite for a Masters, in intensive mode, in a calendar year.
            <br /><br />

The full-time Cyber Masters will run across a year end-to-end, commencing in 2021. In the meantime, some modules within the Masters will be available from mid-2020. Information about enrolment will be available in the near future.
          </p>
        </div>
      </div>
    </div>
  </>
