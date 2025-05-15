import { FC } from 'react';

interface Props {
  title: string;
  text: string;
  color: 'pink' | 'blue' | 'green' | 'faded-pink' | 'red';
  link?: string;
  icon?: React.ReactNode;
}

export const GradientBox: FC<Props> = ({ title, text, color, icon }) => {
  let gradientColors;
  let hoverGradient;
  let borderColor;
  let iconBg;

  switch (color) {
    case 'pink':
      gradientColors = 'from-ycs-pink/20 to-transparent';
      hoverGradient = 'hover:from-ycs-pink/30';
      borderColor = 'border-ycs-pink';
      iconBg = 'bg-ycs-pink/20';
      break;
    case 'faded-pink':
      gradientColors = 'from-ycs-faded-pink/20 to-transparent';
      hoverGradient = 'hover:from-ycs-faded-pink/30';
      borderColor = 'border-ycs-faded-pink';
      iconBg = 'bg-ycs-faded-pink/20';
      break;
    case 'blue':
      gradientColors = 'from-ycs-blue/20 to-transparent';
      hoverGradient = 'hover:from-ycs-blue/30';
      borderColor = 'border-ycs-blue';
      iconBg = 'bg-ycs-blue/20';
      break;
    case 'green':
      gradientColors = 'from-ycs-green/20 to-transparent';
      hoverGradient = 'hover:from-ycs-green/30';
      borderColor = 'border-ycs-green';
      iconBg = 'bg-ycs-green/20';
      break;
    case 'red':
      gradientColors = 'from-ycs-security-red/20 to-transparent';
      hoverGradient = 'hover:from-ycs-security-red/30';
      borderColor = 'border-ycs-security-red';
      iconBg = 'bg-ycs-security-red/20';
      break;
    default:
      gradientColors = 'from-ycs-pink/20 to-transparent';
      hoverGradient = 'hover:from-ycs-pink/30';
      borderColor = 'border-ycs-pink';
      iconBg = 'bg-ycs-pink/20';
  }

  const content = (
    <div
      className={`w-full text-left bg-zinc-800/50 bg-gradient-to-br ${gradientColors} ${hoverGradient} 
      border-l-4 ${borderColor} rounded-2xl p-8 transition-all duration-300 
      hover:shadow-lg hover:translate-y-[-4px] relative h-full`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          {icon && <div className={`p-3 rounded-lg ${iconBg} mr-4 text-white`}>{icon}</div>}
          <h3 className="text-white text-2xl font-bold">{title}</h3>
        </div>

        <p className="text-zinc-300 text-base lg:text-lg mb-6 flex-grow">{text}</p>
      </div>
    </div>
  );

  return content;
};
