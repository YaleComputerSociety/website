<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f34bcd0 (Reorganize events page and make responsive)
import { SectionTitle } from "@components/SectionTitle";

interface Props {
  className?: string;
}

const GoogleCalendar: React.FC<Props> = ({ className }: Props) => {
<<<<<<< HEAD
  return (
    <div
      className={`border-[0.75rem] rounded-xl border-solid border-ycs-pink bg-white ${className}`}
    >
=======
const GoogleCalendar = () => {
  return (
    <div className="p-3 bg-ycs-blue border-4 border-solid mr-4 ml-4 border-ycs-blue ">
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
  return (
<<<<<<< HEAD
    <div className={`border-[0.75rem] rounded-xl border-solid border-ycs-pink ${className}`}>
>>>>>>> f34bcd0 (Reorganize events page and make responsive)
=======
    <div
      className={`border-[0.75rem] rounded-xl border-solid border-ycs-pink bg-white ${className}`}
    >
>>>>>>> 3dd601d (Work on rewriting join page to be responsive and better laid out)
      <iframe
        src="https://calendar.google.com/calendar/embed?src=t6isudodqcpb2uepck99jmjt3o%40group.calendar.google.com&ctz=America%2FNew_York"
        style={{ border: "0", width: "100%", height: "600px" }}
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

const Events = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="mb-12">
=======
    <div>
>>>>>>> f34bcd0 (Reorganize events page and make responsive)
      <SectionTitle
        title="Events"
        subtitle="Each semester, the y/cs hosts dozens of events. Check here for our calendar to see
            whats coming up! You can click the button in the bottom right to add us to your Google Calendar"
      />
      <GoogleCalendar className=" mx-5 md:mx-32" />
<<<<<<< HEAD
=======
    <div className="mt-36 mx-12">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-left text-white">
          <h1 className=" p-4 font-bold text-white text-4xl bg-ycs-pink rounded-lg">Events</h1>
          <p className="mt-10 text-2xl text-white">
            Each semester, the y/cs hosts dozens of events. Check here for our calendar to see
            what&apos;s coming up!
            <br />
            <br />
          </p>
        </div>
        <GoogleCalendar />
      </div>
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
>>>>>>> f34bcd0 (Reorganize events page and make responsive)
    </div>
  );
};

export default Events;
