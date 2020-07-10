import React from 'react'

import { Image } from './index'
import Slider from '../common/Slider'

import './ExecutiveEducation.css'
import './../Privacy/style.css'

export default ({ image1, image2 }) =>
  <>
    <div className='row'>
      <div className='col-md-offset-1 col-md-11'>
        <h2 className='Bold education__heading' >
        Executive Education
        </h2>
        <p>
      The pace of change in cyber is high. Business risks and organisational resilience are increasingly driven by, or are susceptible to, cyber threats or incidents. Technical and non-technical professionals rely on expert advice or knowledge gathered through running their businesses to inform their decision-making. The Cyber Institute delivers modules drawn from the <span style={{fontWeight:'700', color: '#523178'}}>Cyber Masters as Executive Education sessions</span>. These can be customised sessions to meet the needs of specific target groups.<br/><br/>
      Here are some examples of our <span class='info__heading'>Executive Education Programs</span>:
        </p>
      </div>
    </div>
    <div className='container-fluid'>
      <div
        className='row bootcamp' >
        <Slider name='Cyber Bootcamp Program'>
          <div className='row positionRelative'>
            <div className='col-md-offset-1 col-md-7'>
              <p>
            A flagship activity of the Department of Foreign Affairs and Trade’s Cyber Cooperation Program, the <span style={{fontWeight:'700', color:'#523178'}}>Cyber Bootcamps Program is delivered by the Cyber Institute in partnership with the National Security College</span>. The Bootcamps combine international best practice with first-hand expertise from Australia’s cyber policy and operational specialists across government, academia and the private sector.
              </p>
              <br />
              <br />
              <p>
            The Cyber Bootcamps provide practical expert advice and skills training to government officials from Southeast Asian and Pacific Island Countries. The Program aims to build participants’ knowledge and awareness across the full breath of cyber issues – from technology and threats to decision-making and the nature of cyber and beyond.
              </p>
            </div>
            <div className='col-md-3 marginTop4rem-xs positionRelative-xs'>
              <p className='bootcamp__text'>
            "The Cyber Institute aims to transform cyber for the betterment of humanity. For the Cyber Bootcamps Program this means extending beyond simply developing cybersecurity specialists. It means a focus on developing skills in good people to conceive, construct and care for good, adaptable, human-centred, secure, resilient systems, which take into account the people who use or are supported by them."
                <br />
                <br />
              </p>
              <p className='bootcamp__text bootcamp__text--right'>
                - Prof. Lesley Seebeck, CEO Cyber Institute
              </p>
              <div
                className='dottedLineHorizontal lesleyQuoteDottedWidth-md lesleyQuoteDottedWidth-xs bootcamp__line' />
            </div>
          </div>
          <div className='row positionRelative'>
            <div
              className='col-md-offset-1 col-md-11' >
              <div className='what__picture'>
                <picture
                  className='bannerImg what__img'
                  style={{
                    backgroundImage: `url(${image1})`,
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
              <p className='involved'>
                Each Cyber Bootcamp includes a two-week intensive program in Australia, where participants engage in interactive workshops, exercise scenarios, industry site visits, and dialogues with Australian government agencies. Participants will also implement a project which responds to a cyber challenge or opportunity relevant to their domestic roles that will contribute to shared goals of a cyber-resilient Indo-Pacific.
                <br />
                <br />
More information can be found <a target='_blank' className='info__heading' rel='noopener noreferrer' href='https://dfat.gov.au/international-relations/themes/cyber-affairs/cyber-cooperation-program/Pages/cyber-bootcamp-project.aspx'>here</a>.
              </p>
            </div>
          </div>
        </Slider>
        <Slider name='ANU Ninian Stephen Cyber Law Program'>
          <div className='row'>
            <div className='col-md-offset-1 col-md-7'>
              <p>
            In partnership with the <span className='info__heading'>Sir Robert Menzies Memorial Foundation</span>, the <span className='info__heading'>ANU Ninian Stephen Cyber Law Program</span>, delivered by the <span className='info__heading'>Cyber Institute</span> and the <span className='info__heading'>ANU College of Law</span>, will provide a professional development program for, but not limited to, legal practitioners which delivers cutting edge, immersive training based on real-time, problem-centred cyber security legal challenges set in a global context.
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
              <Image img={image2} style={{boxShadow: '5px 5px 10px grey'}} />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  </>

const LineListElement = ({ children }) =>
  <>
    <div
      className='LineListElement-md LineListElement-xs list-element'>
      <div className='list-element__line'/>
    </div>
    <p
    className='Bold list-element__children' >
      {children}
    </p>
  </>
