import RSA2 from './../../../img/RSA.jpg'
import CyberBootcamp from './../../../img/cyber_bootcamp.png'
import RaisinaDialogue from './../../../img/raisina_dialogue.jpg'
import SingaporeCyber from './../../../img/singapore_cyber.jpg'
import CyberMerc from './../../../img/CyberMerc_square.jpg'

export default [
  {
    id: '4',
    component: 'NewsArticle',
    props: {
      head: 'World-First Threat Sharing Platform to Defend Australian Networks',
      byline: "The Cyber Institute is pleased to collaborate with Cybermerc's national threat sharing platform which will enable Australian businesses to collaborate in defending their networks, supported by AustCyber - The Australian Cyber Security Growth Network Ltd!",
      author: 'ANU Cyber Institute',
      date: '29/6/2020',
      imageSource: CyberMerc,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:6683161160679878656',
      type: 'announcement'
    }
  },
  {
    id: '3',
    component: 'NewsArticle',
    props: {
      head: 'VC’s interview with Chief Information Security Officer',
      byline: 'Vice-Chancellor Brian Schmidt spoke to the Chief Information Security Officer, Suthagar Seevaratnum, who explains implications for the cybersecurity during the pandemic. Please check out the video.',
      author: 'ANU',
      date: '',
      imageSource: RSA2,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.youtube.com/watch?v=OYzuoi_a1i0&feature=youtu.be',
      type: 'announcement'
    }
  },
  {
    id: '2',
    component: 'NewsArticle',
    props: {
      head: 'The January Cyber Bootcamp',
      byline: "We're so excited to be working with DFAT on the Cyber Bootcamp which was launched in November, and looking forward to building this cyber capacity-building venture with our Indo-Pacific neighbours!",
      author: 'DFAT',
      date: '29/01/20',
      imageSource: CyberBootcamp,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://dfat.gov.au/international-relations/themes/cyber-affairs/cyber-cooperation-program/Pages/cyber-bootcamp-project.aspx?fbclid=IwAR2mztupdFmWZC6kXPPvYKn57Oj9cXqDa9E9jzPw2qlmMa_KAUSAO1M2guE',
      type: 'announcement'
    }
  }, {
    id: '1',
    component: 'NewsArticle',
    props: {
      head: 'Digital Binaries: 5G and the new tech wars',
      byline: 'The Raisina Dialogue is a multilateral conference where global leaders in policy, business, media and civil society are hosted in New Delhi, India, to discuss cooperation on a wide range of pertinent international policy matters. Our CEO, Professor Lesley Seebeck,  came back from sharing some insight through the "Digital Binaries: 5G and the new tech wars" panel on the final day of this conference.',
      author: 'ORF',
      date: '16/01/20',
      imageSource: RaisinaDialogue,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.orfonline.org/raisina-dialogue/programme/',
      type: 'announcement'
    }
  },
  {
    id: '0',
    component: 'NewsArticle',
    props: {
      head: 'To Singapore and Malaysia for Cyber Security',
      byline: "A visit to Singapore and Malaysia for our Program Manager Liz West didn't just include great conversations and delicious food, but attending some cyber-security ventures. Both Republic Polytechnic-RSA Joint Security Operations Centre and Sunway University's Cyber Security Intelligence Laboratory were fantastic to visit, and the Cyber Institute was proud to send over one of our own.",
      author: 'Liz West',
      date: '19/12/19',
      imageSource: SingaporeCyber,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://twitter.com/AnuCyber/status/1203838456499232769',
      type: 'announcement'
    }
  }
]
