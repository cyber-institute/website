import React from 'react'
import {useParams} from 'react-router-dom'
import announcements from './items/news_items'
import articles from './items/articles_items'
import podcasts from './items/podcasts_items'

import './article.css'

export default () => {
    let {head} = useParams();
    let {type} = useParams();
    let search = []
    let target = null;
    if (type == "announcement") search = announcements;
    else if (type == "article") search = articles;
    else if (type == "podcast") search = podcasts;

    for(let i = 0; i < search.length; i ++) {
        if (search[i].props.head == head) target = search[i]
    }
    return (
        <div className="row article">
        
        
        <div className="col-md-offset-1 col-md-2">
            <img src={target.props.imageSource} className="article__image" />
        </div>
        <div className="col-md-6 article__text" >
          <b className="article__title">{target.props.head}</b><br />
          <p className='article__byline--author article__byline'>by {target.props.author} <span className='article__byline article__byline--date'> {target.props.date}</span></p>
          <br />
          <div style={{ fontSize: '18px', letterSpacing: '0px' }}> {target.props.byline}</div>
          <br/>
          <br/>
          <a href={target.props.link}
            className='article__byline article__byline--link ' target="_blank">Read more here</a>
        </div>
        </div>
    )
  }