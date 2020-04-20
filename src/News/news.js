import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import Section from './ContentSlider/Section'
import SlideToggleContent from './../ContentSlider/SlideToggleContent'
import ViewMoreButton from './../ContentSlider/ViewMoreButton'
import ViewMoreTranscriptButton from './ViewMoreTranscriptButton'

import Banner from './../pages/common/Banner'
import 'flexboxgrid/dist/flexboxgrid.min.css'
import './../style.css'

import banner from './bannernewsandevents.jpg'
import RaisinaDialogue from '../../img/raisina_dialogue.jpg'
import SingaporeCyber from '../../img/singapore_cyber.jpg'
import CyberBootcamp from '../../img/cyber_bootcamp.png'
import DataPodcast from '../../img/data_podcast.jpg'
import GovCyberPodcast from '../../img/gov_cyber_podcast.jpg'
import Globe from '../../img/globe.jpg'
import FaceFuture from '../../img/face_future.jpg'
import CyberHowDoing from '../../img/cyber_how_doing.jpg'
import PeopleNotProblem from '../../img/people_not_problem.jpg'
import SecurityStrategy from '../../img/security_strategy.jpg'
import TechDivide from '../../img/tech_divide.jpg'
import BlackBoxArrow from '../../img/black box arrow.png'
import NatPodcast from '../../img/nationalsecuritypodcast.jpg'
import Microchip from '../../img/microchip.png'
import Defend from '../../img/defend.png'
import Scaffold from '../../img/scaffold.jpg'
import RSA from '../../img/RSA.png'
import Zoom from '../../img/zoom_trouble.jpg'
import DataInterventionsStephanie from '../../img/datainterventions_stephanie.jpg'
import { relative } from 'path'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const headings = [
  'News',
  'Events',
  'Articles',
  'Podcasts'
]

function getHeadingWidth (text) {
  text = document.createElement('span')
  document.body.appendChild(text)

  text.style.font = 'Roboto'
  text.style.fontSize = 28 + 'px'
  text.style.height = 'auto'
  text.style.width = 'auto'
  text.style.position = 'absolute'
  text.style.whiteSpace = 'no-wrap'
  text.innerHTML = 'Hello World'

  width = Math.ceil(text.clientWidth)
  formattedWidth = width + 'px'

  document.querySelector('.output').textContent =
          formattedWidth
  return formattedWidth
}

function getBodyWidth (text) {
  text = document.createElement('span')
  document.body.appendChild(text)

  text.style.font = 'Roboto'
  text.style.fontSize = 18 + 'px'
  text.style.height = 'auto'
  text.style.width = 'auto'
  text.style.position = 'absolute'
  text.style.whiteSpace = 'no-wrap'
  text.innerHTML = 'Hello World'

  width = Math.ceil(text.clientWidth)
  formattedWidth = width + 'px'

  document.querySelector('.output').textContent =
          formattedWidth
  return formattedWidth
}

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

const DateBox = (props) => (
  <div className='Datebox-component' style={{ margin: '1rem' }}>
    <div class='row'>
      <div class='col-md-2 col-xs-12'>
        <div style={{ float: 'left', width: '90%', height: '200px', marginLeft: '1rem', border: '1px solid rgba(0, 0, 0, .2)', textAlign: 'center', 'text-transform': 'uppercase' }}>
          <span style={{ fontSize: '84px', color: '#4D4D4D', letterSpacing: '0px' }}>{props.day}</span>
          <br />
          <span style={{ fontSize: '52px', color: '#4D4D4D', letterSpacing: '0px' }}>{props.month}</span>
        </div>
      </div>
      <div class='col-md-9 col-xs-12' style={{ overflow: 'hidden', marginLeft: '1rem', marginRight: '1rem' }}>
        <span style={{ fontSize: '35px', color: '#000', letterSpacing: '0px' }}><b>{props.title}</b></span>
        <p style={{ fontSize: '15px', margin: '0.5rem 0' }}>{props.date} {props.time}</p>
        <p style={{ fontSize: '18px' }}>{props.description}</p><br />
        <span style={{ fontSize: '18px', color: '#000', letterSpacing: '0px' }}>{props.signupText} <a href={props.link} style={{ color: '#523178'}}>{props.link}</a></span>
      </div>
    </div>
  </div>
)

