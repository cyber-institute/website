import React from 'react'

import backgroundArt from './background1.png'
import WhiteSlider from "./WhiteSlider"

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
                opacity: '0.5',
                width: "80%"
              }}
            />
          </div>
          <div
            className='displayNone-sm' style={{
              position: 'absolute',
              right: 0,
              width: '24%'
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
          Take back your privacy onion
        </h2>
        <p
          style={{
            fontSize: '22px',
            color: '#fff',
            fontWeight: "200"
          }}
        >
          The Internet has allowed untrusted people to peel away the layers of your privacy onion without getting to know you first.
          <br />It can seem impossible to do but the following tips and tricks should help.
          There are different levels of privacy. Not everyone will be right for you. The follow tips are broken into categories.
          
          <ul>
            
          <WhiteSlider name="Where is my tin foil hat. I dont even like my parents knowing my name.">
             <div style={{paddingLeft:"2px", lineHeight:"1.6"}}>
             <li style={{paddingBottom:"10px"}}>
            Don't use social media - Feel free to browse anonymously but try and use a VPN or an anonymous proxy.
            </li>
            <li style={{paddingBottom:"10px"}}> 
            Use a secure messaging app - Use an app that has true end to end encryption. Signal is a good example of this. 
            </li>
            <li style={{paddingBottom:"10px"}}>
            Read the terms and conditions - Choose only providers that don't sell or share your information. This includes Internet Providers and telephone providers. 
            </li>
            <li style={{paddingBottom:"10px"}}>
            Change your search engine - Use a more private search engine such as Startpage or Duckduckgo.
            </li>
            <li style={{paddingBottom:"10px"}}>
            Never send information to improve services - This information can give someone   
            </li>
            <li style={{paddingBottom:"10px"}}>
            Don't use a mobile phone - Mobile phones leak a lot of information. Do all you online activity through a computer you trust.
            </li>
            </div>
             </WhiteSlider>
             <WhiteSlider name="I hate that companies have my data and I want to minimise how much they have.">
             <div style={{paddingLeft:"2px", lineHeight:"1.6"}}>
             <li style={{paddingBottom:"10px"}}>
             Separate accounts - If you have a large number of accounts and apps that you regularly use, it can be a good idea to sign up to different services with different email addresses.  
            </li>
            <li style={{paddingBottom:"10px"}}> 
            Minimise your apps and services - Delete all non-essential apps and accounts.
            </li>
            <li style={{paddingBottom:"10px"}}>
            Use anonymous and secure email - Change your main email account to dedicated secure mail such as ProtonMail, or use anonymous email services.
            </li>
            
            </div>
             </WhiteSlider>

             <WhiteSlider name="Ok, I know it’s hard to protect my privacy and still live online, but I do have to trust someone.">
             <div style={{paddingLeft:"2px", lineHeight:"1.6"}}>
             <li style={{paddingBottom:"10px"}}>
             Put all your eggs in one basket - Find a few companies that you accept will have acess to your data and try to use only their services rather than signing up for different accounts.
            </li>
            <li style={{paddingBottom:"10px"}}> 
            Read the terms and conditions - This can be very boring but can give you an idea of what you are signing up for. 
            </li>
            <li style={{paddingBottom:"10px"}}>
            Learn more about Privacy and Security - Take some training or read some tips and tricks articles to improve your privacy IQ.
            </li>
            <li style={{paddingBottom:"10px"}}>
            Be selective - Justify to yourself why you really need an app or service. If there are no or few good reasons, then try and use a service or app you already have.
            </li>
            <li style={{paddingBottom:"10px"}}>
            Privacy settings - for the apps and services that you do use, apply the privacy settings. 
            </li>
            <li style={{paddingBottom:"10px"}}>
            Coming soon - We will be providing some more information and tools to help you do this. 
            </li>
            </div>
             </WhiteSlider>

             <WhiteSlider name="I dont care about my privacy. If its so important why cant someone do it for me.">
             <div style={{paddingLeft:"2px", lineHeight:"1.6"}}>
             <li style={{paddingBottom:"10px"}}>
             Do nothing - you may be happy with your current privacy.
            </li>
            <li style={{paddingBottom:"10px"}}> 
            Coming soon - We will be creating tools to take care of privacy for you.
            </li>
           
            </div>
             </WhiteSlider>
            
          </ul>  
<br /> 
<br />

        </p>
      </div>
    </div>
  </div>
