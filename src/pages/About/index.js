import React from 'react'

import topBanner from './topBanner.jpg'
import bottomBanner from './bottomBanner.jpg'
import anu from './anu.jpg'

export default () =>
  <div style={{
    marginTop: '64px'
  }}
  >
    {/* <div style={{
      backgroundImage: `url(${topBanner})`
    }}
    /> */}
    <img
      src={topBanner} style={{
        width: '100%'
      }}
    />
    <img
      src={bottomBanner} style={{
        width: '100%',
        clipPath: 'polygon(50% 100%, 0 0, 100% 0)'
      }}
    />
    <div style={{
      position: 'relative',
      height: '8rem'
    }}
    >
      <div style={{
        margin: 'auto',
        position: 'absolute',
        height: '100%',
        width: '0px',
        left: 'calc(50% - 1px)',
        borderLeft: '2px solid',
        color: '#523178'
      }}
      />
    </div>
    <div className='container-fluid'>
      <div
        style={{
          position: 'relative',
          marginTop: '4rem'
        }}
        className='row'
      >
        <div
          className='col-xs-offset-1 col-xs-4'
        >
          <img
            src={anu} style={{
              width: '100%'
            }}
          />
          <span
            style={{
              position: 'absolute',
              top: '3%',
              left: '29%',
              fontSize: '40px',
              maxWidth: '50%'
            }}
          >
            As a strategic initiative of the Australian National University,
          </span>
        </div>
        <div
          className='col-xs-offset-1 col-xs-4' style={{
            position: 'relative'
          }}
        >
          <p style={{
            position: 'absolute',
            bottom: '0',
            fontSize: '20px'
          }}
          >
            the Cyber Institute brings a new approach to the challenges presented by cyber and cyber security to people, communities, industries and governments.
          </p>
        </div>
      </div>
      <div
        className='row' style={{
          marginTop: '8rem'
        }}
      >
        <div className='col-xs-offset-2 col-xs-5'>
          <p style={{
            fontSize: '20px'
          }}
          >
            We’re focused on the problems at the intersection of the social and technological, between citizens and governments, and where ideas and systems interact.  We aim to build a new system of knowledge to describe and shape the nature of the cyber world.  That means thinking long-term while understanding practice, behaviours and consequence in the here and now.
          </p>
        </div>
      </div>
      <div
        className='row' style={{
          marginTop: '8rem'
        }}
      >
        <div className='col-xs-offset-5 col-xs-5'>
          <p style={{
            fontSize: '20px'
          }}
          >
            We’re focused on the problems at the intersection of the social and technological, between citizens and governments, and where ideas and systems interact.  We aim to build a new system of knowledge to describe and shape the nature of the cyber world.  That means thinking long-term while understanding practice, behaviours and consequence in the here and now.
          </p>
        </div>
      </div>
      <div
        className='row' style={{
          marginTop: '8rem'
        }}
      >
        <div className='col-xs-offset-2 col-xs-5'>
          <p style={{
            fontSize: '20px'
          }}
          >
            People are core to what we do.  Just as we consider that addressing the challenges of cyber needs a new way of thinking, we also are building a new way of learning how to address those challenges, and helping people develop their own capability in this area.  Our new education program offers its participants a new, responsive university experience—one that will equip them to shape a place for themselves, their organisation and their communities in the dynamic, unpredictable environment of the 21st century.
          </p>
        </div>
      </div>
    </div>
  </div>
