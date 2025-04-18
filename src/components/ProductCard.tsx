import Link from "next/link";
import { ReactNode, ReactElement } from "react";
import Image from "next/image";

import nologoproduct1 from "../assets/products/logos/ycs.png";

import type { Project } from "@data";

interface Props {
  product: Project;
  roundedIcon?: boolean;
  isBackgroundWhite?: boolean;
}

export const ProductCard = ({ product, roundedIcon, isBackgroundWhite }: Props) => {
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
            className={`${roundedIcon ? "rounded-full w-32 h-32" : "w-28 h-28"} ${product.name == "Yalies" && "left-7 absolute"} ${isBackgroundWhite ? "bg-white" : ""}`}
            src={product.logo ? product.logo : nologoproduct1}
            loading="lazy"
            alt={product.name}
          />
        </div>
        <div className="font-semibold text-xl md:text-3xl mt-16">{product.name}</div>
        <div className="font-normal text-md md:text-lg md:m-8 md:mt-4 m-4">
          {product.description}
        </div>
      </ConditionalWrapper>
    </div>
  );
};
