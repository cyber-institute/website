import React from 'react'

import { Link } from 'react-scroll'

import './Banner.css'

export default ({ banner, title, subTitle, headings }) =>
  <>
    <div className='banner'>
      <div className='banner__shape'>
        <picture
          className='bannerImg banner__img'
          style={{
            backgroundImage: `url(${banner})`,
          }}
        />
      </div>
      <div className='banner__container--top'>
        <div
          className='BannerBottom-xs bottom50 banner__text'>
          <h2
            className='Black HeadingFontSize-md HeadingFontSize-xs banner__title banner__title--head'>
            {title}
          </h2>
          <h2
            className='Bold BannerSubtitleFontSize-md BannerSubtitleFontSize-xs banner__title'>
            {subTitle}
          </h2>
        </div>
      </div>
    </div>
    <div
      className='container-fluid' style={{
        position: 'relative'
      }}
    >
      <div className='row center-xs'>
        {
          headings && headings.map((heading, index) =>
            <div className='col-xs-12' key={index}>
              <div className='headings' style={{
                margin: `${index !== 0 ? '0.5rem auto' : '0 auto 0.5rem'}`,
              }}
              />
              <span
                className='Bold'
              >
                <Link
                  className='pageMenuLink'
                  activeClass='active'
                  to={heading}
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  style={{
                    fontSize: '22px',
                    letterSpacing: '3.3px',
                    cursor: 'pointer'
                  }}
                >
                  {heading}
                </Link>
              </span>
            </div>
          )
        }
        <div className='headings__bottom'/>
      </div>
    </div>
  </>
