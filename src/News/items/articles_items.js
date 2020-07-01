import CyberAttack from './../../../img/cyberAttack.jpg'

import Zoom from './../../../img/zoom_trouble.jpg'
import DataInterventionsStephanie from './../../../img/datainterventions_stephanie.jpg'
import CoronaApp from './../../../img/coronaApp.png'

import Scaffold from './../../../img/scaffold.jpg'
import FaceFuture from './../../../img/face_future.jpg'
import CyberHowDoing from './../../../img/cyber_how_doing.jpg'

import PeopleNotProblem from './../../../img/people_not_problem.jpg'
import TechDivide from './../../../img/tech_divide.jpg'
import Microchip from './../../../img/microchip.png'

import Defend from './../../../img/defend.png'
import SecurityStrategy from './../../../img/security_strategy.jpg'


export default [{
  id: '11',
  component: 'NewsArticle',
  props: {
    head: 'Grey zone strike means cyber war',
    byline: 'On June 19, Prime Minister Scott Morrison said Australian organisations were "being targeted by a sophisticated state-based cyber actor". The accompanying advisory notice from the Australian Cyber Security Centre set out an attack that seemed to follow fairly standard approaches: web-based exploitation, spear-fishing, and seeking entry into organisations through the front door, hoping – softly, softly – to be lost in the noise.',  
    author: 'Prof. Lesley Seebeck',
    date: '24/6/20',
    imageSource: CyberAttack,
    sizeName: 'col-md-3 col-xs-12',
    link: 'https://www.afr.com/policy/foreign-affairs/grey-zone-strike-means-cyber-war-20200623-p5556b',
    type: 'article'
  }
},{
  id: '10',
  component: 'NewsArticle',
  props: {
    head: 'App is no silver bullet for virus, yet a honey pot for the malign',
    byline: 'Managing a pandemic’s no walk in the park. There’s little clear data initially, and big decisions to be made. Governing is driven by the spur of urgency, because lives are at stake. ',
    author: 'Prof. Lesley Seebeck',
    date: '29/4/20',
    imageSource: CoronaApp,
    sizeName: 'col-md-3 col-xs-12',
    link: 'https://www.afr.com/policy/health-and-education/app-is-no-silver-bullet-for-virus-yet-a-honey-pot-for-the-malign-20200429-p54o5k',
    type: 'article'
  }
},
{
  id: '9',
  component: 'NewsArticle',
  props: {
    head: 'Data Interventions and the Renegotiation of the Social Contract',
    byline: 'What can be discerned is that there are different ways to conceive security, and the dangers arise when we overstep the mark into regime security.',
    author: 'Stephanie Koorey',
    date: '',
    imageSource: DataInterventionsStephanie,
    sizeName: 'col-md-3 col-xs-12',
    link: 'http://visionofhumanity.org/economists-on-peace/data-interventions-and-the-renegotiation-of-the-social-contract/',
    type: 'article'
  }
}, {
  id: '8',
  component: 'NewsArticle',
  props: {
    head: 'The Trouble With Zoom',
    byline: 'As working remotely from home or in smaller groups becomes the norm in these virus-hit times, Zoom has quickly seemed indispensable. But serious and unresolved issues around its security, privacy and data use may mean that the cost of using the platform could be higher than most realise.',
    author: 'Patrick Doyle, James Mortenson, Damian Clifford',
    date: '24/3/20',
    imageSource: Zoom,
    sizeName: 'col-md-3 col-xs-12',
    link: 'https://www.afr.com/technology/zoom-is-the-next-privacy-challenge-20200324-p54dff',
    type: 'article'
  }
},
{
  id: '7',
  component: 'NewsArticle',
  props: {
    head: 'Scaffolding of security',
    byline: 'Often when we think of cyber, we feel vulnerable, afraid, and unsure. We feel tossed in a never-ending storm: few days pass without mention of data breach, concerns over fake news or a press release about attribution. A sense of exhaustion, of helplessness and despondency is not unexpected.',
    author: 'Prof. Lesley Seebeck',
    date: '27/2/20',
    imageSource: Scaffold,
    sizeName: 'col-md-3 col-xs-12',
    link: 'https://reporter.anu.edu.au/scaffolding-security',
    type: 'article'
  }
}, {
  id: '6',
  component: 'NewsArticle',
  props: {
    head: 'Cybersecurity: how are we doing?',
    byline: 'Asking ourselves whether we’re doing things right merely asks us to measure our progress down a prescribed path. Judgements about whether we’re doing the right things are harder to make. It’s entirely possible we’re not even on the right path, regardless of how far along it we’ve come. A word of warning: this is a fairly dense and difficult topic.',
    author: 'Prof. Lesley Seebeck',
    date: '11/12/19',
    imageSource: CyberHowDoing,
    sizeName: 'col-md-3 col-xs-12',
    link: 'https://www.aspistrategist.org.au/cybersecurity-how-are-we-doing/',
    type: 'article'
  }
}, {
  id: '5',
  component: 'NewsArticle',
  props: {
    head: 'Repositioning Australia to face its future',
    byline: 'Good things come to those who are prepared to wait, invest, and appreciate the ‘adjacent possible’. Policymakers need to stop being drawn to the myth of the ‘quick fix’ and focus on long-term and sustained development of research and development as an ecosystem if they really want to solve those wicked problems.',
    author: 'Prof. Lesley Seebeck',
    date: '13/11/19',
    imageSource: FaceFuture,
    sizeName: 'col-md-3 col-xs-12',
    link: 'https://www.policyforum.net/repositioning-australia-to-face-its-future/',
    type: 'article'
  }
},
{
  id: '4',
  component: 'NewsArticle',
  props: {
    head: 'Students need better preparation for an uncertain future',
    byline: 'With cyber issues among the most complex facing society, educating young minds to tackle future problems has never been more important. Current approaches, however, are not good enough, Lesley Seebeck writes.',
    author: 'Prof. Lesley Seebeck',
    date: '24/2/20',
    imageSource: Microchip,
    sizeName: 'col-md-3 col-xs-12',
    link: 'https://www.policyforum.net/education-for-the-cyber-age/',
    type: 'article'
  }
}, {
  id: '3',
  component: 'NewsArticle',
  props: {
    head: 'The new global technological divide',
    byline: 'For the first time since the Cold War, technology is re-emerging as a strategic, and not merely a political, instrument. The difference this time is that it’s thoroughly civilian rather than military technologies and information that act both as enablers and sources of vulnerability. And there are key differences in how different Western political cultures understand the strategic significance of technology.',
    author: 'Prof. Lesley Seebeck',
    date: '7/11/19',
    imageSource: TechDivide,
    sizeName: 'col-md-3 col-xs-12',
    link: 'https://www.aspistrategist.org.au/the-new-global-technological-divide/',
    type: 'article'
  }
},
{
  id: '2',
  component: 'NewsArticle',
  props: {
    head: 'Cybersecurity: people are not the problem',
    byline: "A lot of thinking and commentary around cybersecurity put forward the idea that ‘people are the problem’. After all, most intrusions and attacks start with people being persuaded or misled into going onto disguised or infected sites, to handover details or otherwise compromise their own systems... If only people—users, clients, members of the community—didn’t do what people naturally do, we’d all have much more secure and efficient systems. That's muddled thinking.",
    author: 'Prof. Lesley Seebeck',
    date: '4/11/19',
    imageSource: PeopleNotProblem,
    sizeName: 'col-md-3 col-xs-12',
    link: 'https://www.aspistrategist.org.au/cybersecurity-people-are-not-the-problem/',
    type: 'article'
  }
},
{
  id: '1',
  component: 'NewsArticle',
  props: {
    head: 'Submission: 2020 Cyber Security Strategy',
    byline: 'The number of questions in this paper illustrates the complex, contested, and changeable nature of cyber and cyber security... Given that cyber is a wicked problem, without a broader conceptual framework, the danger is that fragmented approach and point solutions are not likely to meet the challenge.',
    author: 'Prof. Lesley Seebeck',
    date: '1/11/19',
    imageSource: SecurityStrategy,
    sizeName: 'col-md-3 col-xs-12',
    link: 'https://www.homeaffairs.gov.au/reports-and-pubs/files/cyber-strategy-2020/submission-157.pdf',
    type: 'article'
  }
},
{
  id: '0',
  component: 'NewsArticle',
  props: {
    head: 'Defending those we send to protect us',
    byline: 'The impression has gained ground that some members of the Special Air Service Regiment (SASR) are an unregulated band of brigands, not adhering to civil laws, or to the laws of warfare. Nothing could be further from the truth.',
    author: 'John Powers',
    date: '27/9/19',
    imageSource: Defend,
    sizeName: 'col-md-3 col-xs-12',
    link: 'https://www.aspistrategist.org.au/defending-those-we-send-to-protect-us/',
    type: 'article'
  }
}

]
