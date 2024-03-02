<<<<<<< HEAD
<<<<<<< HEAD
interface Props {
  color: string;
  title: string;
  desc: string;
}

export const SolidColorBlock: React.FC<Props> = (props: Props) => {
  return (
    <div className={`w-full bg-${props.color} ml-2 mr-2 rounded-lg text-center`}>
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
=======

=======
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
interface Props {
  color: string;
  title: string;
  desc: string;
}

export const SolidColorBlock: React.FC<Props> = (props: Props) => {
  return (
    <div className={`w-full bg-${props.color} m-5 ml-2 mr-2 rounded-lg text-center`}>
      <div className="p-6">
        <div className="text-white lg:text-5xl text-3xl font-bold mb-2">
          <p>{props.title}</p>
        </div>
        <div className="text-white lg:text-lg md:text-md sm:text-sm text-sm">
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
<<<<<<< HEAD
}
>>>>>>> aa99426 (Refactor gradientBox and solidColorBlock into component files)
=======
  );
};
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
