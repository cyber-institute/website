import React from 'react'
import ReactDOM from 'react-dom'
import {useParams} from 'react-router-dom'
import announcements from './items/news_items'
import articles from './items/articles_items'
import podcasts from './items/podcasts_items'



export default () => {
    let {head} = useParams();
    let {type} = useParams();
    let search = []
    let target = null;
    if (type == "announcement") search = announcements;
    else if (type == "article") search = articles;
    else if (type == "podcast") serach = podcasts;

    for(let i = 0; i < search.length; i ++) {
        if (search[i].props.head == head) target = search[i]
    }
    return (
        <div className="row"style={{marginTop: '200px',
                                    marginBottom: '200px'}}>
        
        
        <div className="col-md-offset-1 col-md-2">
            <img src={target.props.imageSource} style={{ position: 'relative', top: '20px', right: '65px', 'maxWidth': '70%', 'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', margin: '0px 0px 0px 10%' }} />
        </div>
        <div className="col-md-6" style={{ maxHeight: '285px', overflow: 'hidden' }}>
          <b style={{ fontSize: '28px', letterSpacing: '0px', color: '#000' }}>{target.props.head}</b><br />
          <p style={{ fontSize: '18px', textAlign: 'left', letterSpacing: '0px', bottom: '0', 'margin-top': '0.5rem' }}>by {target.props.author} <span style={{ fontSize: '18px', letterSpacing: '0px', float: 'right' }}> {target.props.date}</span></p>
          <br />
          <div style={{ fontSize: '18px', letterSpacing: '0px' }}> {target.props.byline}</div>
          <br/>
          <br/>
          <a href={target.props.link}
            style={{fontSize:'18px',
                    color: '#523178',
                    textDecoration: 'underline'}} target="_blank">Read more here</a>
        </div>
        </div>
    )
  }