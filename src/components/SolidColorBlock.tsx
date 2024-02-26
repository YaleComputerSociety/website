interface Props {
  color: string;
  title: string;
  desc: string;
}

export const SolidColorBlock: React.FC<Props> = (props: Props) => {
  return (
    <div className={`lg:w-1/3 md:w-2/3 bg-${props.color} rounded-lg text-center`}>
      <div className="p-6">
        <div className="text-white lg:text-5xl text-3xl font-bold mb-2">
          <p>{props.title}</p>
        </div>
        <div className="text-white lg:text-lg md:text-md sm:text-sm text-sm">
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};
