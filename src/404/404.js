import React, { Component } from 'react'
import ErrorCrane from './errorcrane.jpg'

class FourOfour extends Component {
render(){
  return (
    <>
    <div style={{width:"100%", position:"relative", paddingTop: "150px", paddingBottom:"150px"}} >

        <div style={{marginLeft: "auto", marginRight:"auto", width: "80%", marginBottom:"0", marginTop:"0",position: "relative"}}>
    
            <div className='row around-xs'>
                <div className="col-xs-12 col-md-8">
                <h1 style={{fontFamily: 'Roboto, Arial, Helvetica, sans-serif', fontSize: '70px', color: '#523178',fontWeight: '900', margin:'0'}}>
                You seem a bit lost...</h1>

                <p style={{fontFamily: 'Roboto,Arial, Helvetica, sans-serif',fontSize: '24px', color: '#000', fontWeight: '300'}}>
                ...and you might have stumbled across one of our under-construction web pages. There's 
                nothing much else to see here, but feel free to either go back to the home page or have a
                 poke around our construction site.
                </p>
                <img src={ErrorCrane} alt="Image of Lego Crane" style={{width:'100%', filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.3))'}} />
                </div>
            </div>
        
        </div>
    
    </div>
    </>
  )
}
}
export default FourOfour
