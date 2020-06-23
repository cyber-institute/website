import React, { Component, useState } from 'react'

import SlideToggleContent from './../ContentSlider/SlideToggleContent'
import ViewMoreButton from './../ContentSlider/ViewMoreButton'
import Banner from './../pages/common/Banner'
import PodcastEp1 from './PodcastEp1'

import newsItems from './items/news_items'
import blogItems from './items/blogs_items'
import podcastItems from './items/podcasts_items'
import articleItems from './items/articles_items'
import eventItems from './items/events_items'

import './../style.css'

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
              <PodcastEp1 />
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
