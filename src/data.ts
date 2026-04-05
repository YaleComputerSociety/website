//CSV parser
import Papa from 'papaparse';

// Product imports
import { StaticImageData } from 'next/image';

// Logos
import coursetable from './assets/products/logos/coursetable.png';
import yalies from './assets/products/logos/yalies.png';
import ymeets from './assets/products/logos/ymeetslogo.png';
import yaleclubs from './assets/products/logos/yaleclubs.svg';
import yims from './assets/products/logos/yims.png';
import ylabs from './assets/products/logos/ylabs.png';
import yalemeals from './assets/products/logos/yale_meals_logo.png';
import majoraudit from './assets/products/logos/majoraudit.png';
import slash from './assets/ycs-slash.png';
// Product headers
import coursetableHeader from './assets/products/coursetable/headerimage.png';
import yaliesHeader from './assets/products/yalies/headerimage.png';
import ymeetsHeader from './assets/products/ymeets/headerimage.png';
// Media imports
import email from './assets/email2.png';
import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';
import nvidia from './assets/partnerships/nvidia.png';
// People imports
import daniel from './assets/people/daniel.jpeg';
import neil from './assets/people/neil.jpeg';
import eric from './assets/people/eric.png';
import LilyLin from './assets/people/LilyLin.png';
import matei from './assets/people/matei.jpeg';
import reyansh from './assets/people/reyansh.jpg';
import sebastian from './assets/people/sebastian.jpeg';
import ben from './assets/people/ben.jpeg';
import yassin from './assets/people/yassin.jpg';

import ryan from './assets/people/ryan.jpeg';
import ryanf from './assets/people/ryanf.jpeg';
import Francis from '@assets/people/francis.jpeg';
import ephraim from './assets/people/ephraim.jpeg';
import jeet from './assets/people/jeet.jpeg';
import rylan from './assets/people/rylan.jpeg';
import andy from './assets/people/andy.jpeg';
import syndey from './assets/people/syndey.jpeg';
import christian from './assets/people/christian.jpeg';
import william from './assets/people/william.jpeg';
import sofia from './assets/people/sofia.jpeg';
import humpery from './assets/people/humphrey.jpg';
// partnerships import
import janestreet from './assets/partnerships/JaneStreetWhite.png';
import tsai from './assets/partnerships/tsai.png';
import hrt from './assets/partnerships/HudsonRiverTrading.png';
import qnx from './assets/partnerships/QNX.png';
import minimax from './assets/partnerships/MiniMax.png';
import citadel from './assets/partnerships/citadel.png';
// import hrt from './assets/partnerships/HRT.png';
import gala from '@assets/ycs.png';
import danger_of_deploy from "@assets/"

import bobyard from '@assets/events/bobyard.png';
import marshall_wace from '@assets/events/marshall_wace.png';

export interface Person {
  name: string;
  image: StaticImageData;
  role: string;
  team: string;
  year?: number;
}

