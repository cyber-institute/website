import React from 'react'

import Slider from '../common/Slider'

export default () =>
  <div className='row'>
    <div className='col-md-offset-1 col-md-11'>
      <h2
        className='Bold' style={{
          verticalAlign: 'middle',
          fontSize: '40px',
          letterSpacing: '6px'
          // color: 'rgb(82, 49, 120)'
        }}
      >
        Executive Education
      </h2>
      <p>
      The pace of change in cyber is high. Business risks and organisational resilience are increasingly driven by, or are susceptible to, cyber threats or incidents. Technical and non-technical professionals rely on expert advice or knowledge gathered through running their businesses to inform their decision-making. The Cyber Institute delivers modules drawn from the Cyber Masters as Executive Education sessions. These can be customised sessions to meet the needs of specific target groups.
      </p>
    </div>
    <Slider name='Cyber Bootcamp Program'>
      <div className='col-md-offset-1 col-md-11'>
      Hello
      </div>
    </Slider>
  </div>
