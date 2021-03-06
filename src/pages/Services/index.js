import React from 'react'


import PartnerWithUs from './PartnerWithUs'
import Operations from './Operations'
import Articles from './Articles'
import Partnerships from './Partnerships'

import Banner from '../common/Banner'
import Slider from '../common/Slider'

import banner from './banner.jpg'
import services2 from '../../../img/services2.png'
import services3 from '../../../img/services3.jpg'
import services4 from './../../../img/services4.jpg'
import services6 from '../../../img/city.png'
import services7 from '../../../img/services7.jpg'
import services8 from '../../../img/services8.jpg'
import services9 from '../../../img/services9.jpg'
import services10 from '../../../img/services10.jpg'

import './../Privacy/style.css'
import './index.css'

const Image = ({ img, style }) =>
  <img
    src={img} className='maxWidth100' style={style}
  />

const headings = [
  'Programs',
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
      <div className='row positionRelative'>
        <div className='col-md-offset-1 col-md-5'>
          <Heading>
            Programs
          </Heading>
          <div
            className='dottedLineHorizontal privacy__line privacy__line--right'/>
        </div>
      </div>
      <div
        className='row positionRelative' style={{
          marginTop: '3rem'
        }}
      >
        <div className='what__picture'>
          <picture
            className='bannerImg what__img'
            style={{
              backgroundImage: `url(${services2})`,
            }}
          />
        </div>
        <div
          className='col-md-offset-1 col-md-5'
        >
          <p>
            The pace of change in cyber is high. Business risks and organisational resilience are increasingly driven by, or are susceptible to, cyber threats or incidents. Technical and non-technical professionals rely on expert advice or knowledge gathered through running their businesses to inform their decision-making.<br/><br/>
            Through our engagement Programs the Cyber Institute delivers bespoke training and education modules customised to meet the needs of specific target groups. These programs are often supported by our Partners. <br/><br/>
            Here are some examples of our <span style={{ 'font-weight': '700', color: 'rgb(82, 49, 120)' }}>Programs</span>:
          </p>
        </div>
        <div className='col-md-4 margin2RemAuto-sm'>
          <Image img={services4} style={{ 'box-shadow': '5px 5px 10px grey' }} />
        </div>
      </div>
      
      <div className='container-fluid'>
      <div
        className='row' style={{
          marginTop: '2rem',
          marginBottom: '4rem'
        }}
      >
        <Slider name='Cyber Bootcamp Program'>
          <div className='row positionRelative' style ={{marginTop: '1rem'}}>
            <div className='col-md-offset-1 col-md-7'>
              <p>
            A flagship activity of the Department of Foreign Affairs and Trade’s Cyber Cooperation Program, the <span style={{'font-weight':'700', color:'#523178'}}>Cyber Bootcamps Program is delivered by the Cyber Institute in partnership with the National Security College</span>. The Bootcamps combine international best practice with first-hand expertise from Australia’s cyber policy and operational specialists across government, academia and the private sector.
              </p>
              <br />
              <br />
              <p>
            The Cyber Bootcamps provide practical expert advice and skills training to government officials from Southeast Asian and Pacific Island Countries. The Program aims to build participants’ knowledge and awareness across the full breath of cyber issues – from technology and threats to decision-making and the nature of cyber and beyond.
              </p>
            </div>
            <div className='col-md-3 marginTop4rem-xs positionRelative-xs'>
              <p style={{
                fontSize: '16px'
              }}
              >
            "The Cyber Institute aims to transform cyber for the betterment of humanity. For the Cyber Bootcamps Program this means extending beyond simply developing cybersecurity specialists. It means a focus on developing skills in good people to conceive, construct and care for good, adaptable, human-centred, secure, resilient systems, which take into account the people who use or are supported by them."
                <br />
                <br />
              </p>
              <p style={{
                fontSize: '16px',
                textAlign: 'right'
              }}
              >
                - Prof. Lesley Seebeck, CEO Cyber Institute
              </p>
              <div
                className='dottedLineHorizontal lesleyQuoteDottedWidth-md lesleyQuoteDottedWidth-xs' style={{
                  position: 'absolute',
                  right: '-2rem',
                  top: '-1rem'
                }}
              />
            </div>
          </div>
          <div className='row positionRelative'>
            <div
              className='col-md-offset-1 col-md-11' style={{
                // backgroundImage: `url(${image1})`,
                // left: '0',
                // height: 'auto',
                // position: 'relative',
                // backgroundSize: 'cover',
                // backgroundPosition: 'center',
                // backgroundRepeat: 'no-repeat'
              }}
            >
              <div style={{
                background: '0 0',
                overflow: 'hidden',
                position: 'absolute',
                top: '0',
                right: '0',
                bottom: '0',
                left: '0',
                width: '100%',
                zIndex: -1,
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
                    backgroundImage: `url(${services6})`,
                    opacity: 0.3
                  }}
                />
              </div>
              <p style={{
                marginTop: '2rem',
                marginBottom: '2rem'
              }}
              >
              The Program aims to:
              </p>
              <LineListElement>
              Strengthen understanding of strategies for coordinating national cyber policy;
              </LineListElement>
              <LineListElement>
              Strengthen understanding of cyber terminology, internet architecture, and security policies;
              </LineListElement>
              <LineListElement>
              Increase awareness of cyber threats and challenges faced in both Australia and within our region;
              </LineListElement>
              <LineListElement>
              Promote the application of international stability framework for cyber security;
              </LineListElement>
              <LineListElement>
              Promote collaborative relationships between government, academia, civil society, and the private sector to address joint cyber challenges; and,
              </LineListElement>
              <LineListElement>
              Identify incident response roles and responsibilities.
              </LineListElement>
              <p style={{
                marginTop: '2rem'
              }}
              >
                Each Cyber Bootcamp includes a two-week intensive program in Australia, where participants engage in interactive workshops, exercise scenarios, industry site visits, and dialogues with Australian government agencies. Participants will also implement a project which responds to a cyber challenge or opportunity relevant to their domestic roles that will contribute to shared goals of a cyber-resilient Indo-Pacific.
                <br />
                <br />
More information can be found <a target='_blank' style={{ color: '#523178', 'font-weight':'700' }} rel='noopener noreferrer' href='https://dfat.gov.au/international-relations/themes/cyber-affairs/cyber-cooperation-program/Pages/cyber-bootcamp-project.aspx'>here</a>.
              </p>
            </div>
          </div>
        </Slider>
        <Slider name='ANU Ninian Stephen Cyber Law Program'>
          <div className='row' style={{marginTop: '1rem' }}>
            <div className='col-md-offset-1 col-md-7'>
              <p>
            In partnership with the <span style={{'font-weight':'700'}}>Sir Robert Menzies Memorial Foundation</span>, the <span style={{'font-weight':'700', color:'#523178'}}>ANU Ninian Stephen Cyber Law Program</span>, delivered by the <span style={{'font-weight':'700', color:'#523178'}}>Cyber Institute</span> and the <span style={{'font-weight':'700'}}>ANU College of Law</span>, will provide a professional development program for, but not limited to, legal practitioners which delivers cutting edge, immersive training based on real-time, problem-centred cyber security legal challenges set in a global context.
              </p>
              <br />
              <br />
              <p>
Through this Program the Institute will also undertake leading research in the areas of cyber law and transnational legal challenges, which will further inform the training platform.
              </p>
              <br />
              <br />
              <p>
An associated Thought Leadership and Oration Series will encourage discourse across the legal and broader community about cyber and law, and the implications they have for Australia and the world.
              </p>
            </div>
            <div className='col-md-3 margin4RemAuto-sm'>
              <Image img={services7} style={{'box-shadow': '5px 5px 10px grey'}} />
            </div>
          </div>
        </Slider>
      </div>
    </div>
    </div>
    <PartnerWithUs />
    <Operations image1={services8} image2={services9} image3={services10} />
    <Articles />
    <Partnerships />
  </>


const Heading = ({ children }) =>
  <h2
    className='Black HeadingFontSize-md HeadingFontSize-xs service__heading'
    id={children}
  >
    {children}
  </h2>

const LineListElement = ({ children }) =>
  <p
    className='Bold' style={{
      margin: '1rem 0 1rem 4rem'
    }}
  >
    <div
      className='LineListElement-md LineListElement-xs'style={{
        position: 'absolute',
        left: '-2rem'
      }}
    >
      <div
        style={{
          position: 'relative',
          top: 'calc(0.5em - 2px)',
          border: '1px solid #333',
          opacity: '0.4'
        }}
      />
    </div>
    {children}
  </p>


export { Heading, Image }
