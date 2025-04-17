// Product imports
import { StaticImageData } from "next/image";

// Logos
import coursetable from "./assets/products/logos/coursetable.png";
import yalies from "./assets/products/logos/yalies.png";
import ymeets from "./assets/products/logos/ymeetslogo.png";
import yaleclubs from "./assets/products/logos/yaleclubs.svg";
import yims from "./assets/products/logos/yims.png";
import ylabs from "./assets/products/logos/ylabs.png";
import majoraudit from "./assets/products/logos/majoraudit.png";
// Product headers
import coursetableHeader from "./assets/products/coursetable/headerimage.png";
import yaliesHeader from "./assets/products/yalies/headerimage.png";
import ymeetsHeader from "./assets/products/ymeets/headerimage.png";
// Media imports
import email from "./assets/email2.png";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
// People imports
import eva from "./assets/people/eva.jpeg";
import leslie from "./assets/people/leslie.jpeg";
import handan from "./assets/people/handan.jpeg";
import addison from "./assets/people/addison.jpg";
import ethan from "./assets/people/ethan.jpg";
import daniel from "./assets/people/daniel.jpeg";
import tyler from "./assets/people/tyler.jpeg";
import neil from "./assets/people/neil.jpeg";
import humphrey from "./assets/people/humphrey.jpg";
import chase from "./assets/people/chase.jpeg";
import eric from "./assets/people/eric.jpeg";
import LilyLin from "./assets/people/LilyLin.png";
import amanda from "./assets/people/amanda.png";
import ryan from "./assets/people/ryan.jpeg";
import ryanf from "./assets/people/ryanf.jpeg";
import hunter from "./assets/people/hunter.jpeg";
import ephraim from "./assets/people/ephraim.jpeg";
import jeet from "./assets/people/jeet.jpeg";
import rylan from "./assets/people/rylan.jpeg";
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
    name: "Daniel Wang",
    image: daniel,
    role: ["President"],
  },
  {
    name: "Lily Lin",
    image: LilyLin,
    role: ["Vice President & Director of Design"],
  },
  {
    name: "Addison Goolsbee",
    image: addison,
    role: ["Director of Development"],
  },
  {
    name: "Ethan Mathieu",
    image: ethan,
    role: ["Senior Advisor"],
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
    name: "Chase Reynders",
    image: chase,
    role: ["Director of Cataylst"],
  },
  {
    name: "Leslie Kim",
    image: leslie,
    role: ["Director of Outreach & Recruitment"],
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

  // product leads
  {
    name: "Neil Song",
    image: neil,
    role: ["CourseTable"],
  },
  {
    name: "Humphrey Xu",
    image: humphrey,
    role: ["CourseTable"],
  },
  {
    name: "Eric Yoon",
    image: eric,
    role: ["Yalies"],
  },
  {
    name: "Addison Goolsbee",
    image: addison,
    role: ["Yale Clubs"],
  },
  {
    name: "Jeet Parikh",
    image: jeet,
    role: ["ymeets"],
  },
  {
    name: "Rylan Yang",
    image: rylan,
    role: ["ymeets"],
  },
  {
    name: "Ephraim Akrai-Nettey",
    image: ephraim,
    role: ["YaleIMs"],
  },
  {
    name: "Ryan Gumlia",
    image: ryan,
    role: ["MajorAudit"],
  },
  {
    name: "Hunter Wimsatt",
    image: hunter,
    role: ["RoomAdvisor"],
  },
  {
    name: "Ryan Fernandes",
    image: ryanf,
    role: ["YLabs"],
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
    name: "CourseTable",
    logo: coursetable,
    headerImage: coursetableHeader,
    link: "https://coursetable.com",
    description: "A student-built courses browser used by nearly everyone at Yale.",
    live: true,
    shouldIconBeRounded: false,
  },
  {
    name: "Yalies",
    logo: yalies,
    headerImage: yaliesHeader,
    link: "https://yalies.io",
    description: "A directory that provides data on the Yale student body.",
    live: true,
    shouldIconBeRounded: false,
  },
  {
    name: "ymeets",
    logo: ymeets,
    headerImage: ymeetsHeader,
    link: "https://ymeets.com",
    description: "A web application aimed to make it easier for Yalies to find a time to meet.",
    live: true,
    shouldIconBeRounded: true,
  },
  {
    name: "YaleClubs",
    description: "Website to view clubs and events",
    shouldIconBeRounded: false,
    live: true,
    link: "https://yaleclubs.io",
    logo: yaleclubs,
  },
  {
    name: "YaleIMs",
    description: "Website to view IM scores and schedules",
    shouldIconBeRounded: true,
    live: true,
    link: "https://yaleims.com",
    logo: yims,
  },
  {
    name: "MajorAudit",
    description:
      "A web application aimed to make it easier for Yalies contextualize their four-year plan.",
    shouldIconBeRounded: true,
    isBackgroundWhite: true,
    live: false,
    link: "https://majoraudit.web.app/",
    logo: majoraudit,
  },
  {
    name: "YLabs",
    logo: ylabs,
    headerImage: undefined,
    link: "https://yalelabs.io",
    description: "Database visualizer for Yale research",
    live: true,
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
      "In 2012, then Yale students Peter Xu and Harry Yu created CourseTable – Yale's first product built " +
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
