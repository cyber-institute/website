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
import './news.css'

import { Route, Link as RouteLink, BrowserRouter as Router, Switch, useRouteMatch as match, useParams } from 'react-router-dom'


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
        <div className='datebox__date'>
          <span className='datebox__day'>{props.day}</span>
          <br />
          <span className='datebox__month'>{props.month}</span>
        </div>
      </div>
      <div className='col-md-9 col-xs-12 datebox__event'>
        <span className='datebox__title'><b>{props.title}</b></span>
        <p className='datebox__details'>{props.date} {props.time}</p>
        <p className='datebox__description'>{props.description}</p><br />
        <span className='datebox__signup'>{props.signupText} <a href={props.link} className='datebox__signup--link'>{props.link}</a></span>
      </div>
    </div>
  </div>
)

const NewsArticle = (props) => {
  return (
    <div className='news-article'>
      <div>
        <img src={props.imageSource} className='news-article__image'/>
      </div>
      <div className='NewsArticle marginAuto-xs' className='news-article__body'>
        <RouteLink to={`/news/${props.type}/${props.head}`}>
        <br />
        <div className='news-article__text'>
          <b className='news-article__title'>{props.head}</b><br />
          <p className='news-article__author'>by {props.author} <span className='news-article__author--date'> {props.date}</span></p>
          <br />
          <div className='news-article__byline'> {props.byline.substring(0, 200) + '...'}</div>
        </div>
        <div className='news-article__arrow'><img className='news-article__arrow--img' src={BlackBoxArrow} /></div>
        </RouteLink>
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
            <div className='col-xs-12 center-xs media__view-more' >
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
                  <h2 className='Black HeadingFontSize-md HeadingFontSize-xs section__heading' id='News' >News</h2>
                  <div
                    className='dottedLineHorizontal section__underline'/>
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
                <div className='col-md-offset-1 col-md-5'><h2 className='Black HeadingFontSize-md HeadingFontSize-xs section__heading' id='Events'>Events</h2>
                  <div className='dottedLineHorizontal section__underline'/>
                </div>
              </div>
              <div
                className='row events'>
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
              <div className="media_view-more">
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
                <div className='col-md-offset-1 col-md-5'><h2 className='Black HeadingFontSize-md HeadingFontSize-xs section__heading' id='Courses' >Articles</h2>
                  <div className='dottedLineHorizontal section__underline'/>
                </div>
              </div>
              <MediaItems items={articleItems} />
            </div>
          </div>
          <div id='Podcasts' className='Podcasts'>
            <div className='Podcasts'>
              <div className='row positionRelative'>
                <div className='col-md-offset-1 col-md-5'>
                  <h2 className='Black HeadingFontSize-md HeadingFontSize-xs section__heading'>Podcasts</h2>
                  <div
                    className='dottedLineHorizontal section__underline'/>
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
