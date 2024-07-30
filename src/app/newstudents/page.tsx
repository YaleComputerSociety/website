import { SectionTitle } from "@components/SectionTitle";
import { InfoCard } from "@components/InfoCard";
import { STORIES, TODAY_STATISTICS } from "@data";
import { Sponsors } from "@components/Sponsors";
import { TitleSubtitle } from "@components/TitleSubtitle";

const NewStudents = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <SectionTitle
        title="New to Yale?"
        subtitle="Welcome to Yale, Class of 2028! Learn how to access Y/CS Products and the best tech at Yale."
      />

      <div
        className="bg-ycs-gray p-8 md:p-12 m-8 md:m-12 mb-0 md:mb-0 text-lg md:text-2xl"
        style={{
          borderRadius: 40,
        }}
      >
        <text>
          Y/CS products such as Yalies and Coursetable respect Yale's matriculation process and access is not granted until you are set to an active student in Yale's system.
          You are considered an incoming student from the time you accept Yale's offer of admission to early August. 
          In August, this status will change to active and you should log out and log in again on CourseTable to refresh your authentication status.
          The Y/CS is unable to manually grant access or change your student status, as this is all handled centrally by the University Registrar's Office.
        </text>
      </div>

      <TitleSubtitle
        title="While You're Waiting"
        subtitle="Learn what you can use to get the most out of your Yale Experience!"
        className="mb-10 mt-32"
      />

      <div className="flex flex-col md:flex-row pt-10 gap-16 md:gap-4 mx-10">
        {STORIES.map((story, i) => (
          <InfoCard data={story.data} description={story.description} key={i} />
        ))}
      </div>

      <TitleSubtitle title="Today" subtitle="By the Numbers" className="mb-10 mt-32" />

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

export default NewStudents;
