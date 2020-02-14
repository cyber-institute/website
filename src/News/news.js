 import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//import Section from './ContentSlider/Section'
import SlideToggleContent from './../ContentSlider/SlideToggleContent'
import ViewMoreButton from './../ContentSlider/ViewMoreButton'


import 'flexboxgrid/dist/flexboxgrid.min.css'
import './../style.css'

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
import { relative } from 'path';




function getHeadingWidth(text) { 
  
  text = document.createElement("span"); 
  document.body.appendChild(text); 

  text.style.font = "Roboto"; 
  text.style.fontSize = 28 + "px"; 
  text.style.height = 'auto'; 
  text.style.width = 'auto'; 
  text.style.position = 'absolute'; 
  text.style.whiteSpace = 'no-wrap'; 
  text.innerHTML = 'Hello World'; 

  width = Math.ceil(text.clientWidth); 
  formattedWidth = width + "px"; 

  document.querySelector('.output').textContent 
          = formattedWidth; 
          return formattedWidth;
} 

function getBodyWidth(text) { 
  
  text = document.createElement("span"); 
  document.body.appendChild(text); 

  text.style.font = "Roboto"; 
  text.style.fontSize = 18 + "px"; 
  text.style.height = 'auto'; 
  text.style.width = 'auto'; 
  text.style.position = 'absolute'; 
  text.style.whiteSpace = 'no-wrap'; 
  text.innerHTML = 'Hello World'; 

  width = Math.ceil(text.clientWidth); 
  formattedWidth = width + "px"; 

  document.querySelector('.output').textContent 
          = formattedWidth; 
          return formattedWidth;
} 


const CompLabel = (props) => (
  <div className="complabel-component">
    Component: <b>{props.label}</b>
  </div>
);

const Cover = (props) => (
  <div className="cover-component">
    <CompLabel label="Cover" />
    <h1 className="cover-head">
      {props.head}
    </h1>
    <p className="cover-byline">
      {props.byline}
    </p>
  </div>
);

const Copy = (props) => (
  <div className="copy-component">
    <CompLabel label="Copy" />
    <div>{props.content}</div>
  </div>
);

const Channels = (props) => (
  <div className="channels-component">
    <CompLabel label="Channels" />
    <div>{props.children}</div>
  </div>
);

const Twitter = (props) => (
  <div className="twitter-component">
    <CompLabel label="Twitter" />
    <div>
      Twitter:&nbsp;
      <a href={`https://twitter.com/${props.handle}`} target ="_blank" rel="noopener noreferrer">
        @{props.handle}
      </a>
    </div>
  </div>
);

const Link = (props) => (
  <div className="newsletter-component">
    <CompLabel label="Link" />
    <div>
      Google:&nbsp;
      <a href={props.subscribeUrl} target="_blank" rel="noopener noreferrer">
        {props.subscribeUrl}
      </a>
    </div>
  </div>
);

const Image = (props) => (
  <div className="Image-component">
    <CompLabel label="Image" />
    <div>
      <img src={props.src} />
    </div>
  </div>
);

const DateBox = (props) => (
  <div className="Datebox-component" style={{margin : '1rem'}}>
    <div class="row">
    <div class="col-md-2 col-xs-12">
    <div style={{float: "left", width: "90%", height: "200px", marginLeft:'1rem',  border: "1px solid rgba(0, 0, 0, .2)", textAlign: "center", "text-transform": "uppercase"}}>
      <span style={{fontSize: "84px", color: "#4D4D4D", letterSpacing: '0px'}}>{props.day}</span>
      <br />
      <span style={{fontSize: "52px", color: "#4D4D4D", letterSpacing: '0px'}}>{props.month}</span>
    </div>
    </div>
    <div class="col-md-9 col-xs-12" style={{overflow: 'hidden', marginLeft: '1rem', marginRight:'1rem'}}>
    <span style={{fontSize: "35px", color: "#000", letterSpacing: '0px'}}><b>{props.title}</b></span>
      <p style={{fontSize: "15px"}}>{props.date} {props.time}</p>
      {props.description}<br />
      <span style={{fontSize: "18px", color: "#000", letterSpacing: '0px'}}>{props.signupText} <a href src={props.link}>{props.link}</a></span>
    </div>
    </div>
  </div>
);