const NewsArticle = (props) => (
  <div style={{ textAlign: 'left' , cursor: 'pointer'}}>
    <div>
      <img src={props.imageSource} style={{ position: 'relative', top: '20px', right: '65px', 'max-width': '70%', 'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', margin: '0px 0px 0px 10%' }} />
    </div>
    <div className='NewsArticle marginAuto-xs' style={{ textAlign: 'left', 'border-style': 'solid', padding: '1rem', borderColor: 'black', borderWidth: '1px', width: '70%', height: '370px' }} onClick={() => props.link && window.open(props.link, '_blank')}>
      <br />
      <div style={{ maxHeight: '285px', overflow: 'hidden' }}>
        <b style={{ fontSize: '28px', letterSpacing: '0px', color: '#000' }}>{props.head}</b><br />
        <p style={{ fontSize: '13px', textAlign: 'left', letterSpacing: '0px', bottom: '0', "margin-top": '0.5rem' }}>by {props.author} <span style={{ fontSize: '13px', letterSpacing: '0px', float: 'right' }}> {props.date}</span></p>
        <br />

        <div style={{ fontSize: '18px', letterSpacing: '0px' }}> {props.byline.substring(0, 200) + '...'}</div>
      </div>
      <div style={{ textAlign: 'right' }}><img style={{ 'max-width': '10%', margin: '1rem', left: '50%' }} src={BlackBoxArrow} /></div>
    </div>
  </div>
)
const SpacerColumn = (props) => (
  <div />
)

const news = {
  title: 'News',
  sections: [{
    id: '2',
    component: 'NewsArticle',
    props: {
      head: 'The January Cyber Bootcamp',
      byline: "We're so excited to be working with DFAT on the Cyber Bootcamp which was launched in November, and looking forward to building this cyber capacity-building venture with our Indo-Pacific neighbours!",
      author: 'DFAT',
      date: '29/01/20',
      imageSource: CyberBootcamp,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://dfat.gov.au/international-relations/themes/cyber-affairs/cyber-cooperation-program/Pages/cyber-bootcamp-project.aspx?fbclid=IwAR2mztupdFmWZC6kXPPvYKn57Oj9cXqDa9E9jzPw2qlmMa_KAUSAO1M2guE'
    }
  }, {
    id: '3',
    component: 'NewsArticle',
    props: {
      head: 'Digital Binaries: 5G and the new tech wars',
      byline: 'The Raisina Dialogue is a multilateral conference where global leaders in policy, business, media and civil society are hosted in New Delhi, India, to discuss cooperation on a wide range of pertinent international policy matters. Our CEO, Professor Lesley Seebeck,  came back from sharing some insight through the "Digital Binaries: 5G and the new tech wars" panel on the final day of this conference.',
      author: 'ORF',
      date: '16/01/20',
      imageSource: RaisinaDialogue,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.orfonline.org/raisina-dialogue/programme/'
    }
  }, {
    id: '4',
    component: 'NewsArticle',
    props: {
      head: 'To Singapore and Malaysia for Cyber Security',
      byline: "A visit to Singapore and Malaysia for our Program Manager Liz West didn't just include great conversations and delicious food, but attending some cyber-security ventures. Both Republic Polytechnic-RSA Joint Security Operations Centre and Sunway University's Cyber Security Intelligence Laboratory were fantastic to visit, and the Cyber Institute was proud to send over one of our own.",
      author: 'Liz West',
      date: '19/12/19',
      imageSource: SingaporeCyber,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://twitter.com/AnuCyber/status/1203838456499232769'
    }
  }]
}
const news2 = null

const blogs = {
  title: 'Blogs',
  sections: [{
    id: '2',
    component: 'NewsArticle',
    props: {
      head: 'Generic Heading 1',
      byline: 'Start of the article',
      author: 'Graham',
      date: '22/10/2020',
      imageSource: './img/ai1.jpg',
      sizeName: 'col-md-3 col-xs-12'
    }
  }, {
    id: '3',
    component: 'NewsArticle',
    props: {
      head: 'Generic Heading 2',
      byline: 'Start of the article',
      author: 'Graham',
      date: '22/10/2020',
      imageSource: './img/ai1.jpg',
      sizeName: 'col-md-3 col-xs-12'

    }
  }, {
    id: '4',
    component: 'NewsArticle',
    props: {
      head: 'Generic Heading 2',
      byline: 'Start of the article',
      author: 'Graham',
      date: '22/10/2020',
      imageSource: './img/ai1.jpg',
      sizeName: 'col-md-3 col-xs-12'
    }
  }]
}

const blogs2 = null

