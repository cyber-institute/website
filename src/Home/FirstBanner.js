import React from 'react'

import background from './background1.png'

export default () =>
  <div
    className='container-fluid' style={{
      position: 'relative'
    }}
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
          opacity: 0.8
        }}
      />
    </div>
    <div className='row'>
      <div className='col-md-offset-1 col-md-10'>
        <h2 style={{
          fontSize: '60px',
          color: 'white',
          fontWeight: '900',
          textAlign: 'center',
          letterSpacing: '1.5px',
          fontFamily: 'Roboto, sans-serif'
        }}
        >
          Cyber is much more than security, it influences our society and connections at every level.
        </h2>
      </div>
    </div>
  </div>
  // </div>