export const BOARD: Person[] = [
  {
    name: 'Lily Lin',
    image: LilyLin,
    role: 'Co-President',
    team: 'Board',
    year: 2027,
  },
  {
    name: 'Ryan Fernandes',
    image: ryanf,
    role: 'Co-President',
    team: 'Board',
    year: 2028,
  },
  {
    name: 'Jeet Parikh',
    image: jeet,
    role: 'Director of Development',
    team: 'Board',
    year: 2028,
  },
  {
    name: 'Daniel Wang',
    image: daniel,
    role: 'Senior Advisor',
    team: 'Board',
    year: 2027,
  },
  {
    name: 'Andy Cheng',
    image: andy,
    role: 'Director of Training',
    team: 'Board',
    year: 2027,
  },
  {
    name: 'Sydney Scheller',
    image: syndey,
    role: 'Director of Finances',
    team: 'Board',
    year: 2026,
  },
  {
    name: 'Christian Phanhthourath',
    image: christian,
    role: 'Director of Events',
    team: 'Board',
    year: 2028,
  },
  {
    name: 'Sofia Colorado',
    image: sofia,
    role: 'Director of Marketing',
    team: 'Board',
    year: 2028,
  },
  {
    name: 'William Qian',
    image: william,
    role: 'Director of Communications',
    team: 'Board',
    year: 2028,
  },
  {
    name: 'Eric Yoon',
    image: eric,
    role: 'Director of Security',
    year: 2027,
    team: 'Board',
  },

  // product leads
  {
    name: 'Reyansh Bahl',
    image: reyansh,
    role: 'Team Lead',
    year: 2028,
    team: 'CourseTable',
  },
  {
    name: 'Humphrey Xu',
    image: humpery,
    role: 'Team Lead',
    year: 2027,
    team: 'CourseTable',
  },
  {
    name: 'Matei Coldea',
    image: matei,
    role: 'Team Lead',
    year: 2028,
    team: 'Yalies',
  },

  {
    name: 'Rylan Yang',
    image: rylan,
    role: 'Team Lead',
    year: 2027,
    team: 'ymeets',
  },
  {
    name: 'Jeet Parikh',
    image: jeet,
    role: 'Team Lead',
    team: 'ymeets',
    year: 2028,
  },
  {
    name: 'Francis Fan',
    image: Francis,
    role: 'Team Lead',
    year: 2027,
    team: 'YaleClubs',
  },
  {
    name: 'Ephraim Akai-Nettey',
    image: ephraim,
    role: 'Team Lead',
    year: 2027,
    team: 'YaleIMs',
  },
  {
    name: 'Andy Cheng',
    image: andy,
    role: 'Team Lead',
    year: 2027,
    team: 'MajorAudit',
  },
  {
    name: 'Ben Wu',
    image: ben,
    role: 'Team Lead',
    year: 2027,
    team: 'MajorAudit',
  },
  {
    name: 'Christian Phanhthourath',
    image: christian,
    role: 'Team Lead',
    team: 'y/labs',
    year: 2028,
  },
  {
    name: 'Sebastian Gonzalez',
    image: sebastian,
    role: 'Team Lead',
    team: 'y/labs',
    year: 2028,
  },
  {
    name: 'Yassin Mudawi',
    image: yassin,
    role: 'Team Lead',
    team: 'YaleMeals',
    year: 2027,
  },
];

export type Project = {
  name: string;
  logo: StaticImageData | undefined;
  headerImage?: StaticImageData | undefined;
  headerImage2?: StaticImageData | undefined;
  link: string | undefined;
  live: boolean;
  description: string;
  shouldIconBeRounded: boolean;
  isBackgroundWhite?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: 'CourseTable',
    logo: coursetable,
    headerImage: coursetableHeader,
    link: 'https://www.coursetable.com/',
    description: 'A student-built courses browser.',
    live: true,
    shouldIconBeRounded: false,
  },
  {
    name: 'Yalies',
    logo: yalies,
    headerImage: yaliesHeader,
    link: 'https://yalies.io/',
    description: 'A directory that provides data on the Yale student body.',
    live: true,
    shouldIconBeRounded: false,
  },
  {
    name: 'ymeets',
    logo: ymeets,
    headerImage: ymeetsHeader,
    link: 'https://ymeets.com/',
    description: 'Website that makes it easier for Yalies to find a time to meet.',
    live: true,
    shouldIconBeRounded: false,
  },
  {
    name: 'YaleClubs',
    description: 'Website to view clubs and events.',
    shouldIconBeRounded: true,
    live: true,
    link: 'https://yaleclubs.info',
    logo: yaleclubs,
  },
  {
    name: 'YaleIMs',
    description: 'Website to view IM scores and schedules.',
    shouldIconBeRounded: false,
    live: true,
    link: 'https://yaleims.com',
    logo: yims,
  },
  {
    name: 'MajorAudit',
    description: 'A website that allows Yalies to contextualize their four-year plan.',
    shouldIconBeRounded: false,
    isBackgroundWhite: true,
    live: false,
    link: 'https://majoraudit.web.app/',
    logo: majoraudit,
  },
  {
    name: 'y/labs',
    logo: ylabs,
    headerImage: undefined,
    link: 'https://yalelabs.io/',
    description: 'Database visualizer for Yale research.',
    live: true,
    shouldIconBeRounded: true,
  },
  {
    name: 'YaleMeals',
    logo: yalemeals,
    link: 'https://apps.apple.com/us/app/yalemeals/id6755962674',
    description: 'App to view Yale dining options.',
    live: true,
    shouldIconBeRounded: false,
  },
];

