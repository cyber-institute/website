import React from 'react'

import './style.css'

import { Image, Heading } from './index'
import ReactPlayer from "react-player" 
import Slider from '../common/Slider'

const video = "RmWC30KSo9Q"; 

export default ({ image1, image2, image3 }) =>
  <>
    <div
      className='container-fluid positionRelative involved'>
        <div
          className='col-md-11 involved__layer'>
          <Heading>
      Privacy Scenarios
          </Heading>
          <div
            className='dottedLineHorizontal privacy__line privacy__line--left' />
        </div>
      </div>
      <div
      className='container-fluid doing' >
      <div
        className='positionRelative'
      >
        <div className='row'>
          <div className= 'col-md-10 col-md-offset-1'>
            <h2 className='info__heading'>
            Identifying Scams and Making Good Choices
            </h2>
            <p className='involved__text'>
            Have you ever downloaded an app or signed up to a service only to regret it?
            </p>
            <p className='involved__text involved__text--padded16px' >
            You quickly unsubscribe or delete the app, but wished you thought about it more before giving away some of your personal data?
            </p>
            <p className='involved__text'>
            Well, we can help. The first step is Minecraft and Zombies.
            </p>
            <p className='involved__text involved__text--padded16px'>
            You may be thinking: how are zombies going to help me understand privacy? Well, we aren’t 100 per cent sure it will, but that’s why we are running this pilot.
            </p>
             <p className='involved__text involved__text--padded8px'>
               Give it a go and see if it works.
             </p>
          </div>
          <div className='col-md-1'/>
          </div>
          <div className="row" style={{
            padding: '1rem 0'
          }}>
            <Slider name="Tech Stuff">
            <div className= 'col-md-10 col-md-offset-1'>
            <div className="techStuff">
              <p className='involved__text involved__text--padded8px'>As this is a pilot, we haven’t created a cross-platform solution. Unfortunately, this will only work with the Java version of Minecraft.</p>
              <p className='involved__text involved__text--padded8px'>If you don't have the Java version of Minecraft you can watch the run through below. </p>
             <p className='involved__text involved__text--padded8px'> So start up your device… and type in the following: for “Server name”, add the Server name (anything you want), 
             and then for the “Server Address” use: <span className='info__heading info__heading--anywhere'>minetraining.australiaeast.cloudapp.azure.com</span>. 
             You can provide feedback by typing “/comment” in-game, and then typing your comment.</p>
             </div>
             </div>
             </Slider>
             </div>
             <div className='row'>
             <div className= 'col-md-10 col-md-offset-1'>
               <p className='involved__text involved__text--padded16px'>
               If you don’t have Minecraft, or just couldn’t be bothered, watch our entirely 'NoT ScRiPtEd' run-through video.               </p>
             </div>
             </div>
             
            


        <div className="youTube video">
         <div className='row center-xs middle-xs'>
        <ReactPlayer
        url="https://www.youtube.com/watch?v=RmWC30KSo9Q" controls={true}/>  
        </div>
        </div>
      </div>
    </div>
    <div
      className='container-fluid doing' >
      <div className='row positionRelative' >
        <div
          className='col-md-offset-1 col-md-11'
        >
          <Heading>
          Separation can help          
          </Heading>
          <div
            className='dottedLineHorizontal privacy__line privacy__line--right' />
         
        </div>
      </div>
      <div
        className='row doing involved'>
        <div className='col-md-6 col-md-offset-1'>
          <span className='marginLeftNegative involved__text safely'>
          <p >If you regularly download apps or have a lot of services that you use, you could be sharing your 
          information with a lot of different people. Not all of them have your best interest at heart. </p>
          
            <br /> 
            <p>For some accounts, you will want to be you for example, your bank or some social media accounts, 
            for others, there is no reason to give away information by sharing across platforms or apps. 
            Yet it’s just so convenient to use the same account.</p>
            <br />
            <p>Introducing SafeLy. This plugin lets you use different identities for different accounts, protecting your privacy and your security online.
            </p>
            <br />
            <p className='info__heading'> SafeLy is now available for download from the Chrome web store.</p>
            <br />
            <div className='safely__container'>
              <form>
            
                <button  className='safely__button'>
              <a target="_blank" href='https://chrome.google.com/webstore/detail/safely/epbbhpoagmgdnfnckmjdhlaknncohibd' style={{
                color:"white"
              }}>
              Download SafeLy for Chrome
              </a>
              </button>
              </form>
              
            </div>
          </span>
        </div>
        <div className='col-md-4 margin4RemAuto-sm'>
          <Image img={image2} style={{ boxShadow: '5px 5px 10px grey', width:"80%", marginLeft:"10%" }} />
        </div>
      </div>
      {/* <div
            className='dottedLineHorizontal' style={{
              width: '70%',
              position: 'absolute',
              left: '-1rem',
              marginBottom: "2vw",
              marginTop: "4vw"
            }}
          />
          <div className="row">
          <h2 style={{ fontWeight: '700', color: '#523178', fontFamily: 'Roboto, sans-serif' }}>
            How can we help companies be more secure.
          </h2>
          </div> */}
      <div
        className='row columnReverse-sm' style={{
          marginTop: 'marginTop4rem-md'
        }}
      >
        <div className='col-md-offset-1 col-md-4 margin4RemAuto-sm'>
          <Image img={image3} style={{ boxShadow: '5px 5px 10px grey', marginTop:"25px" }} />
        </div>
        <div className='col-md-6'>
 
          <div className='marginRight-md'>
            <h2 className='info__heading'>
              We can help companies be more secure.
            </h2>
          <p className='involved__text'>
          It’s important that we don’t think about privacy as being the sole responsibility of an individual. Large amounts of personal data
          is stored by companies and governments. With data breaches happening everyday, organisations need to think about privacy differently: and work with people to better protect their privacy. 
          The Cyber Institute is currently working on a training course to give executives the tools to lead with confidence in an ever changing world. This course includes:
          < br />< br />
          <span className='info__heading involved__text'>Privacy by design</span> - A module specifically designed to build upon the idea of privacy by design, giving executives a practical way of approaching privacy issues and how they intersect with security. 
            </p>
            <br />
           </div>
        </div>
      </div>
    
    </div>
  </>
