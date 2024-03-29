interface Props {
  title: string;
  subtitle: string;
  className?: string;
}

export const TitleSubtitle: React.FC<Props> = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`w-3/4 flex flex-col items-center mx-auto ${className}`}>
      <div className="text-white lg:text-6xl text-3xl font-bold text-center">{title}</div>
      <div className=" text-gray-400 lg:text-2xl text-lg mt-5 text-center">{subtitle}</div>
    </div>
  );
};
