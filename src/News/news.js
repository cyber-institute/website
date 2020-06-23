import React, { Component, useState } from 'react'
import SlideToggleContent from './../ContentSlider/SlideToggleContent'
import ViewMoreButton from './../ContentSlider/ViewMoreButton'
import ViewMoreTranscriptButton from './ViewMoreTranscriptButton'

import Banner from './../pages/common/Banner'
import 'flexboxgrid/dist/flexboxgrid.min.css'
import './../style.css'

import newsItems from './items/news_items'
import blogItems from './items/blogs_items'
import podcastItems from './items/podcasts_items'
import articleItems from './items/articles_items'
import eventItems from './items/events_items'

import banner from './bannernewsandevents.jpg'

import BlackBoxArrow from '../../img/black box arrow.png'

const headings = [
  'News',
  'Events',
  'Articles',
  'Podcasts'
]

const CompLabel = (props) => (
  <div className='complabel-component'>
    Component: <b>{props.label}</b>
  </div>
)

const Cover = (props) => (
  <div className='cover-component'>
    <CompLabel label='Cover' />
    <h1 className='cover-head'>
      {props.head}
    </h1>
    <p className='cover-byline'>
      {props.byline}
    </p>
  </div>
)

const Copy = (props) => (
  <div className='copy-component'>
    <CompLabel label='Copy' />
    <div>{props.content}</div>
  </div>
)

const Channels = (props) => (
  <div className='channels-component'>
    <CompLabel label='Channels' />
    <div>{props.children}</div>
  </div>
)

const Twitter = (props) => (
  <div className='twitter-component'>
    <CompLabel label='Twitter' />
    <div>
      Twitter:&nbsp;
      <a href={`https://twitter.com/${props.handle}`} target='_blank' rel='noopener noreferrer'>
        @{props.handle}
      </a>
    </div>
  </div>
)

const Link = (props) => (
  <div className='newsletter-component'>
    <CompLabel label='Link' />
    <div>
      Google:&nbsp;
      <a href={props.subscribeUrl} target='_blank' rel='noopener noreferrer'>
        {props.subscribeUrl}
      </a>
    </div>
  </div>
)

const Image = (props) => (
  <div className='Image-component'>
    <CompLabel label='Image' />
    <div>
      <img src={props.src} />
    </div>
  </div>
)

export const DateBox = (props) => (
  <div className='Datebox-component' style={{ margin: '1rem' }}>
    <div className='row'>
      <div className='col-md-2 col-xs-12'>
        <div style={{ float: 'left', width: '90%', height: '200px', marginLeft: '1rem', border: '1px solid rgba(0, 0, 0, .2)', textAlign: 'center', 'text-transform': 'uppercase' }}>
          <span style={{ fontSize: '84px', color: '#4D4D4D', letterSpacing: '0px' }}>{props.day}</span>
          <br />
          <span style={{ fontSize: '52px', color: '#4D4D4D', letterSpacing: '0px' }}>{props.month}</span>
        </div>
      </div>
      <div className='col-md-9 col-xs-12' style={{ overflow: 'hidden', marginLeft: '1rem', marginRight: '1rem' }}>
        <span style={{ fontSize: '35px', color: '#000', letterSpacing: '0px' }}><b>{props.title}</b></span>
        <p style={{ fontSize: '15px', margin: '0.5rem 0' }}>{props.date} {props.time}</p>
        <p style={{ fontSize: '18px' }}>{props.description}</p><br />
        <span style={{ fontSize: '18px', color: '#000', letterSpacing: '0px' }}>{props.signupText} <a href={props.link} style={{ color: '#523178' }}>{props.link}</a></span>
      </div>
    </div>
  </div>
)

const NewsArticle = (props) => {
  return (
    <div style={{ textAlign: 'left', cursor: 'pointer' }}>
      <div>
        <img src={props.imageSource} style={{ position: 'relative', top: '20px', right: '65px', 'max-width': '70%', 'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', margin: '0px 0px 0px 10%' }} />
      </div>
      <div className='NewsArticle marginAuto-xs' style={{ textAlign: 'left', 'border-style': 'solid', padding: '1rem', borderColor: 'black', borderWidth: '1px', width: '70%', height: '370px' }} onClick={() => props.link && window.open(props.link, '_blank')}>
        <br />
        <div style={{ maxHeight: '285px', overflow: 'hidden' }}>
          <b style={{ fontSize: '28px', letterSpacing: '0px', color: '#000' }}>{props.head}</b><br />
          <p style={{ fontSize: '13px', textAlign: 'left', letterSpacing: '0px', bottom: '0', 'margin-top': '0.5rem' }}>by {props.author} <span style={{ fontSize: '13px', letterSpacing: '0px', float: 'right' }}> {props.date}</span></p>
          <br />

          <div style={{ fontSize: '18px', letterSpacing: '0px' }}> {props.byline.substring(0, 200) + '...'}</div>
        </div>
        <div style={{ textAlign: 'right' }}><img style={{ 'max-width': '10%', margin: '1rem', left: '50%' }} src={BlackBoxArrow} /></div>
      </div>
    </div>
  )
}

