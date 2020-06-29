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
        <span
          style={{
            fontSize: '22px',
            color: '#fff',
            fontWeight: "200"
          }}
        >
          <p style={{
            fontSize: '22px',
            color: '#fff',
            fontWeight: "200"
          }}>
          The Internet has allowed untrusted people to peel away the layers of your privacy onion without your knowledge or agreement.
          <br /><br />It may seem impossible to protect your privacy but the following suggestions should help.
          There are different levels of privacy. Not everyone will be right for you. The following tips are broken into categories.

          <br></br><br></br>
          Before you start applying some of these suggestions, a useful way of determining what category you fit in is to map your 
          <span style={{fontWeight: '700'}}> is you</span> and <span style={{fontWeight: '700'}}>about you</span> data onto a privacy onion. 
          This can help you determine the privacy level you are most comfortable with.  
          </p>
                    <ul style={{listStylePosition: "outside", listStyleType:"none"}}>
            
          <WhiteSlider name="Where is my tin foil hat? I don't even like my parents knowing my name.">
             <div style={{paddingLeft:"2px", lineHeight:"1.6"}}>
             <li style={{paddingBottom:"10px"}}>
            Don't use social media - You can browse anonymously but when you do, try to use a Virtual Private Network (VPN) or an anonymous proxy.
            </li>
            <li style={{paddingBottom:"10px"}}> 
            Use a secure messaging app - These are apps that has true end to end encryption. Signal and Wikr are good examples. 
            </li>
            <li style={{paddingBottom:"10px"}}>
            Read the terms and conditions - of any service you're thinking of signing on to, including Internet providers and telephone providers.  Choose only providers that don't sell or share your information.
            </li>
            <li style={{paddingBottom:"10px"}}>
            Change your search engine - Use a more private search engine such as Startpage, Duckduckgo or Brave.
            </li>
            <li style={{paddingBottom:"10px"}}>
            Never send information to improve services - Such information can help others predict your behaviours.
            </li>
            <li style={{paddingBottom:"10px"}}>
            If you really want to avoid any data leakage, don't use a mobile phone - Mobile phones broadcast a lot of information. Do all your online activity through a computer you trust.
            </li>
            </div>
             </WhiteSlider>
             <WhiteSlider name="I hate that companies have my data and I want to minimise how much they have.">
             <div style={{paddingLeft:"2px", lineHeight:"1.6"}}>
             <li style={{paddingBottom:"10px"}}>
             Use Separate accounts - If you have a large number of accounts and apps that you regularly use, it may be a good idea to use different email addresses for different services.  
            </li>
            <li style={{paddingBottom:"10px"}}> 
            Minimise the number of apps and services that you do use - Delete all non-essential apps and accounts.
            </li>
            <li style={{paddingBottom:"10px"}}>
            Use anonymous and secure email - Change your main email account to a dedicated secure mail such as ProtonMail, or use anonymous email services.
            </li>
            
            </div>
             </WhiteSlider>

             <WhiteSlider name="Ok, I know it’s hard to protect my privacy and still live online, but I do have to trust someone.">
             <div style={{paddingLeft:"2px", lineHeight:"1.6"}}>
             <li style={{paddingBottom:"10px"}}>
             Put all your eggs in one or two baskets - Find a few companies that you accept will have access to your data and try to use only their services rather than signing up for a variety of different accounts.
            </li>
            <li style={{paddingBottom:"10px"}}> 
            Read the terms and conditions - This can be tedious but it's better to know what you are agreeing to.
            </li>
            <li style={{paddingBottom:"10px"}}>
            Learn more about privacy and security - Great idea! Take some training or read about to improve your privacy IQ.
            </li>
            <li style={{paddingBottom:"10px"}}>
            Be selective - Do you really need that app or service?  If there's no good reason, stick with what you have already.
            </li>
            <li style={{paddingBottom:"10px"}}>
            Privacy settings - Some apps and services have privacy settings that you can apply. Also most web browsers have anonymous browsing via private or incognito mode. 
            </li>
            <li style={{paddingBottom:"10px"}}>
            We will soon have more information and tools to help you. 
            </li>
            </div>
             </WhiteSlider>

             <WhiteSlider name="I don't care about my privacy. If its so important why can't someone do it for me.">
             <div style={{paddingLeft:"2px", lineHeight:"1.6"}}>
             <li style={{paddingBottom:"10px"}}>
             Do nothing - you may be happy with your current level of privacy.
            </li>
            <li style={{paddingBottom:"10px"}}> 
            <span style={{fontWeight: '900'}}>But now that you mention it, we are building some tools to help you, too.</span>
            </li>
           
            </div>
             </WhiteSlider>
            
          </ul>  
<br /> 
<br />

        </span>
      </div>
    </div>
  </div>
