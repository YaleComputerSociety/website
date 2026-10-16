// Content for the 2026 redesign (home, products, events, team, sponsors).
// Edit this file to update copy, photos, sponsors or alumni logos without touching page layout.
import type { StaticImageData } from 'next/image';

// Product logos
import coursetableLogo from '@assets/products/logos/coursetable.png';
import yaliesLogo from '@assets/products/logos/yalies.png';
import yalemealsLogo from '@assets/products/logos/yale_meals_logo.png';
import ymeetsLogo from '@assets/products/logos/ymeetslogo.png';
import ylabsLogo from '@assets/products/logos/ylabs.png';
import yimsLogo from '@assets/products/logos/yims.png';
import yaleclubsLogo from '@assets/products/logos/yaleclubs.png';
import majorauditLogo from '@assets/products/logos/majoraudit.png';

// Product screenshots (captured October 2026; Yalies has student details blurred)
import coursetableShot from '@assets/products/screenshots/coursetable.jpg';
import yaliesShot from '@assets/products/screenshots/yalies.jpg';
import yalemealsShot from '@assets/products/screenshots/yalemeals.jpg';
import ymeetsShot from '@assets/products/screenshots/ymeets.jpg';
import ylabsShot from '@assets/products/screenshots/ylabs.jpg';
import yimsShot from '@assets/products/screenshots/yaleims.jpg';
import yaleclubsShot from '@assets/products/screenshots/yaleclubs.jpg';
import majorauditShot from '@assets/products/screenshots/majoraudit.jpg';

// Sponsors
import citadel from '@assets/partnerships/citadel-white.png';
import hrtWhite from '@assets/partnerships/hrt.png';
import janeStreet from '@assets/partnerships/JaneStreet.png';
import deshaw from '@assets/partnerships/deshaw.png';
import minimax from '@assets/partnerships/minimax-horizontal.webp';
import qnx from '@assets/partnerships/qnx-trimmed.png';
import tsai from '@assets/partnerships/tsaicity-wordmark.webp';

// Alumni companies
import google from '@assets/companies/google.png';
import meta from '@assets/companies/meta.png';
import microsoft from '@assets/companies/microsoft.png';
import amazon from '@assets/companies/amazon.png';
import nvidia from '@assets/companies/nvidia.png';
import netflix from '@assets/companies/netflix.png';
import linkedin from '@assets/companies/linkedin.png';
import salesforce from '@assets/companies/salesforce-white.png';
import redhat from '@assets/companies/red-hat.png';
import openai from '@assets/companies/openai.png';
import databricks from '@assets/companies/databricks-horizontal.png';
import roblox from '@assets/companies/roblox.png';
import coinbase from '@assets/companies/coinbase.png';
import plaid from '@assets/companies/plaid.png';
import yCombinator from '@assets/companies/y-combinator.png';
import janeStreetAlumni from '@assets/companies/jane-street.png';
import optiver from '@assets/companies/optiver-white.png';
import bloomberg from '@assets/companies/bloomberg.png';
import morganStanley from '@assets/companies/morgan-stanley.png';
import mckinsey from '@assets/companies/mckinsey.png';
import bcg from '@assets/companies/bcg.png';

