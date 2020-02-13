import React from 'react'

import Banner from '../common/Banner'

import topBanner from './topBanner.jpg'
import bottomBanner from './bottomBanner.jpg'
import anu from './anu.png'
import people from './Moving People.jpg'
import traffic from './Traffic Long Exposure.jpg'
import aus from './australia-satellite-imagery-map.jpg'

export default () =>
  <>
    <Banner {...{ topBanner, bottomBanner }} />
    <div className='container-fluid' style={{'font-family':'Roboto, sans-serif'}}>
      <div
        style={{
          position: 'relative',
          marginTop: '4rem'
        }}
        className='row'
      >
        <div
          className='col-md-offset-1 col-md-4'
        >
          <img
            src={anu} className='width100'
          />
          <span
            style={{
              position: 'absolute',
              top: '3%',
              left: '29%',
              fontSize: '40px',
              maxWidth: '50%',
              'font-family': 'Roboto, sans-serif',
              'font-weight': '900',                
              color: '#523178'
            }}
          >
            As a strategic initiative of the Australian National University,
          </span>
          <div style={{
            position: 'relative',
            left: '-4rem',
            top: 'calc(-100% + 4rem)',
            width: '100%',
            height: '100%',
            zIndex: '-1'
          }}
          >
            <div
              className='dottedLineHorizontal' style={{
                position: 'absolute',
                width: '100%'
              }}
            />
            <div
              className='dottedLineHorizontal' style={{
                position: 'absolute',
                top: '100%',
                width: '100%'
              }}
            />
            <div
              className='dottedLineVertical' style={{
                position: 'absolute',
                height: '100%'
              }}
            />
            <div
              className='dottedLineVertical' style={{
                position: 'absolute',
                left: '100%',
                height: '100%'
              }}
            />
          </div>
        </div>
        <div
          className='col-md-offset-1 col-md-4' style={{
            position: 'relative'
          }}
        >
          <p style={{
            position: 'absolute',
            bottom: '0'
          }}
          >
            the Cyber Institute brings a new approach to the challenges presented by cyber and cyber security to people, communities, industries and governments.
          </p>
        </div>
      </div>
      <div style={{
        position: 'relative'
      }}
      >
        <div
          className='row' style={{
            marginTop: '8rem',
            paddingTop: '4rem'
          }}
        >
          <div style={{
            position: 'absolute',
            left: '40%',
            width: 'calc(60% - 2px + 2rem)',
            top: '0',
            border: '1px solid'
          }}
          />
          <div className='col-md-offset-2 col-md-5'>
            <p>
            We’re focused on the problems at the intersection of the social and technological, between citizens and governments, and where <span style={{color:'#523178','font-weight':'700'}}>ideas and systems interact</span>.  We aim to build a new system of knowledge to describe and shape the nature of the cyber world.  That means thinking long-term while understanding practice, behaviours and consequence in the here and now.
            </p>
          </div>
        </div>
      </div>
      <div
        className='row' style={{
          marginTop: '12rem'
        }}
      >
        <div style={{
          width: '100%',
          position: 'relative'
        }}
        >
          <h2
            className='Bold' style={{
              position: 'absolute',
              right: '-1rem',
              top: '-15rem',
              fontSize: '250px',
              margin: '0',
              opacity: '5%'
            }}
          >
            humanity
          </h2>
        </div>
        <div className='col-md-offset-5 col-md-5'>
          <p>
            Cyber touches every facet of everyday life in the digital world.  It shapes world events and the future of our society and economy.  And so, it’s important that we partner with decision-makers, researchers and practitioners in industry, government and the broader community, and we build a broader awareness and discussion of the issues at hand.
          </p>
        </div>
      </div>
      <div style={{
        position: 'relative'
      }}
      >
        <div style={{
          marginTop: '4rem',
          position: 'absolute',
          left: '-2rem',
          width: '25%',
          border: '1px solid'
        }}
        />
      </div>
      <div
        className='row' style={{
          marginTop: '12rem'
        }}
      >
        <div className='col-md-offset-2 col-md-4'>
          <p>
            People are core to what we do.  Just as we consider that addressing the challenges of cyber needs a new way of thinking, we also are building a new way of learning how to address those challenges, and helping people develop their own capability in this area.  Our new education program offers its participants a new, responsive university experience—one that will equip them to shape a place for themselves, their organisation and their communities in the dynamic, unpredictable environment of the 21st century.
          </p>
        </div>
        <div
          className='col-md-5 col-md-offset-1 marginTop2rem-xs' style={{
            position: 'relative'
          }}
        >
          <img src={people} className='width100' />
          <div
            className='dottedLineHorizontal' style={{
              position: 'absolute',
              width: '100%',
              bottom: '10%',
              zIndex: '-1',
              left: '-50%'
            }}
          />
        </div>
      </div>
      <div
        className='row' style={{
          marginTop: '12rem',
          position: 'relative'
        }}
      >
        <div className='col-md-offset-2 col-md-8'>
          <div style={{
            position: 'absolute',
            width: '50%',
            top: '5%',
            left: 'calc(0% - 1rem)',
            border: '1px solid',
            color: 'rgb(82, 49, 120)',
            zIndex: '-1'
          }}
          />
          <div style={{
            position: 'absolute',
            width: '50%',
            bottom: '5%',
            right: 'calc(0% - 1rem)',
            border: '1px solid',
            color: 'rgb(82, 49, 120)',
            zIndex: '-1'
          }}
          />
          <img src={traffic} className='width100' />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-offset-2 col-md-8'>
          <p
            className='centerAlign-lg' style={{
              marginTop: '2rem'
            }}
          >
            Cyber is fast moving, with real-time practical application.  So, we aim to offer a first-of-its-kind integration with a real-time security operations centre. Known as the Cyber Edge, it will be the nexus of research and learning, partnerships and community, in a physical and online space.  That, and our innovation program, starting with AI Edge, will generate interdisciplinary research, development and application, that in turn will drive new ideas and insights.
          </p>
        </div>
      </div>
      <div
        className='row' style={{
          marginTop: '12rem'
        }}
      >
        <div className='col-md-6'>
          <img src={aus} className='width100' />
        </div>
        <div
          className='col-md-5' style={{
            position: 'relative',
            right: '8.333%',
            zIndex: '-1'
          }}
        >
          <div
            className='dottedLineHorizontal' style={{
              position: 'absolute',
              top: '50%',
              width: '50%'
            }}
          />
          <div
            className='dottedLineVertical' style={{
              position: 'absolute',
              top: '50%',
              left: 'calc(50% + 1rem)',
              height: 'calc(50% + 3rem)'
            }}
          />
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
