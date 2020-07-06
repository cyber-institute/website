import React from 'react'

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

import './style.css'

export default () =>
  <>
    <div className='heading'>
      <h1 className='Bold HomeHeadingFontSize heading__body'>
        Are you ready<br />to transform cyber?
      </h1>
    </div>
    <div className='heading__sub-heading'>
      <p className='Light'>Explore Cyber Institute</p>
      <ArrowDownwardIcon style={{ color: '#523178', paddingTop: '20px'}} />
    </div>
  </>
