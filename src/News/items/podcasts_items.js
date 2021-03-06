import DataPodcast from './../../../img/data_podcast.jpg'
import GovCyberPodcast from './../../../img/gov_cyber_podcast.jpg'
import RSA from './../../../img/RSA.png'
import NatPodcast from './../../../img/nationalsecuritypodcast.jpg'
import Reimagine from './../../../img/reimagineSTEM.jpg'

export default [
  {
    id: '4',
    component: 'NewsArticle',
    props: {
      head: 'Don’t forget to brush your (computer’s) teeth - Lesley Seebeck',
      byline: 'Ever caught a phish? Try upping your cyber-hygiene, says Lesley Seebeck, CEO of the ANU Cyber Institute. Human behaviour, not technology, is key, and calls for a public-health style approach to community cyber security. Educating professionals is important too - using immersive experiences, micro-credentials, small-group learning and by teaching emotional literacy, she hopes to ‘do for cyber what the MBA did for business’ in the new ANU cybermastery course.',
      author: 'Reimagine STEM',
      date: '2/7/20',
      imageSource: Reimagine,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://podcasts.google.com/feed/aHR0cHM6Ly93d3cub21ueWNvbnRlbnQuY29tL2QvcGxheWxpc3QvMjY0ZDk1MDYtODNlNC00ZTc1LWI3NDgtYWJhNzAwNGY0ZTY0LzFjNzBlMjcyLTFiNjItNDYzMC04ODJhLWFiYWMwMDhmZDZjZi8zMmU2YjBiNC0xOThiLTQ1ZmQtYjBmZC1hYmFjMDA5MTdlNTAvcG9kY2FzdC5yc3M/episode/MTdjNGViMmYtYjRhMS00MTE3LTlkYWEtYWJlYzAwYTc2NDQy?ved=2ahUKEwiVt8edy7DqAhWngGMGHQfjAM8QkfYCegQIARAF',
      type: 'podcast'
    }
  },
  {
    id: '3',
    component: 'NewsArticle',
    props: {
      head: 'Implications of the Global Push to Ban End-to-End Encryption',
      byline: 'The majority of the world’s population currently live under governments that have already implemented, or are considering, bans on encryption. These encryption bans have significant implications for privacy and security as well as the global decline in democracy.',
      author: 'RSA Conference',
      date: '26/2/20',
      imageSource: RSA,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.youtube.com/watch?v=cjIaKqUwzCQ&feature=youtu.be',
      type: 'podcast'
    }
  }, {
    id: '2',
    component: 'NewsArticle',
    props: {
      head: 'Techlosophy and the future of security',
      byline: 'Getting to the bottom of how information and bio-technologies are reshaping societies and the human mind - and what this means for those with a stake in democracy and national security.',
      author: 'Katherine Mansted and Dr Zac Rogers',
      date: '6/11/19',
      imageSource: NatPodcast,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://crawford.anu.edu.au/news-events/news/15495/national-security-podcast-techlosophy-and-future-security',
      type: 'podcast'
    }
  }, {
    id: '1',
    component: 'NewsArticle',
    props: {
      head: 'More details needed about potential changes to cyber powers',
      byline: "The Federal Government has been looking at whether the Australian Signals Directorate should have more of a role in fighting cybercrime across the country. It's a discussion that's been going on for more than a year now, but no decisions have been made. Home Affairs Minister Peter Dutton says he is to continue the conversation, and people in the cyber security sector want more details about what could change.",
      author: 'ABC AM',
      date: '18/6/19',
      imageSource: GovCyberPodcast,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.abc.net.au/radio/programs/am/more-details-needed-about-potential-changes-to-cyber-powers/11219358',
      type: 'podcast'
    }
  },
  {
    id: '0',
    component: 'NewsArticle',
    props: {
      head: 'Data, Cyber, and the Social Context',
      byline: 'Is the growing collection and aggregation of data likely to empower the individual and strengthen democracy? Or is it more likely to benefit manipulative corporations and encourage authoritarian governance? How should society frame the problem of privacy and information control, and where does regulation give way to personal responsibility?',
      author: 'Nat. Security Podcast',
      date: '27/1/19',
      imageSource: DataPodcast,
      sizeName: 'col-md-3 col-xs-12',
      link: 'https://www.policyforum.net/national-security-podcast-data-cyber-and-the-social-contract/',
      type: 'podcast'
    }
  }
]
