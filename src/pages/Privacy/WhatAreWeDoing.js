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
        <div className='col-md-6'>
        <ReactPlayer
        url="https://www.youtube.com/watch?v=ug50zmP9I7s" width="100%" style={{width:"100%"}}
      /> 
        </div>
        <div className='col-md-4'>
          <p>
            
            <h1>Identifying Scams and making good choices</h1>
            <p>
            Have you ever downloaded an APP or signed up to a service only to regret it?
            </p>
            <p>
            You quickly unsubscribe or delete the app but wished you throught about it more before giving away some of your personal data?
            </p>
            <p>
            Well we can help. First step is Minecraft and Zombies.
            </p>
            <p>
            You may be thinking how are zombies going to help me understand privacy? 
            Well we arent 100% sure it will, but thats what we are running this pilot for.
            </p>
             <p>
               Give it a go and see if it works.
             </p>
             <Slider name="Tech Stuff">
              As this is a pilot we havent created a cross platform solution. Unfortunately this will only work with the Java version of minecraft.
              <br/><br/>
              If you dont have the Java version of mincraft you can watch the run through below. 
             <br/>
             <br />So Start up your device, click on multiplayer and type in the following "Server name" add
            <br /> add the Server name (anything you want) then the Server Address <span style={{ 'font-weight': '700', color: '#523178' }}>minetraining.australiaeast.cloudapp.azure.com</span>
             <br />You can provide feedback by typing /comment in game and then typing your comment.
             </Slider>
             <br />  
            If you dont have Minecraft or just couldnt be bothered watch the run through video. 
           

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
          Seperation can Help
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
          If you regularly download apps or have a lot of services that you use. You can be sharing your 
          information with a lot of different people. Not all of them have your best interest at heart. 

            <br />
            Some accounts you will want to be you. For example your bank or some social media accounts.
            Whilst others there is no reason you need to give away information to at all. 
            Its just so convenient to use the same account. 
            <br />
            If you want something to make it easier then we have created a plugin for chrome that can make creating accounts with services anonymously much easier.
            Introducing SafeLy. Add safely picture
          </p>
        </div>
        <div className='col-md-5 margin4RemAuto-sm'>
          <Image img={image2} style={{ 'box-shadow': '5px 5px 10px grey' }} />
        </div>
      </div>
      <div
        className='row columnReverse-sm' style={{
          marginTop: 'marginTop4rem-md'
        }}
      >
        <div className='col-md-offset-1 col-md-4 margin4RemAuto-sm'>
          <Image img={image3} style={{ 'box-shadow': '5px 5px 10px grey' }} />
        </div>
        <div className='col-md-6'>
          <p className='marginRight-md'>
            <h1>How can we help companies be more secure.</h1>
          Its important that we dont think about privacy as being the sole responsibility of an individual 
          large amounts of personal data is most likley stored by Companies and Governments and with data breaches happening everyday 
          these organisations need to think about privacy differently to work with people to better protect peoples privacy.   
          The cyber institute is currently working on a training course to help executives make more informed decisions about privacy and security. 
          Privacy by design - This module will build upon the idea of privacy by design. Giving executives a practical way of approaching privacy issues. 
            <br />
            <br />
            <span style={{ 'font-weight': '700', color: '#523178' }}>We want to find ways to overcome or offset the current arms race of attack-defend-attack-defend in cyber security</span>
          </p>
        </div>
      </div>
    </div>
  </>
