import React from 'react'

import background from './background1.png'

import './Banners.css'

export default () =>
  <div
    className='container-fluid homeItemMarginTop' style={{
      position: 'relative'
    }}
  >
    <div className='picture__container'>
      <picture
        className='bannerImg picture__image'
        style={{backgroundImage: `url(${background})`}}/>
    </div>
    <div className='row'>
      <div className='col-md-offset-1 col-md-10'>
        <h2
          className='HomeBannerFontSize banner__text--white banner__text' >
          Cyber is much more than security, it influences our society and connections at every level.
        </h2>
      </div>
    </div>
  </div>
  // </div>
