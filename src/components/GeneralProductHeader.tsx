import Link from "next/link";
import Image from "next/image";

import { PROJECTS } from "@data";

interface GeneralProductHeaderProps {
  productName: string;
  productColor: string;
  productSlogan: string;
  productLink: string;
  buttonDescription: string;
  isWeb: boolean;
}

export const GeneralProductHeader = ({
  productName,
  productColor,
  productSlogan,
  productLink,
  buttonDescription,
  isWeb,
}: GeneralProductHeaderProps) => {
  const logo = PROJECTS.find((project) => project.name === productName)?.image;

  return (
    <div className="flex h-[85vh] flex-col md:flex-row items-center">
      <div className="flex flex-col gap-4 px-4 md:px-0 md:pl-12 pt-8 md:pt-0">
        <div className="flex flex-row items-center self-center">
          <div className="font-bold text-3xl md:text-4xl lg:text-5xl">{productName}</div>
          {logo != null && (
            <Image
              className="rounded-lg ml-6"
              src={logo}
              alt={productName}
              width={70}
              height={70}
              sizes="(max-width: 768px) 60px, 70px"
              layout="responsive"
            />
          )}
        </div>
        <div className="text-lg md:text-2xl text-center md:text-left">{productSlogan}</div>
        <Link
          href={productLink}
          className="md:mt-5 mx-auto py-4 px-8 md:px-12 rounded-full text-center font-medium text-xl md:text-2xl"
          style={{ backgroundColor: productColor }}
        >
          {buttonDescription}
        </Link>
      </div>
      <div className="">
        {isWeb ? (
          <Image
            src={require(`../assets/products/${productName}/headerimage.png`)}
            alt="Product Main Screenshot"
            className="px-6 md:px-16 pt-14 md:pt-0 flex-or"
          />
        ) : (
          <>
            <Image
              src={require(`../assets/products/${productName}/headerimage1.png`)}
              style={{ width: "35%", marginRight: "5%" }}
              alt="Product Main Mobile Screenshot 1"
            />
            <Image
              src={require(`../assets/products/${productName}/headerimage2.png`)}
              style={{ width: "35%", marginLeft: "5%" }}
              alt="Product Main Mobile Screenshot 2"
            />
          </>
        )}
      </div>
    </div>
  );
};
