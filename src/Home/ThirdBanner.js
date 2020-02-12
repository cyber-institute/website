import React from 'react'

import city from '../../img/city.png'

export default () =>
  <div
    className='container-fluid homeItemMarginTop cityBackground' style={{
      backgroundImage: `url(${city})`,
      width: '100%',
      left: '0',
      height: 'auto',
      position: 'relative',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    <div
      class='row around-xs' style={{
        marginTop: '150px',
        marginBottom: '150px'
      }}
    >
      <div class='col-xs-11 col-md-8'>
        <p style={{
          fontFamily: 'Roboto, sans-serif',
          fontSize: '50px',
          color: '#523178',
          fontWeight: '900',
          textAlign: 'center',
          letterSpacing: '3px'
        }}
        >
          Cyber means thinking ahead, finding the balance, understanding the risks, and developing
          adaptive resilience, so we can confidently rely on the digital technologies in our lives,
          our economy, our society and our liberal, democratic culture.
        </p>
      </div>
    </div>
  </div>
