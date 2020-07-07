import React from 'react'

import Banner from '../common/Banner'

import banner from './bannerabout.jpg'
import anu from './anu.png'
import people from './about_people.jpg'
import traffic from './about_lines.jpg'
import aus from './about_australia.jpg'

import './about.css'

const headings = [
]

export default () =>
  <>
    <Banner {...{ banner, headings }} title='About us' subTitle='Transforming cyber for the betterment of humanity' />
    <div className='container-fluid' className='about'>
      <div className='row center-xs middle-xs about__block'>
        <div className='col-md-4 col-xs-11'>
          <img
            src={anu} className='width100 about__img'/>
          <div className='about__container'>
            <div className='dottedLineHorizontal about__hLine'/>
            <div className='dottedLineHorizontal about__hLine about__hLine--top' />
            <div className='dottedLineVertical about__vLine' />
            <div className='dottedLineVertical about__vLine about__vLine--left'/>
          </div>
        </div>
        <div
          className='col-md-4 col-xs-11 about__block about__block--text' >
          <p className='block__text--purple'>
            As a strategic initiative of the Australian National University,
          </p>
          <p className='block__text--body'>
            the Cyber Institute brings a new approach to the challenges presented by cyber and cyber security to people, communities, industries and governments.
          </p>
        </div>
      </div>
      <div className='about__block about__block--text'>
        <div
          className='row' className='block__top'>
          <div className='block__text'/>
          <div className='col-md-offset-2 col-md-5'>
            <p>
            We’re focused on the problems at the intersection of the social and technological, between citizens and governments, and where <span style={{color:'#523178',fontWeight:'700'}}>ideas and systems interact</span>.  We aim to build a new system of knowledge to describe and shape the nature of the cyber world.  That means thinking long-term while understanding practice, behaviours and consequence in the here and now.
            </p>
          </div>
        </div>
      </div>
      <div className='row humanity__wrapper'>
        <div className='humanity__container'>
          <h2
            className='Bold humanity__text'>
            humanity
          </h2>
        </div>
        <div className='col-md-offset-5 col-md-5'>
          <p>
            Cyber touches every facet of everyday life in the digital world.  It shapes world events and the future of our society and economy.  And so, it’s important that we partner with decision-makers, researchers and practitioners in industry, government and the broader community, and we build a broader awareness and discussion of the issues at hand.
          </p>
        </div>
      </div>
      <div className='about__block about__block--text'>
        <div className='about__line'/>
      </div>
      <div className='row humanity__wrapper'>
        <div className='col-md-offset-2 col-md-4'>
          <p>
           <span className='about__text--purple about__text--emphasis'>People</span><span className='about__text--emphasis'> are core to what we do</span>.  Just as we consider that addressing the challenges of cyber needs a new way of thinking, we also are building a new way of learning how to address those challenges, and helping people develop their own capability in this area.  Our new education program offers its participants a new, responsive university experience—one that will equip them to shape a place for themselves, their organisation and their communities in the dynamic, unpredictable environment of the 21st century.
          </p>
        </div>
        <div className='col-md-5 col-md-offset-1 marginTop2rem-xs about__block about__block--text'>
          <img src={people} className='width100' style={{boxShadow: '5px 5px 10px grey'}}/>
          <div
            className='dottedLineHorizontal about__line--dotted' />
        </div>
      </div>
      <div
        className='row' className='about__block about__block--text humanity__wrapper'>
        <div className='col-md-offset-2 col-md-8'>
          <div className='line__solid line__solid--left'/>
          <div className='line__solid line__solid--right'/>
          <img src={traffic} className='width100' style={{boxShadow: '5px 5px 10px grey'}} />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-offset-2 col-md-8'>
          <p className='centerAlign-lg block__container'>
            Cyber is fast moving, with real-time practical application.  So, we aim to offer a first-of-its-kind integration with a <span style={{color:'#523178', fontWeight: '700'}}>real-time security operations centre</span>. Known as the Cyber Edge, it will be the nexus of research and learning, partnerships and community, in a physical and online space.  That, and our innovation program, starting with AI Edge, will generate interdisciplinary research, development and application, that in turn will drive new ideas and insights.
          </p>
        </div>
      </div>
      <div
        className='row humanity__wrapper'>
        <div className='col-md-6'>
          <img src={aus} className='width100 about__img' />
        </div>
        <div className='col-md-5 about__line--bent'>
          <div
            className='dottedLineHorizontal about__line--h' />
          <div
            className='dottedLineVertical about__line--v'/>
        </div>
      </div>
      <div className='row'>
        <div
          className='col-md-offset-5 col-md-5 marginTop2rem-xs marginTop4rem-md'
        >
          <p>
            As part of the Australian National University—a resource of national significance helping to strengthen Australian democracy—we are committed to informing the national debate, building national capability, supporting Australia’s regional and geo-strategic position, and bettering the place of humanity in this technologically-shaped world.
          </p>
        </div>
      </div>
    </div>
  </>