export const MEDIA = [
  {
    link: 'mailto:yalecomputersociety@gmail.com',
    margin: {
      marginRight: '5px',
    },
    imageSrc: email,
    alt: 'Email',
  },
  {
    link: 'https://www.facebook.com/yalecompsociety/',
    margin: {
      margin: '0 10px',
    },
    imageSrc: facebook,
    alt: 'Facebook',
  },
  {
    link: 'https://www.instagram.com/yalecompsociety/',
    margin: {
      marginLeft: '10px',
    },
    imageSrc: instagram,
    alt: 'Instagram',
  },
];

export const STORIES = [
  {
    data: '2016',
    description:
      'In 2016, the Yale Computer Society was created as a space for CS enthusiasts to learn and share ' +
      'tech learnings together.',
  },
  {
    data: '2019',
    description:
      'In 2019, the Yale Computer Society combined product and community to begin developing a suite of' +
      ' products for Yale students.',
  },
  {
    data: '2023',
    description:
      'The y/cs Catalyst program began, dedicated to teaching then next generation of software engineers at Yale.',
  },
];

export const TODAY_STATISTICS = [
  {
    data: '120+',
    description: 'members',
  },
  {
    data: '20000+',
    description: 'users',
  },
  {
    data: '6',
    description: 'software products',
  },
];

export const PARTNERSHIPS: { name: string; image: StaticImageData; url?: string; tier?: string }[] =
  [
    {
      name: 'Citadel',
      image: citadel,
      tier: 'obsidian',
      url: 'https://www.citadel.com/',
    },
    {
      name: 'Hudson River Trading',
      image: hrt,
      tier: 'obsidian',
      url: 'https://www.hudsonrivertrading.com/',
    },
    {
      name: 'MiniMax',
      image: minimax,
      tier: 'obsidian',
      url: 'https://www.minimaxi.com/',
    },
    {
      name: 'QNX',
      image: qnx,
      tier: 'gold',
      url: 'https://blackberry.qnx.com/en',
    },
    {
      name: 'Jane Street',
      image: janestreet,
      tier: 'silver',
      url: 'https://www.janestreet.com/',
    },
    {
      name: 'Tsai CITY',
      image: tsai,
      tier: 'silver',
      url: 'https://city.yale.edu/',
    },
    {
      name: 'NVIDIA',
      image: nvidia,
      tier: 'partner',
    },
  ];

export const ORG = [
  {
    name: 'slash',
    image: slash,
  },
];

// Add this to your @data file or create a new export