const SpacerColumn = (props) => (
  <div />
)

// News article formatting
const news = {
  title: 'News',
  sections: [newsItems[0], newsItems[1], newsItems[2]]
}
const news2 = {
  title: 'News',
  sections: [newsItems[3]]
}

const blogs = {
  title: 'Blogs',
  sections: [blogItems[0], blogItems[1], blogItems[2]]
}

const podcasts = {
  title: 'Podcasts',
  sections: [podcastItems[0], podcastItems[1], podcastItems[2]]
}
const podcasts2 = {
  title: 'Podcasts',
  sections: [podcastItems[3]]
}

const media = {
  title: 'News',
  sections: [articleItems[0], articleItems[1], articleItems[2]]
}
const media2 = {
  title: 'News',
  sections: [articleItems[3], articleItems[4], articleItems[5]]
}
const media3 = {
  title: 'News',
  sections: [articleItems[6], articleItems[7], articleItems[8]]
}

const events = {
  title: 'Events',
  sections: [{
    id: '2',
    component: DateBox,
    props: eventItems[0]
  },
  {
    id: '3',
    component: DateBox,
    props: eventItems[1]
  }
  ]
}

const events2 = null

const stock = {
  Channels,
  Copy,
  Cover,
  Link,
  Twitter,
  Image,
  NewsArticle,
  SpacerColumn,
  DateBox
}

class Section1 extends React.Component {
  get root () {
    return this.props.root
  }

  get rSection () {
    return this.createElement(this.root)
  }

  createElement (def) {
    return React.createElement(
      stock[def.component],
      def.props,
      ((def.props || {}).children || [])
        .map(c => this.createElement(c))
    )
  };

  render () {
    return (
      <div className={this.root.props.sizeName}>
        {this.rSection}
      </div>
    )
  }
}

class DynamicPage extends React.Component {
  get sections () {
    return this.props.page.sections
  }

  get rSections () {
    return this.sections.map(
      s => <Section1 key={s.id} root={s} />
    )
  }

  render () {
    return (

      <>
        {this.rSections}
      </>
    )
  }
}

const MediaItems = ({ items }) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <div className='row'>
        <div className='col-md-2' />
        <div className='row col-xs-12 col-md-9'>
          {
            items.map(({ props }, i) =>
              i < 3 && (
                <div className='col-md-4 col-xs-12' key={i}>
                  <NewsArticle {...props} />
                </div>
              )
            )
          }
        </div>
      </div>
      {
        items.length >= 3 &&
          <>
            <div className='row'>
              <div className='col-md-2' />
              <div className='row col-xs-12 col-md-9'>
                <SlideToggleContent isVisible={isVisible}>
                  <div className='row'>
                    {
                      items.slice(3).map(({ props }, i) =>
                        (
                          <div className='col-md-4 col-xs-12' key={i}>
                            <NewsArticle {...props} />
                          </div>
                        )
                      )
                    }
                  </div>
                </SlideToggleContent>
              </div>
            </div>
            <div
              className='col-xs-12 center-xs' style={{
                margin: 'auto',
                position: 'relative'
              }}
            >
              <ViewMoreButton isVisible={isVisible} clickButton={() => setIsVisible(!isVisible)} alignRight />
            </div>
          </>
      }
    </>
  )
}

class News extends Component {
  constructor (...args) {
    super(...args)

    this.state = {
      news: news,
      news2: news2,
      podcasts: podcasts,
      media: media,
      // blogs: blogs,
      events: events,
      media2: media2,
      media3: media3

    }
  }

