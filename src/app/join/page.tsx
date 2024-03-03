"use client";

import { SectionTitle } from "@components/SectionTitle";
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
        className="mb-10 mt-0"
      />

      {/* <div className="flex md:flex-row flex-col mt-10 gap-10 md:mx-10 mx-16"> */}

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:mx-10 mx-16">
        {ROLES.map((r, index) => {
          return <SolidColorBlock title={r.title} desc={r.desc} color="ycs-pink" key={index} />;
        })}
      </div>

      <TitleSubtitle
        title="Application Process"
        subtitle="Applications to join y/cs open at the beginning of each semester. There are three phases
        in the application process."
        className="mb-10"
      />

      <div>
        <p className="text-xl">
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

      {/* Put a button to apply here during application season */}
    </>
  );
};

export default Join;