export const PEOPLE = [
  {
    name: 'Benjamin Wu',
    role: 'Senior Software Engineer',
    team: 'MajorAudit',
    year: 2027,
  },
  {
    name: 'Ramya Reddy',
    role: 'Software Engineer',
    team: 'MajorAudit',
    year: 2027,
  },
  {
    name: 'Nathan Abebe',
    role: 'Software Engineer',
    team: 'MajorAudit',
    year: 2028,
  },
  {
    name: 'Matei Coldea',
    role: 'Software Engineer',
    team: 'MajorAudit',
    year: 2028,
  },
  {
    name: 'Wenhe Zhang',
    role: 'Software Engineer',
    team: 'MajorAudit',
    year: 2028,
  },
  {
    name: 'Darren Kao',
    role: 'Software Engineer',
    team: 'MajorAudit',
    year: 2028,
  },

  {
    name: 'Ephraim Akai-Nettey',
    role: 'Team Lead',
    team: 'YaleIMs',
    year: 2027,
  },
  {
    name: 'Kaitlyn Oikle',
    role: 'Software Engineer',
    team: 'YaleIMs',
    year: 2027,
  },
  {
    name: 'Daniel Morales',
    role: 'Software Engineer',
    team: 'YaleIMs',
    year: 2027,
  },
  {
    name: 'Brian Di Bassinga',
    role: 'Software Engineer',
    team: 'YaleIMs',
    year: 2026,
  },
  {
    name: 'Ella White',
    role: 'Software Engineer',
    team: 'YaleIMs',
    year: 2027,
  },
  {
    name: 'Farhan Baig',
    role: 'Software Engineer',
    team: 'YaleIMs',
    year: 2026,
  },
  {
    name: 'Vojtech Kysilka',
    role: 'Software Engineer',
    team: 'YaleIMs',
    year: 2028,
  },
  {
    name: 'Eric Yoon',
    role: 'Team Lead',
    team: 'Yalies',
    year: 2027,
  },
  {
    name: 'Kashvi Pundir',
    role: 'Software Engineer',
    team: 'Yalies',
    year: 2027,
  },
  {
    name: 'Katie Hur',
    role: 'Software Engineer',
    team: 'Yalies',
    year: 2027,
  },
  {
    name: 'Brady Exoo',
    role: 'Software Engineer',
    team: 'Yalies',
    year: 2028,
  },
  {
    name: 'Jeet Parikh',
    role: 'Software Engineer',
    team: 'ymeets',
    year: 2028,
  },

  {
    name: 'Rylan Yang',
    role: 'Software Engineer',
    team: 'ymeets',
    year: 2028,
  },
  {
    name: 'Julian Dang',
    role: 'Software Engineer',
    team: 'ymeets',
    year: 2028,
  },
  {
    name: 'Nikita Saitov',
    role: 'Software Engineer',
    team: 'ymeets',
    year: 2027,
  },
  {
    name: 'Hawa Khalif',
    role: 'Software Engineer',
    team: 'ymeets',
    year: 2027,
  },
  {
    name: 'Sebastian Gonzalez',
    role: 'Software Engineer',
    team: 'y/labs',
    year: 2028,
  },
  {
    name: 'Dohun Kim',
    role: 'Software Engineer',
    team: 'y/labs',
    year: 2028,
  },
  {
    name: 'Alan Zhong',
    role: 'Software Engineer',
    team: 'y/labs',
    year: 2028,
  },
  {
    name: 'Quantao Zhang',
    role: 'Software Engineer',
    team: 'y/labs',
    year: 2028,
  },
  {
    name: 'Christian Phanhthourath',
    role: 'Software Engineer',
    team: 'y/labs',
    year: 2028,
  },
  {
    name: 'Christina Xu',
    role: 'Software Engineer',
    team: 'y/labs',
    year: 2028,
  },
  {
    name: 'Francis Fan',
    role: 'Software Engineer',
    team: 'YaleClubs',
    year: 2027,
  },
  {
    name: 'Francis Fan',
    role: 'Software Engineer',
    team: 'YaleClubs',
    year: 2027,
  },
  {
    name: 'Alyssa Quarles',
    role: 'Software Engineer',
    team: 'YaleClubs',
    year: 2028,
  },
  {
    name: 'Neil Song',
    role: 'Team Lead',
    team: 'CourseTable',
    year: 2027,
  },
  {
    name: 'Neil Song',
    role: 'Team Lead',
    team: 'CourseTable',
    year: 2027,
  },
  {
    name: 'Aniketh Malyala',
    role: 'Team Lead',
    team: 'CourseTable',
    year: 2027,
  },
  {
    name: 'Aniketh Malyala',
    role: 'Software Engineer',
    team: 'CourseTable',
    year: 2027,
  },
  {
    name: 'Filippo Fonseca',
    role: 'Software Engineer',
    team: 'CourseTable',
    year: 2027,
  },
  {
    name: 'Filippo Fonseca',
    role: 'Software Engineer',
    team: 'CourseTable',
    year: 2027,
  },
  {
    name: 'Henry Zheng',
    role: 'Software Engineer',
    team: 'CourseTable',
    year: 2027,
  },
  {
    name: 'Jasmine Garry',
    role: 'Software Engineer',
    team: 'CourseTable',
    year: 2028,
  },
  {
    name: 'Alex Schapiro',
    role: 'Senior Software Engineer',
    team: 'CourseTable',
    year: 2026,
  },
  {
    name: 'Sida Chen',
    role: 'Senior Software Engineer',
    team: 'CourseTable',
    year: 2026,
  },
  {
    name: 'Ro Malik',
    role: 'Software Engineer',
    team: 'CourseTable',
    year: 2027,
  },
  {
    name: 'Reyansh Bahl',
    role: 'Software Engineer',
    team: 'CourseTable',
    year: 2028,
  },
  {
    name: 'Wesley Antônio Machado Andrade de Aguiar',
    role: 'Software Engineer',
    team: 'CourseTable',
    year: 2026,
  },
  {
    name: 'Kenny Tung',
    role: 'Senior Software Engineer',
    team: 'CourseTable',
    year: 2026,
  },
  {
    name: 'Abheek Dhawan',
    role: 'Software Engineer',
    team: 'CourseTable',
    year: 2026,
  },
];