const podcasts = {
  title: 'Podcasts',
  sections: [ {
    id: '3',
    component: 'NewsArticle',
    props: {
      head: 'Implications of the Global Push to Ban End-to-End Encryption',
      byline: 'The majority of the world’s population currently live under governments that have already implemented, or are considering, bans on encryption. These encryption bans have significant implications for privacy and security as well as the global decline in democracy.',
      author: 'RSA Conference',
      date: '26/2/20',
      imageSource: RSA,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.youtube.com/watch?v=cjIaKqUwzCQ&feature=youtu.be'
    }
  }, {
    id: '4',
    component: 'NewsArticle',
    props: {
      head: 'Techlosophy and the future of security',
      byline: 'Getting to the bottom of how information and bio-technologies are reshaping societies and the human mind - and what this means for those with a stake in democracy and national security.',
      author: 'Katherine Mansted and Dr Zac Rogers',
      date: '6/11/19',
      imageSource: NatPodcast,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://crawford.anu.edu.au/news-events/news/15495/national-security-podcast-techlosophy-and-future-security'
    }
  }, {
    id: '2',
    component: 'NewsArticle',
    props: {
      head: 'More details needed about potential changes to cyber powers',
      byline: "The Federal Government has been looking at whether the Australian Signals Directorate should have more of a role in fighting cybercrime across the country. It's a discussion that's been going on for more than a year now, but no decisions have been made. Home Affairs Minister Peter Dutton says he is to continue the conversation, and people in the cyber security sector want more details about what could change.",
      author: 'ABC AM',
      date: '18/6/19',
      imageSource: GovCyberPodcast,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.abc.net.au/radio/programs/am/more-details-needed-about-potential-changes-to-cyber-powers/11219358'
    }
  }
]
}

// {
//   id: '3',
//   component: 'NewsArticle',
//   props: {
//     head: 'Data, Cyber, and the Social Context',
//     byline: 'Is the growing collection and aggregation of data likely to empower the individual and strengthen democracy? Or is it more likely to benefit manipulative corporations and encourage authoritarian governance? How should society frame the problem of privacy and information control, and where does regulation give way to personal responsibility?',
//     author: 'Nat. Security Podcast',
//     date: '27/1/19',
//     imageSource: DataPodcast,
//     sizeName: 'col-md-3 col-xs-12',
//     link: 'https://www.policyforum.net/national-security-podcast-data-cyber-and-the-social-contract/'
//   }
// }

const podcasts2 = null


const media = {
  title: 'News',
  sections: [{
    id: '4',
    component: 'NewsArticle',
    props: {
      head: 'Data interventions and the renegotiation of the social contract',
      byline: 'What can be discerned is that there are different ways to conceive security, and the dangers arise when we overstep the mark into regime security.',
      author: 'Stephanie Koorey',
      date: '',
      imageSource: DataInterventionsStephanie,
      sizeName: 'col-md-3 col-xs-12',
      link: 'http://visionofhumanity.org/economists-on-peace/data-interventions-and-the-renegotiation-of-the-social-contract/'
    }
  },{
    id: '4',
    component: 'NewsArticle',
    props: {
      head: 'The Trouble With Zoom',
      byline: 'As working remotely from home or in smaller groups becomes the norm in these virus-hit times, Zoom has quickly seemed indispensable. But serious and unresolved issues around its security, privacy and data use may mean that the cost of using the platform could be higher than most realise.',
      author: 'Patrick Doyle, James Mortenson, Damian Clifford',
      date: '24/3/20',
      imageSource: Zoom,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.afr.com/technology/zoom-is-the-next-privacy-challenge-20200324-p54dff'
    }
  },
    {
    id: '4',
    component: 'NewsArticle',
    props: {
      head: 'Scaffolding of security',
      byline: 'Often when we think of cyber, we feel vulnerable, afraid, and unsure. We feel tossed in a never-ending storm: few days pass without mention of data breach, concerns over fake news or a press release about attribution. A sense of exhaustion, of helplessness and despondency is not unexpected.',
      author: 'Prof. Lesley Seebeck',
      date: '27/2/20',
      imageSource: Scaffold,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://reporter.anu.edu.au/scaffolding-security'
    }
  }]
}

