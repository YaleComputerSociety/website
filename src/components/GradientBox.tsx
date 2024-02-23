import { FC } from "react";

interface GradientBoxProps {
  title: string;
  text: string;
  color: "pink" | "blue" | "green" | "faded-pink" | "red";
}

export const GradientBox: FC<GradientBoxProps> = ({ title, text, color }) => {
  let gradientColors;

  switch (color) {
    case "pink":
      gradientColors = "from-ycs-pink to-ycs-pink/10";
      break;
    case "faded-pink":
      gradientColors = "from-ycs-faded-pink to-ycs-faded-pink/10";
      break;
    case "blue":
      gradientColors = "from-ycs-blue to-ycs-blue/10";
      break;
    case "green":
      gradientColors = "from-ycs-green to-ycs-green/10";
      break;
    case "red":
      gradientColors = "from-ycs-security-red to-ycs-security-red/10";
      break;
    default:
      gradientColors = "from-ycs-pink to-ycs-pink/10";
  }

  return (
    <div
      className={`w-full lg:h-full sm:h-fit h-full text-left bg-gradient-to-b ${gradientColors} rounded-2xl p-10 my-10 mx-auto min-h-2r0elative hover:scale-105 active:scale-95 transform`}
    >
      <div className="p-6">
        <div className="text-white lg:text-lg md:text-md sm:text-sm font-bold">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white">{title}</p>
            <p className="text-gray-400 overflow-hidden whitespace-wrap">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
