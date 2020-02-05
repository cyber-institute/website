import React from 'react'

import Lines from './Lines.js'
import lesley from '../../img/dr_lesley_seebeck_03.jpg'

// import './style.css'

export default function Quote () {
  return (
    <div
      style={{
        marginTop: '10rem'
      }}
      className='container-fluid'
    >
      <div className='row'>
        <div className='col-md-7'>
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
            It gives me great pleasure to introduce the newly formed Cyber Institute to you. Creativity and curiosity encouraged, not just expected.
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
        </div>
      </div>
    </div>
  )
}
