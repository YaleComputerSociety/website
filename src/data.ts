// Product imports
import coursetable from './assets/products/coursetable.svg'
import yalies from './assets/products/yalies.png'
import ymeets from './assets/products/ymeets.png'
import yalebutteries from './assets/products/yalebutteries.jpg'
import mealmatch from './assets/products/MealMatch.png'
import roomadvisor from './assets/products/roomadvisor.png'
import autodonation from './assets/products/autodonation.svg'

import dev_projects from './assets/code.svg'
import networking_events from './assets/briefcase.svg'
import hack_nights from './assets/terminal.svg'
import socials from './assets/user.svg'

// Media imports
import email from './assets/email.svg'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'

// People imports
import meili from './assets/people/meili.jpg'
import kelvin from './assets/people/kelvin.jpg'
import bill from './assets/people/bill.jpg'
import erik from './assets/people/erik.jpg'
import katherine from './assets/people/katherine.jpg'
import lauren from './assets/people/lauren.jpg'
import rosie from './assets/people/rosie.jpg'
import amy from './assets/people/amy.jpeg'
import kai from './assets/people/kai.jpg'
import braden from './assets/people/braden.jpg'
import kenny from './assets/people/kenny.jpg'
import brandon from './assets/people/brandon.jpg'
import addison from './assets/people/addison.jpg'
import nabil from './assets/people/nabil.jpg'
import aidan from './assets/people/aidan.jpg'
import ethan from './assets/people/ethan.jpg'
import lucas from './assets/people/lucas.jpg'
import lily from './assets/people/lily.jpg'

export const BOARD = [
    {
        name: "Kelvin Yip",
        image: kelvin,
        role: [
            "President"
        ]
    },
    {
        name: "Meili Gupta",
        image: meili,
        role: [
            "Vice-President"
        ]
    }, 
    {
        name: "Addison Goolsbee",
        image: addison,
        role: [
            "Treasurer",
        ]
    },
    {
        name: "Brandon Yee",
        image: brandon,
        role: [
            "Social Chair"
        ]
    },
    {
        name: "Rosie Rothschild",
        image: rosie,
        role: [
            "Outreach Chair"
        ]
    },
    {
        name: "Md Nabil Rahman",
        image: nabil,
        role: [
            "Events Team Lead"
        ]
    },
    {
        name: "Amy Zhao",
        image: amy,
        role: [
            "Design Team Lead"
        ]
    },
    {
        name: "Lily Zhou",
        image: lily,
        role: [
            "CourseTable"
        ]
    },
    {
        name: "Lucas Huang",
        image: lucas,
        role: [
            "CourseTable"
        ]
    },
    {
        name: "Erik Boesen",
        image: erik,
        role: [
            "Yalies"
        ]
    },
    {
        name: "Addison Goolsbee",
        image: addison,
        role: [
            "YaleButteries"
        ]
    },
    {
        name: "Aidan Palmer",
        image: aidan,
        role: [
            "YaleButteries"
        ]
    },
    {
        name: "Kai Xu",
        image: kai,
        role: [
            "MealMatch"
        ]
    },
    {
        name: "Braden Wong",
        image: braden,
        role: [
            "MealMatch"
        ]
    },
    {
        name: "Ethan Mathieu",
        image: ethan,
        role: [
            "ymeets"
        ]
    },
    {
        name: "Bill Qian",
        image: bill,
        role: [
            "RoomAdvisor"
        ]
    },
    {
        name: "Kenny Tung",
        image: kenny,
        role: [
            "RoomAdvisor"
        ]
    },
    {
        name: "Katherine He",
        image: katherine,
        role: [
            "AutoDonation"
        ]
    },
    {
        name: "Lauren Delwiche",
        image: lauren,
        role: [
            "Security"
        ]
    }
]

export type Project = {
    name: string;
    image: string;
    link?: string;
    live: boolean;
    description: string;
}

export const PROJECTS: Project[] = [
    {
        name: "CourseTable",
        image: coursetable,
        link: "https://www.coursetable.com/",
        description: "CourseTable is a student-built courses browser used by nearly everybody at Yale - chances are you've used it to do some shopping yourself!",
        live: true
    },
    {
        name: "Yalies",
        image: yalies,
        link: "https://yalies.io/",
        description: "Yalies is a website that provides data on the Yale student body. It combines data from Yale Face Book and Yale Directory, with enhanced design, user experience, and security.",
        live: true
    },
    {
        name: "YaleButteries",
        image: yalebutteries,
        description: "We are an app that technologically transforms how butteries at Yale work, which includes features such as a buttery ordering system for students and an inventory and order management system for butteries managers and workers.",
        live: false
    },
    {
        name: "MealMatch",
        image: mealmatch,
        link: "https://www.mealmatch.app/",
        description: "MealMatch is a campus dating and friendship platform that matches you with other students with compatible bios and arranges a convenient time for both of you to meet at a dining hall for a meal.",
        live: true
    },
    {
        name: "ymeets",
        image: ymeets,
        live: false,
        description: "We are a novel web application aimed specifically at making it easier for Yale students to find a common window of time and an optimal space to meet."
    },
    {
        name: "RoomAdvisor",
        image: roomadvisor,
        live: false,
        description: "Room Advisor is a website where Yale students can browse, rate, and review college rooms across campus."
    },
    {
        name: "AutoDonation",
        image: autodonation,
        live: false,
        description: "AutoDonation is a free, intuitive platform that helps nonprofits automate, collect, and track donations."
    }
]

export const ABOUTUS = [
    {
        name: "Development Projects",
        icon: dev_projects,
        description: "We offer development projects to gain real-world software engineering experience."
    },
    {
        name: "Speaker Events",
        icon: networking_events,
        description: "We host speaker events with technologists and industry professionals."
    },
    {
        name: "Hack Nights",
        icon: hack_nights,
        description: "We host Hack Nights for students to work together and hack away at projects of their choosing."
    },
    {
        name: "Social Events",
        icon: socials,
        description: "We host social events for CS students to meet each other and exchange interests."
    }
]

export const MEDIA = [
    {
        link: "mailto:yalecomputersociety@gmail.com",
        margin: { 
            marginRight: '10px'
        },
        imageSrc: email,
        alt: "Email"
    },
    {
        link: "https://www.facebook.com/yalecompsociety/",
        margin: { 
            margin: '0 10px'
        },
        imageSrc: facebook,
        alt: "Facebook"
    },
    {
        link: "https://www.instagram.com/yalecompsociety/",
        margin: { 
            marginLeft: '10px'
        },
        imageSrc: instagram,
        alt: "Instagram"
    }
]