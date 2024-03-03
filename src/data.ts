// Product imports
import { StaticImageData } from "next/image";

import coursetable from "./assets/products/logos/coursetable.png";
import yalies from "./assets/products/logos/yalies.png";
import ymeets from "./assets/products/logos/ymeets.png";
import yalebutteries from "./assets/products/logos/yalebutteries.jpg";
import roomadvisor from "./assets/products/logos/roomadvisor.png";
import autodonation from "./assets/products/logos/autodonation.svg";
// Media imports
import email from "./assets/email2.png";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
// People imports
import kelvin from "./assets/people/kelvin.jpg";
import bill from "./assets/people/bill.jpg";
import katherine from "./assets/people/katherine.jpg";
import lauren from "./assets/people/lauren.jpg";
import addison from "./assets/people/addison.jpg";
import nabil from "./assets/people/nabil.jpg";
import ethan from "./assets/people/ethan.jpeg";
import amina from "./assets/people/amina.png";
import anna from "./assets/people/anna.jpeg";
import daniel from "./assets/people/daniel.jpeg";
import betti from "./assets/people/betti.jpeg";
import lorenss from "./assets/people/lorenss.jpeg";
import kai from "./assets/people/kai.jpeg";
import jessica from "./assets/people/jessica.jpeg";
import fatima from "./assets/people/fatima.jpeg";
import tyler from "./assets/people/tyler.jpeg";
import alex from "./assets/people/alex.jpeg";
import sida from "./assets/people/sida.jpeg";
import chase from "./assets/people/chase.jpeg";
import nicholas from "./assets/people/nicholas.jpeg";
import ian from "./assets/people/ian.jpeg";
import neil from "./assets/people/neil.jpeg";
import ericyoon from "./assets/people/ericyoon.jpeg";
// import defaultPerson from "./assets/people.jpeg";
// partnerships import
import meta from "./assets/partnerships/meta.png";
import bloomberg from "./assets/partnerships/bloomberg.jpeg";
import janestreet from "./assets/partnerships/janestreet.jpeg";
import tsai from "./assets/partnerships/tsaicity.png";

export interface Person {
  name: string;
  image: StaticImageData;
  role: string[];
}

export const BOARD: Person[] = [
  {
    name: "Addison Goolsbee",
    image: addison,
    role: ["President"],
  },
  {
    name: "Ethan Mathieu",
    image: ethan,
    role: ["Vice President"],
  },
  {
    name: "Katherine He",
    image: katherine,
    role: ["Director of Development"],
  },
  {
    name: "Amina Sakho",
    image: amina,
    role: ["Vice Director of Development"],
  },
  {
    name: "Betti Tang",
    image: betti,
    role: ["Co-Director of Events"],
  },
  {
    name: "Daniel Wang",
    image: daniel,
    role: ["Co-Director of Events"],
  },
  {
    name: "Jessica Le",
    image: jessica,
    role: ["Co-Director of Outreach & Recruitment"],
  },
  {
    name: "Fatima Kamara",
    image: fatima,
    role: ["Co-Director of Outreach & Recruitment"],
  },
  {
    name: "Kai Zhang",
    image: kai,
    role: ["Director of Design"],
  },
  {
    name: "Lauren Delwiche",
    image: lauren,
    role: ["Director of Computer Security"],
  },
  {
    name: "Nabil Rahman",
    image: nabil,
    role: ["Treasurer"],
  },
  {
    name: "Tyler Schroder",
    image: tyler,
    role: ["Communications"],
  },
  {
    name: "Kelvin Yip",
    image: kelvin,
    role: ["Advisor"],
  },
  // product leads
  {
    name: "Alex Schapiro",
    image: alex,
    role: ["CourseTable"],
  },
  {
    name: "Sida Chen",
    image: sida,
    role: ["CourseTable"],
  },
  {
    name: "Eric Yoon",
    image: ericyoon,
    role: ["Yalies"],
  },
  {
    name: "Nicholas Ribeiro",
    image: nicholas,
    role: ["ymeets"],
  },
  {
    name: "Chase Reynders",
    image: chase,
    role: ["Yale Butteries"],
  },
  {
    name: "Ian Lim",
    image: ian,
    role: ["Yale Clubs"],
  },
  {
    name: "Lorenss Martinsons",
    image: lorenss,
    role: ["MajorAudit"],
  },
  {
    name: "Bill Qian",
    image: bill,
    role: ["RoomAdvisor"],
  },
  {
    name: "Neil Shah",
    image: neil,
    role: ["AutoDonation"],
  },
  {
    name: "Anna Xu",
    image: anna,
    role: ["Yale IMs"],
  },
];

