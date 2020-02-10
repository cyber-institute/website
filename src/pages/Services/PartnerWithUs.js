import React from 'react'

import backgroundArt from './backgroundArt.png'

export default () =>
  <div style={{
    position: 'relative',
    height: '100vh',
    backgroundColor: 'rgb(82, 49, 120)'
  }}
  >
    <div style={{
      background: '0 0',
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
      zIndex: '0',
      height: '100%'
    }}
    >
      <picture
        className='bannerImg'
        style={{
          height: '100%',
          position: 'relative',
          display: 'block',
          marginRight: 'auto',
          width: '100%',
          backgroundRepeat: 'repeat-y',
          // backgroundSize: 'cover',
          // backgroundPosition: '50% 0%',
          backgroundImage: `url(${backgroundArt})`,
          opacity: 0.2
        }}
      />
    </div>
    <div
      className='container-fluid'
    >
      Hello
    </div>
  </div>
