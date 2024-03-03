"use client"

import { SectionTitle } from "@components/SectionTitle"
import { SolidColorBlock } from "@components/SolidColorBlock"
import { Button } from "@components/Button"

const ROLES = [
   {
     title : "Software Developer",
     desc : "Develop one of the y/cs's current or up and coming products.",
   },

   {
    title : "Catalyst Developer",
    desc : "Hone your development skills in a beginner friendly software program.",
  },

   {
     title : "UI/UX Designer",
     desc : "Design Figma wireframes and collaborate with development teams to bring products to life."
   },
   {
     title : "Product Designer",
     desc : "Envision and lead the conceptualization of a new y/cs product."
   },
   {
    title : "Outreach Planner",
    desc : "Bring the Tech industry to Yale! Build y/cs connections to Big Tech companies."
   },
   {
    title : "Event Planner",
    desc : "Help plan Events for members of the Society. Past events include the y/cs Gala, Demo Day, Murder Mystery, and more!"
   }
]

const Join = () => {

    return (
      <div className="lg:ml-32 lg:mr-32 md:ml-20 md:mr-20 sm:ml-16 sm:mr-16 mr-20 ml-20">
        
        <h1 className="lg:text-8xl md:text-6xl sm:text-6xl text-6xl font-bold mt-10 text-ycs-pink mb-5">&lt;Come build with us /&gt;</h1>

        <p className="lg:text-4xl md:text-2xl sm:text-xl text-left mb-10">We are Yale's largest collective of software developers, product designers, and computer science 
        enthusiasts. We're excited that you're interested in joining us!
        </p>

        <p className="lg:text-3xl md:text-xl sm:text-xl text-xl font-bold underline">Roles</p>
        

        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8">
          {

            ROLES.map((r) => {
              return <SolidColorBlock 
              title={r.title}
              desc={r.desc}
              color="ycs-pink"
            />
            })
          }
         
          
        </div>



        <div>
          
          <p className="text-xl">
  
            Applications to join y/cs open at the beginning of each semester. 
            There are three phases in the application
            process.  

            <br></br>
            <br></br>

            <span className="font-bold underline">1. Written Application</span>

            <br></br>

            Applicants are evaluated based on submitted short responses, resumé and past relevant experiences.

            <br></br>
            <br></br>

            <span className="font-bold underline">2. Interview</span>
            <br></br>
            Successful applicants are moved to an interview phase. Those applying for technical roles likely
            recieve technical questions. Not all teams require interviews.

            <br></br>
            <br></br>

            <span className="font-bold underline">3. Team Placement</span>
            <br></br> 
            Based on your written application and interview you are placed on a y/cs team. Some teams are
            competitive to join, while others are non-competitive.
          </p>

        </div>

        <Button 
          buttonText="Join"
          disabled={true}
          onClick={() => {console.log("hello")}}
          link="none"
        />
      
      </div>
    )  

}

export default Join