export type Project = {
  name: string;
  image: StaticImageData | undefined;
  link: string | undefined;
  live: boolean;
  description: string;
  shouldIconBeRounded: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: "CourseTable",
    image: coursetable,
    link: "/products/coursetable",
    description: "A student-built courses browser used by nearly everyone at Yale.",
    live: true,
    shouldIconBeRounded: false,
  },
  {
    name: "Yalies",
    image: yalies,
    link: "/products/yalies",
    description: "A directory that provides data on the Yale student body.",
    live: true,
    shouldIconBeRounded: false,
  },
  {
    name: "YaleButteries",
    image: yalebutteries,
    link: "/products/yalebutteries",
    description: "An app to transform the buttery experience at Yale.",
    live: false,
    shouldIconBeRounded: true,
  },

  {
    name: "ymeets",
    image: ymeets,
    link: "/products/ymeets",
    description: "A web application aimed to make it easier for Yalies to find a time to meet.",
    live: false,
    shouldIconBeRounded: true,
  },

  {
    name: "MajorAudit",
    description:
      "A web application aimed to make it easier for Yalies contextualize their four-year plan.",
    shouldIconBeRounded: true,
    live: false,
    link: undefined,
    image: undefined,
  },

  {
    name: "YaleClubs",
    description: "A web application aimed to make it easy to find new clubs and groups on campus",
    shouldIconBeRounded: true,
    live: false,
    link: undefined,
    image: undefined,
  },

  {
    name: "YaleJournals",
    description:
      "A web application that will make it easier to stay up to date with articles published on campus",
    shouldIconBeRounded: true,
    live: false,
    link: undefined,
    image: undefined,
  },

  {
    name: "YaleIMs",
    description: "An app that will unite the Yale IMs experience.",
    shouldIconBeRounded: true,
    live: false,
    link: undefined,
    image: undefined,
  },
  {
    name: "RoomAdvisor",
    image: roomadvisor,
    link: "/products/roomadvisor",
    description: "A website where Yale students can browse, rate, and review college rooms.",
    live: false,
    shouldIconBeRounded: true,
  },
  {
    name: "AutoDonation",
    image: autodonation,
    link: "/products/autodonation",
    description:
      "An intuitive platform that helps nonprofits automate, collect, and track donations.",
    live: false,
    shouldIconBeRounded: false,
  },
];

export const MEDIA = [
  {
    link: "mailto:yalecomputersociety@gmail.com",
    margin: {
      marginRight: "5px",
    },
    imageSrc: email,
    alt: "Email",
  },
  {
    link: "https://www.facebook.com/yalecompsociety/",
    margin: {
      margin: "0 10px",
    },
    imageSrc: facebook,
    alt: "Facebook",
  },
  {
    link: "https://www.instagram.com/yalecompsociety/",
    margin: {
      marginLeft: "10px",
    },
    imageSrc: instagram,
    alt: "Instagram",
  },
];

export const STORIES = [
  {
    data: "2012",
    description:
      "In 2012, then Yale students Peter Xu and Harry Yu created CourseTable – Yale’s first product built " +
      "by students, for students.",
  },
  {
    data: "2016",
    description:
      "In 2016, the Yale Computer Society was created as a space for CS enthusiasts to learn and share " +
      "tech learnings together.",
  },
  {
    data: "2019",
    description:
      "In 2019, the Yale Computer Society combined product and community to begin developing a suite of" +
      " products for Yale students.",
  },
];

export const TODAY_STATISTICS = [
  {
    data: "120+",
    description: "members",
  },
  {
    data: "20000+",
    description: "users",
  },
  {
    data: "6",
    description: "software products",
  },
];

export const PARTNERSHIPS = [
  {
    name: "Meta",
    image: meta,
  },
  {
    name: "Bloomberg",
    image: bloomberg,
  },
  {
    name: "Jane Street",
    image: janestreet,
  },
  {
    name: "Tsai City",
    image: tsai,
  },
];
