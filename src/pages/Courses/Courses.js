import React from 'react'
import ShortCourseInfo from './ShortCourseInfo'

const courses = {
    title: 'ANU Ninian Stephen Cyber Law Program',
    dates: [
        'August 3rd-14th, 2020',
        'October 19th-30th, 2020'    
    ],
    body: ["This nine half-day online professional development course from the ANU’s Cyber Institute and College of Law will increase your baseline literacy in cyber law with a particular focus on data and privacy.The course will equip you with the tools, knowledge and network to better manage the intersection between the law, cyber space and technology.",
            "This course covers contemporary, global cyber law challenges with significant transnational legal components while also exploring national legal frameworks and issues. The course provides detailed insights into privacy and data protection frameworks and emerging trends while also focusing on the challenges associated with contracting for IT services, exploring the legal issues stemming from the use of ‘smart’ contracts, assessing the difficult questions raised by our reliance on cloud computing services, and outlining the contemporary policy debates being discussed in Australia today.",
            "This course is designed for commercial legal practitioners and covers essential topics in a world increasingly reliant on digital technology. Harnessing the experience and expertise of high-level presenters and experienced facilitators in a tailor-made, blended learning format, you will have access to live and recorded videoconference lectures, interactive Q&A sessions with subject matter experts, real-world hypothetical discussions with mentors in breakout groups, and a moot trial overseen by prominent members of the academic and legal communities." 
            ,"Topics covered:"
        ],
    topics: [
        'Introduction to cyber and cyber security;',
        'Proposed changes to privacy legislation in Australia;',
        'The transboundary effect of different data privacy laws and comparative insights;',
        'E-commerce and contract law;',
        'Cloud computing; and, ',
        'Employee monitoring and public surveillance'
    ],
    outcomes: [
        'Approach the assessment of the legal consequences of practical vulnerabilities critically, access the appropriate responses and the complexity of the issues at the intersection between the law and technology.',
        'Provide appropriate advice regarding cyber affairs in relation to their clients and but also their own business practices.',
        'Understand the legal issues stemming from vulnerabilities.',
        'Identify areas requiring the insights of other experts.'
    ]
}


export default  () => 
    <ShortCourseInfo title={courses.title}
                    dates={courses.dates}
                    body={courses.body}
                    topics = {courses.topics}
                    outcomes= {courses.outcomes}/>
    
    