const media2 = {
  title: 'Media',
  sections: [,{
    id: '3',
    component: 'NewsArticle',
    props: {
      head: 'Cybersecurity: how are we doing?',
      byline: 'Asking ourselves whether we’re doing things right merely asks us to measure our progress down a prescribed path. Judgements about whether we’re doing the right things are harder to make. It’s entirely possible we’re not even on the right path, regardless of how far along it we’ve come. A word of warning: this is a fairly dense and difficult topic.',
      author: 'Prof. Lesley Seebeck',
      date: '11/12/19',
      imageSource: CyberHowDoing,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.aspistrategist.org.au/cybersecurity-how-are-we-doing/'
    }
  }, {
    id: '4',
    component: 'NewsArticle',
    props: {
      head: 'Repositioning Australia to face its future',
      byline: 'Good things come to those who are prepared to wait, invest, and appreciate the ‘adjacent possible’. Policymakers need to stop being drawn to the myth of the ‘quick fix’ and focus on long-term and sustained development of research and development as an ecosystem if they really want to solve those wicked problems.',
      author: 'Prof. Lesley Seebeck',
      date: '13/11/19',
      imageSource: FaceFuture,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.policyforum.net/repositioning-australia-to-face-its-future/'
    }
  },
  {
    id: '2',
    component: 'NewsArticle',
    props: {
      head: 'Students need better preparation for an uncertain future',
      byline: "With cyber issues among the most complex facing society, educating young minds to tackle future problems has never been more important. Current approaches, however, are not good enough, Lesley Seebeck writes.",
      author: 'Prof. Lesley Seebeck',
      date: '24/2/20',
      imageSource: Microchip,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.policyforum.net/education-for-the-cyber-age/'
    }
  }
  ]
}

const media3 = {
  title: 'News',
  sections: [{
    id: '4',
    component: 'NewsArticle',
    props: {
      head: 'The new global technological divide',
      byline: 'For the first time since the Cold War, technology is re-emerging as a strategic, and not merely a political, instrument. The difference this time is that it’s thoroughly civilian rather than military technologies and information that act both as enablers and sources of vulnerability. And there are key differences in how different Western political cultures understand the strategic significance of technology.',
      author: 'Prof. Lesley Seebeck',
      date: '7/11/19',
      imageSource: TechDivide,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.aspistrategist.org.au/the-new-global-technological-divide/'
    }
  },
    {
    id: '2',
    component: 'NewsArticle',
    props: {
      head: 'Cybersecurity: people are not the problem',
      byline: "A lot of thinking and commentary around cybersecurity put forward the idea that ‘people are the problem’. After all, most intrusions and attacks start with people being persuaded or misled into going onto disguised or infected sites, to handover details or otherwise compromise their own systems... If only people—users, clients, members of the community—didn’t do what people naturally do, we’d all have much more secure and efficient systems. That's muddled thinking.",
      author: 'Prof. Lesley Seebeck',
      date: '4/11/19',
      imageSource: PeopleNotProblem,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.aspistrategist.org.au/cybersecurity-people-are-not-the-problem/'
    }
  }, {
    id: '3',
    component: 'NewsArticle',
    props: {
      head: 'Submission: 2020 Cyber Security Strategy',
      byline: 'The number of questions in this paper illustrates the complex, contested, and changeable nature of cyber and cyber security... Given that cyber is a wicked problem, without a broader conceptual framework, the danger is that fragmented approach and point solutions are not likely to meet the challenge.',
      author: 'Prof. Lesley Seebeck',
      date: '1/11/19',
      imageSource: SecurityStrategy,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.homeaffairs.gov.au/reports-and-pubs/files/cyber-strategy-2020/submission-157.pdf'
    }
  }, 
  
  
  // {
  //   id: '4',
  //   component: 'NewsArticle',
  //   props: {
  //     head: 'Defending those we send to protect us',
  //     byline: 'The impression has gained ground that some members of the Special Air Service Regiment (SASR) are an unregulated band of brigands, not adhering to civil laws, or to the laws of warfare. Nothing could be further from the truth.',
  //     author: 'John Powers',
  //     date: '27/9/19',
  //     imageSource: Defend,
  //     sizeName: 'col-md-3 col-xs-12',
  //     link: 'https://www.aspistrategist.org.au/defending-those-we-send-to-protect-us/'
  //   }
  // }
]
}

