import React from 'react'

import PlaceHolderImage from './PlaceHolderImage'
import { Heading } from './index'

export default () =>
  <div
    className='container-fluid positionRelative' style={{
      marginTop: '2rem'
    }}
  >
    <div className='row'>
      <div
        className='col-md-11' style={{
          textAlign: 'right'
        }}
      >
        <Heading>
          Partnerships
        </Heading>
        <div
          className='dottedLineHorizontal' style={{
            width: '85%',
            position: 'absolute',
            left: 0
          }}
        />
      </div>
      <div
        className='col-md-8 col-md-offset-3'
      >
        <h3
          className='Light' style={{
            textAlign: 'right',
            fontSize: '24px',
            color: 'rgb(82, 49, 120)'
          }}
        >
        Cyber is an ecosystem with many participants.  While we expect that the Cyber Institute will be important in shaping the future for Australia, we are realistic—we are but one player.
        </h3>
      </div>
    </div>
    <div
      className='row' style={{
        marginTop: '4rem'
      }}
    >
      <div className='col-md-5 col-md-offset-1'>
        <p>
        Partnerships are key to proactively addressing issues of issues of cyber trust, design, risk and resilience and so building a better future for people, organisation, the nation and humanity more generally.  That’s evident from the valuable analysis undertaken by the Australian Cyber Security Growth Network; it’s reflected, too, in the Australian Government’s domestic and international cyber strategies.
        </p>
      </div>
      <div className='col-md-5 marginTop4rem-xs'>
        <p>
        The Institute has a three-tiered partnership model—see below—accommodating a range of cyber stakeholders. Our goal is to find the best fit, and where possible enable permeability which is critical to seeding and amplifying activities across the broader ecosystem and growing the Australian cyber skills base at a rate required for the future.
        </p>
      </div>
    </div>
    <div
      className='row' style={{
        marginTop: '4rem'
      }}
    >
      <div className='col-md-5 col-md-offset-1'>
        <p>
        Our view is that cyber is a team sport.  Interaction, partnership and collaboration is embedded within the Cyber Institute’s DNA.   If you—or your organisation—are willing to engage, build capacity, mitigate risks and further take advantage of opportunities presented in the digital revolution, we are keen to talk further.
        </p>
      </div>
      <div className='col-md-5 marginTop4rem-xs'>
        <p>
        We know that true partnerships take time to develop and must be mutually valuable.  While our primary focus now is on our flagship education program, we have other activities and areas that may prove of interest.  Talk to us about your needs and together we can develop a collaboration that meet both our needs now but also allows scope to meet potential grow, should that suit.
        </p>
      </div>
    </div>
    <div className='row center-xs'>
      <div className='col-sm-4'>
        <h3
          className='Medium'
          style={{
            color: 'rgb(82, 49, 120)',
            fontSize: '35px'
          }}
        >
          Foundation Partners
        </h3>
        <ul>
          <li>co-invest time, expertise and funding to develop relevant research, co-design core offerings for the Cyber Mastery program, and build the Cyber Edge in a real-world feedback loop;</li>
          <li>build the core offering of the Institute with Institute staff and assuming greater risk than those partnering on specific project or program output and will share in appropriate levels of rewards;</li>
          <li>invest against a series of milestones, while making in-kind contributions; and,</li>
          <li>are representative of entities in a collaborative supply chain that can together articulate problems, develop solutions and test application.</li>
        </ul>
      </div>
      <div className='col-sm-4'>
        <h3
          className='Medium'
          style={{
            color: 'rgb(82, 49, 120)',
            fontSize: '35px'
          }}
        >
        Program Partners
        </h3>
        <ul>
          <li>partner on specific longer-term collaborative projects, involving research, education or operations centre sponsorship;</li>
          <li>leverage investment against the achievement of specific program outputs, governed under a program agreement; and</li>
          <li>may be more diffuse in focus and draw from extensive expertise across the ANU</li>
        </ul>
      </div>
      <div className='col-sm-4'>
        <h3
          className='Medium'
          style={{
            color: 'rgb(82, 49, 120)',
            fontSize: '35px'
          }}
        >
        Project Partners
        </h3>
        <ul>
          <li>transact on shorter-term projects for specific set outcomes</li>
        </ul>
      </div>
    </div>
  </div>
