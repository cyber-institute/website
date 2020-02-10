import React from 'react'

import PlaceHolderImage from './PlaceHolderImage'
import { Heading } from './index'

export default () =>
  <div
    className='container-fluid positionRelative' style={{
      marginTop: '2rem'
    }}
  >
    <div className='row'>
      <div
        className='col-md-11' style={{
          textAlign: 'right'
        }}
      >
        <Heading>
      Operations
        </Heading>
        <div
          className='dottedLineHorizontal' style={{
            width: '85%',
            position: 'absolute',
            left: 0
          }}
        />
      </div>
    </div>
    <div
      className='row' style={{
        marginTop: '4rem'
      }}
    >
      <div className='col-md-5 margin4RemAuto-sm'>
        <PlaceHolderImage />
      </div>
      <div className='col-md-6'>
        <p>
        Hands-on education and real-life operations training are integral to the Institute’s programs, and one of its key differentiators. The Cyber Edge will integrate the cybersecurity operations function of the ANU into the academic program. We consider that this represents a step-change in research, education and service provision.
          <br />
          <br />
Together with an online presence, the Institute’s Cyber Edge will provide the opportunity to test ideas, and communicate and visualise cyber threats, mitigations and activities.
          <br />
          <br />
Access to a real-time operational environment provides ideal training and research conditions. The Cyber Edge will cover a range of bespoke and highly specialised technologies, operated by a diverse and ever-changing mix of staff, students, and partners on a distributed network within an academic institution.
          <br />
          <br />
Cyber Institute community members will join the best of the best, capable of contributing to and learning from a multi-dimensional space to define problems and seek solutions.
        </p>
      </div>
    </div>
  </div>
