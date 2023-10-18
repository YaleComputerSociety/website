// Product imports
import coursetable from "./assets/products/logos/coursetable.png";
import yalies from "./assets/products/logos/yalies.png";
import ymeets from "./assets/products/logos/ymeets.png";
import yalebutteries from "./assets/products/logos/yalebutteries.jpg";
import mealmatch from "./assets/products/logos/MealMatch.png";
import roomadvisor from "./assets/products/logos/roomadvisor.png";
import autodonation from "./assets/products/logos/autodonation.svg";

// Media imports
import email from "./assets/email2.png";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";

// People imports
import kelvin from "./assets/people/kelvin.jpg";
import bill from "./assets/people/bill.jpg";
import erik from "./assets/people/erik.jpg";
import katherine from "./assets/people/katherine.jpg";
import lauren from "./assets/people/lauren.jpg";
import kenny from "./assets/people/kenny.jpg";
import addison from "./assets/people/addison.jpg";
import nabil from "./assets/people/nabil.jpg";
import aidan from "./assets/people/aidan.jpg";
import ethan from "./assets/people/ethan.jpg";
import lucas from "./assets/people/lucas.jpg";
import defaultPerson from "./assets/people.jpeg";

// partnerships import
import meta from "./assets/partnerships/meta.png"
import bloomberg from "./assets/partnerships/bloomberg.jpeg"
import wgics from "./assets/partnerships/wgics.png"
import yes from "./assets/partnerships/yes.png"
import yhack from "./assets/partnerships/yhack.png"
import exp from "constants";
import janestreet from "./assets/partnerships/JS Logo 2023.png"
import tsai from "./assets/partnerships/tsaicity.png"

export const BOARD = [
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
    image: defaultPerson,
    role: ["Vice Director of Development"],
  },
  {
    name: "Kai Zhang",
    image: defaultPerson,
    role: ["Director of Design"],
  },
  {
    name: "Emillie Ma",
    image: defaultPerson,
    role: ["Director of Events"],
  },
  {
    name: "Jessica Le",
    image: defaultPerson,
    role: ["Director of Outreach and Recruitment"],
  },
  {
    name: "Fatima Kamara",
    image: defaultPerson,
    role: ["Vice Director of Outreach and Recruitment"],
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
    image: defaultPerson,
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
    image: defaultPerson,
    role: ["CourseTable"],
  },
  {
    name: "Lucas Huang",
    image: lucas,
    role: ["CourseTable"],
  },
  {
    name: "Erik Boesen",
    image: erik,
    role: ["Yalies"],
  },
  {
    name: "Aidan Palmer",
    image: aidan,
    role: ["YaleButteries"],
  },
  {
    name: "Nicholas Ribeiro",
    image: defaultPerson,
    role: ["ymeets"],
  },
  {
    name: "Bill Qian",
    image: bill,
    role: ["RoomAdvisor"],
  },
  {
    name: "Kenny Tung",
    image: kenny,
    role: ["RoomAdvisor"],
  },
  {
    name: "Katherine He",
    image: katherine,
    role: ["AutoDonation"],
  },
];

export type Project = {
  name: string;
  image: string;
  link: string;
  live: boolean;
  description: string;
};


export const PROJECTS: Project[] = [
  {
    name: "CourseTable",
    image: coursetable,
    link: "/products/CourseTable",
    description: "A student-built courses browser used by nearly everyone at Yale.",
    live: true,
  },
  {
    name: "Yalies",
    image: yalies,
    link: "/products/Yalies",
    description: "A directory that provides data on the Yale student body.",
    live: true,
  },
  {
    name: "YaleButteries",
    image: yalebutteries,
    link: "/products/YaleButteries",
    description: "An app to transform the buttery experience at Yale.",
    live: false,
  },

  {
    name: "ymeets",
    image: ymeets,
    link: "/products/Ymeets",
    description: "A web application aimed to make it easier for Yalies to find a time to meet.",
    live: false,
  },
  {
    name: "RoomAdvisor",
    image: roomadvisor,
    link: "/products/RoomAdvisor",
    description: "A website where Yale students can browse, rate, and review college rooms.",
    live: false,
  },
  {
    name: "AutoDonation",
    image: autodonation,
    link: "/products/AutoDonation",
    description: "An intuitive platform that helps nonprofits automate, collect, and track donations.",
    live: false,
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
    description: "In 2012, then Yale students Peter Xu and Harry Yu created CourseTable – Yale’s first product built " +
        "by students, for students."
  },
  {
    data: "2016",
    description: "In 2016, the Yale Computer Society was created as a space for CS enthusiasts to learn and share " +
        "tech learnings together."
  },
  {
    data: "2019",
    description: "In 2019, the Yale Computer Society combined product and community to begin developing a suite of" +
        " products for Yale students."
  }
];

export const TODAY_STATISTICS = [
  {
    data: "200+",
    description: "community members"
  },
  {
    data: "10000+",
    description: "users"
  },
  {
    data: "6",
    description: "software products"
  }
]

export const PARTNERSHIPS = [
  {
    name: "Meta",
    image: meta
  },

  {
    name : "Jane Street",
    image  : janestreet
  },

  {
    name: "Bloomberg",
    image: bloomberg
  },

  {
    name : "Tsai City \n",
    image : tsai,
  },

  {
    name: "Women and Gender Minorities in CS",
    image: wgics
  },
]
