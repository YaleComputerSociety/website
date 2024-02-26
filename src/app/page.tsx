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

        <div className="flex md:flex-row flex-col mt-10 gap-10 md:mx-10 mx-16">
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

          <TitleSubtitle
            title="Ready to join the best computer science club at Yale?"
            subtitle="The Fall 2024 Membership Application will open following the Extracirrcular Bazaar."
          />
          <div className="mt-20" />
        </div>
      </div>
    </div>
  );
};

export default Home;
