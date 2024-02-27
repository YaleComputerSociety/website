import Link from "next/link";
import { ReactNode, ReactElement } from "react";
import Image from "next/image";

<<<<<<< HEAD
import nologoproduct1 from "../assets/products/logos/ycs.png";

=======
>>>>>>> e7167db (Refactor product card into its own component)
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
<<<<<<< HEAD
            src={product.logo ? product.logo : nologoproduct1}
=======
            src={product.image}
>>>>>>> e7167db (Refactor product card into its own component)
            loading="lazy"
            alt={product.name}
          />
        </div>
<<<<<<< HEAD
        <div className="font-semibold text-xl md:text-3xl mt-16">{product.name}</div>
        <div className="font-normal text-md md:text-lg md:m-8 md:mt-4 m-4">
=======
        <div style={{ fontWeight: 500, fontSize: "25px", marginTop: "80px" }}>{product.name}</div>
        <div style={{ fontWeight: 400, fontSize: "18px", margin: "40px 20px" }}>
>>>>>>> e7167db (Refactor product card into its own component)
          {product.description}
        </div>
      </ConditionalWrapper>
    </div>
  );
};
