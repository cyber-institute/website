import React from 'react'

import { DynamicPage } from '../../News/news'

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
  }, {
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
}

export default () =>
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
      <div className='col-xs-2' />
      <DynamicPage page={news} />
      <div className='col-xs-2' />
    </div>
  </div>
