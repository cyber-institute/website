import React from 'react'

import { Link } from 'react-scroll'

export default ({ banner, title, subTitle, headings }) =>
  <>
    <div style={{
      marginTop: '64px',
      position: 'relative',
      height: 'calc(100vh - 64px)'
    }}
    >
      <div style={{
        background: '0 0',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        zIndex: '0',
        height: '100%',
        clipPath: 'polygon(50% 100%, 100% 40%, 100% 0, 0 0, 0 40%)',
        backgroundColor: '#000'
      }}
      >
        <picture
          className='bannerImg'
          style={{
            height: '100%',
            position: 'relative',
            display: 'block',
            marginRight: 'auto',
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: '50% 0%',
            backgroundImage: `url(${banner})`,
            opacity: 0.3
          }}
        />
      </div>
      <div style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%'
      }}
      >
        <div
          className='BannerBottom-xs bottom50' style={{
            position: 'absolute',
            left: '0px',
            right: '0px',
            margin: 'auto',
            maxWidth: '800px',
            textAlign: 'center'
          }}
        >
          <h2
            className='Bold HeadingFontSize-md HeadingFontSize-xs'
            style={{
              margin: 0,
              paddingBottom: '1rem',
              color: '#fff'
            }}
          >
        {title}
          </h2>
          <h2
            className='Bold BannerSubtitleFontSize-md BannerSubtitleFontSize-xs'
            style={{
              margin: 0,
              color: '#fff'
            }}
          >
        {subTitle}
          </h2>
        </div>
      </div>
    </div>
    <div
      className='container-fluid' style={{
        position: 'relative'
      // height: '8rem'
      }}
    >
      <div className='row center-xs'>
        {
          headings.map((heading, index) =>
            <div className='col-xs-12' key={index}>
              <div style={{
                margin: 'auto',
                height: '2em',
                width: '0px',
                left: 'calc(50% - 1px)',
                borderLeft: '2px solid',
                color: '#523178'
              }}
              />
              <a
                className='Bold'
              >
                <Link
                  activeClass='active'
                  to={heading}
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  style={{
                    fontSize: '22px',
                    letterSpacing: '3.3px',
                    color: 'rgb(119, 119, 119)',
                    cursor: 'pointer'
                  }}
                >
                  {heading}
                </Link>
              </a>
            </div>
          )
        }
        <div style={{
          margin: 'auto',
          height: '2em',
          width: '0px',
          left: 'calc(50% - 1px)',
          borderLeft: '2px solid',
          color: '#523178'
        }}
        />
      </div>
    </div>
  </>
