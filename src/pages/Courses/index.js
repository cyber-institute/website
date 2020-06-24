import React from 'react'
import Banner from '../common/Banner'
import CyberMasteryContent from './CyberMasteryContent'
import CourseInformationBlurb from './CourseInformationBlurb'
import ShortCourses from './Courses'

import './style.css'
import banner from './banner.jpg'
import services3 from './../../../img/services3.jpg'
import services4 from './../../../img/services4.jpg'
import services5 from './../../../img/services5.jpg'



export const Image = ({ img, style }) =>
  <img
    src={img} className='maxWidth100' style={style}
  />

const Heading = ({ children }) =>
    <h2 className='Black HeadingFontSize-md HeadingFontSize-xs' style={{
    color: 'rgb(82, 49, 120)',
    margin: 0,
    position: 'relative'}}
    id={children}>
        {children}
    </h2>

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

const headings = [
  "Education Program",
  "Master of Cyber",
  'Graduate Diploma of Cyber',
  'Courses'
]

export default () =>
  <>
    <div style={{overflowX:"hidden"}}>
        <Banner {...{ banner, headings }} title='Courses' subTitle='Improve your skills in a rapidly changing field' />

        <div className='container-fluid'>
            
            <div className='row positionRelative' style={{marginTop: '2vw'}}>
                <div className='col-md-offset-1 col-md-8'>
                    <Heading>
                        Education Program
                    </Heading>
                    <div className='dottedLineHorizontal' style={{
                        width: '91.666%',
                        position: 'absolute',
                        right: '-1rem'
                        }}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-offset-1 col-md-5' style={{marginTop: '3rem',
                                                            marginBottom: '3rem'}}>
                <p> The challenges presented by cyber in the modern world require more than technology skills. Non-technologists need to appreciate how the technology affects their work, and how it may change the world in the future.<br /><br />
                    We’ve had this problem before: the world shifts, and managers, leaders and decision-makers find that they need new skills and ways of thinking, new ways to understand the issues and their interconnectedness, and new ways of framing both problems and possible solutions.<br /><br />
                    That’s why the Cyber Institute is offering a different way of learning, which includes updating and building the ideas, knowledge and experiences needed to tackle this new world.<br /><br />
                    <span style={{ 'font-weight': '700', 'font-size': '25px' }}>We call it building your Cyber Mastery.</span>
                </p>
                </div>
                <div className='col-md-4 margin2RemAuto-sm' style ={{marginTop:'3rem',
                                                                    marginBottom: '3rem'}}>
                    <Image img={services3} style={{ 'box-shadow': '5px 5px 10px grey' }} />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-offset-1 col-md-10' style={{marginBottom: '3rem'}}>
                    <p>
                    The Cyber Mastery program can be taken as stand-alone courses in the form of Executive Education intensives. Once assessment is completed successfully, you will receive a micro-credential from the Australian National University. 
                    <br/><br/>Successfully complete enough micro-credentials, including from mandatory modules, and you will earn a <span style={{color: '#523178', fontWeight: '700'}}>Graduate Diploma in Cyber</span>. Successfully complete the assessment for the three capstone modules after that, including an individual project and scenario, and you will be awarded a <span style={{color: '#523178', fontWeight: '700'}}>Master of Cyber</span>.
                    </p>
                </div>
            </div>
            

            <div className='col-md-11' style={{
                textAlign: 'right'}}>
                <Heading>
                    Master of Cyber
                </Heading>
                <div className='dottedLineHorizontal' style={{
                    width: '91.666%',
                    position: 'absolute',
                    left: '-1rem'}}/>
            </div>

            <div className='container-fluid' style={{marginTop:'2rem'}}>            
                    <CyberMasteryContent image1={services4} image2={services5} />             
            </div>


            <div className='row positionRelative'>
                <div className='col-md-offset-1 col-md-8' style={{marginTop: '3rem'}}>
                    <Heading>
                        Graduate Diploma of Cyber
                    </Heading>
                    <div className='dottedLineHorizontal' style={{
                        width: '91.666%',
                        position: 'absolute',
                        right: '-1rem'
                        }}/>
                </div>
            </div>
            
            <div className='container-fluid'>
                <div className='row marginTop2rem-md'>
                        <GraduateDiploma />                    
                </div>
            </div>


            <div className='col-md-11' style={{
                textAlign: 'right',
                marginTop: '3rem'}}>
                <Heading>
                    Courses
                </Heading>
                <div className='dottedLineHorizontal' style={{
                    width: '91.666%',
                    position: 'absolute',
                    left: '-1rem'}}/>
            </div>

            <div className='container-fluid'>
                <div className='row marginTop2rem-md'>
                        <ShortCourses />                    
                </div>
            </div>

        </div>
    </div>

  </>