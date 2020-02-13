import React from 'react'

import Button from '@material-ui/core/Button'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

import './style.css'

export default function BodyMenuItem ({ top, heading, text, buttonText, img, transforms }) {
  return (
    <div
      className='container-fluid homeItemMarginTop'
    >
      <div className='row'>
        <div
          className='col-lg-offset-2 col-lg-4
                     col-md-offset-1 col-md-5'
        >
          <div
            style={{
              marginBottom: '1em',
              color: 'rgb(50, 50, 50)',
              letterSpacing: '.05em',
              fontSize: '.72rem'
            }}
            className='Medium'
          >
            {top}
          </div>
          <div
            className='HomeHeadingFontSize Bold' style={{
              paddingTop: '0.4em',
              borderTop: '1px solid currentColor',
              marginBottom: '2.1rem'
            }}
          >
            {heading}
          </div>
          <div className='Light row'>
            <div className='col-xs-9 Light' style={{ lineHeight: '1.87' }}>
              {text}
            </div>
          </div>
          <Button
            variant='outlined' style={{
              margin: '3rem 0',
              color: '#523178',
              borderColor: '#523178',
              textTransform: 'none',
              fontFamily: 'Helvetica Neue LT Std 65 Medium',
              fontSize: '14px'
            }}
          >
            {buttonText}
            <ArrowRightIcon />
          </Button>
        </div>
        <div
          className='col-lg-4 col-md-5' style={{
            overflow: 'hidden',
            filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.3))'
          }}
        >
          <img
            src={img} style={{
              maxWidth: '100%',
              transformOrigin: '50% 10%',
              transform: transforms && 'scale(2)'
            }}
          />
        </div>
        <div className='col-lg-2 col-md-1' />
      </div>
    </div>
  )
}
