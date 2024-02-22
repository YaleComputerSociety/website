import "@styles/GeneralProduct.css";
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
  }

  const GeneralProductSectionImage = ({
    sectionNumber,
  }: GeneralProductSectionImageProps) => (
    <div className="section-image-container">
      <Image
        loading="lazy"
        src={require(
          `../assets/products/${productName}/${sectionNumber}sectionimage.png`,
        )}
        className="section-image"
        style={{ border: `10px solid ${productColor}` }}
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
        <div
          className="first-section"
          style={{ padding: "20px 0", height: "100vh", display: "flex" }}
        >
          <GeneralProductSectionImage sectionNumber="first" />
          <GeneralProductSectionText
            title={firstSectionTitle}
            text={firstSectionText}
            align="right"
          />
        </div>
      )}
      {secondSectionTitle && secondSectionText && (
        <div
          style={{
            background: productColor,
            padding: "20px 0",
            height: "100vh",
            display: "flex",
          }}
        >
          <GeneralProductSectionText
            title={secondSectionTitle}
            text={secondSectionText}
            align="left"
          />
          <GeneralProductSectionImage sectionNumber="second" />
        </div>
      )}
      {thirdSectionTitle && thirdSectionText && (
        <div
          className="third-section"
          style={{ padding: "20px 0", height: "100vh", display: "flex" }}
        >
          <GeneralProductSectionImage sectionNumber="third" />
          <GeneralProductSectionText
            title={thirdSectionTitle}
            text={thirdSectionText}
            align="right"
          />
        </div>
      )}
    </div>
  );
};
