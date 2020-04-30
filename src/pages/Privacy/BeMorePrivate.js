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
          Take back your privacy onion
        </h2>
        <p
          style={{
            fontSize: '22px',
            color: '#fff'
          }}
        >
          The Internet has allowed untrusted people to peel away the layers of your privacy onion without getting to know you first.
          <br />It can seem impossible to do but the following tips and tricks should help.
          There are different levels of privacy. Not everyone will be right for you. The follow tips are broken into categories.
          
          <ul>
            Where is my tin foil hat. I dont even like my parents knowing my name.
            <li>
            Dont use social media - Feel free to browse anonymously but try and use a VPN or anonymous proxy.
            </li>
            <li>
            Use a secure messaging app - Use an app that has true end to end encryption. Signal is a good example of this. 
            </li>
            <li>
            Read the terms and conditions - Choose only providers that dont sell or share your information. This includes Internet Providers and telephone providers. 
            </li>
            <li>
            Change your search engine - Use a more private search engine such as startpage or duckduckgo.
            </li>
            <li>
            Never send information to improve services - This information can give someone 
            </li>
            <li>
            Don't use a mobile phone - Mobile phones leak a lot of information. Do all you online activity through a computer you trust.
            </li>
            I hate that companies have my data and I want to minimise how much they have.
            <li>
            Seperate accounts - If you have a large amount of accounts and apps that you regularly use it can be a good idea to sign up to different services with different email addresses.  
            </li>
            <li>
            Minimise your apps and services - Delete all non essential apps and accounts
            </li>
            <li>
            Use anonymous and secure email - Change your main email account to dedicated secure mail such as proton mail. Or use anonymous email services.
            </li>
            Ok I know its hard to protect my privacy and still live online but I do have to trust someone.
            <li>
            Put all your eggs in one basket - Find a few companies that you accept will have acess to your data and try to use only their services rather than signing up for different accounts.
            </li>
            <li>
            Read the terms and conditions - This can be very boring but can give you an idea of what you are signing up for. 
            </li>
            <li>
            Learn more about Privacy and Security - Take some training or read some tips and tricks articles to improve your privacy IQ.
            </li>
            <li>
            Be selective - Justify to yourself why you really need an app or service. If there are no or few good reasons then try and use a service or app your already have.
            </li>
            <li>
            Privacy Settings - The apps and services that you use apply the privacy settings. 
            </li>
            <li>
            Coming soon - We will be providing some more information and tools to help you do this. 
            </li>
            I dont care about my privacy. If its so important why cant someone do it for me.
            <li>
            Do nothing - You many be happy with your current privacy.
            </li>
            <li>
            Coming soon - We will be creating tools to take care of privacy for you.
            </li>
          </ul>  
<br /> 
<br />

        </p>
      </div>
    </div>
  </div>
