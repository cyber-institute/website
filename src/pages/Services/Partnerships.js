import React from 'react'

import './Partnerships.css'

import { Heading, Image } from './index'

import partner11 from '../../../img/1. Foundation Partners_Indiana Uni.png'
import partner12 from '../../../img/1. Foundation Partners_NG.png'
import partner13 from '../../../img/1. Foundation Partners_NSC.png'
import partner21 from '../../../img/dfat.jpg'
import partner22 from '../../../img/2.-Program-Partners_MENZIES.jpg'
import partner23 from '../../../img/2.-Program-Partners_New-Intelligence.jpg'
import partner24 from '../../../img/2.Cybermerc.jpg'
import partner31 from '../../../img/3. Project Partners_OK RDY.png'

const OverflowHidden = ({ children, style }) => <div style={{ overflow: 'hidden', ...style }}>{children}</div>

export default () =>
  <div
    className='container-fluid partnerships' >
    <div className='row positionRelative'>
      <div
        className='col-md-11 artnerships__heading' >
        <Heading>
          Partnerships
        </Heading>
        <div
          className='dottedLineHorizontal partnerships__line partnerships__line--left' />
      </div>
      <div
        className='col-md-8 col-md-offset-3'
      >
        <h3
          className='Light partnerships__subheading' >
        Cyber is an ecosystem with many participants.  While we expect that the Cyber Institute will be important in shaping the future for Australia, we are realistic—we are but one player.
        </h3>
      </div>
    </div>
    <div
      className='row partnerships' >
      <div className='col-md-5 col-md-offset-1'>
        <p>
        Partnerships are key to proactively addressing issues of issues of cyber trust, design, risk and resilience and so building a better future for people, organisation, the nation and humanity more generally.  That’s evident from the valuable analysis undertaken by the Australian Cyber Security Growth Network; it’s reflected, too, in the Australian Government’s domestic and international cyber strategies.
        </p>
      </div>
      <div className='col-md-5 marginTop2rem-xs'>
        <p>
        The Institute has a three-tiered partnership model—see below—accommodating a range of cyber stakeholders. Our goal is to find the best fit, and where possible enable permeability which is critical to seeding and amplifying activities across the broader ecosystem and growing the Australian cyber skills base at a rate required for the future.
        </p>
      </div>
    </div>
    <div
      className='row partnerships' >
      <div className='col-md-5 col-md-offset-1'>
        <p>
        Our view is that cyber is a team sport.  Interaction, partnership and collaboration is embedded within the Cyber Institute’s DNA.   If you—or your organisation—are willing to engage, build capacity, mitigate risks and further take advantage of opportunities presented in the digital revolution, we are keen to talk further.
        </p>
      </div>
      <div className='col-md-5 marginTop2rem-xs'>
        <p>
        We know that true partnerships take time to develop and must be mutually valuable.  While our primary focus now is on our flagship education program, we have other activities and areas that may prove of interest.  Talk to us about your needs and together we can develop a collaboration that meet both our needs now but also allows scope to meet potential grow, should that suit.
        </p>
      </div>
    </div>
    <div className='row'>
      <div className='col-sm-4'>
        <h3
          className='Medium partnerships__partners'>
          Foundation Partners
        </h3>
        <ul>
          <li>co-invest time, expertise and funding to develop relevant research, co-design core offerings for the Cyber Mastery program, and build the Cyber Edge in a real-world feedback loop;</li>
          <li>build the core offering of the Institute with Institute staff and assuming greater risk than those partnering on specific project or program output and will share in appropriate levels of rewards;</li>
          <li>invest against a series of milestones, while making in-kind contributions; and</li>
          <li>are representative of entities in a collaborative supply chain that can together articulate problems, develop solutions and test application.</li>
        </ul>
        <div style={{
          textAlign: 'center'
        }}
        >
          <OverflowHidden style={{ margin: '1rem 0' }}><Image img={partner11} style={{ width: '268px' }} /></OverflowHidden>
          <OverflowHidden style={{ margin: '1rem 0' }}><Image img={partner12} style={{ width: '425px' }} /></OverflowHidden>
          <OverflowHidden style={{ margin: '1rem 0' }}><Image img={partner13} style={{ width: '397px' }} /></OverflowHidden>
        </div>
      </div>
      <div className='col-sm-4'>
        <h3
          className='Medium partnerships__partners'>
        Program Partners
        </h3>
        <ul>
          <li>partner on specific longer-term collaborative projects, involving research, education or operations centre sponsorship;</li>
          <li>leverage investment against the achievement of specific program outputs, governed under a program agreement; and</li>
          <li>may be more diffuse in focus and draw from extensive expertise across the ANU.</li>
        </ul>
        <div className='partnerships__heading--centre'>
          <OverflowHidden style={{ margin: '1rem 0' }}>
            <Image
              img={partner21}
              style={{
                width: '300px'
              }}
            />
          </OverflowHidden>
          <OverflowHidden style={{ margin: '2rem 0' }}><Image img={partner22} style={{ height: '73px' }} /></OverflowHidden>
          <OverflowHidden style={{ margin: '1rem 0' }}>
            <Image
              img={partner23} style={{
                transformOrigin: '50% 50%',
                transform: 'scale(2)',
                maxHeight: '100px'
              }}
            />
          </OverflowHidden>
          <OverflowHidden style={{ margin: '1rem 0' }}><Image img={partner24} style={{ width: '255px' }} /></OverflowHidden>
        </div>
      </div>
      <div className='col-sm-4'>
        <h3
          className='Medium partnerships__partners' 
          >
        Project Partners
        </h3>
        <ul>
          <li>transact on shorter-term projects for specific set outcomes.</li>
        </ul>
        <div className='partnerships__heading--centre'>
          <OverflowHidden style={{ margin: '1rem 0' }}><Image img={partner31} /></OverflowHidden>
        </div>
      </div>
    </div>
  </div>
