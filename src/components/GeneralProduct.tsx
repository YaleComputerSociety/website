<<<<<<< HEAD
<<<<<<< HEAD
=======
import "@styles/GeneralProduct.css";
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
>>>>>>> 6919d97 (Remove unused files)
import Image from "next/image";

import { GeneralProductHeader } from "@components/GeneralProductHeader";
import { GeneralProductSectionText } from "@components/GeneralProductSectionText";

interface GeneralProductProps {
  productName: string;
  productSlogan: string;
  productColor: string;
  productLink: string;
  isWeb: boolean;
  firstSectionTitle?: string;
  firstSectionText?: (string | JSX.Element)[] | string;
  secondSectionTitle?: string;
  secondSectionText?: (string | JSX.Element)[] | string;
  thirdSectionTitle?: string;
  thirdSectionText?: (string | JSX.Element)[] | string;
}

/**
 * This component serves as a template for all product pages to be displayed on the Yale Computer Society Website.
 * @param {string} productName The name of the product. The spelling of the product is important as the app's assets will be loaded by injecting this name into the path.
 * @param {string} productSlogan The slogan of the product. What is displayed right under the name of the product in the product's main section.
 * @param {string} productColor The HEX color code of the product.
 * @param {boolean} isWeb Whether or not the product is a web app or not.
 * @param {string} firstSectionTitle The title to display in the first section of the product description.
 * @param {(string | JSX.Element)[] | string} firstSectionText The text to display in the first section of the product description.
 * @param {string} secondSectionTitle The title to display in the second section of the product description.
 * @param {(string | JSX.Element)[] | string} secondSectionText The text to display in the second section of the product description.
 * @param {string} thirdSectionTitle The title to display in the third section of the product description.
 * @param {(string | JSX.Element)[] | string} thirdSectionText The text to display in the third section of the product description.
 * @param {string} productLink A link to access the product.
 * @returns {JSX.Element}
 */
export const GeneralProduct = ({
  productName,
  productSlogan,
  productColor,
  isWeb,
  firstSectionTitle,
  firstSectionText,
  secondSectionTitle,
  secondSectionText,
  thirdSectionTitle,
  thirdSectionText,
  productLink,
}: GeneralProductProps): JSX.Element => {
  interface GeneralProductSectionImageProps {
    sectionNumber: string;
<<<<<<< HEAD
    className?: string;
=======
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
  }

<<<<<<< HEAD
  const GeneralProductSectionImage = ({
    sectionNumber,
<<<<<<< HEAD
    className,
  }: GeneralProductSectionImageProps) => (
    <div className={`mx-6 ${className}`}>
      <Image
        loading="lazy"
        src={require(
          `../assets/products/${productName.toLowerCase()}/${sectionNumber}sectionimage.png`,
        )}
        className="p-1 rounded-lg md:ml-10 bg-gray-100"
=======
  }: GeneralProductSectionImageProps) => (
=======
  const GeneralProductSectionImage = ({ sectionNumber }: GeneralProductSectionImageProps) => (
>>>>>>> bd8b04e (Add in network particles to home screen)
    <div className="section-image-container">
      <Image
        loading="lazy"
        src={require(`../assets/products/${productName}/${sectionNumber}sectionimage.png`)}
<<<<<<< HEAD
        className="section-image"
        style={{ border: `10px solid ${productColor}` }}
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
        style={{ backgroundColor: `${productColor}` }} // productColor won't work in tailwind for some reason
        className="p-3 rounded-xl md:ml-10"
>>>>>>> 361f873 (Make product header responsive)
        alt={`Product ${sectionNumber} Section Screenshot`}
      />
    </div>
  );

  return (
    <div>
      <GeneralProductHeader
        productName={productName}
        productColor={productColor}
        productSlogan={productSlogan}
        productLink={productLink}
        buttonDescription={isWeb ? "Visit Site" : "Download App"}
        isWeb={isWeb}
      />
      {firstSectionTitle && firstSectionText && (
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="first-section flex h-full py-16 md:py-20 items-center flex-col md:flex-row">
          <GeneralProductSectionImage sectionNumber="first" className="order-last md:order-first" />
          <GeneralProductSectionText
            title={firstSectionTitle}
            text={firstSectionText}
            productColor={productColor}
            className="text-center md:text-right bg-ycs-black md:bg-transparent"
=======
        <div
          className="first-section"
          style={{ padding: "20px 0", height: "100vh", display: "flex" }}
        >
=======
        <div className="first-section flex h-full py-20 items-center flex-col md:flex-row">
>>>>>>> 361f873 (Make product header responsive)
          <GeneralProductSectionImage sectionNumber="first" />
          <GeneralProductSectionText
            title={firstSectionTitle}
            text={firstSectionText}
            align="right"
<<<<<<< HEAD
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
            style="bg-ycs-black md:bg-transparent"
>>>>>>> 361f873 (Make product header responsive)
          />
        </div>
      )}
      {secondSectionTitle && secondSectionText && (
        <div
<<<<<<< HEAD
          className="flex h-full py-16 md:py-20 items-center flex-col md:flex-row"
          style={{ background: productColor }}
=======
          style={{
            background: productColor,
            padding: "20px 0",
            height: "100vh",
            display: "flex",
          }}
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
        >
          <GeneralProductSectionText
            title={secondSectionTitle}
            text={secondSectionText}
<<<<<<< HEAD
            productColor={"#dde"}
            className="text-center md:text-left bg-ycs-black md:bg-transparent"
=======
            align="left"
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
          />
          <GeneralProductSectionImage sectionNumber="second" />
        </div>
      )}
      {thirdSectionTitle && thirdSectionText && (
<<<<<<< HEAD
        <div className="third-section flex h-full py-16 md:py-20 items-center flex-col md:flex-row">
          <GeneralProductSectionImage sectionNumber="third" className="order-last md:order-first" />
          <GeneralProductSectionText
            title={thirdSectionTitle}
            text={thirdSectionText}
            productColor={productColor}
            className="text-center md:text-right bg-ycs-black md:bg-transparent"
=======
        <div
          className="third-section"
          style={{ padding: "20px 0", height: "100vh", display: "flex" }}
        >
          <GeneralProductSectionImage sectionNumber="third" />
          <GeneralProductSectionText
            title={thirdSectionTitle}
            text={thirdSectionText}
            align="right"
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
          />
        </div>
      )}
    </div>
  );
};
