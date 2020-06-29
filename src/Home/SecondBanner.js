import React from 'react'

export default () =>
  <div
    className='container-fluid homeItemMarginTop'
  >
    <div
      className='row around-xs' style={{
        // marginTop: '150px',
        // marginBottom: '150px'
      }}
    >
      <div
        className='col-xs-12 col-md-8' style={{
          borderTop: '#523178 solid 2px',
          borderBottom: '#523178 solid 2px'
        }}
      >
        <p
          className='HomeBannerFontSize' style={{
            fontFamily: 'Roboto, sans-serif',
            // fontSize: '60px',
            color: '#523178',
            fontWeight: '900',
            textAlign: 'center',
            letterSpacing: '2px',
            paddingTop: '30px',
            paddingBottom: '30px',
          }}
        >
        We strive to change the cyber conversation to centre on the human values we prize – freedom,
        democracy, privacy and safety.
        </p>
      </div>
    </div>
  </div>
