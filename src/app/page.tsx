<<<<<<< HEAD
<<<<<<< HEAD
"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import { GradientBox } from "@components/GradientBox";
import { SolidColorBlock } from "@components/SolidColorBlock";
import { Sponsors } from "@components/Sponsors";
// import { ParticleNetwork } from "@components/ParticleNetwork";
import { TitleSubtitle } from "@components/TitleSubtitle";

const FastParticleNetwork = dynamic(() => import("@components/ParticleNetwork"), {
  loading: () => <p>Loading...</p>,
  ssr: true,
});

const Home = () => {
  return (
    <div className="mb-12">
      <FastParticleNetwork />

      <div className="hidden md:flex justify-center items-center overflow-hidden fixed top-0 left-0 w-full h-full -z-10">
        <div
          className="text-white opacity-[0.03] text-[20rem] md:text-[30rem] font-black text-center"
          style={{
            transform: "translateX(-50%)",
            left: "50%",
            position: "absolute",
            fontSize: "calc(50vw + 1rem)",
          }}
        >
          y/cs
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-white drop-shadow-lg text-center font-extrabold text-4xl md:text-5xl mt-20 md:mt-[9vw] mb-3 -z-10 bg-gradient-to-r from-ycs-pink to-ycs-pink text-transparent bg-clip-text">
          We are the
        </p>
        <p className="text-white drop-shadow-lg text-center text-6xl md:text-8xl font-extrabold">
          Yale Computer Society
        </p>

        <p className="text-white text-center lg:text-2xl md:text-xl text-lg mt-6 md:mt-8 w-3/4 md:w-3/4 mx-auto">
          Yale&apos;s premier tech and computer science organization
        </p>

        <h1 className="text-white md:mt-[7vw] text-center mt-16 lg:text-2xl md:text-xl text-lg w-3/4 mx-auto">
          We&apos;re a group of computer science students that build software applications for Yale
          University&apos;s campus community and connect over our shared love for applied computing.
          Check out our{" "}
          <a className="text-ycs-pink underline" href="https://github.com/yalecomputersociety">
            GitHub
          </a>
        </h1>

        <div className="flex md:flex-row flex-col mt-10 gap-10 md:mx-10 mx-16">
=======
import "@styles/home.css";

=======
>>>>>>> 6919d97 (Remove unused files)
import Link from "next/link";

import { GradientBox } from "../components/GradientBox";
import { SolidColorBlock } from "../components/SolidColorBlock";

import { Sponsors } from "@components/Sponsors";
import { ParticleNetwork } from "@components/ParticleNetwork";
import { TitleSubtitle } from "@components/TitleSubtitle";

const Home = () => {
  return (
    <div>
      <ParticleNetwork />

      <div className="hidden md:flex justify-center items-center overflow-hidden fixed top-0 left-0 w-full h-full -z-10">
        <div
          className="text-white opacity-[0.03] text-[20rem] md:text-[30rem] font-black text-center"
          style={{
            transform: "translateX(-50%)",
            left: "50%",
            position: "absolute",
            fontSize: "calc(50vw + 1rem)",
          }}
        >
          y/cs
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-white text-center font-extrabold text-4xl md:text-5xl mt-20 mb-3 ">
          We are the
        </p>
        <p className="text-white text-center text-6xl md:text-8xl font-extrabold">
          Yale Computer Society
        </p>
        <p className="text-white text-center lg:text-xl md:text-lg text-md mt-6 md:mt-8 w-3/4 md:w-1/2 mx-auto">
          Yale&apos;s premier tech organization and software application incubator.
        </p>

        <h1 className="text-white md:mt-[8vw] mt-16 text-center text-2xl w-3/4 mx-auto">
          We build and maintain student-run applications that power Yale University&apos;s campus
          community.
        </h1>

<<<<<<< HEAD
        <div className="lg:flex lg:flex-row sm:flex-col mb-10 ml-20 mr-20">
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
        <div className="flex md:flex-row flex-col mt-10 gap-10 md:mx-10 mx-16">
>>>>>>> c804257 (Alter the pink blocks section and make it responsive)
          <SolidColorBlock
            color={"ycs-pink"}
            title={"80+ developers"}
            desc={"creating apps to benefit the Yale and New Haven community."}
          />
          <SolidColorBlock
            color={"ycs-pink"}
            title={"50+ Catalyst members"}
            desc={"taught each year."}
          />
          <SolidColorBlock
            color={"ycs-pink"}
<<<<<<< HEAD
            title={"20,000+ unique users"}
            desc={"across all y/cs applications."}
          />
        </div>

        <TitleSubtitle
          title="Cultivating a passion for the computer science industry"
          subtitle="From development mentorship to hacking nights, we create a community for programmers of all skill levels."
          className="mt-32"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 mx-auto gap-8 mt-8">
          <GradientBox
            title="Development"
            color="blue"
            text="Become a member of one of our software teams and help build apps that benefit the Yale and New Haven community."
            link="/products"
          />
          <GradientBox
            title="Mentorship"
            color="pink"
            text="New to software engineering? Learn from mentors who have been there before with the y/cs Catalyst Program."
          />
          <GradientBox
            title="Events"
            color="green"
            text="Help plan social events for students to meet and share their interests, as well as bring notable industry figures to Yale's campus."
            link="/events"
          />
          <GradientBox
            title="Community"
            color="red"
            text="Join a y/cs community such as the Cybersecurity Community to meet people of similar computer science interests to yourself."
            link={"https://forms.gle/C4JvNKg5R19Khnpi9"}
          />
        </div>

        <Sponsors />

        <TitleSubtitle
          title="Ready to join the best computer science club at Yale?"
          subtitle="The Fall 2024 Membership Application will open following the Extracirrcular Bazaar."
          className="mt-32"
        />

        <Link
          href="/join"
          className="rounded-full disabled:opacity-50 font-bold text-xl hover:scale-105 duration-200 bg-ycs-pink p-4 pl-12 pr-12 m-6"
        >
          Learn More
        </Link>
=======
            title={"20,000+ unqiue users"}
            desc={"across all y/cs applications."}
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <TitleSubtitle
            title="Cultivating a passion for computer science"
            subtitle="From development mentorship to hacking nights, we create a community for programmers of all skill levels."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 mx-auto gap-8 mt-8">
            <GradientBox
              title="Development"
              color="blue"
              text="Become a member of one of our software teams and help build apps that benefit the Yale and New Haven community."
              link="/products"
            />
            <GradientBox
              title="Mentorship"
              color="pink"
              text="New to software engineering? Learn from mentors who have been there before with the y/cs Catalyst Program."
            />
            <GradientBox
              title="Events"
              color="green"
              text="Help plan social events for students to meet and share their interests, as well as bring notable industry figures to Yale's campus."
              link="/events"
            />
            <GradientBox
              title="Computer Security"
              color="red"
              text="Hear from students and professionals about the technical tricks of the trade, compete in Capture the Flag challenges, and work with the development teams to secure their products."
            />
          </div>

          <Sponsors />

          <div className="w-3/4 mt-20 mb-8 text-white text-5xl font-medium text-left">
            Ready to join the best computer science club at Yale?
          </div>
          <div className="w-3/4 text-gray-400 text-left text-3xl font-normal mb-8">
            The Fall 2024 Membership Application will open following the Extracirrcular Bazaar.
          </div>
          <div className="w-3/4 flex items-center">
            <Link
              href="/events"
              className="w-44 h-12 relative bg-ycs-pink rounded-full text-white text-xl font-bold flex items-center text-center justify-center hover:cursor-pointer transform transition-transform hover:scale-105 active:scale-95"
            >
              Learn More
            </Link>
          </div>
        </div>
<<<<<<< HEAD
        {/* <Slider {...settings}>
          {PARTNERSHIPS.map((project, i) => (
            <div key={i} className="">
              <img className="" src={project.image} alt={project.name} />
              <div className="">{project.name}</div>
            </div>
          ))}
        </Slider> */}
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
>>>>>>> d6e3433 (Fix sponsors)
      </div>
    </div>
  );
};

export default Home;
