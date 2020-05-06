import React from 'react'

import './style.css'

import { Image, Heading } from './index'
import ReactPlayer from "react-player" 
import Slider from '../common/Slider'

const video = "2q2DKr6lxu0"; 

export default ({ image1, image2, image3 }) =>
  <>
    <div
      className='container-fluid positionRelative' style={{
        marginTop: '2rem'
      }}
    >
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
      className='container-fluid' style={{
        marginTop: '4rem'
      }}
    >
      <div
        className='row positionRelative'
      >
        <div className='row'>
          <div className= 'col-md-10 col-md-offset-1'>
            <h2 style={{ 'font-weight': '700', color: '#523178', 'font-family': 'Roboto, sans-serif' }}>
            Identifying Scams and Making Good Choices
            </h2>
            <p style={{lineHeight:"1.6"}}>
            Have you ever downloaded an app or signed up to a service only to regret it?
            </p>
            <p style={{lineHeight:"1.6", paddingBottom:"16px"}} >
            You quickly unsubscribe or delete the app, but wished you thought about it more before giving away some of your personal data?
            </p>
            <p style={{lineHeight:"1.6", }}>
            Well, we can help. The first step is Minecraft and Zombies.
            </p>
            <p style={{lineHeight:"1.6", paddingBottom:"16px"}}>
            You may be thinking: how are zombies going to help me understand privacy? Well, we aren’t 100 per cent sure it will, but that’s why we are running this pilot.
            </p>
             <p style={{lineHeight:"1.6", paddingBottom:"8px"}}>
               Give it a go and see if it works.
             </p>
          </div>
          </div>
          <div className="row">
          <div className= 'col-md-10 col-md-offset-1'>
          <div className="techStuff">
            <Slider name="Tech Stuff">
            
              <p style={{lineHeight:"1.6", paddingBottom:"8px"}}>As this is a pilot, we haven’t created a cross-platform solution. Unfortunately, this will only work with the Java version of Minecraft.</p>
              <p style={{lineHeight:"1.6", paddingBottom:"8px"}}>If you don't have the Java version of Minecraft you can watch the run through below. </p>
             <p style={{lineHeight:"1.6", paddingBottom:"8px"}}> So start up your device… and type in the following: for “Server name”, add the Server name (anything you want), 
             and then for the “Server Address” use: <span style={{ 'font-weight': '700', color: '#523178', 'overflow-wrap': 'anywhere'}}>minetraining.australiaeast.cloudapp.azure.com</span>. 
             You can provide feedback by typing “/comment” in-game, and then typing your comment.</p>

             </Slider>
          </div>
           </div>
             <div className= 'col-md-10 col-md-offset-1'>
               <p style={{lineHeight:"1.6", marginBottom:"20px"}}>
               If you don’t have Minecraft, or just couldn’t be bothered, watch our entirely 'NoT ScRiPtEd' run-through video.               </p>
             </div>
             
            

        </div>

        <div className="youTube" style={{width:'100%'}}>
         <div className='row center-xs middle-xs'>
        <ReactPlayer
        url="https://www.youtube.com/watch?v=2q2DKr6lxu0" controls="true"/>  
        </div>
        </div>
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
              width: '70%',
              position: 'absolute',
              right: '-1rem',
              marginBottom: "2vw"
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
            <p>For some accounts, you will want to be you for example, your bank or some social media accounts, 
            for others, there is no reason to give away information by sharing across platforms or apps. 
            Yet it’s just so convenient to use the same account.</p>
            <br />
            <p>Introducing SafeLy. SafeLy lets you use different identities for different accounts, protecting your privacy and your security online.
            </p>
            <br />
            <div style={{display:"flex", justifyContent:"center"}}>
              <form>
                <button  style={{backgroundColor:"#523178", border:"none", color:"white",
            padding:"15px 25px", textAlign:"center", cursor:"pointer", borderRadius:"25px",
            fontSize:"18px", fontWeight:"100"}} onclick="https://cyber.anu.edu.au/">Download SafeLy for Chrome</button>
              </form>
              
            </div>
          </p>
        </div>
        <div className='col-md-4 margin4RemAuto-sm'>
          <Image img={image2} style={{ 'box-shadow': '5px 5px 10px grey', width:"80%", marginLeft:"10%" }} />
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
          <h2 style={{ 'font-weight': '700', color: '#523178', 'font-family': 'Roboto, sans-serif' }}>
            How can we help companies be more secure.
          </h2>
          </div> */}
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
            <h1>We can help companies be more secure.</h1>
          <p style={{lineHeight:"1.6"}}>
          It’s important that we don’t think about privacy as being the sole responsibility of an individual. Large amounts of personal data
          is stored by companies and governments. With data breaches happening everyday, organisations need to think about privacy differently: and work with people to better protect their privacy. 
          The Cyber Institute is currently working on a training course to give executives the tools to lead with confidence in an ever changing world. This course includes:
          < br />< br />
          <span style={{lineHeight:"1.6", 'font-weight': '700', color: '#523178' }}>Privacy by design</span> - A module specifically designed to build upon the idea of privacy by design, giving executives a practical way of approaching privacy issues and how they intersect with security. 
            </p>
            <br />
           </p>
        </div>
      </div>
    
    </div>
  </>
