import React from 'react'
import Banner from '../common/Banner'
import './style.css'
import banner from './banner.jpg'


const Image = ({ img, style }) =>
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

const headings = [
  "Education Program",
  "Master Of Cyber",
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
            <div className='col-md-offset-1 col-md-5' style={{marginTop: '3rem',
                                                            marginBottom: '1rem'}}>
                <p> The challenges presented by cyber in the modern world require more than technology skills. Non-technologists need to appreciate how the technology affects their work, and how it may change the world in the future.<br /><br />
                    We’ve had this problem before: the world shifts, and managers, leaders and decision-makers find that they need new skills and ways of thinking, new ways to understand the issues and their interconnectedness, and new ways of framing both problems and possible solutions.<br /><br />
                    That’s why the Cyber Institute is offering a different way of learning, which includes updating and building the ideas, knowledge and experiences needed to tackle this new world.<br /><br />
                    <span style={{ 'font-weight': '700', 'font-size': '25px' }}>We call it building your Cyber Mastery.</span>
                </p>
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

            <div className='row positionRelative'>
                <div className='col-md-offset-1 col-md-8'>
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

            <div className='col-md-11' style={{
                textAlign: 'right'}}>
                <Heading>
                    Courses
                </Heading>
                <div className='dottedLineHorizontal' style={{
                    width: '91.666%',
                    position: 'absolute',
                    left: '-1rem'}}/>
            </div>

        </div>
    </div>

  </>