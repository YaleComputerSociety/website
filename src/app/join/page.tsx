<<<<<<< HEAD
<<<<<<< HEAD
"use client";

import { SectionTitle } from "@components/SectionTitle";
<<<<<<< HEAD
<<<<<<< HEAD
import { SolidColorBlock } from "@components/SolidColorBlock";
import { TitleSubtitle } from "@components/TitleSubtitle";

const ROLES = [
  {
    title: "Software Developer",
    desc: "Develop one of the y/cs's current or up and coming products.",
  },

  {
    title: "Catalyst Developer",
    desc: "Hone your development skills in a beginner friendly software program.",
  },

  {
    title: "UI/UX Designer",
    desc: "Design Figma wireframes and collaborate with development teams to bring products to life.",
  },
  {
    title: "Outreach Planner",
    desc: "Bring the Tech industry to Yale! Build y/cs connections to Big Tech companies.",
  },
  {
    title: "Event Planner",
    desc: "Help plan Events for members of the Society. Past events include the y/cs Gala, Demo Day, Murder Mystery, and more!",
  },
  {
    title: "Community Member",
    desc: "Become an active member of one of the y/cs computer science interest commmunities.",
  },
];

const Join = () => {
<<<<<<< HEAD
  return (
    <div className="mb-12">
      <SectionTitle
        title="Build With Us"
        subtitle="We are Yale's largest collective of software developers, product designers, and
          computer science enthusiasts. We're excited that you're interested in joining
          us!"
      />
<<<<<<< HEAD
      <div className="ml-32 mr-32">
=======

    return (
      <div className="lg:ml-32 lg:mr-32 md:ml-20 md:mr-20 sm:ml-16 sm:mr-16 mr-20 ml-20">
        
        <h1 className="lg:text-8xl md:text-6xl sm:text-6xl text-6xl font-bold mt-10 text-ycs-pink mb-5">&lt;Come build with us /&gt;</h1>

        <p className="lg:text-4xl md:text-2xl sm:text-xl text-left mb-10">We are Yale's largest collective of software developers, product designers, and computer science 
        enthusiasts. We're excited that you're interested in joining us!
        </p>

>>>>>>> 3225ddd (fixed join page mobile)
        <p className="lg:text-3xl md:text-xl sm:text-xl text-xl font-bold underline">Roles</p>
=======
      <TitleSubtitle
        title="Roles"
        subtitle="Explore the diverse opportunities to contribute and grow with our dynamic team."
        className="mb-10"
      />
>>>>>>> b6a6083 (Work on rewriting join page to be responsive and better laid out)

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:mx-10 mx-16">
        {ROLES.map((r, index) => {
          return <SolidColorBlock title={r.title} desc={r.desc} color="ycs-pink" key={index} />;
        })}
      </div>

      <TitleSubtitle
        title="Application Process"
        subtitle="Applications to join y/cs open at the beginning of each semester. There are three phases
        in the application process."
        className="mb-10 mt-32"
      />

      <div className="bg-ycs-gray md:mx-10 mx-8 md:p-10 p-8 rounded-2xl md:text-2xl text-lg">
        <span className="font-bold">1. Written Application</span>
        <br></br>
        Applicants are evaluated based on submitted short responses, resume and past relevant
        experiences.
        <br></br>
        <br></br>
        <span className="font-bold">2. Interview</span>
        <br></br>
        Successful applicants are moved to an interview phase. Those applying for technical roles
        likely recieve technical questions. Not all teams require interviews.
        <br></br>
        <br></br>
        <span className="font-bold">3. Team Placement</span>
        <br></br>
        Based on your written application and interview you are placed on a y/cs team. Some teams
        are competitive to join, while others are non-competitive.
      </div>

      {/* Put a button to apply here during application season */}
    </div>
  );
};

export default Join;
=======
"use client"
=======
"use client";
>>>>>>> b713017 (Refactor join page to conform to eslint)

=======
>>>>>>> 94d4678 (Change section title style to match join us; remake join us title)
// import { SectionTitle } from "@components/SectionTitle";
=======
>>>>>>> 3dd601d (Work on rewriting join page to be responsive and better laid out)
import { SolidColorBlock } from "@components/SolidColorBlock";
import { TitleSubtitle } from "@components/TitleSubtitle";

const ROLES = [
  {
    title: "Software Developer",
    desc: "Develop one of the y/cs's current or up and coming products.",
  },

  {
    title: "Catalyst Developer",
    desc: "Hone your development skills in a beginner friendly software program.",
  },

  {
    title: "UI/UX Designer",
    desc: "Design Figma wireframes and collaborate with development teams to bring products to life.",
  },
  {
    title: "Outreach Planner",
    desc: "Bring the Tech industry to Yale! Build y/cs connections to Big Tech companies.",
  },
  {
    title: "Event Planner",
    desc: "Help plan Events for members of the Society. Past events include the y/cs Gala, Demo Day, Murder Mystery, and more!",
  },
];

const Join = () => {
  return (
    <>
      <SectionTitle
        title="Build With Us"
        subtitle="We are Yale's largest collective of software developers, product designers, and
          computer science enthusiasts. We're excited that you're interested in joining
          us!"
      />
      <TitleSubtitle
        title="Roles"
        subtitle="Explore the diverse opportunities to contribute and grow with our dynamic team."
        className="mb-10"
      />

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:mx-10 mx-16">
        {ROLES.map((r, index) => {
          return <SolidColorBlock title={r.title} desc={r.desc} color="ycs-pink" key={index} />;
        })}
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

      <div>
        <p className="text-xl">
          Applications to join y/cs open at the beginning of each semester. There are three phases
          in the application process.
=======

      <TitleSubtitle
        title="Application Process"
        subtitle="Applications to join y/cs open at the beginning of each semester. There are three phases
        in the application process."
        className="mb-10 mt-32"
      />

      <div>
        <p className="text-xl">
>>>>>>> 3dd601d (Work on rewriting join page to be responsive and better laid out)
          <br></br>
          <br></br>
          <span className="font-bold underline">1. Written Application</span>
          <br></br>
          Applicants are evaluated based on submitted short responses, resumé and past relevant
          experiences.
          <br></br>
          <br></br>
          <span className="font-bold underline">2. Interview</span>
          <br></br>
          Successful applicants are moved to an interview phase. Those applying for technical roles
          likely recieve technical questions. Not all teams require interviews.
          <br></br>
          <br></br>
          <span className="font-bold underline">3. Team Placement</span>
          <br></br>
          Based on your written application and interview you are placed on a y/cs team. Some teams
          are competitive to join, while others are non-competitive.
        </p>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
export default Join
>>>>>>> 406e299 (join page)
=======
      {/* Put a button to apply here during application season */}
    </div>
=======
=======
      {/* Put a button to apply here during application season */}
>>>>>>> 3dd601d (Work on rewriting join page to be responsive and better laid out)
    </>
>>>>>>> 94d4678 (Change section title style to match join us; remake join us title)
  );
};

export default Join;
>>>>>>> b713017 (Refactor join page to conform to eslint)
