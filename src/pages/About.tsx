import { CardWrapper } from "../components/CardWrapper";
import { SectionTitle } from "../components/SectionTitle";
import teamPhoto from "../assets/team.png";
import {SmallSectionTitle} from "../components/SmallSectionTitle";
import {InfoCard} from "../components/InfoCard";
import {PARTNERSHIPS} from "../data";

export const About = () => {
  return (
    <div style={{ paddingTop: "10vh", paddingLeft:"10vw", paddingRight:"10vw", color: "white" }}>
      <SectionTitle header="About Us" subheader="The community for designers and engineers @ Yale." />
        <CardWrapper>
            <img src={teamPhoto} style={{width: "auto", height: 344 }}/>
        </CardWrapper>
        <div style={{backgroundColor: "#323844", padding: "10vh", marginTop: "5vh", borderRadius: 40}}>
            <text>
                As the place for CS at Yale, we’re a team of computer science enthusiasts looking to revolutionize the
                campus and make students’ lives easier through the use of technology. As a cohort of product designers,
                software engineers, and computing ambassadors, we develop high-quality, open-source products, host speaker
                events with technologists and industry professionals, and break barriers for students to gain real-world software
                engineering experience.
            </text>
        </div>

        <SmallSectionTitle header={"Our Story"} subheader={"The founding and growth of YCS can be attributed to three crucial years."}/>

        <div className="card-grid">
            <InfoCard data={"2012"} description={"In 2012, then Yale students Peter Xu and Harry Yu created CourseTable – Yale’s first product built by students, for students."}></InfoCard>
        </div>
        
        <SmallSectionTitle header={"Today"} subheader={"By the Numbers"}/>

        <text style={{fontSize: 20}}>Our Partnerships</text>
        <div className="py-28 flex flex-col items-center w-full bg-white">
            <div className="w-3/4 h-28 shadow-lg shadow-black rounded-full flex items-center justify-evenly" style={{backgroundColor: "#323844"}}>
                {
                    PARTNERSHIPS.map((project, i) => (
                        <img className="rounded-lg" key={i} src={project.image} alt={project.name} />
                    ))
                }
            </div>
            <div className="w-3/4 h-6 relative mt-4 text-md text-gray-400 text-center flex justify-evenly">
                {
                    PARTNERSHIPS.map((project, i) => (
                        <div key={i}>{project.name}</div>
                    ))
                }
            </div>
        </div>
    </div>
  );
};
