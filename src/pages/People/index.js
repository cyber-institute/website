import React, { useState, Component } from 'react'

import './style.css'
import '../../flexboxgrid.css'
import './People.css'

import Banner from '../common/Banner'
import SlideToggleContent from '../common/SlideToggleContent'
import ViewMoreButton from '../common/ViewMoreButton'

import background from '../../../img/background1.png'
import banner from './banner.jpg'
import Lesley from '../../../img/lesley.jpg'
import Puzzle1 from '../../../img/puzzle1.jpg'
import Puzzle2 from '../../../img/puzzle2.jpg'
import Puzzle3 from '../../../img/puzzle3.jpg'
import Fourstudents from '../../../img/fourstudents.jpg'
import brian from '../../../img/professor_brian_schmidt.jpg'
import mick from '../../../img/mick_ryan.jpg'
import elanor from '../../../img/professor_elanor_huntington.jpg'
import rory from '../../../img/professor_rory_medcalf.jpg'
import marie from '../../../img/marie_johnson.jpg'
import hamish from '../../../img/hamish_hawthorn.jpg'
import deb from '../../../img/deborah_anton.jpg'

const headings = [
  'Meet the Team',
  'Careers',
  'Advisory Board'
]

class People extends Component {
  constructor (props) {
    super(props)

    this.setState = {
      person: ''
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick (item) {
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return { person: item }
    })
  }