  clickButton () {
    // this.getClientHeight()
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }))
  }

  clickButtonEvent () {
    // this.getClientHeight()
    this.setState((prevState) => ({ isVisibleEvent: !prevState.isVisibleEvent }))
  }

  clickButtonMedia () {
    // this.getClientHeight()
    this.setState((prevState) => ({ isVisibleMedia: !prevState.isVisibleMedia }))
  }

  clickButtonTranscript () {
    // this.getClientHeight()
    this.setState((prevState) => ({ isVisibleTranscript: !prevState.isVisibleTranscript }))
  }

  clickButtonBlog () {
    // this.getClientHeight()
    this.setState((prevState) => ({ isVisibleBlog: !prevState.isVisibleBlog }))
  }

  clickButtonPodcast () {
    // this.getClientHeight()
    this.setState((prevState) => ({ isVisiblePodcast: !prevState.isVisiblePodcast }))
  }

  render () {
    return (
      <>
        <Banner {...{ banner, headings }} title='News & Events' subTitle='What we&#39;re doing and other things you might like' />
        <div style={{ fontFamily: 'Roboto, sans-serif' }} className='container-fluid'>
          <div id='News' className='News'>
            <div className='News'>
              <div className='row positionRelative'>
                <div className='col-md-offset-1 col-md-5'>
                  <h2 className='Black HeadingFontSize-md HeadingFontSize-xs' id='News' style={{ color: 'rgb(82, 49, 120)', margin: '0px', position: 'relative', marginTop: '2rem' }}>News</h2>
                  <div
                    className='dottedLineHorizontal' style={{
                      width: '91.666%',
                      position: 'absolute',
                      right: '-1rem'
                    }}
                  />
                </div>
              </div>
              <MediaItems items={newsItems} />
            </div>
          </div>

          <div id='Events' className='Events'>
            <div className='Events'>
              <br />
              <br />
              <div className='row positionRelative'>
                <div className='col-md-offset-1 col-md-5'><h2 className='Black HeadingFontSize-md HeadingFontSize-xs' id='Events' style={{ color: 'rgb(82, 49, 120)', margin: '0px', position: 'relative', marginTop: '2rem' }}>Events</h2>
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
                className='row' style={{
                  marginTop: '2rem'
                }}
              >
                <div className='col-xs-12'>
                  {
                    this.state.events.sections.map(({ component: EventComponent, props }, index) => (
                      <EventComponent {...props} key={index} />
                    ))
                  }
                </div>
              </div>
            </div>
            {events2 &&
              <div
                style={{
                  margin: 'auto',
                  position: 'relative'
                }}
              >
                <SlideToggleContent isVisible={this.state.isVisibleEvent}>
                  <br />
                  <br />
                  <div className='col-xs-13'>
                    {
                      this.state.events.sections.map(({ component: EventComponent, props }, index) => (
                        <div className='row' key={index}>
                          <div className='col-xs-2' />
                          <EventComponent {...props} />
                          <div className='col-xs-2' />
                        </div>
                      ))
                    }
                  </div>
                </SlideToggleContent>

                <ViewMoreButton isVisible={this.state.isVisibleEvent} clickButton={this.clickButtonEvent.bind(this)} alignRight />

              </div>}
          </div>
          <div id='Articles' className='Media'>
            <div className='Media'>
              <div className='row positionRelative'>
                <div className='col-md-offset-1 col-md-5'><h2 className='Black HeadingFontSize-md HeadingFontSize-xs' id='Courses' style={{ color: 'rgb(82, 49, 120)', margin: '0px', position: 'relative', marginTop: '2rem' }}>Articles</h2>
                  <div
                    className='dottedLineHorizontal' style={{
                      width: '91.666%',
                      position: 'absolute',
                      right: '-1rem'
                    }}
                  />
                </div>
              </div>
              <MediaItems items={articleItems} />
            </div>
          </div>
          <div id='Podcasts' className='Podcasts'>
            <div className='Podcasts'>
              <div className='row positionRelative'>
                <div className='col-md-offset-1 col-md-5'>
                  <h2 className='Black HeadingFontSize-md HeadingFontSize-xs' style={{ color: '#523178', margin: 0, marginTop: '6rem' }}>Podcasts</h2>
                  <div
                    className='dottedLineHorizontal' style={{
                      width: '91.666%',
                      position: 'absolute',
                      right: '-1rem'
                    }}
                  />
                </div>
              </div>
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
                      <SlideToggleContent isVisible={this.state.isVisibleTranscript}>
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
                        <ViewMoreTranscriptButton isVisible={this.state.isVisibleTranscript} clickButton={this.clickButtonTranscript.bind(this)} />
                      </div>
                    </div>
                  </div>
                  <div className='col-xs-2' />
                </div>
              </div>
              <MediaItems items={podcastItems} />
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default News
export { DynamicPage }
