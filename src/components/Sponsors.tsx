import Image from "next/image";

<<<<<<< HEAD
<<<<<<< HEAD
import { TitleSubtitle } from "./TitleSubtitle";

=======
>>>>>>> d6e3433 (Fix sponsors)
=======
import { TitleSubtitle } from "./TitleSubtitle";

>>>>>>> daf332c (Create TitleSubtitle component and apply to home page as well as sponsors component)
import { PARTNERSHIPS } from "@data";

export const Sponsors: React.FC = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> daf332c (Create TitleSubtitle component and apply to home page as well as sponsors component)
    <>
      <TitleSubtitle
        title="Our Partners & Sponsors"
        subtitle="y/cs Partners & Sponsors help make our goals a reality."
<<<<<<< HEAD
        className="mt-32"
      />

      <div className="mt-10 grid grid-cols-4 gap-y-4 justify-items-center md:w-3/4 md:mx-0 mx-5">
        <div
          style={{ gridArea: "1 / 1 / 2 / 6" }}
          className="w-full h-28 rounded-full md:bg-[#323844] row-span-1"
=======
    <div>
      <div className="w-3/4 m-20 mb-0 text-white text-6xl font-medium shadow-black text-shadow text-center">
        Our Partners & Sponsors
      </div>
      <div className="text-gray-400 text-xl my-4 text-center">
        y/cs Partners & Sponsors help make our goals a reality.
      </div>
=======
      />
>>>>>>> daf332c (Create TitleSubtitle component and apply to home page as well as sponsors component)

      <div className="mt-10 grid grid-rows-2 grid-cols-4 gap-y-4 justify-items-center w-3/4">
        <div
          style={{ backgroundColor: "#323844", gridArea: "1 / 1 / 2 / 6" }}
          className="w-full h-28 rounded-full col-span-5"
>>>>>>> d6e3433 (Fix sponsors)
        />
        {PARTNERSHIPS.map((project, i) => (
          <Image
            className="rounded-lg"
            style={{
              height: 60,
              width: "auto",
              gridArea: `1 / ${i + 1} / 2 / ${i + 2}`,
              alignSelf: "center",
            }}
            key={i}
            src={project.image}
            alt={project.name}
          />
        ))}

        {PARTNERSHIPS.map((project, i) => (
<<<<<<< HEAD
          <div className="text-md text-gray-400 text-center row-span-1" key={i}>
=======
          <div className="text-md text-gray-400" key={i}>
>>>>>>> d6e3433 (Fix sponsors)
            {project.name}
          </div>
        ))}
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </>
=======
    </div>
>>>>>>> d6e3433 (Fix sponsors)
=======
    </>
>>>>>>> daf332c (Create TitleSubtitle component and apply to home page as well as sponsors component)
  );
};
