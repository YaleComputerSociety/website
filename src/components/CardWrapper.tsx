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

type CardWrapperProps = {
    children: ReactNode
}

export const CardWrapper = ({children}: CardWrapperProps) => (
    <div className='card'>
        {children}
    </div>
)
>>>>>>> 359653e (New pages, sticky header)
