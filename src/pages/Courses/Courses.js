import React from 'react'
import ShortCourseInfo from './ShortCourseInfo'
import BlackSlider from './BlackSlider'

const courses = [
    {
        title: 'ANU Ninian Stephen Cyber Law Program',
        offerings: [{
            date: 'August 10th-21st, 2020',
            availability: true,
            link: "https://anu.onestopsecure.com/OneStopWeb/ANSCLP2",
        },{
            date: 'October 5th-16th, 2020',
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
    },
    {
        title: 'Cyber for Decision Makers',
        offerings: [{
                date: 'August 10th-19th, 2020',
                availability: false,
                link: "https://github.com/"
            },{
                date: 'October 5th-14th, 2020',
                availability: false,
                link: 'https://github.com/'
            }
        ],
        
        body: ["Leading is difficult at the best of times – leading in cyber can seem virtually impossible to the uninitiated and the unprepared. In a post-COVID world where digital integration is being rapidly embraced across economies and the world, the expectations that leaders can effectively operate in cyber environments continues to increase.​",
                "nlike other management disciplines, cyber continues to evolve at an alarming rate, where the only constant appears to be the sustained rate of change. The efficacy of leadership groups mitigating cyber related business risks through the application of tried and true management approaches is sub-optimal at best. In our rush to reap the benefits of a digitally connected world, we have yet to build an effective way to manage the attendant risks.​",
                "Decision making is central to effective leadership, but how does a leader make an informed decision in an environment where the operating environment is constantly in flux and timely access to reliable information is compromised? ​",
                "Cyber for Decision Makers, from the ANU Cyber Institute, will provide participants with the knowledge and tools to better understand cyber risks and to make informed decisions in a cyber connected environment.",
            ],
        topics: [
            'Systemic approaches to conceptualising and understanding cyber and associated risks.',
            'Understanding the role of ethics in decision making and the management of cyber risks.​',
            'Preparedness modelling and planning to identify and prepare for a range of cyber risks and threat actors.',
            'Preparedness planning to develop the people, process and technology solutions needed to create resilient organisations.​',

        ],
        outcomes: [
            'Understand key concepts of development and application of cyber.',
            'Be able to apply systems thinking to achieve efficient and robust decision-making in a complex and evolving operating environment.',
            'Understand and identify modern cyber risks in business operating environments. ',
            'Understand the means to design and implement effective risk management strategies to mitigate known and emerging cyber risks.',
            'Know how to design and create cyber resilient organisations though effective risk management and cyber preparedness.',
            'Appreciate the value of and how to build multidisciplinary teams as an effective means of managing and mitigating cyber risks.'
        ],
        id: "CyberforDecisionMakers"
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
        <ShortCourseInfo title={courses[1].title}
                        offerings={courses[1].offerings}
                        body={courses[1].body}
                        topics = {courses[1].topics}
                        outcomes= {courses[1].outcomes}
                        id = {courses[1].id}/>
        <DevelopingCourse title='<R>evolutions of Cyber'/>
        <h2 className="col-md-offset-1"
            style={{fontFamily:'Roboto, Arial, sans-serif',
                fontSize:'30px',
                color:'#523178'}}>Available 2021</h2>
        <DevelopingCourse title="Social Cybernetics" id="SocialCybernetics"/>
        <DevelopingCourse title="Resourcing Cyber" id="ResourcingCyber"/>
        <DevelopingCourse title="Cyber Computing Concepts" id="CyberComputing"/>
        <DevelopingCourse title="Rights & Responsibilities in Cyberspace" id="CyberRightsResponsibilities"/>

    </>
    
    