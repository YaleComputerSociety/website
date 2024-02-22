import Image from "next/image";

import { PARTNERSHIPS } from "@data";

export const Sponsors: React.FC = () => {
  return (
    <div>
      <div className="w-3/4 m-20 mb-0 text-white text-6xl font-medium shadow-black text-shadow text-center">
        Our Partners & Sponsors
      </div>
      <div className="text-gray-400 text-xl my-4 text-center">
        y/cs Partners & Sponsors help make our goals a reality.
      </div>

      <div className="mt-10 grid grid-rows-2 grid-cols-4 gap-y-4 justify-items-center w-full">
        <div
          style={{ backgroundColor: "#323844", gridArea: "1 / 1 / 2 / 6" }}
          className="w-full h-28 rounded-full col-span-5"
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
          <div className="text-md text-gray-400" key={i}>
            {project.name}
          </div>
        ))}
      </div>
    </div>
  );
};
