import React from 'react'

import './style.css'
import CyberMasteryContent from './CyberMasteryContent'
import CourseInformationBlurb from './CourseInformationBlurb'
import Products from './Products'
import BeMorePrivate from './BeMorePrivate'
import WhatAreWeDoing from './WhatAreWeDoing'
import Articles from './Articles'
import Partnerships from './Partnerships'

import Banner from '../common/Banner'


import banner from './banner.jpg'
import privacyOnion from '../../../img/privacyOnion.png'
import privacyLost from '../../../img/privacyLost.png'
import privacyShare from '../../../img/privacyShare.png'
import privacyAboutYou from '../../../img/aboutYou.png'
import privacyIsYou from '../../../img/privacyIsYou.png'
import services2 from '../../../img/services2.png'
import services3 from '../../../img/services3.jpg'
import services4 from '../../../img/services4.jpg'
import services5 from '../../../img/services5.jpg'
import services6 from '../../../img/city.png'
import services7 from '../../../img/services7.jpg'
import services9 from '../../../img/services9.jpg'
import services10 from '../../../img/companies.jpg'
import safely from "./../../../img/safe.png"

const Image = ({ img, style }) =>
  <img
    src={img} className='maxWidth100' style={style}
  />

const headings = [
  "What is Privacy",
  "Take Back Your Privacy Onion",
  'Privacy Scenarios',
  'Want to be Involved'
]

export default () =>
  <>
    <div className='privacy'>

    <Banner {...{ banner, headings }} title='Privacy In the Modern World' subTitle='Thinking about your data in a different way' />
    <div
      className='container-fluid'
    >

      <div className='row positionRelative' style={{marginTop: '2vw'}}>
        <div className='col-md-offset-1 col-md-8'>
          <Heading>
          What is Privacy
          </Heading>
          <div
            className='dottedLineHorizontal privacy__line privacy__line--right' />
        </div>
      </div>
      <div
        className='row positionRelative what'>
        <div className='what__picture'>
          <picture
            className='bannerImg what__img'
            style={{
              backgroundImage: `url(${services2})`,
            }}
          />
        </div>
        <div
          className='col-md-12'
        >
          <div className="row" style={{paddingLeft: '0'}}>
          <div
          className='col-md-offset-3 col-md-6'
        >
          <p>Here at the <span className='what__text--emphasis'>Cyber Institute</span> we believe that people should be able to 
            	  <span className='what__text--emphasis'> control with whom they share their information.</span> We also believe that privacy and security go hand-in-hand. The more that we all understand privacy, the better society will become at protecting it. 
          </p>
          </div>
          </div> 
          <br /><br />
          <div className="row">
          <div className="col-md-10 col-md-offset-1">

        <div className="row">
        <div
          className=' col-md-4'
        >
                    <p className='topic__wrapper'>
                    <img className='topic__img' src={privacyShare}/>
                    </p>
                    <p className='topic__text'>
 
           
 In the pre-digital age, people could control their own privacy more easily: limiting how much information is shared with others; 
 moderating information between strangers, friends and family.
 <br /><br />

</p>
        </div>
        <div
          className='col-md-4'
          
        >
                    <p className='topic__wrapper topic__wrapper--middle'>
                    <img className='topic__img topic__img--lost' src={privacyLost}/>
                    </p>
                    <p className='topic__text'>


Now, there is more information about people, and the average individual has lost control over the information that they
share online. 
<br /><br />
</p>


        </div>
        
          <div
          className='col-md-4'
        >
                    <p className='topic__wrapper topic__wrapper--onion'>
                    <img className='topic__img topic__img--onion' src={privacyOnion}/>
                    </p>
                    <p className='topic__text'>

The 'privacy onion' is a useful way to think about your information.  At the centre is your most intimate and sensitive information: you may choose to share that with your closest friends and family.  

<br /><br />
</p>

        </div>
          
       
        </div>
        </div>
        </div>
       
</div>

