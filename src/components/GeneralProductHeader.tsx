import Link from "next/link";
import "../styles/GeneralProduct.css";
import Image from "next/image";

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
