import React, { Component, useState } from 'react'

import SlideToggleContent from './../ContentSlider/SlideToggleContent'
import ViewMoreButton from './../ContentSlider/ViewMoreButton'
import Banner from './../pages/common/Banner'
import PodcastEp1 from './items/PodcastEp1'
import PodcastEp2 from './items/PodcastEp2'

import newsItems from './items/news_items'
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

const DateBox = (props) => (
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

class News extends Component {
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
                    events.sections.map(({ component: EventComponent, props }, index) => (
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
              <PodcastEp2/>
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
