import React, { Component } from 'react'
import Mailchimp from 'react-mailchimp-form'

import './style.css'
import logo from '../../img/logo.png'

class Footer extends Component {
  render () {
    return (
      <>
        <div style={{ marginTop: '21.2vh' }}>
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
            <div className='col-xs-6' >
              <div className='footerText'>
                <p className='fontSize16px-xs' style={{
                  paddingTop: 0
                }}>
                  +61 2 6125 7802
                </p>
                <div>
                  <a className='fontSize16px-xs' href='mailto:cyber@anu.edu.au' style={{ color: '#D2ACF7', textDecoration: 'underline', fontFamily: 'Roboto' }}>cyber@anu.edu.au</a>
                  <p>Subscribe to our Mailing List!</p><br/>
                </div>
                <Mailchimp className='mailchimp_form'
                action='https://anu.us18.list-manage.com/subscribe/post?u=5431269039904fced7aafc923&amp;id=85748197e5'
                fields={[
                  {
                    name: 'EMAIL',
                    placeholder: 'Email address',
                    type: 'email',
                    required: true
                  }
                ]}
                messages = {
                  {
                    sending: "Sending...",
                    success: "You are now subscribed!",
                    error: "An error has occured please try again later.",
                    empty: "Please enter a valid email address.",
                    duplicate: "Multiple subscribe attempts for this email address",
                    button: "Subscribe"
                  }
                }
                />
                <p className='fontSize16px-xs'>
                  Level 2, 115 North Rd, Acton  ACT 2601
                </p>
                <p>
                  <a className='Light' href="https://www.facebook.com/anucyberinstitute" style={{  paddingRight: '1rem',  fontSize: '20px' }}><i className="fab fa-facebook-square" style={{color:'white'}}></i></a>
                  <a className='Light' href="https://twitter.com/anucyber" style={{ paddingRight: '1rem',  fontSize: '20px' }}><i className="fab fa-twitter-square" style={{color:'white'}}></i></a>
                  <a className='Light' href="https://au.linkedin.com/company/anu-cyber-institute" style={{  paddingRight: '1rem',  fontSize: '20px' }}><i className="fab fa-linkedin" style={{color:'white'}}></i></a>
                  <a className='Light' href="mailto:cyber@anu.edu.au" style={{ paddingRight: '1rem', fontSize: '20px' }}><i className="fas fa-envelope-square" style={{color:'white'}}></i></a>
                </p>
              </div>
            </div>
            </div>
          </div>

          <div className='purpleStrip fontSize16px-xs'>
            <p>
            </p>
          </div>
      </>
    )
  }
}
export default Footer
