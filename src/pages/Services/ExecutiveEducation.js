import React from 'react'

import Slider from '../common/Slider'

export default () =>
  <>
    <div className='row'>
      <div className='col-md-offset-1 col-md-11'>
        <h2
          className='Bold' style={{
            verticalAlign: 'middle',
            fontSize: '40px',
            letterSpacing: '6px'
          // color: 'rgb(82, 49, 120)'
          }}
        >
        Executive Education
        </h2>
        <p>
      The pace of change in cyber is high. Business risks and organisational resilience are increasingly driven by, or are susceptible to, cyber threats or incidents. Technical and non-technical professionals rely on expert advice or knowledge gathered through running their businesses to inform their decision-making. The Cyber Institute delivers modules drawn from the Cyber Masters as Executive Education sessions. These can be customised sessions to meet the needs of specific target groups.
        </p>
      </div>
    </div>
    <div className='container-fluid'>
      <div className='row'>
        <Slider name='Cyber Bootcamp Program'>
          <div className='row positionRelative'>
            <div className='col-md-offset-1 col-md-7'>
              <p>
            A flagship activity of the Department of Foreign Affairs and Trade’s Cyber Cooperation Program, the Cyber Bootcamps Program is delivered by the Cyber Institute in partnership with the National Security College. The Bootcamps combine international best practice with first-hand expertise from Australia’s cyber policy and operational specialists across government, academia and the private sector.
              </p>
              <br />
              <br />
              <p>
            The Cyber Bootcamps provide practical expert advice and skills training to government officials from Southeast Asian and Pacific Island Countries. The Program aims to build participants’ knowledge and awareness across the full breath of cyber issues – from technology and threats to decision-making and the nature of cyber and beyond.
              </p>
            </div>
            <div className='col-md-3'>
              <p style={{
                fontSize: '16px'
              }}
              >
            The Cyber Institute aims to transform cyber for the betterment of humanity. For the Cyber Bootcamps Program this means extending beyond simply developing cybersecurity specialists. It means a focus on developing skills in good people to conceive, construct and care for good, adaptable, human-centred, secure, resilient systems, which take into account the people who use or are supported by them.
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
            </div>
            <div
              className='dottedLineHorizontal displayNone-sm' style={{
                width: 'calc(33.3333% + 1rem)',
                position: 'absolute',
                right: '-2rem',
                top: '-1rem'
              }}
            />
          </div>
          <div className='row positionRelative'>
            <div className='col-md-offset-1 col-md-11'>
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
            </div>
          </div>
        </Slider>
        <Slider name='Cyber Bootcamp Program'>
          <div className='row'>
            <div className='col-md-offset-1 col-md-11'>
          Hello
            </div>
          </div>
        </Slider>
      </div>
    </div>
  </>

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
          opacity: '0.3'
        }}
      />
    </div>
    {children}
  </p>
