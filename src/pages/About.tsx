import { CardWrapper } from "../components/CardWrapper";
import { SectionTitle } from "../components/SectionTitle";
import teamPhoto from "../assets/team.png";
import {SmallSectionTitle} from "../components/SmallSectionTitle";
import {InfoCard} from "../components/InfoCard";
import {PARTNERSHIPS, STORIES, TODAY_STATISTICS} from "../data";

export const About = () => {
  return (
    <div style={{ paddingTop: "10vh", paddingLeft:"10vw", paddingRight:"10vw", color: "white" }}>
      <SectionTitle header="About Us" subheader="The community for designers and engineers @ Yale." />
        <CardWrapper>
            <img src={teamPhoto} style={{width: "auto", height: 344 }} alt="YCS Team"/>
        </CardWrapper>
        <div style={{backgroundColor: "#323844", padding: "10vh", marginTop: "5vh", marginBottom: "5vh", borderRadius: 40}}>
            <text>
                As the place for CS at Yale, we're a team of computer science enthusiasts looking to revolutionize the
                campus and make students' lives easier through the use of technology. As a cohort of product designers,
                software engineers, and computing ambassadors, we develop high-quality, open-source products, host speaker
                events with technologists and industry professionals, and break barriers for students to gain real-world software
                engineering experience.
            </text>
        </div>

        <SmallSectionTitle header={"Our Story"} subheader={"The founding and growth of YCS can be attributed to three crucial years."}/>

        <div className="flex flex-row pt-10 gap-4" style={{marginBottom: "5vh"}}>
            {
                STORIES.map((story, i) => (
                    <InfoCard data={story.data} description={story.description} key={i} />
                ))
            }
        </div>
        
        <SmallSectionTitle header={"Today"} subheader={"By the Numbers"}/>

        <div className="flex flex-row pt-10 gap-4" style={{marginBottom: "10vh"}}>
            {
                TODAY_STATISTICS.map((story, i) => (
                    <InfoCard data={story.data} description={story.description} key={i} />
                ))
            }
        </div>

        <p style={{fontSize: 20, marginTop: "5vh"}}>Our Partners & Sponsors</p>

        <div className="mt-10 grid grid-rows-2 grid-cols-5 gap-y-4 justify-items-center w-full">
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
    </div>
  );
};
