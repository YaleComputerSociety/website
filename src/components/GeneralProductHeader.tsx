<<<<<<< HEAD
<<<<<<< HEAD
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
  const logo = PROJECTS.find(
    (project) => project.name.toLowerCase() === productName.toLowerCase(),
  )?.logo;
  const header = PROJECTS.find(
    (project) => project.name.toLowerCase() === productName.toLowerCase(),
  )?.headerImage;
  const header2 = PROJECTS.find((project) => project.name === productName)?.headerImage2;
  const isLabProduct = isLab ?? false;
  const divHeight = `${isLabProduct ? "h-[75vh] md:h-[70vh]" : "h-[80vh] md:h-[85vh]"}`;

  return (
    <div className={`flex ${divHeight} flex-col md:flex-row items-center pt-12 md:pt-0`}>
      <div className="flex flex-col gap-4 px-4 md:px-0 md:pl-12 md:pt-0 w-2/5 min-w-96">
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
              />
            </div>
          )}
        </div>
        <div className="text-md md:text-2xl text-center md:text-left">{productSlogan}</div>
        <Link
          href={productLink}
          className="md:mt-5 mx-auto py-2 px-8 md:px-12 rounded-full text-center font-medium text-xl md:text-2xl"
          style={{ backgroundColor: productColor }}
        >
          {buttonDescription}
        </Link>
      </div>
      <div className="flex flex-grow justify-center relative w-full md:w-1/2 h-full">
        {isWeb && header ? (
          <Image
            src={header}
            alt="Product Main Screenshot"
            sizes="100vw"
            fill
            className="px-6 md:mr-6 md:pl-8 md:pt-0 object-contain my-auto"
            priority
          />
        ) : (
          <div className="flex flex-row md:min-w-[1000px] w-full h-full px-[16vw] md:px-[8vw] py-8 md:py-16 gap-6 md:gap-12 justify-center items-center">
            {header != null && (
              <div className="w-[100px] md:w-[20vw] max-w-[220px] h-[216px] md:h-[43.2vw] max-h-[475px] relative overflow-hidden rounded-2xl md:rounded-3xl">
                <Image
                  src={header}
                  alt="Product Main Mobile Screenshot 1"
                  className="object-contain my-auto rounded-xl"
                  sizes="20vw"
                  priority
                />
              </div>
            )}
            {header2 != null && (
              <div className="w-[100px] md:w-[20vw] max-w-[220px] h-[216px] md:h-[43.2vw] max-h-[475px] relative overflow-hidden rounded-2xl md:rounded-3xl">
                <Image
                  src={header2}
                  alt="Product Main Mobile Screenshot 2"
                  className="object-contain my-auto"
                  fill
                  priority
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
=======
import '../styles/GeneralProduct.css'
=======
import Link from "next/link";
import Image from "next/image";
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)

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
  return (
    <div
      style={{
        background: "#1F232C",
        padding: "20px 0",
        height: "100vh",
        display: "flex",
      }}
    >
      <div className="section-text-container">
        <div className="text-container" style={{ width: "60%" }}>
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <div
              style={{
                fontWeight: 700,
                color: "white",
                fontSize: "44px",
                float: "left",
                display: "inline-block",
              }}
            >
              {productName}
            </div>
            <Image
              className="w-20 h-20 rounded-lg"
              src={require(`../assets/products/${productName}/productlogo.png`)}
              alt={productName}
              style={{ marginLeft: "1rem", display: "inline-block" }}
            />
          </div>
          <div
            style={{
              fontWeight: 400,
              color: "white",
              fontSize: "24px",
              textAlign: "left",
            }}
          >
            {productSlogan}
          </div>
          <Link
            href={productLink}
            className="visit-button"
            style={{ backgroundColor: productColor }}
          >
            {buttonDescription}
          </Link>
        </div>
<<<<<<< HEAD
    )

}
>>>>>>> fb778c0 (Delete all remaining ds stores, merge the two component folders, create styles folder)
=======
      </div>
      <div className="section-image-container">
        {isWeb ? (
          <Image
            src={require(`../assets/products/${productName}/headerimage.png`)}
            style={{ width: "85%" }}
            alt="Product Main Screenshot"
          />
        ) : (
          <>
            <Image
              src={require(
                `../assets/products/${productName}/headerimage1.png`,
              )}
              style={{ width: "35%", marginRight: "5%" }}
              alt="Product Main Mobile Screenshot 1"
            />
            <Image
              src={require(
                `../assets/products/${productName}/headerimage2.png`,
              )}
              style={{ width: "35%", marginLeft: "5%" }}
              alt="Product Main Mobile Screenshot 2"
            />
          </>
        )}
      </div>
    </div>
  );
};
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
