import React, { Component } from 'react'
import BlackSlider from './BlackSlider'
class ShortCourseInfo extends Component {
    createOffering(offering, title) {
        
        return (
            <>
            <div className="row">
                <div className="col-md-6" style={{padding: '0', margin: '0'}}>
                    <p style ={{marginTop:"12px"}}>{offering.date}</p>
                </div>
                <div className="col-md-6" style={{padding: '0', margin: '0'}}>
                    {this.enrolButton(offering, title)}
                </div>
                        
            </div>
            <br/>
            </>
        )
    }
    enrolButton(offering, title) {
        if (offering.availability) {
            return (
                <a style={{height: '50px',
                                width: '160px',
                                backgroundColor: 'rgb(82, 49, 120)',
                                borderRadius: '9px',
                                display: 'flex',
                                justifyContent: 'center'
                                }}
                                href={offering.link}
                                target="_blank">
                    <a style={{color: 'white',
                                        marginTop: '13px',
                                        fontFamily: 'Roboto, Arial, sans-serif',
                                        fontSize: '18px'}}>
                                        
                        Enrol Now
                    </a>
                </a>
            )
        } else {
            return (
                <a style={{height: '50px',
                                width: '160px',
                                backgroundColor: 'rgb(82, 49, 120)',
                                borderRadius: '9px',
                                display: 'flex',
                                justifyContent: 'center'
                                }}
                                href={"mailto:cyber@anu.edu.au?subject="+ title}                                >
                    <a style={{color: 'white',
                                marginTop: '13px',
                                fontFamily: 'Roboto, Arial, sans-serif',
                                fontSize: '18px'}}>
                        Register Interest
                    </a> 
                </a>   
            )
        }
    }

    createTopic(topic) {
        return (
            <>
                <li>{topic}</li>
            </>
        )
    }

    createOutcome(topic) {
        return (
            <>
                <li>{topic}</li><br/>
            </>
        )
    }
    createBodyPara(para) {
        return (
            <>
                <p>{para}</p>
                <br/>
            </>
        )
    }

    render() {
        const offerings = []
        for(let i = 0; i < this.props.offerings.length; i++) {
            offerings.push(this.createOffering(this.props.offerings[i], this.props.title))
        }
        const topics = []
        for(let i = 0; i < this.props.topics.length; i++) {
            topics.push(this.createTopic(this.props.topics[i]))
        }
        const outcomes =[]
        for(let i = 0; i < this.props.outcomes.length; i++) {
            outcomes.push(this.createOutcome(this.props.outcomes[i]))
        }
        const body = []
        for(let i = 0; i < this.props.body.length; i++) {
            body.push(this.createBodyPara(this.props.body[i]))
        }

        return (
            <BlackSlider name={this.props.title} byline={this.props.body[0]}>
            <div className="col-md-offset-1 col-md-10">
                <div className="col-md-offset-1 col-md-10">
                    <p style={{fontWeight: '700'}}>Upcoming Dates</p>
                    <br/>
                    <>
                    {offerings}
                    </>
                    <br/>
                    <p>
                        {body}
                    </p>
                    <p style={{fontWeight: '700'}}>Topics covered:</p>
                    <ul>
                        {topics}
                    </ul>
                    <br/>
                    <p style={{fontWeight: '700'}}>
                        Upon successful completion, participants will have the skills and knowledge to:
                    </p>
                    <br/>
                    <ol>
                        {outcomes}
                    </ol>


                </div>
            </div>
            </BlackSlider>
        )
    }

}

export default ShortCourseInfo


