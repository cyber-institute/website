import React from 'react'

import city from '../../img/city.png'
import './Banners.css'

export default () =>
  <div className='container-fluid homeItemMarginTop banner__background' style={{backgroundImage: `url(${city})` }}>
    <div
      className='row around-xs banner__container'
    >
      <div className='col-xs-11 col-md-8'>
        <p
          className='HomeBannerFontSize banner__text--third'>
          Cyber means thinking ahead, finding balance, understanding risk, and developing
          adaptive resilience so we can confidently rely on the digital technologies in our lives,
          our economy, our society, and our liberal, democratic culture.
        </p>
      </div>
    </div>
  </div>
