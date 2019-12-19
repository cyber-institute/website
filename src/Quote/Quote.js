import React from 'react'

import lesley from '../../img/dr_lesley_seebeck_03.jpg'

// import './style.css'

export default function Quote () {
  return (
    <div
      style={{
      // marginTop: '1rem'
      }}
    >
      <div class='row'>
        <div class='col-xs-offset-7 col-xs-4'>
          <div
            class='Italic' style={{
              paddingTop: '0.4em',
              marginBottom: '2.1rem',
              fontSize: '2.7rem',
              color: '#323232',
              borderTop: '4px solid #323232'
            }}
          >
            It gives me great pleasure to introduce the newly formed Cyber Institute to you. Creativity and curiosity encouraged, not just expected.
          </div>
          <div class='row'>
            <div class='col-xs-4'>
              <img src={lesley} style={{ width: '136px' }} />
            </div>
            <div class='col-xs-8 Light' style={{ lineHeight: '1.87' }}>
            Prof. Lesley Seebeck, PhD<br /><br />

Professor of Practice in Cyber Security
Chief Executive Officer, Cyber Institute
Australian National University
            </div>
          </div>
          <div class='col-xs-1' />
        </div>
      </div>
    </div>
  )
}
