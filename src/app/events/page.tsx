import { SectionTitle } from "@components/SectionTitle";

interface Props {
  className?: string;
}

const GoogleCalendar: React.FC<Props> = ({ className }: Props) => {
  return (
    <div
      className={`border-[0.75rem] rounded-xl border-solid border-ycs-pink bg-white ${className}`}
    >
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
    <div>
      <SectionTitle
        title="Events"
        subtitle="Each semester, the y/cs hosts dozens of events. Check here for our calendar to see
            whats coming up! You can click the button in the bottom right to add us to your Google Calendar"
      />
      <GoogleCalendar className=" mx-5 md:mx-32" />
    </div>
  );
};

export default Events;
