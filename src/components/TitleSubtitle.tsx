interface Props {
  title: string;
  subtitle: string;
  className?: string;
}

export const TitleSubtitle: React.FC<Props> = ({ title, subtitle, className }: Props) => {
  return (
    <div className="w-3/4 mt-40 flex flex-col items-center mx-auto">
      <div className={`text-white lg:text-6xl text-4xl font-bold text-center ${className}`}>
        {title}
      </div>
      <div className=" text-gray-400 lg:text-2xl text-lg mt-5 text-center">{subtitle}</div>
    </div>
  );
};
