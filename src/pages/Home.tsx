import { SectionTitle } from "../components/SectionTitle";
import logo from "../assets/ycs_black.png";
import { ABOUTUS, PROJECTS } from "../data";
import { Fragment, FC } from "react";
import { CardWrapper } from "../components/CardWrapper";

import "./home.css";

interface GradientBoxProps {
  title: string;
  text: string;
}

const GradientBox: FC<GradientBoxProps> = ({ title, text }) => {
  return (
    <div className="w-full h-56 text-left bg-gradient-to-b from-ycs-pink to-ycs-pink/10 rounded-2xl p-8 my-10 mx-auto">
      <div className="text-white text-lg font-bold pt-16">{title}</div>
      <div className="text-gray-400">{text}</div>
    </div>
  );
};

export const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-8xl font-extrabold text-center py-10 md:py-3 mt-60 mb-8">Yale Computer Society</h1>
        <p className="text-gray-400 text-3xl mb-52"> Yale's premier software development and computer science student organization</p>
        <p className="text-gray-400 text-4xl" style={{ letterSpacing: "1em" }}>
          v v v
        </p>

        <div className="py-28 flex flex-col items-center w-full">
          <div className="text-center text-white text-3xl font-normal pb-12">Check out our products!</div>
          <div className="w-3/4 h-28 bg-gray-400 rounded-full flex items-center justify-evenly">
            {
              PROJECTS.map((project, i) => (
                <img className="w-20 h-20 rounded-lg" key={i} src={project.image} alt="" />
              ))
            }
          </div>
          <div className="w-3/4 h-6 relative mt-4 text-md text-gray-400 text-center flex justify-evenly">
            {
              PROJECTS.map((project, i) => (
                <div key={i}>{project.name}</div>
              ))
            }
            {/* <div>CourseTable</div>
            <div>Yalies.io</div>
            <div>YaleButteries</div>
            <div>MealMatch</div>
            <div>ymeets</div>
            <div>AutoDonation</div>
            <div>RoomAdvisor</div> */}
          </div>
        </div>

        <div className="w-3/4 mb-8 text-white text-6xl font-medium">Cultivating a passion for programming</div>
        <div className="w-3/4 text-gray-400 text-3xl mb-10">From development mentorship to hacking nights, we create a community for programmers of all skill levels. </div>

        <div className="columns-2 gap-4"></div>

        <div className="flex w-3/4 mb-16">
          <div className="w-1/2 mr-10">
            <GradientBox title="Development" text="Offer real-world software engineering projects to work on collaboratively." />
            <GradientBox title="Mentorship" text="Provide mentorship for those hoping to learn more about programming." />
          </div>
          <div className="w-1/2 flex flex-col justify-start md:justify-center items-start md:items-end">
            <GradientBox title="Events" text="Plan social events for students to meet and share their interests." />
          </div>
        </div>

        <div className="w-3/4 mb-8 text-white text-5xl font-medium text-left">Have an idea, but don't know how to get started?</div>
        <div className="w-3/4 text-gray-400 text-left text-3xl font-normal mb-8">Join the y/cs mentorship to get the wheels turning and jumpstart your programming career at Yale. </div>
        <div className="w-3/4 flex items-center">
          <div className="w-44 h-12 relative bg-ycs-pink rounded-full text-white text-xl font-bold flex items-center text-center justify-center">Learn More</div>
        </div>
      </div>
    </div>
  );
};
