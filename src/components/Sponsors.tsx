import Image from "next/image";

import { TitleSubtitle } from "./TitleSubtitle";

import { PARTNERSHIPS } from "@data";

export const Sponsors: React.FC = () => {
  return (
    <>
      <TitleSubtitle
        title="Our Partners & Sponsors"
        subtitle="y/cs Partners & Sponsors help make our goals a reality."
      />

      <div className="mt-10 grid grid-rows-2 grid-cols-4 gap-y-4 justify-items-center w-3/4">
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
    </>
  );
};
