import React from 'react'

import './Quote.css'

import lesley from '../../img/dr_lesley_seebeck_03.jpg'

export default function Quote () {
  return (
    <div
      className='container-fluid homeItemMarginTop quote'
    >
      <div
        className='row'
      >
        <div className='col-md-offset-2 col-md-8'>
          <div
            className='container-fluid'
          >
            <div
              className='row quote__line--1' >
              <div className='quote__line--2'/>
              <div className='quote__line--2'/>
              <div className='col-md-offset-2 col-md-8'>
                <div
                  className='Light quote__creativity' >
            "Creativity and curiosity encouraged, not just expected."
                </div>
                <div
                  className='container-fluid'
                >
                  <div className='row center-xs columnReverse-sm'>
                    <div
                      className='col-md-4 quote__picture' >
                      <img src={lesley} className='imgShadow quote__img' />
                    </div>
                    <div className='col-md-8 Light quote__lesley' >
            Prof. Lesley Seebeck, PhD<br /><br />

Professor of Practice in Cyber Security,<br />
Chief Executive Officer, <br />Cyber Institute<br />
Australian National University
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='col-md-7'>
          <Lines />
        </div>
        <div className='col-md-4'>
          <div
            className='Italic' style={{
              paddingTop: '0.4em',
              marginBottom: '2.1rem',
              fontSize: '2.1rem',
              color: '#323232',
              borderTop: '4px solid #323232'
            }}
          >
            It gives mffe great pleasure to introduce the newly formed Cyber Institute to you. Creativity and curiosity encouraged, not just expected.
          </div>
          <div className='row'>
            <div className='col-xs-4'>
              <img src={lesley} style={{ width: '100%' }} />
            </div>
            <div className='col-xs-8 Light' style={{ lineHeight: '1.87' }}>
            Prof. Lesley Seebeck, PhD<br /><br />

Professor of Practice in Cyber Security
Chief Executive Officer, Cyber Institute
Australian National University
            </div>
          </div>
          <div className='col-xs-1' />
        </div> */}
        </div>
      </div>
    </div>
  )
}
