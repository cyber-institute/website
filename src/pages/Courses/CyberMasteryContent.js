import React from 'react'

import { Image } from './index'
import CourseInformationBlurb from './CourseInformationBlurb'
import './style.css'

const CorePrinciple = ({ heading, paragraph, isLeft }) =>
  <>
    <h3
      className='Light principle__heading'>
      {heading}
    </h3>
    <div
      className='width50-md width100-xs' style={{
        position: 'absolute',
        border: '1px solid #eee',
        left: `${isLeft && '-2rem'}`,
        right: `${!isLeft && '-2rem'}`
      }}
    />
    <p className='principle__paragraph'>
      {paragraph}
    </p>
  </>



export default ({ image1, image2 }) =>
  <>
    <div className='row'>
      <div className='col-md-offset-1 col-md-10'>
        <CourseInformationBlurb
          courseLength='2 years full-time study'
          enrolment='Enrolment information coming in near future'
          commencingCohort='2021'
          includes='Micro modules & Capstone projects'
        />
        
       
      </div>
    </div>
    <div className="col-md-offset-1 col-md-11" >
      <div
        className='row positionRelative marginTop4rem-md'
      >
        <div className='col-md-3 margin4RemAuto-sm'>
          <Image img={image2} style={{'box-shadow': '5px 5px 10px grey'}} />
        </div>
        <div
          className='col-md-8'
        >
          <div
            className='dottedLineHorizontal displayNone-sm' style={{
              width: '5%',
              position: 'absolute',
              right: '-2rem'
            }}
          />
          <p>
          As an ANU Master of Cyber, you will have demonstrated the understanding of the technology, the social and ethical ethos, and the strategic nous, to become an influential leader. A leader better able to comprehend the changes in our world now, and to help shape the future.            <br /><br />

          Because we are also building and applying new ways of designing, developing and delivering this program, modules will be offered as they are developed. Please keep an eye on our website to see how we are going, and what’s becoming available. Once a full suite of courses is available, we expect you will be able to undertake the full suite for a Masters, in intensive mode, in a calendar year.<br /><br />

          </p>
        </div>
      </div>
      </div>
      <div className= "col-md-offset-1 col-md-10" style={{
          marginTop: '2rem'
        }}
        >
          <p>Here are the core principles of our Cyber Mastery:</p>
        </div>
    <div className='row positionRelative'>
      <div className='col-md-offset-1 col-md-5'>
        <CorePrinciple isLeft heading='1. Interdisiplinarity' paragraph='The problems presented by cyber are difficult precisely because they do not fit neatly into traditional ways of thinking or managing problems, solutions, opportunities and risks;' />
      </div>
      <div
        className='col-md-5 marginTop2rem-md'
      >
        <CorePrinciple heading='2. Experiential learning' paragraph='We believe the best way to understand core insights and concepts is to apply them. That it is why we’ll be working closely with people across the University to offer you real-time experience as appropriate, as well using a range of tools to help your learning;' />
      </div>
    </div>
    <div className='row positionRelative'>
      <div
        className='col-md-offset-1 col-md-5'
      >
        <CorePrinciple
          isLeft
          heading='3. Conceptual thinking'
          paragraph='We could teach content and description, but that’s inflexible and would age quickly. It is much better to help you to understand and develop the conceptual frameworks you can adjust and apply to meet the unexpected;'
        />
      </div>
      <div
        className='col-md-5 marginTop4rem-md'
      >
        <CorePrinciple
          heading='4. Individuals and teams'
          paragraph='While it’s important that you learn as an individual, cyber is inherently a team effort. Through our program you’ll understand better your own strengths and weaknesses, and how to work well with a diverse range of stakeholders and skill sets; and,'
        />
      </div>
    </div>
    <div className='row positionRelative'>
      <div
        className='col-md-offset-1 col-md-5'
      >
        <CorePrinciple
          isLeft
          heading='5. Responsiveness'
          paragraph='We want to ensure that we cover what we consider to be the core craft of cyber and associated topics and offer it in a way that recognises the demanding schedules and needs of busy professionals. Moreover, we know that it is the network of friends you will build as you test yourselves together that will stay with you and help you in future roles. We see this as a core outcome of the program.'
        />
      </div>
    </div>
    
  </>