// Photos
import demoDayPackedRoom from '@assets/photos/demo-day/demo-day-packed-room.jpg';
import demoDayAudience from '@assets/photos/demo-day/demo-day-audience.jpg';
import demoDayFourPresenters from '@assets/photos/demo-day/demo-day-four-presenters.jpg';
import demoDayHosts from '@assets/photos/demo-day/demo-day-hosts.jpg';
import tailgateTeam from '@assets/photos/launches/yaleims-tailgate-team.jpg';
import boothBanner from '@assets/photos/launches/yaleims-booth-banner.jpg';
import hackathonWinners from '@assets/photos/hackathon/hackathon-1st-place.jpg';
import hackathonPitch from '@assets/photos/hackathon/hackathon-fizzbuzz-pitch.jpg';
import techTalkHall from '@assets/photos/sponsor-events/tech-talk-packed-hall.jpg';
import techTalkPanel from '@assets/photos/sponsor-events/tech-talk-panel.jpg';
import workshopPacked from '@assets/photos/fall-2026/workshop-packed.jpg';
import teamGroupPhoto from '@assets/photos/fall-2026/team-group-photo.jpg';
import teamTableDiscussion from '@assets/photos/fall-2026/team-table-discussion.jpg';
import buildNightPointing from '@assets/photos/build-sessions/build-night-pointing.jpg';
import buildNightTrio from '@assets/photos/build-sessions/build-night-trio.jpg';
import santaHats from '@assets/photos/community/holiday-santa-hats.jpg';
import holidayParty from '@assets/photos/community/holiday-party-group.jpg';
import gameNight from '@assets/photos/community/game-night.jpg';
import firesideChat from '@assets/photos/community/fireside-chat.jpg';
import tsaiGroupPhoto from '@assets/photos/community/tsai-group-photo.jpg';
import bazaarBoothDuo from '@assets/photos/bazaar/bazaar-booth-duo.jpg';
import bazaarCrowd from '@assets/photos/bazaar/bazaar-crowd-packed.jpg';
import bazaarBooth2026 from '@assets/photos/bazaar/bazaar-booth-2026.jpg';
import gala from '@assets/groupphoto.jpg';

export const CONTACT_EMAIL = 'yalecomputersociety@gmail.com';
export const CALENDAR_SUBSCRIBE_URL =
  'https://calendar.google.com/calendar/u/0?cid=dDZpc3Vkb2RxY3BiMnVlcGNrOTlqbWp0M29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ';
export const INSTAGRAM_URL = 'https://www.instagram.com/yalecomputersociety/';
export const GITHUB_URL = 'https://github.com/YaleComputerSociety';

export type Photo = { src: StaticImageData; alt: string };

export const HERO_PHOTO: Photo = {
  src: demoDayPackedRoom,
  alt: 'A packed room watching teams present at y/cs Demo Day',
};

export const STATS = [
  { value: '20,000+', label: 'people use y/cs apps' },
  { value: '80+', label: 'student developers & designers' },
  { value: '7', label: 'products live on campus' },
  { value: '50+', label: 'Catalyst mentees each year' },
];

