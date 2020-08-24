import React from 'react'
import ShortCourseInfo from './ShortCourseInfo'
import BlackSlider from './BlackSlider'

const courses = [
    {
        title: 'ANU Ninian Stephen Cyber Law Program',
        offerings: [{
            date: 'October 6th-16th, 2020',
            availability: true,
            link: 'https://anu.onestopsecure.com/OneStopWeb/ANSCLP3'
        }
        ],
        
        body: ["This nine half-day online professional development course from the ANU’s Cyber Institute and College of Law will increase your baseline literacy in cyber law with a particular focus on data and privacy.The course will equip you with the tools, knowledge and network to better manage the intersection between the law, cyber space and technology.",
                "This course covers contemporary, global cyber law challenges with significant transnational legal components while also exploring national legal frameworks and issues. The course provides detailed insights into privacy and data protection frameworks and emerging trends while also focusing on the challenges associated with contracting for IT services, exploring the legal issues stemming from the use of ‘smart’ contracts, assessing the difficult questions raised by our reliance on cloud computing services, and outlining the contemporary policy debates being discussed in Australia today.",
                "This course is designed for commercial legal practitioners and covers essential topics in a world increasingly reliant on digital technology. Harnessing the experience and expertise of high-level presenters and experienced facilitators in a tailor-made, blended learning format, you will have access to live and recorded videoconference lectures, interactive Q&A sessions with subject matter experts, real-world hypothetical discussions with mentors in breakout groups, and a moot trial overseen by prominent members of the academic and legal communities." 
            ],
        topics: [
            'Introduction to cyber and cyber security',
            'Proposed changes to privacy legislation in Australia',
            'The transboundary effect of different data privacy laws and comparative insights',
            'E-commerce and contract law',
            'Cloud computing',
            'Employee monitoring and public surveillance'
        ],
        outcomes: [
            'Approach the assessment of the legal consequences of practical vulnerabilities critically, access the appropriate responses and the complexity of the issues at the intersection between the law and technology.',
            'Provide appropriate advice regarding cyber affairs in relation to their clients and but also their own business practices.',
            'Understand the legal issues stemming from vulnerabilities.',
            'Identify areas requiring the insights of other experts.'
        ],
        id: "CyberLaw"
    }
]

const DevelopingCourse = ({title, id}) => 
    <>
         <BlackSlider name = {title} id={id}>
             <div className="col-md-offset-1 col-md-10">
                <div className="col-md-offset-1 col-md-10">
                    <p>Currently in development. Please email <a href={"mailto:cyber@anu.edu.au?subject="+ title} 
                                                                style={{color: '#523178', fontWeight: '700'}}>cyber@anu.edu.au </a> 
                                                                to register your interest in this course. </p>
                </div>
        </div>
         </BlackSlider>
         
    </>


export default  () => 
    <>
       <h2 className="col-md-offset-1"
            style={{fontFamily:'Roboto, Arial, sans-serif',
                fontSize:'30px',
                color:'#523178'}}>Available 2020</h2>
            
        <ShortCourseInfo title={courses[0].title}
                offerings={courses[0].offerings}
                body={courses[0].body}
                topics = {courses[0].topics}
                outcomes= {courses[0].outcomes}
                id = {courses[0].id}/>
    </>
    
    