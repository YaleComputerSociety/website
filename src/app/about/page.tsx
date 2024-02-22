import Image from "next/image";

import { SectionTitle } from "@components/SectionTitle";
import teamPhoto from "@assets/team.png";
import { SmallSectionTitle } from "@components/SmallSectionTitle";
import { InfoCard } from "@components/InfoCard";
import { STORIES, TODAY_STATISTICS } from "@data";
import { Sponsors } from "@components/Sponsors";

const About = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-40 pr-40 pl-40 text-white">
      <SectionTitle
        header="About Us"
        subheader="The community for designers and engineers @ Yale."
      />

      <Image
        src={teamPhoto}
        style={{ width: "auto", height: 344 }}
        alt="YCS Team"
      />

      <div
        style={{
          backgroundColor: "#323844",
          padding: "10vh",
          marginTop: "5vh",
          marginBottom: "5vh",
          borderRadius: 40,
        }}
      >
        <text className="text-2xl">
          As the place for CS at Yale, we&apos;re a team of computer science
          enthusiasts looking to revolutionize the campus and make
          students&apos; lives easier through the use of technology. As a cohort
          of product designers, software engineers, and computing ambassadors,
          we develop high-quality, open-source products, host speaker events
          with technologists and industry professionals, and break barriers for
          students to gain real-world software engineering experience.
        </text>
      </div>

      <SmallSectionTitle
        header={"Our Story"}
        subheader={
          "The founding and growth of y/cs can be attributed to three crucial years."
        }
      />

      <div
        className="flex flex-row pt-10 gap-4"
        style={{ marginBottom: "5vh" }}
      >
        {STORIES.map((story, i) => (
          <InfoCard data={story.data} description={story.description} key={i} />
        ))}
      </div>

      <SmallSectionTitle header={"Today"} subheader={"By the Numbers"} />

      <div
        className="flex flex-row pt-10 gap-4"
        style={{ marginBottom: "10vh" }}
      >
        {TODAY_STATISTICS.map((story, i) => (
          <InfoCard data={story.data} description={story.description} key={i} />
        ))}
      </div>

      <Sponsors />
    </div>
  );
};

export default About;
