import React, { Component } from 'react'

import './style.css'
import logo from '.../img/logo.png'

class Footer extends Component {
  render () {
    return (
      <>
        <style />

        <div className='footerContainer' />

        <div className='textContainer'>
          <div className='footerText'>
            <p>
        +61 2 6125 7802
            </p>
            <p>
              <a href='mailto:cyber@anu.edu.au' style={{color:'D2ACF7','text-decoration':'underline'}}>cyber@anu.edu.au</a>
            </p>
            <p>
        Level 2, 115 North Rd, Acton  ACT 2601
            </p>
            <p>
              <a href='https://twitter.com/anucyber?lang=en' style={{'color':'D2ACF7','text-decoration':'underline'}}>twitter@AnuCyber</a>
            </p>
          </div>

          <img src={logo} className='logo' alt="The Cyber Institute's Logo in White" />

        </div>

        <div className='purpleStrip'>
          <p>
    A STRATEGIC INITIATIVE OF THE AUSTRALIAN NATIONAL UNIVERSITY
          </p>
        </div>
      </>
    )
  }
}
export default Footer
