import { FC } from "react";
import { useNavigate } from "react-router-dom";
import tsai from "../assets/partnerships/tsaicity.png"

import "../styles/home.css";
import ProductCarousel from "../components/ProductCarousel";
import { PARTNERSHIPS } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface GradientBoxProps {
  title: string;
  text: string;
  color: "pink" | "blue" | "green" | "faded-pink" | "red";
}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};

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
    case "red":
      gradientColors = "from-ycs-security-red to-ycs-security-red/10"
      break
    default:
      gradientColors = "from-ycs-pink to-ycs-pink/10";
  }

  return (
    <div className={`w-full lg:h-full sm:h-fit h-full text-left bg-gradient-to-b ${gradientColors} rounded-2xl p-10 my-10 mx-auto min-h-2r0elative hover:scale-105 active:scale-95 transform`}>
      <div className="p-6">
        <div className="text-white lg:text-lg md:text-md sm:text-sm font-bold">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white">{title}</p>
            <p className="text-gray-400 overflow-hidden whitespace-wrap">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SolidColorBlock = (props: any) => {
    return <div className={`lg:w-1/3 sm:w-full m-8 bg-${props.color} rounded-lg`}>
      <div className="p-6">
          <div className="text-white lg:text-5xl md:text-3xl sm:text-3xl xs:text-2xl text-left font-bold mb-2">
              <p>{props.title}</p>
          </div>
          <div className="text-white text-left lg:text-lg md:text-md sm:text-sm text-sm">
              <p>{props.desc}</p>
          </div>
      </div>
    </div>
}

export const Home = () => {
  const nav = useNavigate();

  return (
    <div className="">  
    

      <div className="flex flex-col">
    
         <br/>
         <br/>
      {/* <h1 className="text-white lg:text-big sm:text-9xl md:text-9xl font-extrabold text-center py-5 md:py-3 mt-10 md:mt-36 mb-4 md:mb-8">y/cs</h1> */}
        <p className="text-white text-left animate-pulse ml-20 mt-20 lg:text-7xl md:text-6xl sm:text-6xl text-6xl shadow-black text-shadow mb-6 mr-10 ml-10">We are the <br/> Yale Computer Society.</p>
        <p className="text-gray-400 text-left ml-20 lg:text-2xl md:text-xl sm:text-x shadow-black text-shadow mb-6 mr-10 ml-10">Yale's premier tech organization and software application incubator.</p>
        
        {/* <p className="text-white bg-ycs-blue p-4 rounded-md first-letter font-bold text-3xl mt-20">
          Check out our <span className="font-bold">Development Projects</span>
        </p>
        <ProductCarousel /> */}

        <h1 className="text-white mt-20 mr-10 ml-10 text-left text-center text-2xl">
          We build and maintain student-run applications that power Yale University's campus community.
        </h1>

        <div className="lg:flex lg:flex-row sm:flex-col mb-10 ml-20 mr-20">
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
        <br />
        <br/>
        <div className="flex flex-col items-center">
          <div className="w-3/4 mb-8 text-white lg:text-6xl md:text-xl sm:text-3xl text-3xl font-medium shadow-black text-shadow text-center">
            Cultivating a passion for software development and computing
          </div>
          <div className="w-3/4 text-gray-400 text-2xl mb-10 text-center">
            From development mentorship to hacking nights, we create a community for programmers of all skill levels.
          </div>

          <div className="flex flex-col md:flex-row w-3/4 h-3/4 mx-auto">
              <div
                className="w-full md:w-1/2 mr-10 flex flex-grow hover:cursor-pointer transform transition-transform hover:scale-105 active:scale-95"
                onClick={() => {
                  nav("/products");
                }}
              >
                <GradientBox
                  title="Development"
                  color="blue"
                  text="Become a member of one of our software teams and help build apps that benefit the Yale and New Haven community."
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div className="mb-8 hover:cursor-pointer transform transition-transform hover:scale-105 active:scale-95">
                  <GradientBox
                    title="Mentorship"
                    color="pink"
                    text="New to software engineering? Learn from mentors who have been there before with the y/cs Catalyst Program."
                  />
                </div>
                <div
                  className="hover:cursor-pointer transform transition-transform hover:scale-105 active:scale-95"
                  onClick={() => {
                    nav("/events");
                  }}
                >
                  <GradientBox
                    title="Events"
                    color="green"
                    text="Help plan social events for students to meet and share their interests, as well as bring notable industry figures to Yale's campus."
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 w-full md:w-9/12 mx-auto">
              <GradientBox
                title="Computer Security"
                color="red"
                text="Hear from students and professionals about the technical tricks of the trade, compete in fun Capture the Flag challenges to hone your skills and work with the development teams to secure their products."
              />
            </div>
            <div className="w-3/4 m-20 mb-0 text-white text-6xl font-medium  shadow-black text-shadow">Our Partners & Sponsors</div>
            <div className="w-2/4 text-gray-400 text-3xl mb-10">y/cs Partners & Sponsors help make our goals a reality.</div>
            {/* <Slider {...settings}>
              {PARTNERSHIPS.map((project, i) => (
                <div key={i} className="">
                  <img className="" src={project.image} alt={project.name} />
                  <div className="">{project.name}</div>
                </div>
              ))}
            </Slider> */}

         



        <div className="w-3/4 mt-20 mb-8 text-white text-5xl font-medium text-left">Ready to join the best computer science club at Yale?</div>
        <div className="w-3/4 text-gray-400 text-left text-3xl font-normal mb-8">The Fall 2024 Membership Application will open following the Extracirrcular Bazaar.</div>
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
        {/* <Slider {...settings}>
          {PARTNERSHIPS.map((project, i) => (
            <div key={i} className="">
              <img className="" src={project.image} alt={project.name} />
              <div className="">{project.name}</div>
            </div>
          ))}
        </Slider> */}
    
      
      </div>
    </div>
  );
};
