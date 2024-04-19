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
  isLab?: boolean;
}

export const GeneralProductHeader = ({
  productName,
  productColor,
  productSlogan,
  productLink,
  buttonDescription,
  isWeb,
  isLab,
}: GeneralProductHeaderProps) => {
  const logo = PROJECTS.find((project) => project.name === productName)?.logo;
  const header = PROJECTS.find(
    (project) => project.name.toLowerCase() === productName.toLowerCase(),
  )?.headerImage;
  const header2 = PROJECTS.find((project) => project.name === productName)?.headerImage2;
  const isLabProduct = isLab ?? false;
  const divHeight = `${isLabProduct ? "h-[60vh] md:h-[65vh] pt-24" : "h-[80vh] md:h-[85vh]"}`;

  return (
    <div className={`flex ${divHeight} flex-col md:flex-row items-center`}>
      <div className="flex flex-col gap-4 px-4 md:px-0 md:pl-12 pt-8 md:pt-0">
        <div className="flex flex-row items-center self-center">
          <div className="font-bold text-3xl md:text-4xl lg:text-5xl">{productName}</div>
          {logo != null && (
            <div className="w-10 md:w-16">
              <Image
                className="rounded-lg ml-6 flex-shrink-0"
                src={logo}
                alt={productName}
                width={70}
                height={70}
                layout="fixed"
              />
            </div>
          )}
        </div>
        <div className="text-md md:text-2xl text-center md:text-left">{productSlogan}</div>
        <Link
          href={productLink}
          className="mt-3 md:mt-5 mx-auto py-4 px-8 md:px-12 rounded-full text-center font-medium text-xl md:text-2xl"
          style={{ backgroundColor: productColor }}
        >
          {buttonDescription}
        </Link>
      </div>
      <div className="">
        {isWeb && header ? (
          <Image
            src={header}
            alt="Product Main Screenshot"
            className="px-6 md:px-16 pt-14 md:pt-0 flex-or"
          />
        ) : (
          <>
            {header != null && (
              <Image
                src={header}
                style={{ width: "35%", marginRight: "5%" }}
                alt="Product Main Mobile Screenshot 1"
              />
            )}
            {header2 != null && (
              <Image
                src={header2}
                style={{ width: "35%", marginLeft: "5%" }}
                alt="Product Main Mobile Screenshot 2"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
