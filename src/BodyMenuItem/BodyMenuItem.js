import React from 'react'

import Button from '@material-ui/core/Button'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

import { Link } from 'react-router-dom'

import './style.css'

export default function BodyMenuItem ({ top, heading, text, buttonText, img, transforms, link }) {
  return (
    <div
      className='container-fluid homeItemMarginTop'
    >
      <div className='row'>
        <div
          className='col-lg-offset-2 col-lg-4
                     col-md-offset-1 col-md-5'
        >
          <div className='Medium Menu-Item__top'
          >
            {top}
          </div>
          <div className='HomeHeadingFontSize Bold Menu-Item__heading' >
            {heading}
          </div>
          <div className='Light row'>
            <div className='col-xs-9 Light Menu-Item__text'>
              {text}
            </div>
          </div>
          <Link to={link}>
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
          </Link>
        </div>
        <div
          className='col-lg-4 col-md-5 Menu-Item__container' >
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
