import React from 'react'

import { Image, Heading } from './index'
import ReactPlayer from "react-player" 
import Slider from '../common/Slider'

const video = "dQw4w9WgXcQ";

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
      Privacy Scenarios
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
        className='row positionRelative marginTop4rem-md'
      >
        <div className='col-md-12'>
        
        </div>
        <div className='row'>
          <p>
          <div className= 'col-md-10 col-md-offset-1'>
            <h2 style={{ 'font-weight': '700', color: '#523178', 'font-family': 'Roboto, sans-serif' }}>
            Identifying Scams and Making Good Choices
            </h2>
            <p style={{lineHeight:"1.6"}}>
            Have you ever downloaded an app or signed up to a service only to regret it?
            </p>
            <p style={{lineHeight:"1.6", paddingBottom:"8px"}} >
            You quickly unsubscribe or delete the app, but wished you thought about it more before giving away some of your personal data?
            </p>
            <p style={{lineHeight:"1.6", }}>
            Well, we can help. The first step is Minecraft and Zombies.
            </p>
            <p style={{lineHeight:"1.6", paddingBottom:"16px"}}>
            You may be thinking: how are zombies going to help me understand privacy? Well, we aren’t 100% sure it will, but that’s  what we are running this pilot for.
            </p>
             <p style={{lineHeight:"1.6", paddingBottom:"8px"}}>
               Give it a go and see if it works.
             </p>
          </div>
          <div style={{padding:"15px"}}>
            <Slider name="Tech Stuff">
             <div className= 'col-md-10 col-md-offset-1' style={{paddingLeft:"2px"}}>
              <p style={{lineHeight:"1.6", paddingBottom:"8px"}}>As this is a pilot, we haven’t created a cross-platform solution. Unfortunately, this will only work with the Java version of Minecraft.</p>
              <p style={{lineHeight:"1.6", paddingBottom:"8px"}}>If you dont have the Java version of mincraft you can watch the run through below. </p>
             <p style={{lineHeight:"1.6", paddingBottom:"8px"}}> So start up your device… and type in the following: for “Server name”, add the Server name (anything you want), 
             and then for the “Server Address” use: <span style={{ 'font-weight': '700', color: '#523178' }}>minetraining.australiaeast.cloudapp.azure.com</span>. 
             You can provide feedback by typing “/comment” in-game, and then typing your comment.</p>
            </div>
             </Slider>
          </div>
           
             <div className= 'col-md-10 col-md-offset-1'>
               <p style={{lineHeight:"1.6", marginBottom:"20px"}}>
               If you don’t have Minecraft, or just couldn’t be bothered, watch the run-through video.               </p>
             </div>
             
            

          </p>
        </div>
        </div>
         <div className='row center-xs middle-xs'>
        <ReactPlayer
        url="https://www.youtube.com/watch?v=ug50zmP9I7s" width="60%"/> 
        </div>
      
    </div>
    <div
      className='container-fluid' style={{
        marginTop: '4rem'
      }}
    >
      <div className='row positionRelative' >
        <div
          className='col-md-offset-1 col-md-11'
        >
          <Heading>
          Separation can help          
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
          marginTop: '4rem',
          marginBottom: "2rem"

        }}
      >
        <div className='col-md-6 col-md-offset-1'>
          <p className='marginLeftNegative' style={{lineHeight:"1.6", height:"100%"}}>
          <p >If you regularly download apps or have a lot of services that you use, you could be sharing your 
          information with a lot of different people. Not all of them have your best interest at heart. </p>
          
            <br /> 
            <p>For some accounts, you will want to be you. For example, your bank or some social media accounts, 
            whilst for others, there is no reason you need to give away information to at all. 
            It’s just so convenient to use the same account.</p>
            <br />
            <p>If you want something to make it easier then we have created a plugin for Chrome that can make creating accounts with services anonymously much easier.
            Introducing SafeLy.</p>
          </p>
        </div>
        <div className='col-md-4 margin4RemAuto-sm'>
          <Image img={image2} style={{ 'box-shadow': '5px 5px 10px grey', width:"60%", marginLeft:"20%" }} />
        </div>
      </div>
      <div
        className='row columnReverse-sm' style={{
          marginTop: 'marginTop4rem-md'
        }}
      >
        <div className='col-md-offset-1 col-md-4 margin4RemAuto-sm'>
          <Image img={image3} style={{ 'box-shadow': '5px 5px 10px grey', marginTop:"25px" }} />
        </div>
        <div className='col-md-6'>
          <p className='marginRight-md'>
            <h1>How can we help companies be more secure.</h1>
          <p style={{lineHeight:"1.6"}}>
          It’s important that we don’t think about privacy as being the sole responsibility of an individual. Large amounts of personal data
          is most likely stored by companies and governments, and with data breaches happening everyday, these organisations need to think about privacy differently: to work with people to better protect their privacy. 
          The Cyber Institute is currently working on a training course to help executives make more informed decisions about privacy and security. 
          < br /> < br />
          <span style={{lineHeight:"1.6", 'font-weight': '700', color: '#523178' }}>Privacy by design</span> - This module will build upon the idea of privacy by design, giving executives a practical way of approaching privacy issues. 
            </p>
            <br />
            <br />
            <span style={{lineHeight:"1.6", 'font-weight': '700', color: '#523178' }}>We want to find ways to overcome or offset the current arms race of attack-defend-attack-defend in cyber security</span>
          </p>
        </div>
      </div>
    </div>
  </>