export type Product = {
  id: string;
  name: string;
  short: string;
  tag: string;
  url: string;
  cta: string;
  leads: string;
  logo: StaticImageData;
  shot: StaticImageData;
  alt: string;
  desc: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 'coursetable',
    name: 'CourseTable',
    short: 'Courses',
    tag: 'Course search & reviews · coursetable.com',
    url: 'https://coursetable.com',
    cta: 'Open CourseTable',
    leads: 'William Feng, Aryan Sharma',
    logo: coursetableLogo,
    shot: coursetableShot,
    alt: 'The CourseTable catalog showing Fall 2026 courses with ratings and workload',
    desc: 'The course browser nearly every Yalie opens during shopping period. Ratings, workloads, professors and meeting times for every course in one sortable table, plus a worksheet to plan your schedule.',
  },
  {
    id: 'yalies',
    name: 'Yalies',
    short: 'Directory',
    tag: 'Student directory · yalies.io',
    url: 'https://yalies.io',
    cta: 'Open Yalies',
    leads: 'Yavin Fickel',
    logo: yaliesLogo,
    shot: yaliesShot,
    alt: 'The Yalies directory, with student details blurred',
    desc: 'The searchable directory of the Yale community, filterable by college, year and major, with a public API other student developers build on.',
  },
  {
    id: 'yalemeals',
    name: 'YaleMeals',
    short: 'Dining · iOS',
    tag: 'iOS app · 4.8★ on the App Store',
    url: 'https://apps.apple.com/us/app/yalemeals/id6755962674',
    cta: 'Get it on the App Store',
    leads: 'Gavin Onghai',
    logo: yalemealsLogo,
    shot: yalemealsShot,
    alt: 'YaleMeals App Store screenshots showing dining hall menus and dish ratings',
    desc: 'Every dining hall menu and its hours in your pocket. Rate dishes, log meals and see what is good tonight before you walk over.',
  },
  {
    id: 'ymeets',
    name: 'ymeets',
    short: 'Scheduling',
    tag: 'Group scheduling · ymeets.com',
    url: 'https://ymeets.com',
    cta: 'Open ymeets',
    leads: 'Ishani Singh, Jaden Cohen',
    logo: ymeetsLogo,
    shot: ymeetsShot,
    alt: 'The ymeets homepage: group scheduling without the back-and-forth',
    desc: 'Create an event, share the link, pick a time. Synced with Google Calendar, so finding a time for a group project or club meeting takes seconds.',
  },
  {
    id: 'ylabs',
    name: 'y/labs',
    short: 'Research',
    tag: 'Research database · yalelabs.io',
    url: 'https://yalelabs.io',
    cta: 'Open y/labs',
    leads: 'Peter Yu, Tanav Prabhu',
    logo: ylabsLogo,
    shot: ylabsShot,
    alt: 'The y/labs research search page',
    desc: 'Search 3,400+ Yale research profiles by topic, professor or method, filter by school and department, and find a lab that fits you.',
  },
  {
    id: 'yaleims',
    name: 'YaleIMs',
    short: 'Intramurals',
    tag: 'Intramural sports · yaleims.com',
    url: 'https://yaleims.com',
    cta: 'Open YaleIMs',
    leads: 'Vojtech Kysilka, Ben Le',
    logo: yimsLogo,
    shot: yimsShot,
    alt: 'YaleIMs Tyng Cup standings for 2026–2027',
    desc: 'Live Tyng Cup standings, schedules, playoff brackets and scores for every residential college, all in one place.',
  },
  {
    id: 'yaleclubs',
    name: 'YaleClubs',
    short: 'Clubs & events',
    tag: 'Clubs & events · yaleclubs.io',
    url: 'https://yaleclubs.io',
    cta: 'Open YaleClubs',
    leads: 'Grady Yu',
    logo: yaleclubsLogo,
    shot: yaleclubsShot,
    alt: 'The YaleClubs browse page',
    desc: 'Browse and follow every club at Yale, filter by category, and see what is happening on campus this week.',
  },
  {
    id: 'majoraudit',
    name: 'MajorAudit',
    short: 'Degree planning',
    tag: 'In development · majoraudit.web.app',
    url: 'https://majoraudit.web.app',
    cta: 'Preview MajorAudit',
    leads: 'Mateo Rodriguez',
    logo: majorauditLogo,
    shot: majorauditShot,
    alt: 'The MajorAudit requirements tracker',
    desc: 'See distributional and major requirements across all four years, and plan the courses that get you to graduation.',
  },
];

export type Logo = {
  name: string;
  src: StaticImageData;
  /** Rendered height in px (tuned per mark so they read at a similar size). */
  height: number;
  /** Already a white mark — skip the white filter. */
  alreadyWhite?: boolean;
};

export const SPONSORS: Logo[] = [
  { name: 'Citadel', src: citadel, height: 20, alreadyWhite: true },
  { name: 'Hudson River Trading', src: hrtWhite, height: 34, alreadyWhite: true },
  { name: 'Jane Street', src: janeStreet, height: 32 },
  { name: 'D. E. Shaw & Co.', src: deshaw, height: 26 },
  { name: 'MiniMax', src: minimax, height: 28 },
  { name: 'QNX', src: qnx, height: 22 },
  { name: 'Tsai CITY', src: tsai, height: 30 },
];

