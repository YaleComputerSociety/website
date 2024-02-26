interface Props {
  title: string;
  subtitle: string;
  className?: string;
}

export const TitleSubtitle: React.FC<Props> = ({ title, subtitle, className }: Props) => {
  return (
<<<<<<< HEAD
    <div className={`w-3/4 flex flex-col items-center mx-auto ${className}`}>
      <div className="text-white lg:text-6xl text-3xl font-bold text-center">{title}</div>
=======
    <div className="w-3/4 mt-40 flex flex-col items-center mx-auto">
      <div className={`text-white lg:text-6xl text-3xl font-bold text-center ${className}`}>
        {title}
      </div>
>>>>>>> daf332c (Create TitleSubtitle component and apply to home page as well as sponsors component)
      <div className=" text-gray-400 lg:text-2xl text-lg mt-5 text-center">{subtitle}</div>
    </div>
  );
};