  render () {
    return (
      <>
        <Banner {...{ banner, headings }} title='Our People' subTitle='Cyber is a team effort' />
        <div
          className='container-fluid'
        >
          <div className='mainBody row positionRelative'>
            <div className='col-md-offset-1 col-md-10'>
              <h1 id='Meet the Team'>Meet the Team</h1>
              <div className='dottedLineHorizontal team__underline team__underline--right'/></div>
          </div>
          <div className='row mainBody person' >
            <h2 className='person__position person__position--right'>CEO</h2>
            <div className='col-xs-12 col-md-5 col-md-offset-1 person__pic'>
              <img src={Lesley} className='person__img person__img--lesley' alt='Professor Lesley Seebeck, CEO of the Cyber Institute, smiling and sitting' />
              <hr className='greyLine person__line' />
            </div>
            
            <div className='col-xs-12 col-md-5 person__body'>
              <p><span className='bigEmphasis person__emphasis'>"Rarely do you have the opportunity to shape a national endeavour.</span>
                <br /><br />I find intersections and boundaries fascinating—and&nbsp;especially the intersection&nbsp;between strategy, organization and technology.
                <br /><br />Dealing with cyber intrusions reinforced my conviction that cyber is fundamentally about the human;&nbsp;that it currently represents an existential challenge to liberal, democratic societies, and that we need new, interdisciplinary approaches to tackling the problems cyber can create.&nbsp;
                <br /><br />I am deeply invested in building knowledge, capability, tools,&nbsp;and insights that help ensure a better future&nbsp;where&nbsp;cyber enables opportunity, agency, freedom and prosperity.
                <br /><br />At&nbsp;the Cyber Institute I can do all that, with a fantastic, equally&nbsp;committed group of people.&quot;
              </p>
              
              <h3 className='person__title'>CEO, Professor Lesley Seebeck</h3>
              <p className='person__description'>Professor Lesley Seebeck started as the CEO of the Cyber Institute, Australian National University, on 30 July 2018.  She has extensive experience in Federal Government, in a variety of senior roles in policy, technology and central agencies, as well as in the university sector and private industry.  She was recognised as Federal Government CIO of the Year in 2017 and in February 2019 she was appointed to the Government’s Naval Shipbuilding Advisory Board.  <br /><br /></p>
              <p className='person__description'>Professor Seebeck has a PhD in information technology, an MBA, a Masters in Defence Studies and a Bachelor's degree in Applied Science (Physics). </p>
            </div>
          </div>
          <div className='row mainBody person' >
            <h2 className='person__position person__position--left'>COO</h2>
            <div className='col-xs-12 col-md-5 col-md-offset-1 person__body' >
              <h3>Cyber Institute COO, Ree</h3>
              <p>
                    Ree joined the Cyber Institute in late 2018 from the Bureau of Meteorology (BoM) where she held a
                  number of roles, including Head of the Office of the Chief Information Officer. Prior to the BoM,
                  Ree worked in business improvement and information technology transformation programs in state and
                  federal government agencies. Ree was also the Heritage Manager at Old Parliament House where she
                  led the successful nomination of the site for the National Heritage List.
                <br />
                <br />
                  Ree holds a Bachelor of Applied Science in Cultural Heritage Management from the University
                  of Canberra, and has a background in stakeholder engagement, business process improvement, workshop
                  facilitation, program delivery, governance and change management.  Ree is the Cyber Institute’s COO.
              </p>
            </div>
            <div className='col-xs-12 col-md-5 person__jigsaw'>
              <img src={Puzzle3} className='person__img' alt='Puzzle piece representing Ree Kent' />
            </div>
          </div>

          <div className='mainBody row positionRelative person' >
            <div className='col-xs-12 col-md-11'>
              <h1 className='person__right'>Staff Showcase</h1>
              <div
                className='dottedLineHorizontal team__underline team__underline--left' />
            </div>
          </div>
          <div className='row around-xs mainBody col-md-10 col-md-offset-1 person' >
            <p className='showcase__subtitle'><span className='bigEmphasis'>At the Cyber Institute, <span className='showcase__subtitle--emphasis'>people</span> are at the heart of what we do.</span></p>
            <p><br />Here are some of our fantastic team members this month, who make the Cyber Institute, its research,
              education, innovation and delivery programs happen:&nbsp;
            </p>
          </div>
          <div className='row showcase__person' >
            <div className='col-xs-12 col-md-3 col-md-offset-1 person__jigsaw' >
              <img src={Puzzle2} className='person__img' alt='Puzzle piece representing Stehpanie' />
            </div>
            <div className='col-xs-12 col-md-7 showcase__text' >
              <h4 className='showcase__name'>Stephanie, Cyber Institute Research Fellow</h4>
              <p>Meet Steph who started with the Cyber Institute in January 2020. Steph was awarded her PhD from the ANU’s Strategic 
                  and Defence Studies Centre in 2009, for a thesis on small arms control and violent non-state armed groups. <br /><br />
                  She subsequently spent eight years developing and delivering components of the curriculum for the senior course and short 
                  courses at the Centre for Defence and Strategic Studies, now the Australian War College. Steph has worked as a researcher 
                  and campaigner for non-government organisations in Australia and the United Kingdom, and is a member of the Campaign to Stop 
                  Killer Robots. <br /><br />Her research interests are in leaderless resistance, future conflict, and emerging security 
                  challenges in the Indo-Pacific. Her current projects with the Cyber Institute include the formation of the Menzies Cyber Law 
                  Executive Education module with the ANU College of Law and the development of modules for the micro-credentialed Cyber Masters.&nbsp;
              </p>
            </div>
          </div>
          <div className='row showcase__person' >
            <div className='col-xs-12 col-md-7 col-md-offset-1 showcase__text' >
              <h4 className='showcase__name'>Jose, Visiting Fellow</h4>
              <p>We are delighted to announce that our first Visiting Fellow is Mr Jose Sousa-Santos. Jose brings considerable experience and knowledge of 
                the Pacific and Southeast Asia, particularly in the areas of cyber security, transnational organised crime, terrorism and cultural competency. <br /><br />
                Already Jose has helped us deliver a one-day workshop at the ANU’s Australia Pacific Security College and a paper to the ANU College of Law’s 
                Transnational Counter-Terrorism workshop. <br /><br /> Jose has served with the Australian Defence Force, lived and worked extensively across the region, 
                manages the consultancy Strategika Asia-Pacific, and is a Senior Associate at the Centre for Lifelong Learning, Victoria University of Wellington. 
                He is currently completing postgraduate studies at Massey University, Wellington. Welcome Jose!
              </p>
            </div>
            <div className='col-xs-12 col-md-3 person__jigsaw' >
              <img src={Puzzle1} className='showcase__img showcase__img--bottom' alt='Puzzle piece representing José' />
            </div>
          </div>
        </div>
        <Careers />
        <div
          className='container-fluid positionRelative'
        >
          <div
            className='row positionRelative'
          >
            <div className='col-md-offset-1 col-md-10'>
              <div className='mainBody'>
                <h1 id='Advisory Board'>Advisory Board</h1>
              </div>
              <div
                className='dottedLineHorizontal' style={{
                  width: '91.666%',
                  position: 'absolute',
                  right: '-1rem'
                }}
              />
              <div style={{
                padding: '3rem 0'
              }}
              >
                <p>The Cyber Institute is governed under the Australian National University Act 1991 and the Public Governance, Performance &amp; Accountability Act 2013.&nbsp;&nbsp;
                  <br /><br />
          Organisationally, the Institute is an entity within the ANU College of Engineering and Computer Science.&nbsp; It also has a partnership with the ANU National Security College.&nbsp;&nbsp;
                  <br /><br />
          The Institute’s Advisory Board provides high quality objective advice to the CEO regarding the strategic intent and direction of the Institute, as well as its business plan and associated investment strategy.&nbsp;&nbsp;&nbsp;
                  <br /><br />
          The Advisory Board is chaired by the Vice Chancellor, Nobel Laureate Professor Brian Schmidt.
                </p>
              </div>
            </div>
          </div>
          <PersonsGrid />
        </div>
      </>
    )
  };
}

