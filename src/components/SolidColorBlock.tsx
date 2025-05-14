import React from 'react';

interface Props {
  color: string;
  title: string;
  desc: string;
  icon?: React.ReactNode;
}

export const SolidColorBlock: React.FC<Props> = ({ color, title, desc, icon }) => {
  return (
    <div
      className={`w-full text-left overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]`}
    >
      <div className="flex flex-col">
        {icon && <div className="mb-3 text-white opacity-75">{icon}</div>}
        <div className="text-white text-6xl lg:text-5xl font-bold mb-3 font-display">{title}</div>
        <div className="text-white/80 text-lg">{desc}</div>
      </div>
    </div>
  );
};
