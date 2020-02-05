import React from 'react'

import Button from '@material-ui/core/Button'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

import brian from '../../img/professor_brian_schmidt.jpg'
import elanor from '../../img/professor_elanor_huntington.jpg'
import rory from '../../img/professor_rory_medcalf.jpg'
import marie from '../../img/marie_johnson.jpg'
import hamish from '../../img/hamish_hawthorn.jpg'
import deb from '../../img/deborah_anton.jpg'
import mick from '../../img/mick_ryan.jpg'

export default function BodyMenuItem () {
  return (
    <div
      style={{
        marginTop: '10rem'
      }}
      className='container-fluid'
    >
      <div className='row'>
        <div className='col-xs-3 col-xs-offset-2'>
          <div className='row' style={{ paddingBottom: '1rem' }}>
            <div className='col-xs-4' style={{ height: '170px' }}>
              <img
                src={brian} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className='col-xs-4' style={{ height: '170px' }}>
              <img
                src={elanor} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className='col-xs-4' style={{ height: '170px' }}>
              <img
                src={rory} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
          <div className='row' style={{ paddingBottom: '1rem' }}>
            <div className='col-xs-4' style={{ height: '170px' }}>
              <img
                src={marie} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className='col-xs-4' style={{ height: '170px' }}>
              <img
                src={hamish} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className='col-xs-4' style={{ height: '170px' }}>
              <img
                src={deb} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-4' style={{ height: '170px' }}>
              <img
                src={mick} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
        <div className='col-xs-offset-1' />
        <div className='col-xs-4'>
          <div
            style={{
              marginBottom: '1em',
              color: 'rgb(50, 50, 50)',
              letterSpacing: '.05em',
              fontSize: '.72rem'
            }}
            className='Medium'
          >
            02 Governance
          </div>
          <div
            className='largerHeading Bold' style={{
              paddingTop: '0.4em',
              borderTop: '1px solid currentColor',
              marginBottom: '2.1rem'
            }}
          >
            Advisory Board
          </div>
          <div className='Light row'>
            <div className='col-xs-9 Light' style={{ lineHeight: '1.87' }}>
            The ANU Cyber Institute is led by eight-members of the Advisory Board, who set the strategic direction of the Institute.
            </div>
          </div>
          <Button
            variant='outlined' style={{
              margin: '3rem 0',
              color: '#523178',
              borderColor: '#523178',
              textTransform: 'none',
              fontFamily: 'Helvetica Neue LT Std 65 Medium',
              fontSize: '14px'
            }}
          >
            See Board
            <ArrowRightIcon />
          </Button>
        </div>
        <div className='col-xs-2' />
      </div>
    </div>
  )
}
