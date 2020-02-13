import React from 'react'

import Button from '@material-ui/core/Button'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

import background from '../Home/background1.png'

export default function BodyMenuItem ({ top, heading, text, buttonText, img, transforms }) {
  return (
    <div
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem'
      }}
      className='container-fluid homeItemMarginTop positionRelative'
    >
      <div style={{
        background: '0 0',
        overflow: 'hidden',
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        width: '100%',
        zIndex: -1,
        height: '100%',
        backgroundColor: 'rgb(82, 49, 120)'
      }}
      >
        <picture
          className='bannerImg'
          style={{
            height: '100%',
            position: 'absolute',
            display: 'block',
            marginRight: 'auto',
            width: '100%',
            backgroundRepeat: 'repeat-y',
            // backgroundSize: 'cover',
            // backgroundPosition: '50% 0%',
            backgroundImage: `url(${background})`,
            'background-size': 'cover',
            opacity: 0.8
          }}
        />
      </div>
      <div className='row'>
        <div
          className='col-lg-offset-2 col-lg-4
                     col-md-offset-1 col-md-5'
        >
          <div
            style={{
              marginBottom: '1em',
              color: '#fff',
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
              borderTop: '1px solid #fff',
              marginBottom: '2.1rem',
              color: 'rgba(241, 241, 241, 1)'
            }}
          >
            {heading}
          </div>
          <div className='Light row'>
            <div className='col-xs-9 Light' style={{ lineHeight: '1.87', color: '#fff' }}>
              {text}
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
            {buttonText}
            <ArrowRightIcon />
          </Button>
        </div>
        <div className='col-lg-4 col-md-5' style={{ overflow: 'hidden' }}>
          <img
            src={img} style={{
              maxWidth: '100%',
              transformOrigin: '45% 35%',
              transform: transforms && 'scale(1.2)'
            }}
          />
        </div>
        <div className='col-lg-2 col-md-1' />
      </div>
    </div>
  )
}
