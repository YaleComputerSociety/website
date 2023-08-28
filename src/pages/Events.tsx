const GoogleCalendar = () => {
    return (
      <div className="google-calendar p-3 bg-ycs-blue border-4 border-solid mr-4 ml-4 border-ycs-blue ">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=t6isudodqcpb2uepck99jmjt3o%40group.calendar.google.com&ctz=America%2FChicago"
          style={{ border: '0', width: '100%', height: '600px' }}
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
        ></iframe>
      </div>
    );
  };
  

export const Events = () => {
    return (
        <div className="mt-36 mx-12">
            <div className="grid grid-cols-2 gap-4">
                <div className="text-left text-white">
                    <h1 className=" p-4 font-bold text-white text-4xl bg-ycs-pink rounded-lg">Events</h1>
                    <p className="mt-10 text-2xl text-white">
                      Each semester, the y/cs hosts dozens of events. Check here for our calendar to see what's coming up!
                      <br/>
                      <br/>
                      <span className="font-bold">Interested in joining the y/cs? The application to join will open again in Fall 2023!</span>
                    </p>
                    <h1 className="font-bold underline text-2xl text-white mt-5">Recruitment Calendar</h1>
                    <ol className="text-xl">
                      <li>August 29th: Yale Engineering & Entrepreneurship Expo!</li>
                      <li>September 3rd: Extracurricular Bazaar + Application Opens!</li>
                      <li>September 13th: Application Closes!</li>
                      <br/>
                      <li>Email yalecomputersociety@gmail.com with any questions you may have!</li>
                    </ol>
                </div>
                <GoogleCalendar />
          
            </div>
        </div>
    )
}
