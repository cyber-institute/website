import React from 'react'

import Button from '@material-ui/core/Button'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

import './style.css'

import laptop from '../../img/laptop.jpg'

export default function BodyMenuItem () {
  return (
    <div style={{
      marginTop: '10rem'
    }}
    >
      <div class='row'>
        <div class='col-xs-offset-2 col-xs-4'>
          <div
            style={{
              marginBottom: '1em',
              color: 'rgb(50, 50, 50)',
              letterSpacing: '.05em',
              fontSize: '.72rem'
            }}
            class='Medium'
          >
            01 About
          </div>
          <div
            class='largerHeading Bold' style={{
              paddingTop: '0.4em',
              borderTop: '1px solid currentColor',
              marginBottom: '2.1rem'
            }}
          >
            Explore Cyber
          </div>
          <div class='Light row'>
            <div class='col-xs-9 Light' style={{ lineHeight: '1.87' }}>
              Mission-driven. Exploratory. Interdisciplinary and inclusive in nature. Trusted adviser to decision makers.
            </div>
          </div>
          <Button
            variant='outlined' color='#523178' style={{
              margin: '3rem 0',
              color: '#523178',
              borderColor: '#523178',
              textTransform: 'none',
              fontFamily: 'Helvetica Neue LT Std 65 Medium',
              fontSize: '14px'
            }}
          >
            About Cyber Institute
            <ArrowRightIcon />
          </Button>
        </div>
        <div class='col-xs-4' style={{ overflow: 'hidden' }}>
          <img
            src={laptop} style={{
              maxWidth: '100%',
              transformOrigin: '50% 10%',
              transform: 'scale(2)'
            }}
          />
        </div>
        <div class='col-xs-2' />
      </div>
    </div>
  )
}
