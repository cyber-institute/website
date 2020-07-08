import React, { useState } from 'react'

import DynamicPage from '../common/DynamicPage'

import SecurityControls from './../../../img/LaptoplockRAND.jpg'
import Rethinking from './../../../img/realtimecyberattacks.PNG'
import Broken from './../../../img/menonboat.jpg.png'

import './Articles.css'

const ReadingList = {
  title: 'ReadingList',
  sections: [{
    id: '2',
    component: 'NewsArticle',
    props: {
      head: 'Security Controls for Computer Systems',
      byline: 'In October 1967 a Task Force was organized by the Advanced Research Projects Agency (now the Defense Advanced Research Projects Agency) to study and recommend appropriate computer security safeguards that would protect classified information in multi-access, resource-sharing computer systems. Nearly a decade later the report is still a valuable comprehensive discussion of security controls for resource-sharing computer systems. Ideas first expressed in this report and even occasional figures from it have gradually seeped into the technical literature, but it still contains material that has not been published elsewhere.',
      author: 'Willis H. Ware',
      date: '1979',
      imageSource: SecurityControls,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.rand.org/pubs/reports/R609-1.html'
    }
  }, {
    id: '3',
    component: 'NewsArticle',
    props: {
      head: 'Rethinking Encryption',
      byline: 'It is time for government authorities - including law enforcement - to embrace encryption because it is one of the few mechanisms that the United States and its allies can use to more effectively protect themselves from existential cybersecurity threats. ',
      author: 'Jim Baker',
      date: '22/10/2019',
      imageSource: Rethinking,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.lawfareblog.com/rethinking-encryption'
    }
  }, {
    id: '4',
    component: 'NewsArticle',
    props: {
      head: 'Everything Is Broken',
      byline: 'Computers, and computing, are broken. It’s hard to explain to regular people how much technology barely works, how much the infrastructure of our lives is held together by the IT equivalent of baling wire',
      author: 'Quinn Norton',
      date: '20/05/2014',
      imageSource: Broken,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://medium.com/message/everything-is-broken-81e5f33a24e1'
    }
  }]
}

export default () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div
      className='container-fluid list' >
      <div className='row'>
        <div className='col-md-offset-2'>
          <h2
            className='Medium list__heading' >
      Reading List
          </h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-2' />
        <DynamicPage page={ReadingList} />
        <div className='col-md-2' />
      </div>
      <div
        
      />
    </div>
  )
}