const NewsArticle = (props) => (
  <div style={{textAlign: "left"}}>
    <div>
      <img src={props.imageSource} style={{"position": "relative", "top": "20px", "right": "65px", "max-width": "70%", "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", "margin": "0px 0px 0px 10%"}} />
    </div>
    <div className="NewsArticle marginAuto-xs" style={{textAlign: "left", "border-style": "solid",padding: "1rem", borderColor: "black", borderWidth: "1px", width: "70%", height: '370px'}} onClick={() => props.link && window.open(props.link, '_blank')}>
    <br />
    <div style={{maxHeight: "285px", overflow: 'hidden'}}>
      <b style={{fontSize: "28px", letterSpacing: '0px', color: '#000'}}>{props.head}</b><br />
<p style={{fontSize: "15px", textAlign:"left", letterSpacing :'0px'}}>by {props.author} <span style={{fontSize: "15px", letterSpacing :'0px', float:"right"}}> {props.date}</span></p>
<br />

<div style={{fontSize: "18px", letterSpacing :'0px'}}> {props.byline}</div>
</div>
<div style={{textAlign: 'right'}}><img style={{"max-width": "10%", margin: '1rem', left: '50%'}} src={BlackBoxArrow}/></div>
    </div>
  </div>
);
const SpacerColumn = (props) => (
  <div>
    </div>
); 

const news = {
  title: 'News',
  sections: [{
    id: '2',
    component: 'NewsArticle',
    props: {
      head: 'The Jauary Cyber Bootcamp',
      byline: "We're so excited to be working with DFAT on the Cyber Bootcamp which was launched in November, and looking forward to building this cyber capacity-building venture with our Indo-Pacific neighbours!",
      author: 'DFAT',
      date: '29/01/20',
      imageSource: CyberBootcamp,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://dfat.gov.au/international-relations/themes/cyber-affairs/cyber-cooperation-program/Pages/cyber-bootcamp-project.aspx?fbclid=IwAR2mztupdFmWZC6kXPPvYKn57Oj9cXqDa9E9jzPw2qlmMa_KAUSAO1M2guE',
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
      link: 'https://www.orfonline.org/raisina-dialogue/programme/',
    }
  },{
    id: '4',
    component: 'NewsArticle',
    props: {
      head: 'To Singapore and Malaysia for Cyber Security',
      byline: "A visit to Singapore and Malaysia for our Program Manager Liz West didn't just include great conversations and delicious food, but attending some cyber-security ventures. Both Republic Polytechnic-RSA Joint Security Operations Centre and Sunway University's Cyber Security Intelligence Laboratory were fantastic to visit, and the Cyber Institute was proud to send over one of our own.",
      author: 'Liz West',
      date: '19/12/19',
      imageSource: SingaporeCyber,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://twitter.com/AnuCyber/status/1203838456499232769',
    }
  }]
};
const news2 = null;

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
  },{
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
};

const blogs2 = null;

const podcasts = {
  title: 'Podcasts',
  sections: [{
    id: '2',
    component: 'NewsArticle',
    props: {
      head: 'More details needed about potential changes to cyber powers',
      byline: "The Federal Government has been looking at whether the Australian Signals Directorate should have more of a role in fighting cybercrime across the country. It's a discussion that's been going on for more than a year now, but no decisions have been made. Home Affairs Minister Peter Dutton says he is to continue the conversation, and people in the cyber security sector want more details about what could change.",
      author: 'ABC AM',
      date: '18/06/19',
      imageSource: GovCyberPodcast,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.abc.net.au/radio/programs/am/more-details-needed-about-potential-changes-to-cyber-powers/11219358',
    }
  }, {
    id: '3',
    component: 'NewsArticle',
    props: {
      head: 'Data, Cyber, and the Social Context',
      byline: 'Is the growing collection and aggregation of data likely to empower the individual and strengthen democracy? Or is it more likely to benefit manipulative corporations and encourage authoritarian governance? How should society frame the problem of privacy and information control, and where does regulation give way to personal responsibility?',
      author: 'Nat. Security Podcast',
      date: '27/01/19',
      imageSource: DataPodcast,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.policyforum.net/national-security-podcast-data-cyber-and-the-social-contract/',
    }
  },{
    id: '4',
    component: 'NewsArticle',
    props: {
      head: 'Generic Heading 2',
      byline: 'Start of the article',
      author: 'Graham',
      date: '22/10/20',
      imageSource: './img/ai1.jpg',
      sizeName: 'col-md-3 col-xs-12'
    }
  }]
};

const podcasts2 = null;

