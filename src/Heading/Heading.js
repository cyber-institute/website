import React from 'react'

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

import './style.css'

export default () =>
  <>
    <div
      style={{
        margin: '40vh auto 35vh auto',
        textAlign: 'center'
      }}
    >
      <h1
        className='BoldCondensed' style={{
          fontWeight: 'normal',
          fontSize: '80px',
          margin: 0,
          color: '#523178'
        }}
      >
      ARE YOU READY TO TRANSFORM CYBER
      </h1>
    </div>
    <div
      style={{
        margin: '0 auto',
        textAlign: 'center'
      }}
    >
      <p className='Light'>Explore Cyber Institute</p>
      <ArrowDownwardIcon style={{ color: '#523178' }} />
    </div>
  </>
