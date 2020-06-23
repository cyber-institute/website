import React, { useState } from 'react'

import SlideToggleContent from './../ContentSlider/SlideToggleContent'
import ViewMoreTranscriptButton from './ViewMoreTranscriptButton'

export default () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className='col-xs-13'>
      <div className='row'>
        <div className='col-xs-2' />
        <div
          className='col-xs-8' style={{
            padding: '2rem 0'
          }}
        >
          <h2 style={{
            textAlign: 'center'
          }}
          >
        The Packet - Security Bytes - Ep.1: Secure Working from Home
          </h2>
          <div dangerouslySetInnerHTML={{ __html: '<iframe title="The Packet - Security Bytes - Ep.1: Secure Working from Home" style="border: none;" scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/t2tkg-d93c69?from=yiiadmin&download=1&version=1&skin=11&btn-skin=101&auto=0&share=1&fonts=Helvetica&download=1&rtl=0&pbad=1" width="100%" height="122"></iframe>' }} />
          <div style={{
            paddingTop: '1rem'
            // textAlign: 'center'
          }}
          >
            <SlideToggleContent isVisible={isVisible}>
              <h3 className='transcript__h3'>Outline</h3>
              <li className='transcript__li'>Welcome to Security Bytes a podcast from the Cyber Institute of the Australian National University – providing quick-fire practical advice on how to protect yourself online.</li>
              <li className='transcript__li'>In this episode of Security Bytes, we will go over four fundamental steps you can take to address a majority of the cyber risks posed through working from home.</li>
              <li className='transcript__li'>COVID-19 has rapidly changed the societal landscape; people in ever increasing numbers are social distancing and working from home. While social distancing is addressing the risk of the pandemic; our working from home has increased cyber risks against ourselves and our employers. Attackers have already begun to adapt to the social distancing world, with scams, phishing and other malicious attacks moving towards targeting those working from home.</li>
              <h3 className='transcript__h3'>Fundamental 1 - Passwords</h3>
              <li className='transcript__li'>Using strong unique passwords is still one of the best protections against cyber-attack. A strong password is a nonsense phrase of at least 17 character ; it is something that you will remember; it is not a common phrase, and;  will be hard for others to guess – for example,  a good password would be “elephant jumping frame”. Passwords 17 characters and longer are extraordinarily difficult for attackers to crack.</li>
              <li className='transcript__li'>Additionally, passwords should be unique; that is, you do not use the same password on different platforms and systems. For example, the same or very similar passwords for work accounts and social media accounts. The problem here is that not all internet services are secure and many companies have been breached in the past. Attackers are sharing and using data from previous breaches in an attempt to gain access to further internet accounts of those breached victims: this style of attack is called “credential stuffing”. It can be difficult to remember unique strong passwords for all the many online accounts we all have; so use of a password manager lik LastPass, 1Password or KeePass, is highly recommended.</li>

              <h3 className='transcript__h3'>Fundamental 2 – The Home Network</h3>
              <li className='transcript__li'>Your home internet and WiFi routers are gateways into your home network, and as the internet is a bit of wild west kind of place, we need to ensure that they are as strong as we can make them.</li>

              <li className='transcript__li'>A quick Google search of your router brand and model should find information and manuals to enable you to make all of the changes we are about to suggest.</li>
              <li className='transcript__li'>If your internet service provider manages your router for you, contact them and ask how up to date is your router’s security.</li>
              <li className='transcript__li'>Firstly, you should ensure that your router’s firmware is up to date. Firmware controls all aspects of the router, including core security functions like encryption. Vendors put out updates when a bug is found in their firmware. Some routers allow updating automatically, choose this option if you can.</li>
              <li className='transcript__li'>Next, there are lists of default administrator and WiFi passwords for various brands and models of routers freely available on the internet. Attackers can use these to gain access and control of your router, if you have not change the default password. Obviously this threat is easily treated, by changing the default password on your router and WiFi.</li>
              <li className='transcript__li'>If you are using  WiFi make sure you are using WPA2 or WPA3 encryption suites – these are the most secure versions of WiFi encryption generally available. Earlier versions are easily exploited by attackers. </li><li className='transcript__li'>Finally, turn of WPS. In the early days of Wifi, this service was designed to make it easy to connect new devices to your WiFi network – however it has numerous security flaws, and only makes your router more vulnerable to attackers.</li>
              <h3 className='transcript__h3'>Fundamental 3 – Secure your Device</h3>
              <li className='transcript__li'>Securing your devices – including mobiles – is a key step you can take to improve security while working from home. Ensure that your device’s operating system and apps are kept up to date; using automatic updates where possible. Updates often patch holes and flaws in a device’s security – and a relatively large percentage of successful attacks are enabled by people not keeping their device and apps up to date. </li><li className='transcript__li'>You should install anti-virus software on all devices. If your Operating System has firewall and malware detection capabilities, turn these capabilities on as well. If they do not turn on, download and install malware detection and firewall tools; noting that some anti-virus products conveniently include these as well.</li>
              <h3 className='transcript__h3'>Fundamental 4 – Secure Yourself</h3><li className='transcript__li'>Scammers are already taking advantage of the heightened stress and uncertainty caused by the pandemic. Attackers are using social engineering to trick people into divulging personal information, donating to fake charities and clicking on malicious links. </li>
              <li className='transcript__li'>Scepticism is the major preventative measure against social engineering and phishing attacks:
                <ul type='circle'>
                  <li>Be wary of emails that insist immediate action;</li>
                  <li>Beware of any online request for personal information;</li>
                  <li>If someone you work with sends you a message and asks for unusual information, or they do not ‘sound right’, follow up with them directly through other means of communication;</li>
                  <li>Check links before clicking them, by hovering with your mouse over them and check that they are legitimate and do not look suspect – trust your instincts here;</li>
                  <li>Emails with numerous spelling and grammatical mistakes are often a marker of phishing</li>
                  <li>And finally, if it feels wrong, it best to delete the email.</li>
                </ul>
              </li>
              <h3 className='transcript__h3'>Outro</h3> <li className='transcript__li'>By taking these four fundamental steps we have covered – passwords, securing your home network, securing devices and securing yourself – will greatly improve your online safety as you work from home. </li><li className='transcript__li'>Until we meet again: from all of us here at the ANU Cyber Institute, take care during these trying times – and stay safe at home, and stay safe online. </li>
            </SlideToggleContent>
            <div className='col-xs-12 center-xs'>
              <ViewMoreTranscriptButton isVisible={isVisible} clickButton={() => setIsVisible(!isVisible)} />
            </div>
          </div>
        </div>
        <div className='col-xs-2' />
      </div>
    </div>
  )
}
