// Product imports
import coursetable from "./assets/products/logos/coursetable.png";
import yalies from "./assets/products/logos/yalies.png";
import ymeets from "./assets/products/logos/ymeets.png";
import yalebutteries from "./assets/products/logos/yalebutteries.jpg";
import mealmatch from "./assets/products/logos/MealMatch.png";
import roomadvisor from "./assets/products/logos/roomadvisor.png";
import autodonation from "./assets/products/logos/autodonation.svg";

import dev_projects from "./assets/code.svg";
import networking_events from "./assets/briefcase.svg";
import hack_nights from "./assets/terminal.svg";
import socials from "./assets/user.svg";

// Media imports
import email from "./assets/email2.png";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";

// People imports
import meili from "./assets/people/meili.jpg";
import kelvin from "./assets/people/kelvin.jpg";
import bill from "./assets/people/bill.jpg";
import erik from "./assets/people/erik.jpg";
import katherine from "./assets/people/katherine.jpg";
import lauren from "./assets/people/lauren.jpg";
import rosie from "./assets/people/rosie.jpg";
import amy from "./assets/people/amy.jpeg";
import kai from "./assets/people/kai.jpg";
import braden from "./assets/people/braden.jpg";
import kenny from "./assets/people/kenny.jpg";
import brandon from "./assets/people/brandon.jpg";
import addison from "./assets/people/addison.jpg";
import nabil from "./assets/people/nabil.jpg";
import aidan from "./assets/people/aidan.jpg";
import ethan from "./assets/people/ethan.jpg";
import lucas from "./assets/people/lucas.jpg";
import lily from "./assets/people/lily.jpg";

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
    image: "blank",
    role: ["Vice Director of Development"],
  },
  {
    name: "Kai Zhang",
    image: kai,
    role: ["Director of Design"],
  },
  {
    name: "Emillie Ma",
    image: "",
    role: ["Director of Events"],
  },
  {
    name: "Jessica Le",
    image: "",
    role: ["Director of Outreach and Recruitment"],
  },
  {
    name: "Fatima Kamara",
    image: "",
    role: ["Vice Director of Outreach and Recruitment"],
  },
  {
    name: "Nabil Rahman",
    image: nabil,
    role: ["Treasurer"],
  },
  {
    name: "Tyler Schroder",
    image: "",
    role: ["Communications"],
  },
  {
    name: "Lauren Delwiche",
    image: "",
    role: ["Security Lead"],
  },
  {
    name: "Kelvin Yip",
    image: kelvin,
    role: ["Advisor"],
  },
  // product leads
  {
    name: "Alex Schapiro",
    image: "",
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
    name: "Kai Xu",
    image: kai,
    role: ["MealMatch"],
  },
  {
    name: "Braden Wong",
    image: braden,
    role: ["MealMatch"],
  },
  {
    name: "Nicholas Ribeiro",
    image: "",
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
  link?: string;
  live: boolean;
  description: string;
};

export const PROJECTS: Project[] = [
  {
    name: "CourseTable",
    image: coursetable,
    link: "https://www.coursetable.com/",
    description: "CourseTable is a student-built courses browser used by nearly everybody at Yale - chances are you've used it to do some shopping yourself!",
    live: true,
  },
  {
    name: "Yalies",
    image: yalies,
    link: "https://yalies.io/",
    description: "Yalies is a website that provides data on the Yale student body. It combines data from Yale Face Book and Yale Directory, with enhanced design, user experience, and security.",
    live: true,
  },
  {
    name: "YaleButteries",
    image: yalebutteries,
    description: "We are an app that technologically transforms how butteries at Yale work, which includes features such as a buttery ordering system for students and an inventory and order management system for butteries managers and workers.",
    live: false,
  },
  {
    name: "MealMatch",
    image: mealmatch,
    link: "https://www.mealmatch.app/",
    description: "MealMatch is a campus dating and friendship platform that matches you with other students with compatible bios and arranges a convenient time for both of you to meet at a dining hall for a meal.",
    live: true,
  },
  {
    name: "ymeets",
    link: "/products/Ymeets",
    image: ymeets,
    live: false,
    description: "We are a novel web application aimed specifically at making it easier for Yale students to find a common window of time and an optimal space to meet.",
  },
  {
    name: "RoomAdvisor",
    image: roomadvisor,
    live: false,
    description: "Room Advisor is a website where Yale students can browse, rate, and review college rooms across campus.",
  },
  {
    name: "AutoDonation",
    image: autodonation,
    link: "/products/AutoDonation",
    live: false,
    description: "AutoDonation is a free, intuitive platform that helps nonprofits automate, collect, and track donations.",
  },
];

export const ABOUTUS = [
  {
    name: "Development Projects",
    icon: dev_projects,
    description: "We offer development projects to gain real-world software engineering experience.",
  },
  {
    name: "Speaker Events",
    icon: networking_events,
    description: "We host speaker events with technologists and industry professionals.",
  },
  {
    name: "Hack Nights",
    icon: hack_nights,
    description: "We host Hack Nights for students to work together and hack away at projects of their choosing.",
  },
  {
    name: "Social Events",
    icon: socials,
    description: "We host social events for CS students to meet each other and exchange interests.",
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
