// Product imports
import { StaticImageData } from "next/image";

// Logos
import coursetable from "./assets/products/logos/coursetable.png";
import yalies from "./assets/products/logos/yalies.png";
import ymeets from "./assets/products/logos/ymeetslogo.png";
import roomadvisor from "./assets/products/logos/roomadvisor.png";
import yaleclubs from "./assets/products/logos/yaleclubs.svg";
// import yims from "./assets/products/logos/yaleims.png";
// Product headers
import coursetableHeader from "./assets/products/coursetable/headerimage.png";
import yaliesHeader from "./assets/products/yalies/headerimage.png";
import ymeetsHeader from "./assets/products/ymeets/headerimage.png";
import roomadvisorHeader from "./assets/products/roomadvisor/headerimage.png";
// Media imports
import email from "./assets/email2.png";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
// People imports
import eva from "./assets/people/eva.jpeg";
import bill from "./assets/people/bill.jpg";
import leslie from "./assets/people/leslie.jpeg";
import handan from "./assets/people/handan.jpeg";
import addison from "./assets/people/addison.jpg";
import ethan from "./assets/people/ethan.jpg";
import anna from "./assets/people/anna.jpeg";
import daniel from "./assets/people/daniel.jpeg";
import betti from "./assets/people/betti.jpeg";
import lorenss from "./assets/people/lorenss.jpeg";
import tyler from "./assets/people/tyler.jpeg";
import alex from "./assets/people/alex.jpeg";
import sida from "./assets/people/sida.jpeg";
import chase from "./assets/people/chase.jpeg";
import nicholas from "./assets/people/nicholas.jpeg";
import ian from "./assets/people/ian.jpeg";
import eric from "./assets/people/eric.jpeg";
import LilyLin from "./assets/people/LilyLin.png";
import amanda from "./assets/people/amanda.png";
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
    name: "Betti Tang",
    image: betti,
    role: ["Co-President"],
  },
  {
    name: "Daniel Wang",
    image: daniel,
    role: ["Co-President"],
  },
  {
    name: "Lorenss Martinsons",
    image: lorenss,
    role: ["Director of Development"],
  },
  {
    name: "Chase Reynders",
    image: chase,
    role: ["Director of Cataylst"],
  },
  {
    name: "Amanda Huang",
    image: amanda,
    role: ["Co-Director of Events"],
  },
  {
    name: "Eva Zheng",
    image: eva,
    role: ["Co-Director of Events"],
  },
  {
    name: "Leslie Kim",
    image: leslie,
    role: ["Director of Outreach & Recruitment"],
  },
  {
    name: "Lily Lin",
    image: LilyLin,
    role: ["Director of Design"],
  },

  {
    name: "Handan Dilara Bikmaz",
    image: handan,
    role: ["Treasurer"],
  },
  {
    name: "Tyler Schroder",
    image: tyler,
    role: ["Director of Communications"],
  },
  {
    name: "Ethan Mathieu",
    image: ethan,
    role: ["Senior Advisor"],
  },

  {
    name: "Addison Goolsebee",
    image: addison,
    role: ["Senior Advisor"],
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
    image: eric,
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
    name: "Anna Xu",
    image: anna,
    role: ["Yale IMs"],
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
};

export const PROJECTS: Project[] = [
  {
    name: "CourseTable",
    logo: coursetable,
    headerImage: coursetableHeader,
    link: "/products/coursetable",
    description: "A student-built courses browser used by nearly everyone at Yale.",
    live: true,
    shouldIconBeRounded: false,
  },
  {
    name: "Yalies",
    logo: yalies,
    headerImage: yaliesHeader,
    link: "/products/yalies",
    description: "A directory that provides data on the Yale student body.",
    live: true,
    shouldIconBeRounded: false,
  },
  {
    name: "ymeets",
    logo: ymeets,
    headerImage: ymeetsHeader,
    link: "/products/ymeets",
    description: "A web application aimed to make it easier for Yalies to find a time to meet.",
    live: true,
    shouldIconBeRounded: true,
  },
  {
    name: "YaleClubs",
    description: "Website to view clubs and events",
    shouldIconBeRounded: true,
    live: true,
    link: "https://yaleclubs.info",
    logo: yaleclubs,
  },
  {
    name: "YaleIMs",
    description: "Website to view IM scores and schedules",
    shouldIconBeRounded: true,
    live: true,
    link: "https://yaleims.com",
    logo: undefined,
  },
  {
    name: "MajorAudit",
    description:
      "A web application aimed to make it easier for Yalies contextualize their four-year plan.",
    shouldIconBeRounded: true,
    live: false,
    link: undefined,
    logo: undefined,
  },
  {
    name: "YaleJournals",
    description:
      "A web application that will make it easier to stay up to date with articles published on campus",
    shouldIconBeRounded: true,
    live: false,
    link: undefined,
    logo: undefined,
  },
  {
    name: "RoomAdvisor",
    logo: roomadvisor,
    headerImage: roomadvisorHeader,
    link: "/products/roomadvisor",
    description: "A website where Yale students can browse, rate, and review college rooms.",
    live: false,
    shouldIconBeRounded: true,
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
