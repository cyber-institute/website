import React, { Component } from 'react'
import ErrorCrane from './errorcrane.jpg'

class FourOfour extends Component {
render(){
  return (
    <>
    <div style={{width:"100%", position:"relative", "padding-top": "150px", "padding-bottom":"150px"}} >

        <div style={{"margin-left": "auto", "margin-right":"auto", "width": "80%", "margin-bottom":"0", "margin-top":"0","position": "relative"}}>
    
            <div class='row around-xs'>
                <div class="col-xs-12 col-md-8">
                <h1 style={{'font-family': 'Roboto, Arial, Helvetica, sans-serif', 'font-size': '70px', color: '#523178','font-weight': '900', margin:'0'}}>
                You seem a bit lost...</h1>

                <p style={{'font-family': 'Roboto,Arial, Helvetica, sans-serif','font-size': '24px', color: '#000', 'font-weight': '300'}}>
                ...and you might have stumbled accross one of our under-construction web pages. There's 
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
