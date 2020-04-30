import React from 'react'

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
import safely from '../../../img/safely.png'
import services9 from '../../../img/services9.jpg'
import services10 from '../../../img/services10.jpg'

const Image = ({ img, style }) =>
  <img
    src={img} className='maxWidth100' style={style}
  />

const headings = [
  "What is Privacy",
  "Take Back Your Privacy Onion",
  'Privacy Scenarios'
]

export default () =>
  <>
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
            className='dottedLineHorizontal' style={{
              width: '91.666%',
              position: 'absolute',
              right: '-1rem'
            }}
          />
        </div>
      </div>
      <div
        className='row positionRelative' style={{
          marginTop: '3rem'
        }}
      >
        <div style={{
          background: '0 0',
          overflow: 'hidden',
          position: 'absolute',
          top: '100%',
          right: '0px',
          bottom: '0px',
          margin: 'auto',
          left: '30%',
          width: '50%',
          zIndex: -2,
          height: '100%',
          backgroundColor: '#fff'
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
              backgroundSize: 'cover',
              backgroundImage: `url(${services2})`,
              opacity: 1.0
            }}
          />
        </div>
        <div
          className='col-md-12'
        >
          <div className="row">
          <div
          className='col-md-offset-3 col-md-6'
        >
          <p>Here at the <span style={{ 'font-weight': '700', color: '#523178' }}>Cyber Institute</span> we believe that people should be able to <span style={{ 'font-weight': '700', color: '#523178' }}>control with who they share their information.</span> </p>
          </div>
          </div> 
          <br /><br />
          <div className="row">
          <div
          className='col-md-offset-1 col-md-3'
        >
                    <p>
                    <img style={{"object-fit":"cover", width: "100%"}} src={privacyOnion}/>
           <br /><br />

This is the “privacy onion”. The layers of the onion represent increasingly important
information about you, with the most intimate being at the centre.
<br /><br />
</p>
        </div>
          
        <div
          className='col-md-offset-1 col-md-3'
        >
                    <p>
                    <img style={{"object-fit":"cover", width: "100%", 'box-shadow': '5px 5px 10px grey'}} src={privacyShare}/>
           <br /><br /> 
           
In the pre-digital age, people could control their own privacy more easily. limiting how much information is shared with others: 
moderating information between strangers, friends and family.
<br /><br />
</p>
        </div>
        <div
          className='col-md-offset-1 col-md-3'
        >
                    <p>
                    <img style={{"object-fit":"cover", width: "100%"}} src={privacyLost}/>
           <br /><br />

The average individual has lost control over the information that they
share online. 
<br /><br />
</p>
        </div>
        </div>
</div>

<div className="row center-xs middle-xs" style={{marginBottom : '2vw'}}>
<div className='col-md-12'
        >
                  <div
            className='dottedLineHorizontal' style={{
              position: 'relative',
              right: 'calc(50% + 1rem)',
              marginTop: '6vw',
              marginBottom: '2vw'
            }}
          />
          </div>
          <h2 style={{ 'font-weight': '700', color: '#523178', 'font-family': 'Roboto, sans-serif' }}>
          Personal information can be split in two
          </h2>

<div className="row">



          <div
          className='col-md-4'
        >
          <p>
         <h3 style={{ 'font-weight': '700', color: '#523178', 'font-family': 'Roboto, sans-serif' }}>About You</h3> 
 

Information that is <span style={{'font-weight': '700',color: '#523178'}}>about you</span> is information that describes you
or is information that you used to confirm your identity online.  
<br /><br />
<ul>
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
<h4 style={{ 'font-weight': '700', color: '#523178', 'font-family': 'Roboto, sans-serif' }}>
So whats the risk?
</h4>
<br />

This information is given away everyday and collected by almost every service you use online. 
The problem is that often this information is the only way that
a company can verify you on the internet. 
<br />
<br />
If someone else has this information they would 
be able to steal your identity. Causing you problems IRL as well as online. 




          </p>
        </div>
        <div
          className='col-md-4'
        >
           
          <img style={{"object-fit":"cover", width: "100%"}} src={privacyAboutYou}/>   
        </div>
        <div
          className='col-md-4'
        >
          <p>
          <h3 style={{ 'font-weight': '700', color: '#523178', 'font-family': 'Roboto, sans-serif' }}>Is You</h3> 
      Information that <span style={{'font-weight': '700',color: '#523178'}}>is you</span> can be
considered your ‘digital DNA’ its the how, where, when and what rather than the
information that describes you. 
<br/>
<br />
It may not be obvious but this information 
leaks through with every interaction you have with the internet 
it is captured with every like, swipe or click you do. 
<br /> <span style={{'font-weight': '700',color: '#523178'}}>This information is you.</span>  
<ul>
  <li>
    Thought Processes
  </li>
  <li>
    Personal preferences
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
<h4 style={{ 'font-weight': '700', color: '#523178', 'font-family': 'Roboto, sans-serif' }}>
So how do they collect this information?
</h4>
<br />

Most interactions that you do on the internet are logged. With enough logged information
patterns begin to emerge. Organisations then analyse these patterns against known 
psychological behaviours. 
<br />
<br /> With enough information an organisation is able to identify
an individual by how they interact with a service regardless of the account they use. 
<br/>

          </p>
        </div>

        </div>
        </div>
      </div>
      </div>
      <div id="Take Back Your Privacy Onion"></div>
<BeMorePrivate />

<WhatAreWeDoing id="Privacy Scenarios" image1={services10} image2={safely} image3={services10} />

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