const media = {
  title: 'News',
  sections: [{
    id: '2',
    component: 'NewsArticle',
    props: {
      head: 'Surviving in a world of sharper technological competition',
      byline: 'Technology is understood as something external, ‘done’ or given to Australia by others. There’s no real sense of initiation or ownership. We’ve allowed ourselves to think of Australia essentially as a spectator rather than a participant in technological innovation.',
      author: 'Prof. Lesley Seebeck',
      date: '22/01/20',
      imageSource: Globe,
      sizeName: 'col-md-3 col-xs-12',
      link: "https://www.aspistrategist.org.au/surviving-in-a-world-of-sharper-technological-competition/",
    }
  }, {
    id: '3',
    component: 'NewsArticle',
    props: {
      head: 'Cybersecurity: how are we doing?',
      byline: 'Asking ourselves whether we’re doing things right merely asks us to measure our progress down a prescribed path. Judgements about whether we’re doing the right things are harder to make. It’s entirely possible we’re not even on the right path, regardless of how far along it we’ve come. A word of warning: this is a fairly dense and difficult topic.',
      author: 'Prof. Lesley Seebeck',
      date: '11/12/19',
      imageSource: CyberHowDoing,
      sizeName: 'col-md-3 col-xs-12',
      link: "https://www.aspistrategist.org.au/cybersecurity-how-are-we-doing/"
    }
  },{
    id: '4',
    component: 'NewsArticle',
    props: {
      head: 'Repositioning Australia to face its future',
      byline: 'Good things come to those who are prepared to wait, invest, and appreciate the ‘adjacent possible’. Policymakers need to stop being drawn to the myth of the ‘quick fix’ and focus on long-term and sustained development of research and development as an ecosystem if they really want to solve those wicked problems.',
      author: 'Prof. Lesley Seebeck',
      date: '13/11/19',
      imageSource: FaceFuture,
      sizeName: 'col-md-3 col-xs-12',
      link: "https://www.policyforum.net/repositioning-australia-to-face-its-future/",
    }
  }]
};

const media2 = {
  title: 'Media',
  sections: [{
    id: '2',
    component: 'NewsArticle',
    props: {
      head: 'Cybersecurity: people are not the problem',
      byline: "A lot of thinking and commentary around cybersecurity put forward the idea that ‘people are the problem’. After all, most intrusions and attacks start with people being persuaded or misled into going onto disguised or infected sites, to handover details or otherwise compromise their own systems... If only people—users, clients, members of the community—didn’t do what people naturally do, we’d all have much more secure and efficient systems. That's muddled thinking.",
      author: 'Prof. Lesley Seebeck',
      date: '4/11/19',
      imageSource: PeopleNotProblem,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.aspistrategist.org.au/cybersecurity-people-are-not-the-problem/',
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
      link: 'https://www.homeaffairs.gov.au/reports-and-pubs/files/cyber-strategy-2020/submission-157.pdf',
    }
  },{
    id: '4',
    component: 'NewsArticle',
    props: {
      head: 'The new global technological divide',
      byline: 'For the first time since the Cold War, technology is re-emerging as a strategic, and not merely a political, instrument. The difference this time is that it’s thoroughly civilian rather than military technologies and information that act both as enablers and sources of vulnerability. And there are key differences in how different Western political cultures understand the strategic significance of technology.',
      author: 'Prof. Lesley Seebeck',
      date: '7/11/19',
      imageSource: TechDivide,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.aspistrategist.org.au/the-new-global-technological-divide/',
    }
  }]
};

const events = {
  title: 'Events',
  sections: [{
    id: '2',
    component: DateBox,
    props: {
      day : '20',
      month: 'Feb',
      title : 'RSA Conference 2020',
      date : '20/02/20',
      time: '9:00am',
      description: 'The Cyber Institute will be proud to see our CEO, Professor Lesley Seebeck, speak at the prestigious 2020 RSA Conference in San Francisco, United States, on the ripple effects of end-to-end encryption.',
      signupText: 'Click the link for more information about her role in the event:',
      link: 'https://www.rsaconference.com/experts/professor-lesley-seebeck',
    }
  }, {
    id: '3',
    component: DateBox,
    props: {
      day : '20',
      month: 'Jan',
      title : 'The Cyber Bootcamp',
      date : '20/01/20',
      time: '11:00am',
      description: "The Department of Foreign Affairs and Trade launched the Cyber Bootcamp Project in November 2019, of which programs are delivered by ANU’s Cyber Institute and National Security College. It aims to help participants in ASEAN and Pacific countries pursue a cyber-resilience vision. Each Cyber Bootcamp includes a two-week intensive program in Australia, where participants engage in interactive workshops, exercise scenarios, industry site visits, and dialogues with Australian government agencies. As part of the program participants will implement a project which responds to a cyber-challenge or opportunity relevant to their domestic roles that will contribute to a cyber-resilient Indo-Pacific.",
      signupText: 'Find out more at:',
      link: 'https://dfat.gov.au/international-relations/themes/cyber-affairs/cyber-cooperation-program/Pages/cyber-bootcamp-project.aspx',
    }
  }]
    };

