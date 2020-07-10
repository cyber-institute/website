import React from 'react'

import backgroundArt from './background1.png'
import WhiteSlider from "./WhiteSlider"
import './BeMorePrivate.css'


export default () =>
  <div
    className='container-fluid positionRelative' 
  >
    <div className='advice__container'>
      <picture
        className='bannerImg advice__background'
        style={{
          backgroundImage: `url(${backgroundArt})`,
        }}
      />
    </div>
    <div className='row'>
      <div
        className='col-md-offset-3 col-md-6 advice__wrapper' >
        <h2
          className='Light advice__heading' >
          <div
            className='displayNone-sm line__wrapper line__wrapper--left' >
            <div className='advice__line'/>
          </div>
          <div
            className='displayNone-sm line__wrapper line__wrapper--right' >
            <div className='advice__line line__wrapper--right'/>
          </div>
          Take back your privacy onion
        </h2>
        <span className='advice__text'>
          <p className='advice__text'>
          The Internet has allowed untrusted people to peel away the layers of your privacy onion without your knowledge or agreement.
          <br /><br />It may seem impossible to protect your privacy but the following suggestions should help.
          There are different levels of privacy. Not everyone will be right for you. The following tips are broken into categories.

          <br></br><br></br>
          Before you start applying some of these suggestions, a useful way of determining what category you fit in is to map your 
          <span className='advice__text--emphasis'> is you</span> and <span className='advice__text--emphasis'>about you</span> data onto a privacy onion. 
          This can help you determine the privacy level you are most comfortable with.  
          </p>
                    <ul className='advice__list'>
            
          <WhiteSlider name="Where is my tin foil hat? I don't even like my parents knowing my name.">
             <div className='list__wrapper'>
             <li className='list__item'>
            Don't use social media - You can browse anonymously but when you do, try to use a Virtual Private Network (VPN) or an anonymous proxy.
            </li>
            <li className='list__item'>            
            Use a secure messaging app - These are apps that has true end to end encryption. Signal and Wikr are good examples. 
            </li>
            <li className='list__item'>
            Read the terms and conditions - of any service you're thinking of signing on to, including Internet providers and telephone providers.  Choose only providers that don't sell or share your information.
            </li>
            <li className='list__item'>            
            Change your search engine - Use a more private search engine such as Startpage, Duckduckgo or Brave.
            </li>
            <li className='list__item'>
            Never send information to improve services - Such information can help others predict your behaviours.
            </li>
            <li className='list__item'>
            If you really want to avoid any data leakage, don't use a mobile phone - Mobile phones broadcast a lot of information. Do all your online activity through a computer you trust.
            </li>
            </div>
             </WhiteSlider>
             <WhiteSlider name="I hate that companies have my data and I want to minimise how much they have.">
             <div className='list__wrapper'>
             <li className='list__item'>
             Use Separate accounts - If you have a large number of accounts and apps that you regularly use, it may be a good idea to use different email addresses for different services.  
            </li>
            <li className='list__item'> 
            Minimise the number of apps and services that you do use - Delete all non-essential apps and accounts.
            </li>
            <li className='list__item'>
            Use anonymous and secure email - Change your main email account to a dedicated secure mail such as ProtonMail, or use anonymous email services.
            </li>
            
            </div>
             </WhiteSlider>

             <WhiteSlider name="Ok, I know it’s hard to protect my privacy and still live online, but I do have to trust someone.">
             <div className='list__wrapper'>
             <li className='list__item'>
             Put all your eggs in one or two baskets - Find a few companies that you accept will have access to your data and try to use only their services rather than signing up for a variety of different accounts.
            </li>
            <li className='list__item'> 
            Read the terms and conditions - This can be tedious but it's better to know what you are agreeing to.
            </li>
            <li className='list__item'>
            Learn more about privacy and security - Great idea! Take some training or read about to improve your privacy IQ.
            </li>
            <li className='list__item'>
            Be selective - Do you really need that app or service?  If there's no good reason, stick with what you have already.
            </li>
            <li className='list__item'>
            Privacy settings - Some apps and services have privacy settings that you can apply. Also most web browsers have anonymous browsing via private or incognito mode. 
            </li>
            <li className='list__item'>
            We will soon have more information and tools to help you. 
            </li>
            </div>
             </WhiteSlider>

             <WhiteSlider name="I don't care about my privacy. If its so important why can't someone do it for me.">
             <div className='list__wrapper'>
             <li className='list__item'>
             Do nothing - you may be happy with your current level of privacy.
            </li>
            <li className='list__item'> 
            <span className='list__item--emphasis'>But now that you mention it, we are building some tools to help you, too.</span>
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
