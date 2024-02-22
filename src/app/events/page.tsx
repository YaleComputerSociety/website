const GoogleCalendar = () => {
  return (
    <div className="p-3 bg-ycs-blue border-4 border-solid mr-4 ml-4 border-ycs-blue ">
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
    <div className="mt-36 mx-12">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-left text-white">
          <h1 className=" p-4 font-bold text-white text-4xl bg-ycs-pink rounded-lg">
            Events
          </h1>
          <p className="mt-10 text-2xl text-white">
            Each semester, the y/cs hosts dozens of events. Check here for our
            calendar to see what&apos;s coming up!
            <br />
            <br />
          </p>
        </div>
        <GoogleCalendar />
      </div>
    </div>
  );
};

export default Events;