const events2 = null;

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
};



class Section1 extends React.Component {
  
  get root() {
    return this.props.root;
  }
  
  get rSection() {
    return this.createElement(this.root);
  }
  
    createElement = (def) => {
    return React.createElement(
      stock[def.component], 
      def.props,
      ((def.props || {}).children || [])
        .map(c => this.createElement(c))
    );
  };
  
  render() {
    return (
     <div class={this.root.props.sizeName}>
     {this.rSection}
      </div>
    );
  }
}


class DynamicPage extends React.Component {
  
  get sections() {
    return this.props.page.sections;
  }
  
  get rSections() {
    return this.sections.map(
      s => <Section1 key={s.id} root={s} />
    );
  }
  
  render() {
    return (

          <>
          {this.rSections}
          </>
    );
  }
}
  
  
class News extends Component {
  
  constructor(...args) {
    super(...args);
    
    this.state = {
      news: news,
      news2: news2,
      podcasts: podcasts,
      media: media,
      // blogs: blogs,
      events: events,
      media2: media2

    };
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
      <div style={{fontFamily: 'Roboto, sans-serif'}}>
        <div class="News">
        <div class="News">
          <div class="container-fluid">
          <div class="row">
          <div class="col-md-offset-1 col-md-5"><h2 class="Black HeadingFontSize-md HeadingFontSize-xs" id="News" style={{color: 'rgb(82, 49, 120)', margin: '0px', position: 'relative', marginTop: '2rem'}}>News</h2></div>
          <div style={{width: '100%', position: 'relative', marginBottom: '2rem'}}>
          <div class="dottedLineHorizontal" style={{width: '85%', position: 'absolute', right: '-1rem'}}></div>
          </div>
          </div>
          </div>
          <div class="col-xs-13">
            <div class="row">
            <div class="col-xs-2"></div>
              <DynamicPage page={this.state.news} />
              <div class="col-xs-2"></div>
          </div>
          </div>
        </div>
        {news2 && <div
        style={{
          margin: 'auto',
          position: 'relative'
        }}
      >
          <SlideToggleContent isVisible={this.state.isVisible}>
          <br />
        <br />
          <div class="col-xs-13">
          <div class="row">
          <div class="col-xs-2"></div>
            <DynamicPage page={this.state.news2} />
          <div class="col-xs-2"></div>
          </div>
          </div>
      </SlideToggleContent>
      <div class="col-xs-12">
      <ViewMoreButton isVisible={this.state.isVisible} clickButton={this.clickButton.bind(this)} alignRight />
      </div>
      </div>
        }
      </div>

      <div class="Events">
        <div class="Events">
          <br />
          <br />
          <div class="container-fluid">
          <div class="row">
          <div class="col-md-offset-1 col-md-5"><h2 class="Black HeadingFontSize-md HeadingFontSize-xs" id="Events" style={{color: 'rgb(82, 49, 120)', margin: '0px', position: 'relative', marginTop: '2rem'}}>Events</h2></div>
          <div style={{width: '100%', position: 'relative', marginBottom: '2rem'}}>
          <div class="dottedLineHorizontal" style={{width: '85%', position: 'absolute', right: '-1rem'}}></div>
          </div>
          </div>
          </div>
          <div class= 'row'>
          <div class="col-xs-12">
            {
              this.state.events.sections.map(({component: EventComponent, props}) => (
                <div class='row'>
                  <div class="col-xs-2"></div>
                    <EventComponent {...props}/>
                    <div class="col-xs-2"></div>
                    </div>
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
        <div class="col-xs-13">
            {
              this.state.events.sections.map(({component: EventComponent, props}) => (
                <div class='row'>
                  <div class="col-xs-2"></div>
                    <EventComponent {...props} />
                    <div class="col-xs-2"></div>
                    </div>
              ))
            }
        </div>
      </SlideToggleContent>

      <ViewMoreButton isVisible={this.state.isVisibleEvent} clickButton={this.clickButtonEvent.bind(this)} alignRight />
          
      </div>
        }
      </div>
        <div class="Media">
        <div class="Media">
          <div class="container-fluid">
          <div class="row">
          <div class="col-md-offset-1 col-md-5"><h2 class="Black HeadingFontSize-md HeadingFontSize-xs" id="Courses" style={{color: 'rgb(82, 49, 120)', margin: '0px', position: 'relative', marginTop: '2rem'}}>Media</h2></div>
          <div style={{width: '100%', position: 'relative', marginBottom: '2rem'}}>
          <div class="dottedLineHorizontal" style={{width: '85%', position: 'absolute', right: '-1rem'}}></div>
          </div>
          </div>
          </div>
          <div class="row">
          <div class="col-xs-2"></div>
          <div class="col-xs-9" ><h2 style={{color:"#523178", fontSize: '40px', letterSpacing: '0.15px', marginLeft:"3%"}}>Articles</h2></div>
          </div>
          <div class="col-xs-13">
            <div class="row">
            <div class="col-xs-2"></div>
              <DynamicPage page={this.state.media} />
              <div class="col-xs-2"></div>
          </div>
          </div>
        </div>
        {
        media2 && <div
        style={{
          margin: 'auto',
          position: 'relative'
        }}
      >
          <SlideToggleContent isVisible={this.state.isVisibleMedia}>
          <br />
        <br />
          <div class="col-xs-13">
          <div class="row">
          <div class="col-xs-2"></div>
            <DynamicPage page={this.state.media2} />
          <div class="col-xs-2"></div>
          </div>
          </div>
      </SlideToggleContent>
      <div class="col-xs-12">
      <ViewMoreButton isVisible={this.state.isVisibleMedia} clickButton={this.clickButtonMedia.bind(this)} alignRight />
      </div>
      </div>
        }
      </div>
      {/* <div class="Blog">
        <div class="Blog">
        <div class="row">
          <div class="col-xs-2"></div>
          <div class="col-xs-9" >
            <br />
            <br />
            <h2 style={{color:"#523178", fontSize: '40px', letterSpacing: '0.15px', marginLeft:"3%"}}>Blog</h2></div>
          </div>
          <div class="col-xs-13">
            <div class="row">
            <div class="col-xs-2"></div>
              <DynamicPage page={this.state.blogs} />
              <div class="col-xs-2"></div>
          </div>
          </div>
        </div>
        {
        blogs2 && <div
        style={{
          margin: 'auto',
          position: 'relative'
        }}
      >
          <SlideToggleContent isVisible={this.state.isVisibleBlog}>
          <br />
        <br />
          <div class="col-xs-13">
          <div class="row">
          <div class="col-xs-2"></div>
            <DynamicPage page={this.state.news2} />
          <div class="col-xs-2"></div>
          </div>
          </div>
      </SlideToggleContent>
      <div class="col-xs-12">
      <ViewMoreButton isVisible={this.state.isVisibleBlog} clickButton={this.clickButtonBlog.bind(this)} alignRight />
      </div>
      </div>
        }
      </div> */}
      <div class="Podcasts">
        <div class="Podcasts">
        <div class="row">
          <div class="col-xs-2"></div>
          <div class="col-xs-9" ><h2 style={{color:"#523178", fontSize: '40px', letterSpacing: '0.15px', marginLeft:"3%", marginTop: '6rem'}}>Podcasts</h2></div>
          <div style={{width: "100%", position: 'relative', marginBottom: '2rem'}}>
            <div class="dottedLineHorizontal" style={{width: '85%', position: 'absolute', right: '-1rem'}}></div>
          </div>
          </div>
          <div class="col-xs-13">
            <div class="row">
            <div class="col-xs-2"></div>
              <DynamicPage page={this.state.podcasts} />
              <div class="col-xs-2"></div>
          </div>
          </div>
        </div>
        {
        podcasts2 && <div
        style={{
          margin: 'auto',
          position: 'relative'
        }}
      >
          <SlideToggleContent isVisible={this.state.isVisiblePodcast}>
          <br />
        <br />
          <div class="col-xs-13">
          <div class="row">
          <div class="col-xs-2"></div>
            <DynamicPage page={this.state.news2} />
          <div class="col-xs-2"></div>
          </div>
          </div>
      </SlideToggleContent>
      <div class="col-xs-12">
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
      /*className={`${isVisible ? 'col-xs-8 col-xs-offset-2 textAlignJustified' : 'col-xs-5 col-xs-offset-5 textAlignedRight'} fontWeight300`}*/
    >
      <SlideToggleContent isVisible={isVisible}>
          <div class="col-xs-13">
          <div class="row">
          <div class="col-xs-2"></div>
            <DynamicPage page={page} />
          <div class="col-xs-2"></div>
          </div>
          </div>
      </SlideToggleContent>

      <ViewMoreButton {...{ isVisible, clickButton }} alignRight />
    </div>
  )
}
