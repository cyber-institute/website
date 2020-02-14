import React from 'react'

import CyberMasteryContent from './CyberMasteryContent'
import CourseInformationBlurb from './CourseInformationBlurb'
import ExecutiveEducation from './ExecutiveEducation'
import PartnerWithUs from './PartnerWithUs'
import Operations from './Operations'
import Articles from './Articles'
import Partnerships from './Partnerships'

import Banner from '../common/Banner'
import Slider from '../common/Slider'

import banner from './banner.jpg'
import services2 from '../../../img/services2.png'
import services3 from '../../../img/services3.jpg'
import services4 from '../../../img/services4.jpg'
import services5 from '../../../img/services5.jpg'
import services6 from '../../../img/city.png'
import services7 from '../../../img/services7.jpg'
import services8 from '../../../img/services8.jpg'
import services9 from '../../../img/services9.jpg'
import services10 from '../../../img/services10.jpg'

const Image = ({ img, style }) =>
  <img
    src={img} className='maxWidth100' style={style}
  />

const headings = [
  'Courses',
  'Operations',
  'Research & Innovation',
  'Partnerships'
]

export default () =>
  <>
    <Banner {...{ banner, headings }} title='What we do' subTitle='Doing for cyber what the MBA did for management' />
    <div
      className='container-fluid'
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
      <div className='row positionRelative'>
        <div style={{
          background: '0 0',
          overflow: 'hidden',
          position: 'absolute',
          top: '100%',
          right: '0px',
          bottom: '0px',
          margin: 'auto',
          left: '30%',
          width: '50%',
          zIndex: -2,
          height: '100%',
          backgroundColor: '#fff'
        }}
        >
          <picture
            className='bannerImg'
            style={{
              height: '100%',
              position: 'absolute',
              display: 'block',
              marginRight: 'auto',
              width: '100%',
              backgroundRepeat: 'repeat-y',
              backgroundSize: 'cover',
              backgroundImage: `url(${services2})`,
              opacity: 1.0
            }}
          />
        </div>
        <div className='col-md-offset-1 col-md-5'>
          <p>
        The challenges presented by cyber in the modern world require more than technology skills. Non-technologists need to appreciate how the technology affects their work, and how it may change the world in the future.<br /><br />

We’ve had this problem before: the world shifts, and managers, leaders and decision-makers find that they need new skills and ways of thinking, new ways to understand the issues and their interconnectedness, and new ways of framing both problems and possible solutions.<br /><br />

That’s why the Cyber Institute is offering a different way of learning, which includes updating and building the ideas, knowledge and experiences needed to tackle this new world.<br /><br />

<span style={{'font-weight':'700', 'font-size':'25px'}}>We call it building your Cyber Mastery.</span>
          </p>
        </div>
        <div className='col-md-4 margin4RemAuto-sm'>
          <Image img={services3} />
        </div>
      </div>
      <div className='container-fluid'>
        <div
          className='row marginTop4rem-md'
        >
          <Slider name='Cyber Mastery'>
            <CyberMasteryContent image1={services4} image2={services5} />
          </Slider>
          <Slider name='Graduate Diploma'>
            <GraduateDiploma />
          </Slider>
        </div>
      </div>
      <ExecutiveEducation image1={services6} image2={services7} />
    </div>
    <PartnerWithUs />
    <Operations image1={services8} image2={services9} image3={services10} />
    <Articles />
    <Partnerships />
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
    className='Black HeadingFontSize-md HeadingFontSize-xs' style={{
      color: 'rgb(82, 49, 120)',
      margin: 0,
      position: 'relative'
    }}
    id={children}
  >
    {children}
  </h2>

export { Heading, Image }