// Grouped: big tech, AI/data/startups, trading & finance, consulting.
export const ALUMNI: Logo[] = [
  { name: 'Google', src: google, height: 24 },
  { name: 'Meta', src: meta, height: 24 },
  { name: 'Microsoft', src: microsoft, height: 24 },
  { name: 'Amazon', src: amazon, height: 24 },
  { name: 'NVIDIA', src: nvidia, height: 30 },
  { name: 'Netflix', src: netflix, height: 24 },
  { name: 'LinkedIn', src: linkedin, height: 24 },
  { name: 'Salesforce', src: salesforce, height: 32, alreadyWhite: true },
  { name: 'Red Hat', src: redhat, height: 28 },
  { name: 'OpenAI', src: openai, height: 24 },
  { name: 'Databricks', src: databricks, height: 24 },
  { name: 'Roblox', src: roblox, height: 22 },
  { name: 'Coinbase', src: coinbase, height: 22 },
  { name: 'Plaid', src: plaid, height: 26 },
  { name: 'Y Combinator', src: yCombinator, height: 24 },
  { name: 'Jane Street', src: janeStreetAlumni, height: 24 },
  { name: 'Optiver', src: optiver, height: 24, alreadyWhite: true },
  { name: 'Bloomberg', src: bloomberg, height: 24 },
  { name: 'Morgan Stanley', src: morganStanley, height: 30 },
  { name: 'McKinsey & Company', src: mckinsey, height: 24 },
  { name: 'BCG', src: bcg, height: 24 },
];

export type GridPhoto = Photo & { caption: string; wide?: boolean; tall?: boolean };

export const LIFE_PHOTOS: GridPhoto[] = [
  {
    src: tailgateTeam,
    alt: 'y/cs members at the YaleIMs launch booth on campus',
    caption: 'YaleIMs Launch',
    wide: true,
    tall: true,
  },
  {
    src: hackathonWinners,
    alt: 'First-place team at the MiniMax hackathon',
    caption: 'MiniMax Hackathon winners',
  },
  {
    src: demoDayFourPresenters,
    alt: 'Four team members presenting at Demo Day',
    caption: 'Demo Day',
  },
  {
    src: techTalkHall,
    alt: 'A packed lecture hall at the Visa recruiting event',
    caption: 'Visa Recruiting Event',
    wide: true,
  },
  {
    src: workshopPacked,
    alt: 'Students working at the OpenAI technical workshop',
    caption: 'OpenAI Technical Workshop',
    wide: true,
  },
  {
    src: buildNightPointing,
    alt: 'Two Catalyst members pointing at their project on a big screen',
    caption: 'Catalyst Projects',
  },
  {
    src: santaHats,
    alt: 'Members in Santa hats at the holiday Demo Day',
    caption: 'Holiday Demo Day',
  },
  {
    src: bazaarBoothDuo,
    alt: 'Two members at the y/cs booth at the EC Bazaar',
    caption: 'EC Bazaar',
    wide: true,
  },
  {
    src: gameNight,
    alt: 'Members playing video games at Tsai CITY',
    caption: 'Game night at Tsai CITY',
    wide: true,
  },
];

export const WAYS_IN = [
  {
    path: '/catalyst',
    title: 'Learn to build',
    body: 'A semester-long mentorship program. Go from first commit to a deployed portfolio project with an upperclass mentor.',
    tag: 'No experience needed · Fall & Spring',
    photo: { src: teamTableDiscussion, alt: 'Catalyst members talking around a table' },
  },
  {
    path: '/dev',
    title: 'Ship real products',
    body: 'Join a product team with a lead, a roadmap and real users. Code review, design crits, launches.',
    tag: 'For engineers & designers ready to build',
    photo: { src: buildNightTrio, alt: 'Three dev team members smiling at a build night' },
  },
  {
    path: '/community',
    title: 'Meet the industry',
    body: 'Tech talks and recruiting dinners with our sponsors, game nights and socials, and our end-of-year gala.',
    tag: 'Every skill level · open to all Yale students',
    photo: { src: firesideChat, alt: 'A fireside chat with a guest speaker at Tsai CITY' },
  },
];

export const EVENT_TYPES = [
  {
    name: 'Demo Days',
    photo: { src: demoDayPackedRoom, alt: 'A packed room at Demo Day' },
    desc: 'Every product team shows what it shipped this semester to a full room.',
  },
  {
    name: 'Hackathons',
    photo: { src: hackathonWinners, alt: 'MiniMax Hackathon winners' },
    desc: 'Build something in an afternoon or a weekend, with sponsor prizes on the line.',
  },
  {
    name: 'Workshops',
    photo: { src: workshopPacked, alt: 'OpenAI Technical Workshop' },
    desc: 'Hands-on sessions with engineers from companies like OpenAI.',
  },
  {
    name: 'Recruiting',
    photo: { src: techTalkHall, alt: 'Visa Recruiting Event' },
    desc: 'Meet recruiters and engineers from our sponsors and partner companies.',
  },
  {
    name: 'Socials',
    photo: { src: gameNight, alt: 'Game night at Tsai CITY' },
    desc: 'Game nights, mixers, the holiday party and our end-of-year gala.',
  },
];

