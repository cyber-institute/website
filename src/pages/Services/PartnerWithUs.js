import React from 'react'

import backgroundArt from './background1.png'

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
          backgroundImage: `url(${backgroundArt})`,
          opacity: 0.2
        }}
      />
    </div>
    <div className='row'>
      <div
        className='col-md-offset-3 col-md-6' style={{
          textAlign: 'center'
        }}
      >
        <h2
          className='Light' style={{
            fontSize: '49px',
            letterSpacing: '6px',
            color: '#fff',
            margin: '3rem 0 3rem'
          }}
        >
          <div
            className='displayNone-sm' style={{
              position: 'absolute',
              left: 0,
              width: '30%'
            }}
          >
            <div
              style={{
                position: 'relative',
                top: '1em',
                border: '1px solid #fff',
                opacity: '0.5'
              }}
            />
          </div>
          <div
            className='displayNone-sm' style={{
              position: 'absolute',
              right: 0,
              width: '30%'
            }}
          >
            <div
              style={{
                position: 'relative',
                top: '1em',
                border: '1px solid #fff',
                opacity: '0.5'
              }}
            />
          </div>
          Why not partner<br /> with us?
        </h2>
        <p
          style={{
            fontSize: '20px',
            color: '#fff'
          }}
        >
          If your organisation wants to be involved, contact us.  There are many opportunities to both contribute to, as well as benefit from, our education program.
          <br />
We are partnering with a diverse set of organisations and celebrate the diversity of our people and skills. We believe the best outcomes arise from collaboration between researchers and practitioners with a range of experiences, skills and insights.
        </p>
        <p
          style={{
            fontSize: '16px',
            color: '#fff',
            marginBottom: '3rem'
          }}
        >
          <br />
          <br />
There are also opportunities to collaborate on content design. That gives the experience we offer immediacy and relevance
          <br />
          <br />
In addition, you or your staff may wish to be part of our community of mentors. We see cyber mentors as intrinsic to our education program. They also help build capability through insights and opportunities, they offer a community of trust and support to our graduates.
          <br />
          <br />
Some partners also sponsor students, however you may wish only for your own staff to gain the benefits of undertaking the program.  Because of our development and delivery mechanism, we have the flexibility to develop modules as Executive Education tailored to your organisational needs, or to address specific topics as identified by you.
        </p>
      </div>
    </div>
  </div>
