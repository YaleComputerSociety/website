import { FC } from "react";
import { useNavigate } from "react-router-dom";
import tsai from "../assets/partnerships/tsaicity.png"

import "./home.css";
import ProductCarousel from "../components/ProductCarousel";
import { PARTNERSHIPS } from "../data";


interface GradientBoxProps {
  title: string;
  text: string;
  color: "pink" | "blue" | "green" | "faded-pink";
}

const GradientBox: FC<GradientBoxProps> = ({ title, text, color }) => {
  let gradientColors;

  switch (color) {
    case "pink":
      gradientColors = "from-ycs-pink to-ycs-pink/10";
      break;
    case "faded-pink":
      gradientColors = "from-ycs-faded-pink to-ycs-faded-pink/10";
      break;
    case "blue":
      gradientColors = "from-ycs-blue to-ycs-blue/10";
      break;
    case "green":
      gradientColors = "from-ycs-green to-ycs-green/10";
      break;
    default:
      gradientColors = "from-ycs-pink to-ycs-pink/10";
  }

  return (
    <div className={`w-full h-full text-left bg-gradient-to-b ${gradientColors} rounded-2xl p-8 my-10 mx-auto relative`}>
      <div className="p-6">
        <div className="text-white text-lg font-bold">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white">{title}</p>
            <p className="text-gray-400 overflow-hidden whitespace-wrap">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Home = () => {
  const nav = useNavigate();

  return (
    <div className="">
      <div className="flex flex-col items-center ">
        <h1 className="text-white text-big font-extrabold  text-center py-10 md:py-3 mt-36 mb-8">y/cs</h1>
        <p className="text-white w-1/2 text-3xl shadow-black text-shadow mb-6">We are the Yale Computer Society.</p>
        <p className="text-gray-400 w-1/2 text-2xl shadow-black text-shadow mb-6">Yale's premier software development, computer science and tech entrepreneurship student organization.</p>

        <p className="text-white bg-ycs-blue p-4 rounded-md first-letter font-bold text-3xl mt-20">
          Check out our <span className="font-bold">Development Projects</span>
        </p>
        <ProductCarousel />
        <div className="w-3/4 mb-8 text-white text-6xl font-medium  shadow-black text-shadow">Cultivating a passion for programming</div>
        <div className="w-3/4 text-gray-400 text-3xl mb-10">From development mentorship to hacking nights, we create a community for programmers of all skill levels. </div>

        <div className="columns-2 gap-4"></div>

        <div className="flex w-3/4 mb-12 h-3/4">
          <div
            className="w-1/2 mr-10 flex flex-grow hover:cursor-pointer transform transition-transform hover:scale-105 active:scale-95"
            onClick={() => {
              nav("/products");
            }}
          >
            <GradientBox title="Development" color="blue" text="Become a member of one of our software teams and help build apps that benefit the Yale and New Haven community." />
          </div>
          <div className="w-1/2 flex flex-col justify-between ">
            <div className="mb-8 hover:cursor-pointer transform transition-transform hover:scale-105 active:scale-95">
              <GradientBox title="Mentorship" color="pink" text="New to software engineering? Learn from mentors who have been there before with the y/cs Catalyst Program." />
            </div>
            <div
              className="hover:cursor-pointer transform transition-transform hover:scale-105 active:scale-95"
              onClick={() => {
                nav("/events");
              }}
            >
              <GradientBox title="Events" color="green" text="Help plan social events for students to meet and share their interests, as well as bring notable industry figures to Yale's campus." />
            </div>
          </div>
        </div>

        <div className="w-3/4 m-20 mb-0 text-white text-6xl font-medium  shadow-black text-shadow">Our Partners</div>
        <div className="w-2/4 text-gray-400 text-3xl">y/cs corporate partners help make our goals a reality.</div>
        <div className="mt-10 grid grid-rows-2 grid-cols-5 gap-y-4 justify-items-center w-3/4">
            <div style={{backgroundColor: "#323844", gridArea: "1 / 1 / 2 / 6"}} className="w-full h-28 shadow-lg shadow-black rounded-full col-span-5" />
            {
                PARTNERSHIPS.map((project, i) => (
                    <img className="rounded-lg" style={{height: 50, gridArea: `1 / ${i + 1} / 2 / ${i + 2}`, alignSelf: "center"}}
                         key={i} src={project.image} alt={project.name} />
                ))
            }

            {
                PARTNERSHIPS.map((project, i) => (
                    <div className="text-md text-gray-400" key={i}>{project.name}</div>
                ))
            }
        </div>
        <div className="w-3/4 mt-20 mb-8 text-white text-5xl font-medium text-left">Ready to join the best computer science club at Yale?</div>
        <div className="w-3/4 text-gray-400 text-left text-3xl font-normal mb-8">Join our email list to stay up to date on our events and opportunities. The Fall 2023 Membership Application will open after the Extracurricular Bazaar.</div>
        <div className="w-3/4 flex items-center">
          <div
            onClick={() => {
              nav("/events");
            }}
            className="w-44 h-12 relative bg-ycs-pink rounded-full text-white text-xl font-bold flex items-center text-center justify-center hover:cursor-pointer transform transition-transform hover:scale-105 active:scale-95"
          >
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
};
