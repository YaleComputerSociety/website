import './GeneralProduct.css'

interface GeneralProductProps {
    productName: string;
    productSlogan: string;
    productColor: string;
    isWeb: boolean;
    firstSectionTitle: string;
    firstSectionText: (string | JSX.Element)[] | string;
    secondSectionTitle: string;
    secondSectionText: (string | JSX.Element)[] | string;
    thirdSectionTitle: string;
    thirdSectionText: (string | JSX.Element)[] | string;
    productLink: string;
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
    productLink
}: GeneralProductProps): JSX.Element => {

    interface GeneralProductSectionImageProps {
        sectionNumber: string;
    }
    
    const GeneralProductSectionImage = ({ sectionNumber }: GeneralProductSectionImageProps) => (
        <div className='section-image-container'>
            <img loading='lazy' src={require(`../assets/products/${productName}/${sectionNumber}sectionimage.png`)} className='section-image' style={{ border: `10px solid ${productColor}` }} alt={`Product ${sectionNumber} Section Screenshot`}/>
        </div>
    )

    interface GeneralProductSectionTextProps {
        title: string;
        text: (string | JSX.Element)[] | string;
        align: CanvasTextAlign;
    }

    const GeneralProductSectionText = ({ title, text, align }: GeneralProductSectionTextProps) => (
        <div className='section-text-container'>
            <div className='text-container'>
                <div className='section-text-title' style={{ textAlign: align }}>{title}</div>
                <div className='section-text' style={{ textAlign: align }}>{text}</div>
            </div>
        </div>
    )

    return (
        <div style={{ paddingTop: '10vh' }}>
            <div style={{ background: "#1F232C", padding: "20px 0", height: "90vh", display: "flex" }}>
                <div className='section-text-container'>
                    <div className='text-container' style={{ width: "75%" }}>
                        <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ fontWeight: 700, color: "white", fontSize: "57px", float: "left", display: "inline-block" }}>{productName}</div> 
                            <img src={require(`../assets/products/${productName}/productlogo.png`)} alt={productName} style={{ width: "67.5px", height: "67.5px", marginLeft: "1rem", display: "inline-block" }} />
                        </div>
                        <div style={{ fontWeight: 400, color: "white", fontSize: "32px", textAlign: "left" }}>{productSlogan}</div>
                        <div className='visit-button' style={{ backgroundColor: productColor }} onClick={() => window.open(productLink, "_blank")}>
                            {isWeb ? "Visit Site" : "Download App"}
                        </div>
                    </div>
                </div>
                <div className='section-image-container'>
                    <img src={require(`../assets/products/${productName}/headerimage.png`)} style={{ width: "95%" }} alt="Product Main Screenshot"/>
                </div>
            </div>
            <div className='first-section' style={{ padding: "20px 0", height: "90vh", display: "flex" }}>
                <GeneralProductSectionImage sectionNumber='first'/>
                <GeneralProductSectionText title={firstSectionTitle} text={firstSectionText} align='right'/>
            </div>
            <div style={{ background: productColor, padding: "20px 0", height: "90vh", display: "flex" }}>
                <GeneralProductSectionText title={secondSectionTitle} text={secondSectionText} align='left'/> 
                <GeneralProductSectionImage sectionNumber='second'/>
            </div>
            <div className='third-section' style={{ padding: "20px 0", height: "90vh", display: "flex" }}>
                <GeneralProductSectionImage sectionNumber='third'/>
                <GeneralProductSectionText title={thirdSectionTitle} text={thirdSectionText} align='right'/> 
            </div>
        </div>
    )

}