export const EVENT_GALLERY: GridPhoto[] = [
  {
    src: tsaiGroupPhoto,
    alt: 'A large y/cs group photo in front of the Tsai CITY backdrop',
    caption: '',
    wide: true,
    tall: true,
  },
  {
    src: bazaarCrowd,
    alt: 'Crowds of students at the y/cs table at the EC Bazaar',
    caption: '',
  },
  { src: holidayParty, alt: 'Members at the y/cs holiday party', caption: '' },
  { src: techTalkPanel, alt: 'A sponsor panel presenting to students', caption: '' },
  { src: hackathonPitch, alt: 'A hackathon team pitching their project', caption: '' },
  {
    src: demoDayHosts,
    alt: 'Hosts in Santa hats opening the holiday Demo Day',
    caption: '',
    wide: true,
  },
  { src: firesideChat, alt: 'A fireside chat at Tsai CITY', caption: '' },
  { src: bazaarBooth2026, alt: 'The y/cs booth at the 2026 EC Bazaar', caption: '' },
];

export const EVENTS_HERO: Photo = { src: demoDayAudience, alt: 'A full audience at y/cs Demo Day' };
export const TEAM_HERO: Photo = {
  src: teamGroupPhoto,
  alt: 'The y/cs team posing together at a fall 2026 event',
};

export const PAST_EVENTS = [
  {
    date: 'Nov 16, 2025',
    title: 'Catalyst Mixer: Meet, Mingle & Build',
    where: 'Tsai CITY',
    type: 'Catalyst',
  },
  {
    date: 'Oct 30, 2025',
    title: 'Mario Kart Mixer with Yale ColorStack',
    where: 'Tsai CITY',
    type: 'Mixer',
  },
  { date: 'Oct 11, 2025', title: 'y/cs Bobathon', where: 'Tsai CITY', type: 'Hackathon' },
  { date: 'Sep 28, 2025', title: 'y/cs Orientation 2025', where: 'Tsai CITY', type: 'Orientation' },
  {
    date: 'Sep 18, 2025',
    title: 'The Danger of "Deploy"',
    where: 'Tsai CITY',
    type: 'Speaker event',
  },
  { date: 'Apr 28, 2025', title: 'y/cs Gala 2025', where: 'SSS 114', type: 'Mixer' },
];

// Join page
export const APPLY_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeiYwNUGe0Z0FmVFXZLRe-Obzt84yMLqZ6Ji6o_cYkVcIX7Ng/viewform';
/** Flip to false to show the "applications closed" state on the Join page. */
export const APPLICATIONS_OPEN = true;

export const JOIN_HERO: Photo = {
  src: bazaarBooth2026,
  alt: 'y/cs members at the club booth during the 2026 EC Bazaar',
};

export const JOIN_STATS = [
  { value: '100%', label: 'acceptance for general members' },
  { value: '80+', label: 'student developers & designers' },
  { value: '7', label: 'products live on campus' },
  { value: 'Rolling', label: 'applications, open year-round' },
];

export const JOIN_ROLES = [
  {
    path: '/general',
    title: 'General Member',
    body: 'Attend workshops, hackathons and speaker events, contribute to our blog, and build projects with other members.',
    tag: '100% acceptance · every skill level',
    photo: { src: tsaiGroupPhoto, alt: 'y/cs members together at Tsai CITY' },
  },
  {
    path: '/dev',
    title: 'Software Engineer',
    body: 'Develop one of y/cs’s current or upcoming products. Work with your team every week in a startup-like environment.',
    tag: 'Selective · application + product challenge',
    photo: {
      src: buildNightPointing,
      alt: 'A developer presenting their work at a y/cs build night',
    },
  },
  {
    path: '/catalyst',
    title: 'Catalyst Developer',
    body: 'Hone your skills in a beginner-friendly program designed to prepare you to work on one of our products.',
    tag: 'No experience needed · selective',
    photo: { src: teamTableDiscussion, alt: 'Catalyst members talking around a table' },
  },
];

