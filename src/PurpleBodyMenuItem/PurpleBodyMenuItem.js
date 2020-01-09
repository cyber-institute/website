import React from 'react'

import Button from '@material-ui/core/Button'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

// import './style.css'

import laptop from '../../img/laptop.jpg'

export default function BodyMenuItem () {
  return (
    <div style={{
      paddingTop: '20rem',
      marginTop: '20rem',
      paddingBottom: '10rem',
      backgroundColor: '#523178'
    }}
    >
      <div className='row'>
        <div className='col-xs-offset-2 col-xs-4'>
          <div
            style={{
              marginBottom: '1em',
              color: '#fff',
              letterSpacing: '.05em',
              fontSize: '.72rem'
            }}
            className='Medium'
          >
            03 Team
          </div>
          <div
            className='largerHeading Bold' style={{
              paddingTop: '0.4em',
              borderTop: '1px solid #fff',
              marginBottom: '2.1rem',
              color: 'rgba(241, 241, 241, 1)'
            }}
          >
            Meet the Team
          </div>
          <div className='Light row'>
            <div className='col-xs-9 Light' style={{ lineHeight: '1.87', color: '#fff' }}>
              Want a career at the Cyber Institute?
            </div>
          </div>
          <Button
            variant='outlined' style={{
              margin: '3rem 0',
              color: '#fff',
              borderColor: '#fff',
              textTransform: 'none',
              fontFamily: 'Helvetica Neue LT Std 65 Medium',
              fontSize: '14px'
            }}
          >
            Find out more
            <ArrowRightIcon />
          </Button>
        </div>
        <div className='col-xs-4' style={{ overflow: 'hidden' }}>
          <img
            src={laptop} style={{
              maxWidth: '100%',
              transformOrigin: '50% 10%',
              transform: 'scale(2)'
            }}
          />
        </div>
        <div className='col-xs-2' />
      </div>
    </div>
  )
}