export default People

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div
      className='container-fluid positionRelative careersContainer'
    >
      <div className='careers'>
        <picture
          className='bannerImg careers__background'
          style={{
            backgroundImage: `url(${background})`,
          }}/>
      </div>
      <div
        className='row positionRelative careers__content'>
        <div className='col-xs-12 col-md-5 col-md-offset-1'>
          <h1 id='Careers'>Careers</h1>
          <div
            className='dottedLineHorizontalWhite team__underline team__underline--right team__underline--white' />
          <p className='careers__paragraph'><span className='bigEmphasis'>Imagine</span> a place where we think about cyber differently, where we bring together deep expertise
            in the technological with that of the social, where in tackling the issues of the day, we
            think about how we can build the future we want to live in, where we help people make the hard
            but informed decisions about systems and strategy, data and development, and culture and capability...
          </p>
          <SlideToggleContent isVisible={isVisible}>
            <p>
              <br />
              <br />
              To be part of, and help guide, our journey and mission to ensure the challenge of cyber is met to the
            betterment of humanity,
              <span className='careers__text--emphasis'> we are seeking those willing to tackle a challenge, go beyond traditional
              boundaries and forge new paths, and who are passionate about building a cyber response that strengthens
              our democracy.
                <br />
                <br />
              </span>
            We are looking for people who are at ease with unconventionality, with finding and
            working in the interesting places that lie between disciplines.&nbsp; We value practical experience,
            people who have scars from dealing with cyber and security issues firsthand, who have delved into the
            data and generated insights into the consequences for people, society and the nation, who have a vision
            for ‘beyond cyber’ and are keen to work with other who can make it happen.&nbsp; We want people who care,
            who are curious, and who can help build a great team environment.&nbsp;
              <br />
              <br />
            We are passionate about placing people at the centre of our work, and are seeking to build a
            high-performing team that can change the world.&nbsp;Let us know where and how you are best placed
            to be involved. And join us to bring trust, freedom and opportunity to cyber. If you are interested
            in becoming part of out team, we invite you to send your CV to <a href='mailto:cyber@anu.edu.au' className='.careers__text--link'>cyber@anu.edu.au</a>.
            </p>
          </SlideToggleContent>
          <ViewMoreButton {...{ isVisible, setIsVisible }} />
        </div>
        <div className='col-xs-12 col-md-5'>
          <img src={Fourstudents} className='careers__image' alt='Four Cyber Institute employees standing in front of glass building' />
        </div>
      </div>
    </div>
  )
}