export const JOIN_STEPS = [
  {
    title: 'Written application',
    body: [
      'Tell us which divisions or teams you’re interested in, share a bit about yourself, and why you want to join y/cs.',
    ],
  },
  {
    title: 'Interview & challenge',
    body: [
      'For y/cs Development, you’ll complete a short product challenge that shows us how you think about building software: explore our products, find what you would improve or add, and tell us what you want to work on.',
      'Selected applicants then meet with Development team leads to talk through their ideas, experience, interests and how they might contribute to a team.',
    ],
  },
  {
    title: 'Team placement',
    body: [
      'Based on your written application and interview, you’re placed on a y/cs team within weeks of the application deadline, as space permits.',
    ],
  },
];

export const JOIN_FAQ = [
  {
    q: 'What do you mean by “100% acceptance”?',
    a: [
      'Exactly what it sounds like. Everyone who applies is accepted as a general member, whatever their technical background. General members contribute to the y/cs blog, attend events and hackathons, work on projects with other members, and can opt in to our internship recruitment pipeline.',
      'Our development teams (CourseTable, Yalies and more) and the Catalyst program are sub-divisions that general members can apply to join. For purely logistical reasons, they are more selective.',
    ],
  },
  {
    q: 'Do I need prior experience?',
    a: [
      'Not at all. Catalyst is designed for beginners who want to learn development. For more advanced roles experience helps, but enthusiasm and willingness to learn matter just as much.',
    ],
  },
  {
    q: 'What is the time commitment?',
    a: [
      'It depends on the role. Development teams typically meet 2–3 hours a week, plus time for individual work. Catalyst asks for 4–6 hours a week.',
    ],
  },
  {
    q: 'Do I need to be a CS major?',
    a: [
      'No. We welcome students from every major and background. Many of our most successful members come from outside CS but share a passion for technology.',
    ],
  },
  {
    q: 'When will I hear back?',
    a: [
      'We typically review applications within 1–3 weeks of the deadline. You’ll hear by email about interviews and final decisions.',
    ],
  },
];

export const SPONSOR_HERO: Photo = {
  src: boothBanner,
  alt: 'The y/cs launch booth on campus; its banner lists sponsors HRT, QNX, Tsai CITY and Jane Street',
};

export const SPONSOR_STATS = [
  { value: '20,000+', label: 'users across y/cs apps' },
  { value: '80+', label: 'active developers & designers' },
  { value: '500+', label: 'event attendees per semester' },
  { value: '7', label: 'products in production, run by students' },
];

export const SPONSOR_STRIP: Photo[] = [
  { src: demoDayAudience, alt: 'A full audience at y/cs Demo Day' },
  { src: bazaarCrowd, alt: 'Crowds of students around the y/cs table at the EC Bazaar' },
  { src: tsaiGroupPhoto, alt: 'A large y/cs group photo in front of the Tsai CITY backdrop' },
  { src: techTalkPanel, alt: 'A sponsor panel presenting to students in a lecture hall' },
];

export const PARTNERSHIP_TYPES = [
  {
    title: 'Tech talks',
    body: 'Your engineers present to a full room. We handle the venue, food and promotion.',
    photo: { src: techTalkHall, alt: 'A packed lecture hall at a sponsor tech talk' },
  },
  {
    title: 'Demo days & hackathons',
    body: 'Judge, mentor or set a challenge. See how students build under pressure.',
    photo: { src: hackathonPitch, alt: 'A hackathon team pitching their project on a big screen' },
  },
  {
    title: 'Recruiting & the gala',
    body: 'Coffee chats with members, recruiting events, and a seat at our end-of-year gala.',
    photo: { src: gala, alt: 'y/cs members at the annual gala' },
  },
];
