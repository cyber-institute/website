import React, { Component } from 'react'

import './style.css'
import '../../flexboxgrid.css'

import Banner from '../common/Banner'

import banner from './banner.jpg'
import Lesley from '../../../img/lesley.JPG'
import Puzzle1 from '../../../img/puzzle1.png'
import Puzzle2 from '../../../img/puzzle2.png'
import Puzzle3 from '../../../img/puzzle3.png'
import Fourstudents from '../../../img/fourstudents.jpg'
import brian from '../../../img/professor_brian_schmidt.jpg'
import mick from '../../../img/mick_ryan.jpg'
import elanor from '../../../img/professor_elanor_huntington.jpg'
import rory from '../../../img/professor_rory_medcalf.jpg'
import marie from '../../../img/marie_johnson.jpg'
import hamish from '../../../img/hamish_hawthorn.jpg'
import deb from '../../../img/deborah_anton.jpg'

function Info (props) {
  return (
    <>
      aaa
    </>
  )
}

const headings = [
]

class People extends Component {
  constructor (props) {
    super(props)

    this.setState = {
      person: ''
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick (item) {
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return { person: item }
    })
  }

  render () {
    return (
      <>
        <Banner {...{ banner, headings }} title='Our People' subTitle='Cyber is a team effort' />
        <div
          className='container-fluid'
        >
          <hr className='purpleDash' style={{ position: 'relative', top: '135px', marginRight: '0' }} />
          <div>
            <h1>Meet the Team</h1>
          </div>
          <div style={{ width: '100%', position: 'relative', paddingTop: '0px' }}>
            <div>
              <h2 style={{ right: '0%', top: '-200px' }}>CEO</h2>
              <div className='row around-xs' style={{ position: 'relative', top: '75px' }}>
                <div className='col-xs-12 col-md-5' style={{ top: '200px' }}>
                  <img src={Lesley} style={{ width: '100%', filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.3))' }} alt='Professor Lesley Seebeck, CEO of the Cyber Institute, smiling and sitting' />
                  <hr className='greyLine' style={{ position: 'absolute', top: '30%', left: '-50%', width: '100%', zIndex: '-20' }} />
                </div>
                <div className='col-xs-12 col-md-5' style={{ paddingTop: '20px' }}>
                  <p><span className='bigEmphasis' style={{ 'font-weight': '700' }}>&quot; Rarely do you have the opportunity to shape a national endeavor.</span>
                    <br /><br />I find intersections and boundaries fascinating—and&nbsp;especially the intersection&nbsp;between strategy, organization and technology.
                    <br /><br />Dealing with cyber intrusions reinforced my conviction that cyber is fundamentally about the human;&nbsp;that it currently represents an existential challenge to liberal, democratic societies, and that we need new, interdisciplinary approaches to tackling the problems cyber can create.&nbsp;
                    <br /><br />I am deeply invested in building knowledge, capability, tools,&nbsp;and insights that help ensure a better future&nbsp;where&nbsp;cyber enables opportunity, agency, freedom and prosperity.
                    <br /><br />At&nbsp;the Cyber Institute I can do all that, with a fantastic, equally&nbsp;committed group of people.&quot;
                  </p>
                  <h3>CEO, Professor Lesley Seebeck</h3>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%', position: 'relative', paddingTop: '200px' }}>
            <div>
              <h2 style={{ left: '0%', top: '-200px' }}>COO</h2>
              <div className='row around-xs' style={{ position: 'relative', top: '75px' }}>
                <div className='col-xs-12 col-md-5 first-md' style={{ paddingTop: '20px', left: '0' }}>
                  <p>Ree joined the Cyber Institute in late 2018 from the Bureau of Meteorology (BoM) where she held a
                  number of roles, including Head of the Office of the Chief Information Officer. Prior to the BoM,
                  Ree worked in business improvement and information technology transformation programs in state and
                  federal government agencies. Ree was also the Heritage Manager at Old Parliament House where she
                  led the successful nomination of the site for the National Heritage List.
                    <br /><br />   Ree holds a Bachelor of Applied Science in Cultural Heritage Management from the University
                  of Canberra, and has a background in stakeholder engagement, business process improvement, workshop
                  facilitation, program delivery, governance and change management.  Ree is the Cyber Institute’s COO.
                  </p>
                  <h3>COO, Ree Kent</h3>
                </div>
                <div className='col-xs-12 col-md-5 first-xs' style={{ position: 'relative', right: '0' }}>
                  <img src={Puzzle3} style={{ width: '100%', filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.3))' }} alt='Puzzle piece representing Ree Kent' />
                  <hr className='greyLine' style={{ position: 'absolute', top: '50%', width: 'calc(100% - 2rem)', zIndex: '-20' }} />
                </div>
              </div>
            </div>
          </div>
          <hr className='purpleDash' style={{ position: 'relative', top: '195px', marginLeft: '0' }} />
          <div style={{ top: '60px' }}>
            <h1 style={{ textAlign: 'right' }}>Staff Showcase</h1>
          </div>
          <div style={{ width: '100%', position: 'relative', paddingTop: '75px', marginTop: '10px' }}>
            <div>
              <p style={{ textAlign: 'center' }}><span className='bigEmphasis'>At the Cyber Institute, <span style={{ fontWeight: 'bolder', color: '#523178', fontSize: '50px' }}>people</span> are at the heart of what we do.</span></p>
              <p><br />Here are some of our fantastic team members this month, who make the Cyber Institute, its research,
              education, innovation and delivery programs happen:&nbsp;
              </p>
              <div className='row around-xs' style={{ marginTop: '50px' }}>
                <div className='col-xs-9 col-md-3' style={{ position: 'relative', right: '0' }}>
                  <img src={Puzzle2} style={{ width: '100%', filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.3))' }} alt='Puzzle piece representing Stehpanie' />
                  <hr className='greyLine' style={{ position: 'absolute', top: '25%', left: '-80%', width: '100%', zIndex: '-20' }} />
                </div>
                <div className='col-xs-12 col-md-7' style={{ paddingTop: '20px', left: '0' }}>
                  <h4>Stephanie, Cyber Institute Research Fellow</h4>
                  <p>Meet Dr Stephanie Koorey who started with the Cyber Institute in January 2020. Dr Koorey was awarded her PhD
                  from the ANU’s Strategic and Defence Studies Centre in 2009, for a thesis on small arms control and violent
                  non-state armed groups. <br /><br />She subsequently spent eight years developing and delivering components of the curriculum
                  for the senior course and short courses at the Centre for Defence and Strategic Studies, now the Australian War
                  College.  Dr Koorey has worked as a researcher and campaigner for non-government organisations in Australia and
                  the United Kingdom, and is a member of the Campaign to Stop Killer Robots. <br /><br />Her research interests are in
                  leaderless resistance, future conflict, and emerging security challenges in the Indo-Pacific. Her current projects
                  with the Cyber Institute include the formation of the Menzies Cyber Law Executive Education module with the ANU
                  College of Law and the development of modules for the micro-credentialed Cyber Masters.&nbsp;
                  </p>
                </div>
              </div>
              <div className='row around-xs' style={{ marginTop: '50px' }}>
                <div className='col-xs-12 col-md-7 first-md' style={{ paddingTop: '20px', left: '0' }}>
                  <h4>Brendan, Cyber Institute Research Assistant</h4>
                  <p>Meet Brendan who started with the Cyber Institute in January of 2019.
                  Brendan is currently helping with delivery of the Cyber Bootcamp Project which aims to improve international cyber
                  cooperation between Australia, ASEAN and the Pacific. Brendan is studying a Bachelor of Arts and a Bachelor of Science at
                  the ANU, with a focus in human biology, Australian Indigenous studies and anthropology.
                  </p>
                </div>
                <div className='col-xs-9 col-md-3 first-xs' style={{ position: 'relative', right: '0' }}>
                  <img src={Puzzle1} style={{ width: '100%', filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.3))' }} alt='Puzzle piece representing Stehpanie' />
                  <hr className='greyLine' style={{ position: 'absolute', top: '50%', width: '100%', zIndex: '-20' }} />
                </div>
              </div>
            </div>
          </div>
          <div className='careersContainer'>
            <hr style={{ position: 'relative', top: '235px', marginLeft: 0, borderTop: '2px dashed white', borderBottom: 'transparent', width: '100%' }} />
            <div style={{ paddingTop: '100px', paddingBottom: '175px' }}>
              <div className='row around-xs'>
                <div className='col-xs-12 col-md-5 first-md'>
                  <h1>Careers</h1>
                  <p style={{ paddingTop: '25px' }}><span className='bigEmphasis'>Imagine</span> a place where we think about cyber differently, where we bring together deep expertise
                  in the technological with that of the social, where in tackling the issues of the day, we
                  think about how we can build the future we want to live in, where we help people make the hard
                  but informed decisions about systems and strategy, data and development, and culture and capability...
                  </p>
                  <p style={{ textAlign: 'center' }}>[Insert load more button here]</p>
                  <p>To be part of, and help guide, our journey and mission to ensure the challenge of cyber is met to the
                  betterment of humanity,
                    <span style={{ fontWeight: 'bold', fontSize: '24px' }}>
                      we are seeking those willing to tackle a challenge, go beyond traditional
                    boundaries and forge new paths, and who are passionate about building a cyber response that strengthens
                    our democracy.
                    <br />
                    <br />
                  </span>
                  We are looking for people who are at ease with unconventionality, with finding and
                  working in the interesting places that lie between disciplines.&nbsp; We value practical experience,
                  people who have scars from dealing with cyber and security issues firsthand, who have delved into the
                  data and generated insights into the consequences for people, society and the nation, who have a vision
                  for ‘beyond cyber’ and are keen to work with other who can make it happen.&nbsp; We want people who care,
                  who are curious, and who can help build a great team environment.&nbsp;
                    <br /><br />
                  We are passionate about placing people at the centre of our work, and are seeking to build a
                  high-performing team that can change the world.&nbsp;Let us know where and how you are best placed
                  to be involved. And join us to bring trust, freedom and opportunity to cyber. If you are interested
                  in becoming part of out team, we invite you to send your CV to <a href='mailto:cyber@anu.edu.au' style={{ color: '#D2AcF7' }}>cyber@anu.edu.au</a>.
                  </p>
                </div>
                <div className='col-xs-12 col-md-5 first-xs'>
                  <img src={Fourstudents} style={{ width: '100%', filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.3))', paddingTop: '60px' }} alt='Four Cyber Institute employees standing in front of glass building' />
                </div>
              </div>
            </div>
          </div>
          <hr style={{ position: 'relative', top: '155px', marginRight: 0, borderTop: '2px dashed #523178', borderBottom: 'transparent', width: '85%' }} />
          <div>
            <h1>Advisory Board</h1>
          </div>
          <div>
            <p>The Cyber Institute is governed under the Australian National University Act 1991 and the Public Governance, Performance &amp; Accountability Act 2013.&nbsp;&nbsp;
              <br /><br />
          Organisationally, the Institute is an entity within the ANU College of Engineering and Computer Science.&nbsp; It also has a partnership with the ANU National Security College.&nbsp;&nbsp;
              <br /><br />
          The Institute’s Advisory Board provides high quality objective advice to the CEO regarding the strategic intent and direction of the Institute, as well as its business plan and associated investment strategy.&nbsp;&nbsp;&nbsp;
              <br /><br />
          The Advisory Board is chaired by the Vice Chancellor, Nobel Laureate Professor Brian Schmidt.
            </p>
            <div className='row center-xs'>
              <Person
                img={brian}
                title='Professor Brian P. Schmidt AC FAA FRS'
                subtitle='Vice-Chancellor and President, The Australian National University, 2011 Nobel Laureate Physics'
              />
              <Person
                img={elanor}
                title='Professor Elanor Huntington'
                subtitle='Dean, College of Engineering &amp; Computer Science, The Australian National University'
              />
              <Person
                img={rory}
                title='Professor Rory Medcalf'
                subtitle='Head of the National Security College, The Australian National University'
              />
            </div>
            <div className='row center-xs'>
              <Person
                img={marie}
                title='Ms. Marie Johnson'
                subtitle='Managing Director and Chief Digital Officer, Centre for Digital Business'
              />
              <Person
                img={hamish}
                title='Mr. Hamish Hawthorn'
                subtitle='COO, UpGuard'
              />
              <Person
                img={deb}
                title='Ms. Deborah Anton'
                subtitle='Interim National Data Commissioner, Department of the Prime Minister and Cabinet'
              />
            </div>
            <div className='row center-xs'>
              <Person
                img={mick}
                title='MAJGEN Mick Ryan'
                subtitle='Major General at Australian Army'
              />
            </div>
          </div>
        </div>
      </>
    )
  };
}

export default People

const Person = ({ img, title, subtitle }) =>
  <div className='col-md-4 col-xs-12 advisoryImage paddingBottom2rem-xs'>
    <div style={{
      display: 'inline-block',
      height: '100%',
      position: 'relative'
    }}
    >
      <img
        src={img} className='width100-md width300px-xs' style={{
          height: '100%',
          objectFit: 'cover'
        }}
      />
      <div className='hover advisoryImageText'>
        <div>
          <h3
            className='name'
            style={{
              color: '#fff',
              margin: 0
            }}
          >
            {title}
          </h3>
          <p
            className='title'
            style={{
              color: '#fff'
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  </div>