export const EVENTS = [
  {
    id: 'e001',
    title: 'y/cs Gala 2025',
    date: '2025-04-28', // Use ISO format for easier date comparison
    time: '8:30 PM - 10:30 PM',
    location: 'SSS 114, Yale University',
    description:
      'Hear details on the progress of our projects and enjoy some food and drinks as we celebrate the end of the year',
    image: gala,
    tags: ['Mixer'],
  },
  {
    id: 'e002',
    title: 'The Danger of "Deploy"',
    date: '2025-09-18',
    time: '6:30 PM - 7:30 PM',
    location: 'Tsai CITY, Yale University',
    description:
      'Learn about practical topics in cybersecurity with a panel of students, professors, and alumni',
    image: gala,
    tags: ['Speaker Event'],
  },
  {
    id: 'e003',
    title: 'y/cs Orientation 2025',
    date: '2025-09-28',
    time: '7:00 PM - 10:00 PM',
    location: 'Tsai CITY, Yale University',
    description:
      'Come meet new y/cs members and developers, competing in teams to complete challenges across campus',
    image: gala,
    tags: ['Orientation'],
  },
  {
    id: 'e004',
    title: 'y/cs Bobathon',
    date: '2025-10-11',
    time: '2:00 PM - 5:00 PM',
    location: 'Tsai CITY, Yale University',
    description:
      'Come work on projects and enjoy free boba during an afternoon hackathon!',
    image: gala,
    tags: ['Hackathon'],
  },
  {
    id: 'e005',
    title: 'Mario Kart Mixer with Yale Colorstack',
    date: '2025-10-30',
    time: '7:00 PM - 9:00 PM',
    location: 'Tsai CITY, Yale University',
    description:
      'Join us for a mixer with members of Yale Colorstack with Mario Kart and fruit',
    image: gala,
    tags: ['Mixer'],
  },
  {
    id: 'e006',
    title: 'Catalyst Mixer: Meet, Mingle, & Build',
    date: '2025-11-16',
    time: '3:00 PM - 5:00 PM',
    location: 'Tsai CITY, Yale University',
    description:
      'For all mentees of the y/cs Catalyst program, come brainstorm ideas for final projects and form teams',
    image: gala,
    tags: ['Mixer'],
  },
  {
    id: 'e007',
    title: 'From Yale to Netflix: A Conversation with a y/cs Alumn',
    date: '2025-11-20',
    time: '7:00 PM - 9:00 PM',
    location: 'Tsai CITY, Yale University',
    description:
      'Fireside chat with Ethan Mathieu and Anna Xu about life post-Yale and advice for current underclassmen',
    image: gala,
    tags: ['Speaker Event'],
  },
  {
    id: 'e008',
    title: 'y/cs Winter Demo Day, 2025',
    date: '2025-12-06',
    time: '4:00 PM - 6:00 PM',
    location: 'Tsai CITY, Yale University',
    description:
      'Come for a celebration and recap of the work done by y/cs members this past semester',
    image: gala,
    tags: ['Mixer'],
  },
  {
    id: 'e009',
    title: 'Yale Meals Study Break!',
    date: '2025-12-09',
    time: '2:00 PM - 4:00 PM',
    location: 'Bass Cafe, Yale University',
    description:
      'Join us in Bass Cafe for free baked goods in celebration of the Yale Meals beta release!',
    image: gala,
    tags: ['Product Promo'],
  },
  {
    id: 'e010',
    title: 'STEM Navigators',
    date: '2025-01-16',
    time: '3:00 PM - 5:00 PM',
    location: 'Poorvu Center, Yale University',
    description:
      'Stop by to chat with members of the y/cs Board about plans for the upcoming semester',
    image: gala,
    tags: ['Fair'],
  },
  {
    id: 'e011',
    title: 'The Danger of "Deploy',
    date: '2025-09-18',
    time: '6:30 PM - 7:30 PM',
    location: 'Tsai CITY, Yale University',
    description:
      'Learn about practical topics in cybersecurity with a panel of students, professors, and alumni',
    image: gala,
    tags: ['Speaker Event'],
  },
  {
    id: 'e012',
    title: "Frank Pepe's Welcome Lunch with David Wu",
    date: '2026-01-29',
    time: '1:10 PM - 2:00 PM',
    location: 'Tsai CITY, Yale University',
    description:
      'Welcome our West-Coast speaker, David Wu, with a small group lunch in Tsai CITY',
    image: gala,
    tags: ['Mixer'],
  },
  {
    id: 'e013',
    title: 'y/cs The Reality Gap with David Wu',
    date: '2026-01-29',
    time: '6:00 PM - 7:00 PM',
    location: 'Tsai CITY, Yale University',
    description:
      'Get insight from Certified Professional Coach David Wu on post-grad career options for Computer Science',
    image: gala,
    tags: ['Speaker Event'],
  },
  {
    id: 'e014',
    title: 'y/cs Incubator Build Session',
    date: '2026-02-06',
    time: '3:00 PM - 4:00 PM',
    location: 'Tsai CITY, Yale University',
    description:
      'Form teams for brand new projects as a part of the y/cs Incubator program. Haven Hot Chicken provided',
    image: gala,
    tags: ['Mixer'],
  },
  {
    id: 'e015',
    title: 'y/cs x MiniMax Agents and AI Hackathon Kickoff',
    date: '2026-02-19',
    time: '6:30 PM - 8:30 PM',
    location: 'Tsai CITY, Yale University',
    description:
      'Join us for the kickoff of the y/cs x MiniMax Agents and AI Hackathon. Hear logistics, tracks, and guidelines for the competition',
    image: gala,
    tags: ['Hackathon'],
  },
  {
    id: 'e016',
    title: 'Yale Engineering Innovation Expo',
    date: '2026-02-27',
    time: '3:30 PM - 6:00 PM',
    location: 'CEID, Yale University',
    description:
      'Stop by to hear about new opportunities for developers in y/cs!',
    image: gala,
    tags: ['Fair'],
  },
  {
    id: 'e017',
    title: 'y/cs x MiniMax Agents and AI Hackathon Gallery Walk',
    date: '2026-02-28',
    time: '4:00 PM - 5:30 PM',
    location: 'Tsai CITY, Yale University',
    description:
      'Present your project at the end of the y/cs x MiniMax Agents and AI Hackathon. Winners will be revealed',
    image: gala,
    tags: ['Hackathon'],
  },
  {
    id: 'e018',
    title: 'Fireside Chat with QNX VP Grant Courville',
    date: '2026-03-27',
    time: '7:00 PM - 8:00 PM',
    location: 'Tsai CITY, Yale University',
    description:
      'Hear from QNX VP Grant Courville about the unique design considerations and strategic implications of the embedded systems industry',
    image: gala,
    tags: ['Speaker Event'],
  },
  {
    id: 'e019',
    title: 'Technical Interview Workshop and Early Career Advice with Visa',
    date: '2026-03-31',
    time: '6:00 PM - 7:00 PM',
    location: 'WLH 116, Yale University',
    description:
      'Learn about the recruiting process for technical roles at Visa. Free Chick-fil-A and swag will be provided!',
    image: gala,
    tags: ['Workshop'],
  },
  {
    id: 'e020',
    title: 'Marshall Wace: How to Prepare for the Industry',
    date: '2026-04-16',
    time: '6:00 PM - 8:00 PM',
    location: 'TBA',
    description:
      'Engineers from Marshall Wace will be joining y/cs to share their perspectives on what skills and expertise make for a highly impactful engineer.',
    image: marshall_wace,
    tags: ['Workshop'],
    link: "https://job-boards.greenhouse.io/mwamevents/jobs/8486856002",
    link_text: "Apply"
  },
  {
    id: 'e021',
    title: 'AI in Practice: Applications at Bobyard',
    date: '2026-04-17',
    time: '3:00 PM - 4:00 PM',
    location: 'Tsai CITY, Yale University',
    description:
      'Bobyard Computer Vision Research Engineer Raphaël Levisse joins y/cs to talk about applications of AI in the construction industry',
    image: bobyard,
    tags: ['Speaker Event'],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfHB30HqBy72ilPgRueXgiWLvrG63UsHxdb0hSgmK2E7EM4sA/viewform?usp=publish-editor",
    link_text: "RSVP"
  },
];

export interface Member {
  name: string;
  class: string;
  team: string;
  role: string;
}

export async function loadMembers(): Promise<Member[]> {
  const response = await fetch('/members/ycs_members.csv');
  const text = await response.text();
  const result = Papa.parse<Member>(text, {
    header: true,
    skipEmptyLines: true,
  });
  return result.data;
}
