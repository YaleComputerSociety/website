import Link from "next/link";
import { FC } from "react";

interface Props {
  title: string;
  text: string;
  color: "pink" | "blue" | "green" | "faded-pink" | "red";
  link?: string;
}

export const GradientBox: FC<Props> = ({ title, text, color, link }) => {
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

  const content = (
    <div
      className={`w-full text-left bg-gradient-to-b ${gradientColors} rounded-2xl p-6 md:p-10  mx-auto  relative hover:scale-105 active:scale-95 transform duration-150`}
    >
      <div className="text-white cursor-default font-bold">
        <p className="text-white text-md lg:text-xl">{title}</p>
        <p className="text-gray-400 overflow-hidden whitespace-wrap text-sm lg:text-lg">{text}</p>
      </div>
    </div>
  );

  return link ? <Link href={link}>{content}</Link> : content;
};
