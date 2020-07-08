import React from 'react'

import './PartnerWithUs.css'

import backgroundArt from './background1.png'

export default () =>
  <div
    className='container-fluid positionRelative' >
    <div className='partner__picture'>
      <picture
        className='bannerImg partner__img'
        style={{
          backgroundImage: `url(${backgroundArt})`,
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
          className='Light partner__heading' >
          <div
            className='displayNone-sm partner-line__wrapper partner-line__wrapper--left'>
            <div className='partner__line'/>
          </div>
          <div
            className='displayNone-sm partner-line__wrapper partner-line__wrapper--right' >
            <div className='partner__line'/>
          </div>
          Why not partner<br /> with us?
        </h2>
        <p className='partner__text--big'>
          If your organisation wants to be involved, contact us.  There are many opportunities to both contribute to, as well as benefit from, our education program.
          <br />
We are partnering with a diverse set of organisations and celebrate the diversity of our people and skills. We believe the best outcomes arise from collaboration between researchers and practitioners with a range of experiences, skills and insights.
        </p>
        <p className='partner__text--small'>
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