const PersonsGrid = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className='row'>
      <div className='col-md-10 col-md-offset-1'>
        <div className='row center-xs'>
          {
            [
              {
                img: brian,
                title: 'Professor Brian P. Schmidt AC FAA FRS',
                subtitle: 'Vice-Chancellor and President, The Australian National University, 2011 Nobel Laureate Physics',
                id: 0
              },
              {
                img: elanor,
                title: 'Professor Elanor Huntington',
                subtitle: 'Dean, College of Engineering & Computer Science, The Australian National University',
                id: 1
              },
              {
                img: rory,
                title: 'Professor Rory Medcalf',
                subtitle: 'Head of the National Security College, The Australian National University',
                id: 2
              },
              {
                img: marie,
                title: 'Ms. Marie Johnson',
                subtitle: 'Managing Director and Chief Digital Officer, Centre for Digital Business',
                id: 3
              }, {
                img: hamish,
                title: 'Mr. Hamish Hawthorn',
                subtitle: 'COO, UpGuard',
                id: 4
              }, {
                img: deb,
                title: 'Ms. Deborah Anton',
                subtitle: 'Interim National Data Commissioner, Department of the Prime Minister and Cabinet',
                id: 5
              }
            ].map((person, index) => (
              <div style={{display:'contents'}} key={index}>
                <Person {...person} {...{ setIsVisible, isVisible }} key={index} />
                {
                  (index === 3 || index === 5) && (
                    <SlideToggleContent isVisible={Number.isInteger(isVisible) &&
                (([0, 1, 2, 3].includes(isVisible) && index === 3) ||
                ([4, 5].includes(isVisible) && index === 5))}
                    >
                      <div dangerouslySetInnerHTML={{ __html: personsContent[isVisible] }} className='displayNone-sm' />
                    </SlideToggleContent>
                  )
                }
                {
                  <SlideToggleContent isVisible={Number.isInteger(isVisible) && isVisible === index}>
                    <div dangerouslySetInnerHTML={{ __html: personsContent[isVisible] }} className='displayNone-md' />
                  </SlideToggleContent>
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const Person = ({ img, title, subtitle, id, isVisible, setIsVisible }) => {
  return (
    <>
      <div className={`${isVisible === id ? 'selected ' : ''}col-md-3 col-xs-12 advisoryImage paddingBottom2rem-xs`}>
        <div
          className='board-member'
          onClick={() => isVisible !== id ? setIsVisible(id) : setIsVisible(null)}
        >
          <img
            src={img} className='width100-md width300px-xs width250px-xxs imgShadow board-member__img' />
          <div className='hover advisoryImageText'>
            <div>
              <h3
                className='name board-member__name'
                >
                {title}
              </h3>
              <p
                className='title board-member__subtitle'
                >
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const personsContent = [
  `<p className='personsContent'>
  Professor Brian P. Schmidt was appointed Vice-Chancellor and President of The Australian National University (ANU) in January 2016.
<br/>
<br/>
  Professor Schmidt is the 12th Vice-Chancellor of The Australian National University (ANU). Winner of the 2011 Nobel Prize in Physics, Professor Schmidt was an astrophysicist at the ANU Mount Stromlo Observatory and Research School of Astronomy and Astrophysics before becoming Vice-Chancellor.
<br/>
<br/>
  Professor Schmidt received undergraduate degrees in Astronomy and Physics from the University of Arizona in 1989, and completed his Astronomy Master's degree (1992) and PhD (1993) from Harvard University. Under his leadership, in 1998, the High-Z Supernova Search team made the startling discovery that the expansion rate of the Universe is accelerating. Fellow of the Australian Academy of Science, The United States Academy of Science, and the Royal Society, he was made a Companion of the Order of Australia in 2013.</p>`,
  `<p className=personsContent>Professor Elanor Huntington is the first female Dean of Engineering and Computer Science at the Australian National University. Professor Huntington was previously the Head of School for the School of Engineering and Information Technology at UNSW Canberra. Additionally she has served as Chief Investigator on several Australian Research Council projects, Program Manager for the ARC Centre for Excellence in Quantum Computational Communication Technologies and is an Honorary Fellow for The Institution of Engineers Australia. Professor Huntington has a long history of council and board contributions including previous service on the ACT Accreditation and Registration Council as well as currently serving on the Board of Significant Capital Ventures.
  <br/>
  <br/>
  Professor Huntington holds a PhD (2000) in experimental quantum optics from the ANU. Her current research includes the control of quantum systems, with a particular interest in the interface between theory and applications.
  
  </p>`,
  '<p className=personsContent>Rory Medcalf is a Professor and the Head of the National Security College (NSC) at the Australian National University. His career spans diplomacy, intelligence analysis, journalism, think tanks and academia. Under his leadership, the NSC has extended its work beyond executive education, academic teaching and research into a think-tank oriented capacity for futures analysis and engagement with the national policy debate. He was founding director of the international security program at the Lowy Institute and a member of the independent expert panel on the 2016 Australian Defence White Paper. He was an early proponent of the Indo-Pacific concept of Australia\'s strategic environment, which remains one of his principal research interests.</p>',
  `<p className=personsContent>Marie Johnson is the Managing Director of the Centre for Digital Business. Marie is an accessibility advocate, and a recognized global speaker and commentator on artificial intelligence; technology; digital services; ehealth; identity; and innovation. Her extensive experience covers the public and private sectors in Australia and internationally, in roles including large scale government service delivery operations; leading Microsoft's worldwide public services and egovernment business in Seattle; Chief Information Officer; Chief Technology Architect; Technology Authority; and board director. Marie is now leading R&D on the “Digital Human Cardiac Coach”.
  <br/>
  <br/>
  Her achievements have been recognised globally: UN Public Services Award; Australian PM's Award for Excellence in Public Sector Management; Innovative CIO of the Year – Australia; 100 Women of Influence; named as one of Singularity University Exponential Medicine Global XMed Digital Vanguard; and recently joined the MIT Technology Review Global Insights Panel.</p>`,
  '<p className=personsContent>Hamish Hawthorn is UpGuard\'s Chief Operating Officer, driving operations and corporate development activities, and overseeing partnerships with the cyber insurance sector. Hamish has been involved in the commercialisation of new technologies for over twenty 20 years, and his experience spans the software, biotechnology and advanced manufacturing sectors. UpGuard is the world\'s first cyber resilience platform, designed to proactively assess cyber risk for every organization. UpGuard monitors the digital footprints of millions of organizations, automates assessment questionnaires, and synthesizes those factors into the most accurate cyber risk score.</p>',
  `<p className=personsContent>Over the past two decades, Ms Anton has worked in the Australian Public Service with wide ranging experience in legislation, regulation, policy and program delivery, including the establishment of the Government's Computer Emergency Response Team (CERT), which is the primary point of contact for Australian businesses to prevent and respond to malicious activity.
  <br/>
  <br/>
  Ms Anton holds a Bachelor of Science with Honours and Master of Management from the Australian National University (ANU). She has also completed the Company Directors Course from the Australian Institute of Company Directors from the National Security College's Executive Development Program.</p>`
]
