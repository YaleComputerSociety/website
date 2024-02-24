import Image from "next/image";

import { Person } from "@data";

type Props = {
  people: Array<Person>;
  title: string;
};

export const TeamGrid: React.FC<Props> = (props: Props) => {
  return (
    <>
      <h1 className="font-bold text-4xl pb-10 text-center">{props.title}</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-x-8 auto-rows-auto w-[95%]">
        {props.people.map((board_member, i) => (
          <div className="p-4 rounded-3xl flex flex-col items-center" key={i}>
            <div className="h-32 w-32 md:h-48 md:w-48 xl:h-64 xl:w-64 relative">
              <Image
                src={board_member.image}
                alt={board_member.name}
                fill
                sizes="(max-width: 768px) 40vw, (max-width: 1200px) 33vw, 20vw"
                className="rounded-3xl"
                objectFit="cover"
              />
            </div>
            <div className="text-md xl:text-xl flex flex-col">
              <strong className="font-bold mt-2 xl:mt-4 text-center">{board_member.name}</strong>
              <div style={{ fontFamily: "Space Mono" }} className="text-center text-ycs-pink">
                {board_member.role[0].toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
