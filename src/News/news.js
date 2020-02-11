 import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//import Section from './ContentSlider/Section'
import SlideToggleContent from './../ContentSlider/SlideToggleContent'
import ViewMoreButton from './../ContentSlider/ViewMoreButton'


import 'flexboxgrid/dist/flexboxgrid.min.css'
import './../style.css'


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
    <div style={{float: "left", width: "20%", height: "200px", marginRight: "3rem", border: "1px solid rgba(0, 0, 0, .2)", textAlign: "center", "text-transform": "uppercase"}}>
      <span style={{fontSize: "84px", color: "#4D4D4D", letterSpacing: '0px'}}>{props.day}</span>
      <br />
      <span style={{fontSize: "52px", color: "#4D4D4D", letterSpacing: '0px'}}>{props.month}</span>
    </div>
    <span style={{fontSize: "35px", color: "#000", letterSpacing: '0px'}}><b>{props.title}</b></span>
      <p style={{fontSize: "15px"}}>{props.date} {props.time}</p>
      {props.description}<br />
      <span style={{fontSize: "18px", color: "#000", letterSpacing: '0px'}}>{props.signupText} <a href src={props.link}>{props.link}</a></span>
  </div>
);


const NewsArticle = (props) => (
  <div style={{textAlign: "left"}}>
    <div>
      <img src={props.imageSource} style={{"position": "relative", "top": "20px", "right": "65px", "max-width": "70%", "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", "margin": "0px 0px 0px 10%"}} />
    </div>
    <div className="NewsArticle" style={{textAlign: "left", "border-style": "solid", borderColor: "black", borderWidth: "1px", width: "70%"}}>
    <br />
      <b style={{fontSize: "28px", letterSpacing: '0px', color: '#000'}}>{props.head}</b><br />
<p style={{fontSize: "15px", textAlign:"left", letterSpacing :'0px'}}>by {props.author} <span style={{fontSize: "15px", letterSpacing :'0px', float:"right"}}> {props.date}</span></p>
<br />
<br />
<div style={{fontSize: "18px", letterSpacing :'0px'}}> {props.byline}</div>
<div style={{textAlign: 'right'}}><img style={{"max-width": "10%", margin: '1rem'}} src="./img/black box arrow.png"/></div>
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
      head: 'The January Cyber Bootcamp',
      byline: "We're so excited to be working with DFAT on the Cyber Bootcamp which was launched in November, and looking forward to building this cyber capacity-building venture with our Indo-Pacific neighbours!",
      author: 'Graham',
      date: '29/01/2020',
      imageSource: './img/cyber_bootcamp.jpg',
      sizeName: 'col-xs-3'
    }
  }, {
    id: '3',
    component: 'NewsArticle',
    props: {
      head: 'Digital Binaries: 5G and the new tech wars (Raisina Dialogue)',
      byline: 'The Raisina Dialogue is a multilateral conference where global leaders in policy, business, media and civil society are hosted in New Delhi, India, to discuss cooperation on a wide range of pertinent international policy matters. Our CEO, Professor Lesley Seebeck,  came back from sharing some insight through the "Digital Binaries: 5G and the new tech wars" panel on the final day of this conference.',
      author: 'Graham',
      date: '16/01/2020',
      imageSource: './img/raisina_dialogue.jpg',
      sizeName: 'col-xs-3'
    }
  },{
    id: '4',
    component: 'NewsArticle',
    props: {
      head: 'To Singapore and Malaysia for Cyber Security',
      byline: "A visit to Singapore and Malaysia for our Program Manager Liz West didn't just include great conversations and delicious food, but attending some cyber-security ventures. Both Republic Polytechnic-RSA Joint Security Operations Centre and Sunway University's Cyber Security Intelligence Laboratory were fantastic to visit, and the Cyber Institute was proud to send over one of our own.",
      author: 'Graham',
      date: '19/12/2019',
      imageSource: './img/singapore_cyber.jpg',
      sizeName: 'col-xs-3'
    }
  }]
};
const news2 = {
  title: 'News',
  sections: [{
    id: '2',
    component: 'NewsArticle',
    props: {
      head: 'Generic Heading 1',
      byline: 'Start of the article',
      author: 'Graham',
      date: '22/10/2020',
      imageSource: './img/ai1.jpg',
      sizeName: 'col-xs-3'
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
      sizeName: 'col-xs-3'
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
      sizeName: 'col-xs-3'
    }
  }]
};
const blogs = {
  title: 'Blogs',
  sections: [{
    id: '1',
    component: 'SpacerColumn',
    props: {
      sizeName: 'col-xs-3'
    }
  },{
    id: '2',
    component: 'NewsArticle',
    props: {
      head: 'Generic Heading 1',
      byline: 'Start of the article',
      author: 'Graham',
      date: '22/10/2020',
      imageSource: './img/ai1.jpg',
      sizeName: 'col-xs-2'
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
      sizeName: 'col-xs-2'
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
      sizeName: 'col-xs-2'
    }
  },{
    id: '5',
    component: 'SpacerColumn',
    props: {
      sizeName: 'col-xs-3'
    }
  }]
};
const podcasts = {
  title: 'Podcasts',
  sections: [{
    id: '1',
    component: 'SpacerColumn',
    props: {
      sizeName: 'col-xs-3'
    }
  },{
    id: '2',
    component: 'NewsArticle',
    props: {
      head: 'More details needed about potential changes to cyber powers',
      byline: "The Federal Government has been looking at whether the Australian Signals Directorate should have more of a role in fighting cybercrime across the country. It's a discussion that's been going on for more than a year now, but no decisions have been made. Home Affairs Minister Peter Dutton says he is to continue the conversation, and people in the cyber security sector want more details about what could change.",
      author: 'ABC AM',
      date: '18/06/2019',
      imageSource: './img/gov_cyber_podcast.jpg',
      sizeName: 'col-xs-2'
    }
  }, {
    id: '3',
    component: 'NewsArticle',
    props: {
      head: 'Data, cyber, and the social context',
      byline: 'Is the growing collection and aggregation of data likely to empower the individual and strengthen democracy? Or is it more likely to benefit manipulative corporations and encourage authoritarian governance? How should society frame the problem of privacy and information control, and where does regulation give way to personal responsibility?',
      author: 'National Security Podcast',
      date: '27/01/2019',
      imageSource: './img/data_podcast.jpg',
      sizeName: 'col-xs-2'
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
      sizeName: 'col-xs-2'
    }
  },{
    id: '5',
    component: 'SpacerColumn',
    props: {
      sizeName: 'col-xs-3'
    }
  }]
};
const media = {
  title: 'News',
  sections: [{
    id: '1',
    component: 'SpacerColumn',
    props: {
      sizeName: 'col-xs-3'
    }
  },{
    id: '2',
    component: 'NewsArticle',
    props: {
      head: 'Generic Heading 1',
      byline: 'Start of the article',
      author: 'Graham',
      date: '22/10/2020',
      imageSource: './img/ai1.jpg',
      sizeName: 'col-xs-2'
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
      sizeName: 'col-xs-2'
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
      sizeName: 'col-xs-2'
    }
  },{
    id: '5',
    component: 'SpacerColumn',
    props: {
      sizeName: 'col-xs-3'
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
      date : '20/02/2020',
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
      date : '20/01/2020',
      time: '11:00am',
      description: "The Department of Foreign Affairs and Trade launched the Cyber Bootcamp Project in November 2019, of which programs are delivered by ANU’s Cyber Institute and National Security College. It aims to help participants in ASEAN and Pacific countries pursue a cyber-resilience vision. Each Cyber Bootcamp includes a two-week intensive program in Australia, where participants engage in interactive workshops, exercise scenarios, industry site visits, and dialogues with Australian government agencies. As part of the program participants will implement a project which responds to a cyber-challenge or opportunity relevant to their domestic roles that will contribute to a cyber-resilient Indo-Pacific.",
      signupText: 'Find out more at:',
      link: 'https://dfat.gov.au/international-relations/themes/cyber-affairs/cyber-cooperation-program/Pages/cyber-bootcamp-project.aspx',
    }
  }]
    };


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
      blogs: blogs,
      events: events

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
      <div style={{font:"arial"}}>
        <div class="News">
        <div class="News">
          <div class="row">
          <div class="col-xs-2"></div>
          <div class="col-xs-9" ><h1 style={{color:"#523178", fontSize: '60px', letterSpacing: '0.15px'}}>News</h1>
            <p style={{borderBottom:"3px dashed darkgrey", marginLeft:"5%"}} />
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
        <div
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
      </div>

      <div class="Events">
        <div class="Events">
          <br />
          <br />
          <div class="row">
          <div class="col-xs-2"></div><div class="col-xs-9" ><h1 style={{color:"#523178", fontSize: '60px', letterSpacing: '0.15px'}}>Events</h1>
            <p style={{borderBottom:"3px dashed darkgrey", marginLeft:"5%"}} />
            </div>
          </div>
          <div class="col-xs-13">
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
      </div>
        <div class="Media">
        <div class="Media">
          <div class="row">
          <div class="col-xs-2"></div>
          <div class="col-xs-9" >
          <br />
          <br />
            <h1 style={{color:"#523178", fontSize: '60px', letterSpacing: '0.15px'}}>Media</h1>
            <p style={{borderBottom:"3px dashed darkgrey", marginLeft:"5%"}} />
            </div>
          </div>
          <div class="row">
          <div class="col-xs-2"></div>
          <div class="col-xs-9" ><h2 style={{color:"#523178", fontSize: '40px', letterSpacing: '0.15px', marginLeft:"3%"}}>Articles</h2></div>
          </div>
          <div class="col-xs-13">
            <div class="row">
            <div class="col-xs-2"></div>
              <DynamicPage page={this.state.news} />
              <div class="col-xs-2"></div>
          </div>
          </div>
        </div>
        <div
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
            <DynamicPage page={this.state.news2} />
          <div class="col-xs-2"></div>
          </div>
          </div>
      </SlideToggleContent>
      <div class="col-xs-12">
      <ViewMoreButton isVisible={this.state.isVisibleMedia} clickButton={this.clickButtonMedia.bind(this)} alignRight />
      </div>
      </div>
      </div>
      <div class="Blog">
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
        <div
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
      </div>
      <div class="Podcasts">
        <div class="Podcasts">
        <div class="row">
          <div class="col-xs-2"></div>
          <div class="col-xs-9" >
            <br />
            <br />
            <h2 style={{color:"#523178", fontSize: '40px', letterSpacing: '0.15px', marginLeft:"3%"}}>Podcasts</h2></div>
          </div>
          <div class="col-xs-13">
            <div class="row">
            <div class="col-xs-2"></div>
              <DynamicPage page={this.state.podcasts} />
              <div class="col-xs-2"></div>
          </div>
          </div>
        </div>
        <div
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
      </div>
      </div>
      </>
    )
  }
}
export default News


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

