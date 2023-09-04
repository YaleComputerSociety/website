const GoogleCalendar = () => {
    return (
      <div className="p-3 bg-ycs-blue border-4 border-solid mr-4 ml-4 border-ycs-blue ">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=t6isudodqcpb2uepck99jmjt3o%40group.calendar.google.com&ctz=America%2FNew_York" 
          style={{ border: '0', width: '100%', height: '600px' }}
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
                      <span className="font-bold">Interested in joining the y/cs? The application to join is now open!</span>
                      <br/>
                      <br/>
                      <a className="text-ycs-pink underline" target="_blank" href="https://www.tinyurl.com/apply-ycs">Click Here to Apply!</a>
                    </p>
                    <h1 className="font-bold underline text-2xl text-white mt-5">Recruitment Calendar</h1>
                    <ol className="text-xl">
                      <li className="line-through">August 29th: Yale Engineering & Entrepreneurship Expo!</li>
                      <li className="line-through">September 3rd: Extracurricular Bazaar + Application Opens!</li>
                      <li className="">September 6th: Meet y/cs @ 5:30-6:30pm Tsai CITY</li>
                      <li className="">September 10th: Meet y/cs @ 5:30-6:30pm Tsai CITY</li>
                      <li className="text-ycs-pink">September 13th: Application Closes!</li>
                      <br/>
                      <li>Email yalecomputersociety@gmail.com with any questions you may have!</li>
                    </ol>
                </div>
                <GoogleCalendar />
          
            </div>
        </div>
    )
}
