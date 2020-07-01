import React from 'react'
import ShortCourseInfo from './ShortCourseInfo'
import BlackSlider from './BlackSlider'

const courses = [
    {
        title: 'ANU Ninian Stephen Cyber Law Program',
        offerings: [{
            date: 'August 3rd-14th, 2020',
            availability: true,
            link: "https://github.com/",
        },{
            date: 'October 19th-30th, 2020',
            availability: true,
            link: 'https://github.com/'
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
    },
    {
        title: 'Cyber Leadership & Decision Making',
        offerings: [{
                date: 'August 3rd-14th, 2020',
                availability: true,
                link: "https://github.com/"
            },{
                date: 'October 5th-16th, 2020',
                availability: false,
                link: 'https://github.com/'
            }
        ],
        
        body: ["This two-week (3 hour session daily) intensive executive education course assists participants to recognise and prepare for the challenges of leading in a digitally connected world.  This course details the unique challenges that today’s leaders face, introducing key concepts and structures of cyber, exploring how to manage cyber risks and understanding the role of ethics for effective decision-making in an ever-changing environment.",
                "The Cyber Leadership Course is designed for decision-makers and those who inform decision-makers at the EL2 level and above and covers essential topics in a world increasingly reliant of digital technology.  Drawing on the experience of high-level presenters in a blended format of self-led and facilitated sessions, participants have access to live and recorded video presentations, Masterclasses and interactive Q&A sessions with subject matter experts, and real world and simulated scenarios. This course will provide participants with cyber strategies and solutions which can be applied immediately to the workplace.",
            ],
        topics: [
            'Introduction to Cyber',
            'Decision-making in Uncertainty',
            'Cyber Ethics',
            'Cyber Risk',
            'Cyber Resilience',

        ],
        outcomes: [
            'Understand key concepts of development and application of cyber.',
            'Apply systems thinking to achieve efficient and robust decision-making in a complex and evolving operating environment. ',
            'Understand and identify modern cyber risks in business operating environments. ',
            'Design and implement effective risk management strategies to mitigate known and emerging cyber risks.',
            'Design and create cyber resilient organisations though effective risk management and cyber preparedness.',
            'Create and build multidiscipline teams as an effective means of managing and mitigating cyber risks.'
        ],
        id: "CyberLeadership"
    }
]

const DevelopingCourse = ({title}) => 
    <>
         <BlackSlider name = {title}>
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
        <ShortCourseInfo title={courses[1].title}
                        offerings={courses[1].offerings}
                        body={courses[1].body}
                        topics = {courses[1].topics}
                        outcomes= {courses[1].outcomes}
                        id = {courses[1].id}/>
        <h2 className="col-md-offset-1"
            style={{fontFamily:'Roboto, Arial, sans-serif',
                fontSize:'30px',
                color:'#523178'}}>Available 2021</h2>
        <DevelopingCourse title="Cyber Literacy"/>
        <DevelopingCourse title="Emotional Literacy and Social Cybernetics"/>
        <DevelopingCourse title="Resourcing Cyber"/>
        <DevelopingCourse title="Information Systems Security"/>
    </>
    
    