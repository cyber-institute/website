import React from 'react'

import { Image, Heading } from './index'

export default ({ image1, image2, image3 }) =>
  <>
    <div
      className='container-fluid positionRelative' style={{
        marginTop: '2rem'
      }}
    >
      <div className='row positionRelative'>
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
              width: '91.666%',
              position: 'absolute',
              left: '-1rem'
            }}
          />
        </div>
      </div>
      <div
        className='row marginTop4rem-md'
      >
        <div className='col-md-5 margin4RemAuto-sm'>
          <Image img={image1} style={{ boxShadow: '5px 5px 10px grey' }} />
        </div>
        <div className='col-md-6'>
          <p>
            <span style={{ fontWeight: '700' }}>Hands-on education and real-life operations training</span> are integral to the Institute’s programs, and one of its key differentiators. The Cyber Edge will integrate the cybersecurity operations function of the ANU into the academic program. We consider that this represents a step-change in research, education and service provision.
            <br />
            <br />
Together with an online presence, the Institute’s Cyber Edge will provide the opportunity to test ideas, and communicate and visualise cyber threats, mitigations and activities.
            <br />
            <br />
            <span style={{ fontWeight: '700', color: '#523178' }}>Access to a real-time operational environment provides ideal training and research conditions</span>. The Cyber Edge will cover a range of bespoke and highly specialised technologies, operated by a diverse and ever-changing mix of staff, students, and partners on a distributed network within an academic institution.
            <br />
            <br />
Cyber Institute community members will join the best of the best, capable of contributing to and learning from a multi-dimensional space to define problems and seek solutions.
          </p>
        </div>
      </div>
    </div>
    <div
      className='container-fluid' style={{
        marginTop: '2rem'
      }}
    >
      <div className='row positionRelative'>
        <div
          className='col-md-offset-1 col-md-11'
        >
          <Heading>
          Research & Innovation
          </Heading>
          <div
            className='dottedLineHorizontal' style={{
              width: '91.666%',
              position: 'absolute',
              right: '-1rem'
            }}
          />
        </div>
      </div>
      <div
        className='row' style={{
          marginTop: '4rem'
        }}
      >
        <div className='col-md-5 col-md-offset-1'>
          <p className='marginLeftNegative'>
          Those problems at the intersection of the social and technological, between citizens and governments, and where ideas and systems interact are rich with research questions that need an interdisciplinary approach.
            <br />
            <br />
We have three broad areas we wish to address; within each there are a range of smaller topics, often shorter-term, offering many opportunities for collaborations and partnerships.
            <br />
            <br />
            <span style={{ fontWeight: '700', color: '#523178' }}>We aim to build a new system of knowledge to describe and shape the nature of the cyber world</span>. That means thinking long-term while understanding practice, behaviours and consequence in the here and now. It also means establishing better articulations of the effect of, for example, intrinsically broken systems and the effects those may have on governance, commerce, national security or the strategic calculus of war. Doing so may assist decision-makers in building more resilient systems and structures.
          </p>
        </div>
        <div className='col-md-5 margin4RemAuto-sm'>
          <Image img={image2} style={{ boxShadow: '5px 5px 10px grey' }} />
        </div>
      </div>
      <div
        className='row columnReverse-sm' style={{
          marginTop: 'marginTop4rem-md'
        }}
      >
        <div className='col-md-offset-1 col-md-4 margin4RemAuto-sm'>
          <Image img={image3} style={{ boxShadow: '5px 5px 10px grey' }} />
        </div>
        <div className='col-md-6'>
          <p className='marginRight-md'>
          We are interested in the future state of a world shaped by technology—and how that world exhibits <span style={{ fontWeight: '700', color: '#523178' }}>resilience and management of the problems posed by cyber</span>. For example, what is the future of democracy and democratic norms in a world where the trust in core institutions no longer exist? Or how do we assure the integrity of health systems in a world where individual genetic print may be bought and sold on the dark web?
            <br />
            <br />
            <span style={{ fontWeight: '700', color: '#523178' }}>We want to find ways to overcome or offset the current arms race of attack-defend-attack-defend in cyber security</span>. Such races typically are not won, but lost through exhaustion, loss of will or being overwhelmed. Are there frameworks, different technologies or ways of doing that help individuals, organisations and nations withstand the dark side of digital technologies?
          </p>
        </div>
      </div>
      <div
        className='row marginTop4rem-md'
      >
        <div className='col-md-offset-2 col-md-9'>
          <p className='marginLeftNegative-md'>
      These areas reflect our commitment to the long-term. After all, it takes years to educate and train researchers. But they also capture a wide range of more immediate concerns and constrained research problems.
            <br />
            <br />
We welcome researchers and collaborators who are committed to rethinking cyber and establishing the underpinning of new domain of knowledge.
          </p>
        </div>
      </div>
    </div>
  </>
