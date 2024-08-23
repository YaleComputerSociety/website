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
  {
    title: "Community Member",
    desc: "Become an active member of one of the y/cs computer science interest commmunities.",
  },
];

const Join = () => {
  return (
    <div className="mb-12">
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
          return (
            <SolidColorBlock
              title={r.title}
              desc={r.desc}
              color="ycs-pink"
              key={index}
            />
          );
        })}
      </div>

      <TitleSubtitle
        title="Application Process"
        subtitle="Applications to join y/cs open at the beginning of each semester.
        We try to keep our process as short and sweet as possible.
        There are three phases:"
        className="mb-10 mt-32"
      />

      <div className="bg-ycs-gray md:mx-10 mx-8 md:p-10 p-8 rounded-2xl md:text-2xl text-lg">
        <span className="font-bold">1. Written Application</span>
        <br></br>
        Indicate which divisions or teams you are interested in joining, share a
        bit about yourself, and why you're interested in joining y/cs.
        <br></br>
        <br></br>
        <span className="font-bold">2. Interview/Challenge</span>
        <br></br>
        For those applying for technical roles, we have a technical interview.
        <br /> <br />
        Those applying for product teams are evaluated on their ability to
        operate the tools/skills used to build the products. <br /> <br />
        We don't expect everyone to come to Yale knowing how to use these
        tools/skills, which is why we have beginner <strong>
          Cataylst
        </strong>{" "}
        programs designed to teach them to you! Those applying for beginner
        programs are evaluated on their ability/willingness to learn new
        technical concepts in a take-home challenge, with lots of office hour
        opportunities to help you complete it.
        <br /> <br />
        For those applying for non-technical roles (design, events, outreach),
        we do a short, non-technical interview.
        <br></br>
        <br></br>
        <span className="font-bold">3. Team Placement</span>
        <br></br>
        Based on your written application and interview you are placed on a y/cs
        team, as space permits.
      </div>
      {/* Put a button to apply here during application season */}
    </div>
  );
};

export default Join;
