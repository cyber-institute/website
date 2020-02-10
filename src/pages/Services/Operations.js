import React from 'react'

import PlaceHolderImage from './PlaceHolderImage'
import { Heading } from './index'

export default () =>
  <>
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
    <div
      className='container-fluid positionRelative' style={{
        marginTop: '2rem'
      }}
    >
      <div className='row'>
        <div
          className='col-md-offset-1'
        >
          <Heading>
          Research & Innovation
          </Heading>
          <div
            className='dottedLineHorizontal' style={{
              width: '85%',
              position: 'absolute',
              right: 0
            }}
          />
        </div>
      </div>
      <div
        className='row' style={{
          marginTop: '4rem'
        }}
      >
        <div className='col-md-5 col-md-offset-2'>
          <p>
          Those problems at the intersection of the social and technological, between citizens and governments, and where ideas and systems interact are rich with research questions that need an interdisciplinary approach.
            <br />
            <br />
We have three broad areas we wish to address; within each there are a range of smaller topics, often shorter-term, offering many opportunities for collaborations and partnerships.
            <br />
            <br />
We aim to build a new system of knowledge to describe and shape the nature of the cyber world.  That means thinking long-term while understanding practice, behaviours and consequence in the here and now. It also means establishing better articulations of the effect of, for example, intrinsically broken systems and the effects those may have on governance, commerce, national security or the strategic calculus of war.  Doing so may assist decision-makers in building more resilient systems and structures.
          </p>
        </div>
        <div className='col-md-5 margin4RemAuto-sm'>
          <PlaceHolderImage />
        </div>
      </div>
      <div
        className='row columnReverse-sm' style={{
          marginTop: '4rem'
        }}
      >
        <div className='col-md-offset-1 col-md-4 margin4RemAuto-sm'>
          <PlaceHolderImage />
        </div>
        <div className='col-md-6'>
          <p>
          We are interested in the future state of a world shaped by technology—and how that world exhibits resilience and management of the problems posed by cyber.  For example, what is the future of democracy and democratic norms in a world where the trust in core institutions no longer exist?  Or how do we assure the integrity of health systems in a world where individual genetic print may be bought and sold on the dark web?
            <br />
            <br />
We want to find ways to overcome or offset the current arms race of attack-defend-attack-defend in cyber security.  Such races typically are not won, but lost through exhaustion, loss of will or being overwhelmed.  Are there frameworks, different technologies or ways of doing that help individuals, organisations and nations withstand the dark side of digital technologies?
          </p>
        </div>
      </div>
      <div
        className='row' style={{
          marginTop: '4rem'
        }}
      >
        <div className='col-md-offset-2 col-md-9'>
          <p>
      These areas reflect our commitment to the long-term.  After all, it takes years to educate and train researchers.  But they also capture a wide range of more immediate concerns and constrained research problems.
            <br />
            <br />
We welcome researchers and collaborators who are committed to rethinking cyber and establishing the underpinning of new domain of knowledge.
          </p>
        </div>
      </div>
    </div>
  </>
