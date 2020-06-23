import React, { Component } from 'react'
class ShortCourseInfo extends Component {
    createDate(date) {
        return (
            <>
            <div className="row">
                <div className="col-md-6" style={{padding: '0', margin: '0'}}>
                    <p style ={{marginTop:"12px"}}>{date}</p>
                </div>
                <div className="col-md-6" style={{padding: '0', margin: '0'}}>
                    <div style={{height: '50px',
                                width: '125px',
                                backgroundColor: 'rgb(82, 49, 120)',
                                borderRadius: '9px',
                                display: 'flex',
                                justifyContent: 'center'
                                }}>
                        <p style={{color: 'white',
                                    marginTop: '12px'}}>Enrol Now</p>
                    </div>
                </div>
                        
            </div>
            <br/>
            </>
        )
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
        const dates = []
        for(let i = 0; i < this.props.dates.length; i++) {
            dates.push(this.createDate(this.props.dates[i]))
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
            <div className="col-md-offset-1 col-md-10">
                <h2 class="Bold" style={{verticalAlign: 'middle', fontSize: '40px',   marginTop: '1rem'}}>{this.props.title}</h2>        
                <div className="col-md-offset-1 col-md-10">
                    <p style={{fontWeight: '700'}}>Upcoming Dates</p>
                    <br/>
                    <>
                    {dates}
                    </>
                    <br/>
                    <p>
                        {body}
                    </p>
                    <ul>
                        {topics}
                    </ul>
                    <br/>
                    <p>
                        Upon successful completion, participants will have the skills and knowledge to:
                    </p>
                    <br/>
                    <ol>
                        {outcomes}
                    </ol>


                </div>
            </div>
        )
    }

}

export default ShortCourseInfo


