import React from 'react'

import Button from '@material-ui/core/Button'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

import { Link } from 'react-router-dom'

import background from '../Home/background1.png'

import './PurpleBodyMenuItem.css'

export default function BodyMenuItem ({ top, heading, text, buttonText, img, transforms, link }) {
  return (
    <div
      className='container-fluid homeItemMarginTop positionRelative menu-item'
    >
      <div className='menu-item__picture'>
        <picture
          className='bannerImg menu-item__img'
          style={{
            backgroundImage: `url(${background})`,
            }}
        />
      </div>
      <div className='row'>
        <div
          className='col-lg-offset-2 col-lg-4
                     col-md-offset-1 col-md-5'
        >
          <div
            className='Medium menu-item__top'>
            {top}
          </div>
          <div
            className='HomeHeadingFontSize Bold menu-item__heading'>
            {heading}
          </div>
          <div className='Light row'>
            <div className='col-xs-9 Light menu-item__text' >
              {text}
            </div>
          </div>
          <Link to={link}>
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
          </Link>
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
