import React, { useState } from 'react'

import { DynamicPage } from '../../News/news'
import SlideToggleContent from '../../ContentSlider/SlideToggleContent'
import ViewMoreButton from '../../ContentSlider/ViewMoreButton'

const news = {
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

export default () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div
      className='container-fluid' style={{
        margin: '4rem 0'
      }}
    >
      <div className='row'>
        <div className='col-md-offset-2'>
          <h2
            className='Medium' style={{
              fontSize: '40px',
              letterSpacing: '6px',
              color: 'rgb(82, 49, 120)',
              margin: '0 0 2rem'
            }}
          >
      Reading List
          </h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-2' />
        <DynamicPage page={news} />
        <div className='col-md-2' />
      </div>
      <SlideToggleContent isVisible={isVisible}>
        <br />
        <br />
        <div class='row'>
          <div class='col-md-2' />
          <DynamicPage page={news} />
          <div class='col-md-2' />
        </div>
      </SlideToggleContent>
      <div
        style={{
          margin: 'auto',
          position: 'relative'
        }}
      >
        <ViewMoreButton isVisible={isVisible} clickButton={() => setIsVisible(!isVisible)} alignRight />
      </div>
    </div>
  )
}
