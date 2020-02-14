import React, { Component } from 'react'

import './style.css'
import logo from '../../img/logo.png'

class Footer extends Component {
  render () {
    return (
      <>
        <div style={{ 'margin-top': '200px' }}>
          <div className='footerContainer' />
          <div className='textContainer row' style={{
            margin: 0
          }}>
            <div className='col-xs-6' style={{
              textAlign: 'right'
            }}>
              <div>
                <img src={logo} className='logo' alt="The Cyber Institute's Logo in White" style={{
                  width: '100%',
                  maxWidth: '400px',
                }}/>
              </div>
            </div>
            <div className='col-xs-6'>
              <div className='footerText'>
                <p className='fontSize16px-xs' style={{
                  paddingTop: 0
                }}>
        +61 2 6125 7802
                </p>
                <p>
                  <a className='fontSize16px-xs' href='mailto:cyber@anu.edu.au' style={{ color: '#D2ACF7', 'text-decoration': 'underline' }}>cyber@anu.edu.au</a>
                </p>
                <p className='fontSize16px-xs'>
        Level 2, 115 North Rd, Acton  ACT 2601
                </p>
                <p>
                  <a className='fontSize16px-xs' href='https://twitter.com/anucyber?lang=en' style={{ color: '#D2ACF7', 'text-decoration': 'underline' }}>twitter@AnuCyber</a>
                </p>
              </div>
            </div>
          </div>

          <div className='purpleStrip fontSize16px-xs'>
            <p>
            </p>
          </div>
        </div>
      </>
    )
  }
}
export default Footer
