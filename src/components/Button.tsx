"use client";
import Link from "next/link";

export interface Props {
    buttonText : string,
    onClick: () => void;
    disabled : boolean;
    link: string;
}

export const Button = (props: Props) => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!props.disabled) {
      props.onClick();
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Link href={props.link}>
        <button onClick={props.onClick} 
                disabled={props.disabled}
                className="rounded-full disabled:opacity-50 font-bold text-xl hover:scale-105 bg-ycs-pink p-4 pl-12 pr-12 m-6">
          {props.buttonText}
        </button>
      </Link>
    </div>
  
  );
};
