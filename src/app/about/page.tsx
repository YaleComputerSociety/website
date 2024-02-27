import { SectionTitle } from "@components/SectionTitle";
import { InfoCard } from "@components/InfoCard";
import { STORIES, TODAY_STATISTICS } from "@data";
import { Sponsors } from "@components/Sponsors";
import { TitleSubtitle } from "@components/TitleSubtitle";

const About = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <SectionTitle
        title="About Us"
        subtitle="The community for designers and engineers at Yale."
      />

      <div
        className="bg-ycs-gray p-6 md:p-12 m-6 md:m-12 mb-0 md:mb-0 text-lg md:text-2xl"
        style={{
          borderRadius: 40,
        }}
      >
        <text>
          As the place for CS at Yale, we&apos;re a team of computer science enthusiasts looking to
          revolutionize the campus and make students&apos; lives easier through the use of
          technology. As a cohort of product designers, software engineers, and computing
          ambassadors, we develop high-quality, open-source products, host speaker events with
          technologists and industry professionals, and break barriers for students to gain
          real-world software engineering experience.
        </text>
      </div>

      <TitleSubtitle
        title="Our Story"
        subtitle="The founding and growth of y/cs can be attributed to three crucial years."
        className="mb-10"
      />

      <div className="flex flex-col md:flex-row pt-10 gap-16 md:gap-4 mx-10">
        {STORIES.map((story, i) => (
          <InfoCard data={story.data} description={story.description} key={i} />
        ))}
      </div>

      <TitleSubtitle title="Today" subtitle="By the Numbers" className="mb-10" />

      <div className="flex flex-col md:flex-row pt-10 gap-16 md:gap-4 mx-10">
        {TODAY_STATISTICS.map((story, i) => (
          <InfoCard data={story.data} description={story.description} key={i} />
        ))}
      </div>

      <Sponsors />
      <div className="mt-20" />
    </div>
  );
};

export default About;
