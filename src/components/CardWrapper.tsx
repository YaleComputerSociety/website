<<<<<<< HEAD
<<<<<<< HEAD
import { ReactNode } from "react";

type CardWrapperProps = {
  children: ReactNode;
};

export const CardWrapper = ({ children }: CardWrapperProps) => (
  <div className="card">{children}</div>
);
=======
import { ReactNode } from "react"
=======
import { ReactNode } from "react";
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)

type CardWrapperProps = {
  children: ReactNode;
};

<<<<<<< HEAD
export const CardWrapper = ({children}: CardWrapperProps) => (
    <div className='card' >
        {children}
    </div>
)
>>>>>>> 359653e (New pages, sticky header)
=======
export const CardWrapper = ({ children }: CardWrapperProps) => (
  <div className="card">{children}</div>
);
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