const events = {
  title: 'Events',
  sections: [{
    id: '2',
    component: DateBox,
    props: {
      day: '20',
      month: 'Feb',
      title: 'RSA Conference 2020',
      date: '20/02/20',
      time: '9:00am',
      description: 'The Cyber Institute will be proud to see our CEO, Professor Lesley Seebeck, speak at the prestigious 2020 RSA Conference in San Francisco, United States, on the ripple effects of end-to-end encryption.',
      signupText: 'Click the link for more information about her role in the event:',
      link: 'https://www.rsaconference.com/experts/professor-lesley-seebeck'
    }
  }, {
    id: '3',
    component: DateBox,
    props: {
      day: '20',
      month: 'Jan',
      title: 'The Cyber Bootcamp',
      date: '20/01/20',
      time: '11:00am',
      description: 'The Department of Foreign Affairs and Trade launched the Cyber Bootcamp Project in November 2019, of which programs are delivered by ANU’s Cyber Institute and National Security College. It aims to help participants in ASEAN and Pacific countries pursue a cyber-resilience vision. Each Cyber Bootcamp includes a two-week intensive program in Australia, where participants engage in interactive workshops, exercise scenarios, industry site visits, and dialogues with Australian government agencies. As part of the program participants will implement a project which responds to a cyber-challenge or opportunity relevant to their domestic roles that will contribute to a cyber-resilient Indo-Pacific.',
      signupText: 'Find out more at:',
      link: 'https://dfat.gov.au/international-relations/themes/cyber-affairs/cyber-cooperation-program/Pages/cyber-bootcamp-project.aspx'
    }
  }]
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
      <div class={this.root.props.sizeName}>
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
          <div id='News' class='News'>
            <div class='News'>
              <div class='row positionRelative'>
                <div class='col-md-offset-1 col-md-5'>
                  <h2 class='Black HeadingFontSize-md HeadingFontSize-xs' id='News' style={{ color: 'rgb(82, 49, 120)', margin: '0px', position: 'relative', marginTop: '2rem' }}>News</h2>
                  <div
                    className='dottedLineHorizontal' style={{
                      width: '91.666%',
                      position: 'absolute',
                      right: '-1rem'
                    }}
                  />
                </div>
              </div>
              <div class='col-xs-13'>
                <div class='row'>
                  <div class='col-xs-2' />
                  <DynamicPage page={this.state.news} />
                  <div class='col-xs-2' />
                </div>
              </div>
            </div>
            {
              news2 &&
                <div
                  style={{
                    margin: 'auto',
                    position: 'relative'
                  }}
                >
                  <SlideToggleContent isVisible={this.state.isVisible}>
                    <br />
                    <br />
                    <div class='col-xs-13'>
                      <div class='row'>
                        <div class='col-xs-2' />
                        <DynamicPage page={this.state.news2} />
                        <div class='col-xs-2' />
                      </div>
                    </div>  
                    
                  </SlideToggleContent>
                  <div class='col-xs-12'>
                    <ViewMoreButton isVisible={this.state.isVisible} clickButton={this.clickButton.bind(this)} alignRight />
                  </div>
                </div>
            }
          </div>

          <div id='Events' class='Events'>
            <div class='Events'>
              <br />
              <br />
              <div class='row positionRelative'>
                <div class='col-md-offset-1 col-md-5'><h2 class='Black HeadingFontSize-md HeadingFontSize-xs' id='Events' style={{ color: 'rgb(82, 49, 120)', margin: '0px', position: 'relative', marginTop: '2rem' }}>Events</h2>
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
                class='row' style={{
                  marginTop: '2rem'
                }}
              >
                <div class='col-xs-12'>
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
                  <div class='col-xs-13'>
                    {
                      this.state.events.sections.map(({ component: EventComponent, props }, index) => (
                        <div class='row' key={index}>
                          <div class='col-xs-2' />
                          <EventComponent {...props} />
                          <div class='col-xs-2' />
                        </div>
                      ))
                    }
                  </div>
                </SlideToggleContent>

                <ViewMoreButton isVisible={this.state.isVisibleEvent} clickButton={this.clickButtonEvent.bind(this)} alignRight />

              </div>}
          </div>
          <div id='Articles' class='Media'>
            <div class='Media'>
              <div class='row positionRelative'>
                <div class='col-md-offset-1 col-md-5'><h2 class='Black HeadingFontSize-md HeadingFontSize-xs' id='Courses' style={{ color: 'rgb(82, 49, 120)', margin: '0px', position: 'relative', marginTop: '2rem' }}>Articles</h2>
                  <div
                    className='dottedLineHorizontal' style={{
                      width: '91.666%',
                      position: 'absolute',
                      right: '-1rem'
                    }}
                  />
                </div>
              </div>
              <div class='col-xs-13'>
                <div class='row'>
                  <div class='col-xs-2' />
                  <DynamicPage page={this.state.media} />
                  <div class='col-xs-2' />
                </div>
              </div>
            </div>
            {
              media2 &&
                <div
                  style={{
                    margin: 'auto',
                    position: 'relative'
                  }}
                >
                  <SlideToggleContent isVisible={this.state.isVisibleMedia}>
                    <br />
                    <br />
                    <div class='col-xs-13'>
                      <div class='row'>
                        <div class='col-xs-2' />
                        <DynamicPage page={this.state.media2} />
                        <div class='col-xs-2' />
                      </div>
                    </div>
                    <div class='col-xs-13'>  
                      <div class='row'>
                        <div class='col-xs-2' />
                        <DynamicPage page={this.state.media3} />
                        <div class='col-xs-2' />
                      </div>

                    </div>
                  </SlideToggleContent>
                  <div class='col-xs-12 center-xs'>
                    <ViewMoreButton isVisible={this.state.isVisibleMedia} clickButton={this.clickButtonMedia.bind(this)} alignRight />
                  </div>
                </div>
            }
          </div>
          <div id='Podcasts' class='Podcasts'>
            <div class='Podcasts'>
              <div class='row positionRelative'>
                <div class='col-md-offset-1 col-md-5'>
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
              <div class='col-xs-13'>
              <div class='row'>
              <div class='col-xs-2' />
              <div class='col-xs-8' style={{
                padding: '2rem 0'
              }}>
                <h2 style={{
                  textAlign: 'center'
                }}>
                The Packet - Security Bytes - Ep.1: Secure Working from Home
                  </h2>
                <div dangerouslySetInnerHTML={{ __html: '<iframe title="The Packet - Security Bytes - Ep.1: Secure Working from Home" style="border: none;" scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/t2tkg-d93c69?from=yiiadmin&download=1&version=1&skin=11&btn-skin=101&auto=0&share=1&fonts=Helvetica&download=1&rtl=0&pbad=1" width="100%" height="122"></iframe>' }} />
                <div style={{
                  paddingTop: '1rem',
                  // textAlign: 'center'
                }}>
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
    <h3 className='transcript__h3'>Fundamental 4 – Secure Yourself</h3><li className='transcript__li'>Scammers are already taking advantage of the heightened stress and uncertainty caused by the pandemic. Attackers are using social engineering to trick people into divulging personal information, donating to fake charities and clicking on malicious links. </li><li className='transcript__li'>Scepticism is the major preventative measure against social engineering and phishing attacks:
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
                <div class='col-xs-12 center-xs'>
                 <ViewMoreTranscriptButton isVisible={this.state.isVisibleTranscript} clickButton={this.clickButtonTranscript.bind(this)}/>
                </div>
                </div>
                </div>
                <div class='col-xs-2' />
                </div>
                <div class='row'>
                  <div class='col-xs-2' />
                  <DynamicPage page={this.state.podcasts} />
                  <div class='col-xs-2' />
                </div>
              </div>
            </div>
            {
              podcasts2 &&
                <div
                  style={{
                    margin: 'auto',
                    position: 'relative'
                  }}
                >
                  <SlideToggleContent isVisible={this.state.isVisiblePodcast}>
                    <br />
                    <br />
                    <div class='col-xs-13'>
                      <div class='row'>
                        <div class='col-xs-2' />
                        <DynamicPage page={this.state.news2} />
                        <div class='col-xs-2' />
                      </div>
                    </div>
                  </SlideToggleContent>
                  <div class='col-xs-12'>
                    <ViewMoreButton isVisible={this.state.isVisiblePodcast} clickButton={this.clickButtonPodcast.bind(this)} alignRight />
                  </div>
                </div>
            }
          </div>
        </div>
      </>
    )
  }
}
export default News
export { DynamicPage }

function Content ({ clickButton, isVisible, page }) {
  return (
    <div
      id='content'
      /* className={`${isVisible ? 'col-xs-8 col-xs-offset-2 textAlignJustified' : 'col-xs-5 col-xs-offset-5 textAlignedRight'} fontWeight300`} */
    >
      <SlideToggleContent isVisible={isVisible}>
        <div class='col-xs-13'>
          <div class='row'>
            <div class='col-xs-2' />
            <DynamicPage page={page} />
            <div class='col-xs-2' />
          </div>
        </div>
      </SlideToggleContent>

      <ViewMoreButton {...{ isVisible, clickButton }} alignRight />
    </div>
  )
}
