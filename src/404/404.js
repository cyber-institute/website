import React, { Component } from 'react'
import ErrorCrane from './errorcrane.jpg'
import './404.css'

// 404 page not found component
class FourOfour extends Component {
render(){
  return (
    <>
    <div className="four04" >

        <div className="four04__content">
    
            <div className='row around-xs'>
                <div className="col-xs-12 col-md-8">
                <h1 className='four04__heading'>
                You seem a bit lost...</h1>

                <p className='four04__text'>
                ...and you might have stumbled across one of our under-construction web pages. There's 
                nothing much else to see here, but feel free to either go back to the home page or have a
                 poke around our construction site.
                </p>
                <img src={ErrorCrane} alt="Image of Lego Crane" className='four04__image' />
                </div>
            </div>
        
        </div>
    
    </div>
    </>
  )
}
}
export default FourOfour
