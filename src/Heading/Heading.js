import React from 'react'

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

import './style.css'

export default () =>
  <>
    <div
      style={{
        margin: '25vh auto 35vh auto',
        textAlign: 'center'
      }}
    >
      <h1
        className='Bold HomeHeadingFontSize' style={{
          fontFamily: 'Roboto, sans-serif', 
          fontWeight: '900',
          // fontSize: '80px',
          margin: 0,
          color: '#523178'
        }}
      >
        Are you ready<br />to transform cyber?
      </h1>
    </div>
    <div
      style={{
        margin: '0 auto',
        textAlign: 'center'
      }}
    >
      <p className='Light'>Explore Cyber Institute</p>
      <ArrowDownwardIcon style={{ color: '#523178', paddingTop: '20px'}} />
    </div>
  </>
