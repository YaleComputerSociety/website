// Product imports
import { StaticImageData } from 'next/image';

// Logos
import coursetable from './assets/products/logos/coursetable.png';
import yalies from './assets/products/logos/yalies.png';
import ymeets from './assets/products/logos/ymeetslogo.png';
import yaleclubs from './assets/products/logos/yaleclubs.svg';
import yims from './assets/products/logos/yims.png';
import ylabs from './assets/products/logos/ylabs.png';
import slash from './assets/ycs-slash.png';
// Product headers
import coursetableHeader from './assets/products/coursetable/headerimage.png';
import yaliesHeader from './assets/products/yalies/headerimage.png';
import ymeetsHeader from './assets/products/ymeets/headerimage.png';
// Media imports
import email from './assets/email2.png';
import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';
// People imports
import daniel from './assets/people/daniel.jpeg';
import neil from './assets/people/neil.jpeg';
import eric from './assets/people/eric.jpeg';
import LilyLin from './assets/people/LilyLin.png';

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
import meta from './assets/partnerships/meta.png';
import bloomberg from './assets/partnerships/bloomberg.jpeg';
import janestreet from './assets/partnerships/janestreet.jpeg';
import tsai from './assets/partnerships/tsaicity.png';
import gala from '@assets/ycs.png';

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
    year: 2026,
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

  // product leads
  {
    name: 'Neil Song',
    image: neil,
    role: 'Team Lead',
    year: 2027,
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
    name: 'Eric Yoon',
    image: eric,
    role: 'Team Lead',
    year: 2027,
    team: 'Yalies',
  },

  {
    name: 'Rylan Yang',
    image: rylan,
    role: 'Team Lead',
    year: 2028,
    team: 'ymeets',
  },
  {
    name: 'Jeet Parkih',
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
    name: 'Ephraim Akrai-Nettey',
    image: ephraim,
    role: 'Team Lead',
    year: 2027,
    team: 'YaleIMs',
  },
  {
    name: 'Ryan Gumlia',
    image: ryan,
    role: 'Team Lead',
    year: 2026,
    team: 'MajorAudit',
  },

  /* Fix */
  {
    name: 'Ryan Fernandes',
    image: ryanf,
    role: 'Team Lead',
    year: 2027,
    team: 'y/labs',
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
    shouldIconBeRounded: true,
    isBackgroundWhite: true,
    live: false,
    link: 'https://majoraudit.web.app/',
    logo: undefined,
  },
  {
    name: 'y/labs',
    logo: ylabs,
    headerImage: undefined,
    link: 'https://rdb.onrender.com/',
    description: 'Database visualizer for Yale research.',
    live: true,
    shouldIconBeRounded: true,
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
      'The y/cs Catalyst program began, dedicated to teaching then ext generation of software engineers at Yale.',
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

export const PARTNERSHIPS: { name: string; image: StaticImageData; url?: string }[] = [
  {
    name: 'Meta',
    image: meta,
  },
  {
    name: 'Bloomberg',
    image: bloomberg,
  },
  {
    name: 'Jane Street',
    image: janestreet,
  },
  {
    name: 'Tsai City',
    image: tsai,
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
    name: 'Jeet Parkih',
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
];