<div className="row middle-xs" style={{marginBottom : '2vw'}}>
<div className='col-md-12'
        >
                  <div
            className='dottedLineHorizontal info__line' />
          </div>
          <div className="col-md-12 center-xs">
          <h2 className='info__heading'>
          We can think about personal information as having two aspects.
          </h2>
          </div>

<div className="row">



          <div
          className='col-md-offset-1 col-md-3'
        >
          
         <h3 className='info__heading'>About You</h3> 

         

<p>Information that is <span className='info__heading'>about you</span> is information that describes you
or is information that you use to confirm your identity online.  </p>
<br /><br />
<ul className='info__list'>
  <li>
    Email Address
  </li>
  <li>
    Name
  </li>
  <li>
    Date of Birth
  </li>
  <li>
    Address
  </li>
  <li>
    Computer Information
  </li>
  <li>
    Hair Colour
  </li>

</ul>
<br />
<h4 className='info__heading'>
So what's the risk?
</h4>
<br />

<p>This information is given away everyday and collected by almost every service you use online. 
The problem is that often this information is the only way that
a company can verify you on the internet. </p>
<br />
<br />
<p>If someone else has this information they would be able to steal your identity — causing you problems IRL (in real life) as well as online.</p>

        </div>
        <div
          className='col-md-4'
          
        >
           
          <img className='info__img' src={privacyAboutYou}/>   
        </div>
        <div
          className='col-md-3 '
        >
          
          <h3 className='info__heading'>Is You</h3> 
          <p>Information that <span className='info__heading'>is you</span> may be
considered your ‘digital DNA’: it’s the how, where, when and what. It's your behaviour, activity and circumstances.</p>
<br/>
<br />
<p>It may not be obvious but this information 
leaks through with every interaction you have with the internet. 
It is captured with every 'like', swipe or click you make. 
<br /> <br/><span className='info__heading'>This information is you.</span>  </p>
<ul className='info__list'>
  <li>
    Thought Processes
  </li>
  <li>
    Personal Preferences
  </li>
  <li>
    How you react to situations
  </li>
  <li>
    Strengths and Weaknesses
  </li>
  <li>
    Who you spend time with
  </li>

</ul>
<br />
<h4 className='info__heading'>
So how is this information collected?
</h4>
<br />

<p> Most interactions on the internet are logged. With enough logged information,
patterns begin to emerge. Organisations then analyse these patterns against known 
psychological behaviours. 
<br />
<br /> With enough information, an organisation is able to predict how users will interact with a service, regardless of the account they use. 
<br/>
</p>

        </div>

        </div>
        </div>
      </div>
      </div>
      <div id="Take Back Your Privacy Onion">
        <BeMorePrivate />

      </div>

<WhatAreWeDoing id="Privacy Scenarios" image1={services10} image2={safely} image3={services10} />

  <div
      className='container-fluid positionRelative involved' >
      <div className='row positionRelative' id="Want to be Involved">
        <div
          className='col-md-11 involved__layer' >
          <Heading>
      Want to be Involved?
          </Heading>
          <div
            className='dottedLineHorizontal privacy__line privacy__line--left' />
        </div>
      </div>
      <div className='col-md-offset-3 col-md-6'>
      <br/><br />
      <span className='involved__text'>
            <p>This is just the beginning. We will be expanding our training, products and ideas.</p>
            <ul>
              <li>
              Give us some feedback, this is our first attempt and we want it to be bigger and better.
              </li>
              <li>
              Get your hands dirty and help us out, we are keen to collaborate or work with partners. 
              </li>
              <li>
              Register your interest for privacy training, executive training or both.
              </li>
            </ul>
            <p>Our contact details are below. We look forward to hearing from you. </p>
            </span>
            </div>
</div>
</div>

      </>
      
      
      const Heading = ({ children }) =>
<h2
className='Black HeadingFontSize-md HeadingFontSize-xs' style={{
color: 'rgb(82, 49, 120)',
margin: 0,
position: 'relative'
}}
id={children}
>
{children}
</h2>



export { Heading, Image }
