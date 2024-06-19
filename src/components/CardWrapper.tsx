import { ReactNode } from "react";

type CardWrapperProps = {
  children: ReactNode;
};

export const CardWrapper = ({ children }: CardWrapperProps) => (
  <div className="card">{children}</div>
);
