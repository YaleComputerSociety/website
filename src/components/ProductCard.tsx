import Link from "next/link";
import { ReactNode, ReactElement } from "react";
import Image from "next/image";

import type { Project } from "@data";

interface Props {
  product: Project;
  roundedIcon?: boolean;
}

export const ProductCard = ({ product, roundedIcon }: Props) => {
  const ConditionalWrapper = ({
    condition,
    wrapper,
    children,
  }: {
    condition: boolean;
    wrapper: (children: ReactNode) => ReactElement;
    children: ReactNode;
  }) => (condition ? wrapper(children) : children);
  return (
    <div
      className={`flex flex-col relative ${product.link ? "project-card" : "project-card-no-link"}`}
    >
      <ConditionalWrapper
        condition={product.link != null}
        wrapper={(children: ReactNode) => (
          <Link href={product.link!} style={{ textDecoration: "none", color: "inherit" }}>
            {children}
          </Link>
        )}
      >
        <div className="w-40 h-40 bg-ycs-gray rounded-full absolute top-[-80px] left-1/2 -translate-x-1/2 flex justify-center items-center">
          <Image
            className={`${roundedIcon ? "rounded-full w-32 h-32" : "w-28 h-28"} ${product.name == "Yalies" && "left-7 absolute"}`}
            src={product.image}
            loading="lazy"
            alt={product.name}
          />
        </div>
        <div style={{ fontWeight: 500, fontSize: "25px", marginTop: "80px" }}>{product.name}</div>
        <div style={{ fontWeight: 400, fontSize: "18px", margin: "40px 20px" }}>
          {product.description}
        </div>
      </ConditionalWrapper>
    </div>
  );
};
