import coursetable from './assets/coursetable.svg'
import yalies from './assets/yalies.png'
import studybuddy from './assets/studybuddy.png'
import campushub from './assets/campushub.png'
import mealmatch from './assets/MealMatch.png'
import roomadvisor from './assets/roomadvisor.png'

import dev_projects from './assets/code.svg'
import networking_events from './assets/briefcase.svg'
import hack_nights from './assets/terminal.svg'
import socials from './assets/user.svg'

export const BOARD = [
    {
        name: "Kelvin Yip",
        image: "",
        role: "President"
    },
    {
        name: "Meili Gupta",
        image: "",
        role: "Secretary, Events Team Lead"
    }, 
    {
        name: "Addison Goolsbee",
        image: "",
        role: "Treasurer, CampusHub Project Lead"
    },
    {
        name: "Brandon Yee",
        image: "",
        role: "Social Chair"
    },
    {
        name: "Rosie Rothschild",
        image: "",
        role: "Outreach Chair"
    },
    {
        name: "Amy Zhao",
        image: "",
        role: "Design Team Lead"
    },
    {
        name: "Lily Zhou",
        image: "",
        role: "CourseTable Project Lead"
    },
    {
        name: "Lucas Huang",
        image: "",
        role: "CourseTable Project Lead"
    },
    {
        name: "Erik Boesen",
        image: "",
        role: "Yalies Project Lead"
    },
    {
        name: "Aidan Palmer",
        image: "",
        role: "CampusHub Project Lead"
    },
    {
        name: "Kai Xu",
        image: "",
        role: "MealMatch Project Lead"
    },
    {
        name: "Braden Wong",
        image: "",
        role: "MealMatch Project Lead"
    },
    {
        name: "Ethan Mathieu",
        image: "",
        role: "StudyBuddy Project Lead"
    },
    {
        name: "Bill Qian",
        image: "",
        role: "RoomAdvisor Project Lead"
    }
]

export type Project = {
    name: string;
    image: string;
    link?: string;
}

export const PROJECTS: Project[] = [
    {
        name: "CourseTable",
        image: coursetable,
        link: "https://www.coursetable.com/"
    },
    {
        name: "Yalies",
        image: yalies,
        link: "https://yalies.io/"
    },
    {
        name: "CampusHub",
        image: campushub
    },
    {
        name: "MealMatch",
        image: mealmatch,
        link: "https://www.mealmatch.app/"
    },
    {
        name: "StudyBuddy",
        image: studybuddy
    },
    {
        name: "RoomAdvisor",
        image: roomadvisor
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