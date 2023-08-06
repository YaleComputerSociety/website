import './GeneralProduct.css'

interface GeneralProductProps {
    productName: string;
    productLogo: string;
    productSlogan: string;
    productColor: string;
    isWeb: boolean;
    headerImage: string;
    firstSectionTitle: string;
    firstSectionText: (string | JSX.Element)[] | string;
    secondSectionTitle: string;
    secondSectionText: (string | JSX.Element)[] | string;
    thirdSectionTitle: string;
    thirdSectionText: (string | JSX.Element)[] | string;
}

export const GeneralProduct = ({
    productName,
    productLogo,
    productSlogan,
    productColor,
    isWeb,
    firstSectionTitle,
    firstSectionText,
    secondSectionTitle,
    secondSectionText,
    thirdSectionTitle,
    thirdSectionText
}: GeneralProductProps) => {

    return (
        <div style={{ paddingTop: '10vh' }}>
            <div style={{ backgroundColor: "#1F232C", padding: "20px 0", height: "90vh", display: "flex" }}>
                <div style={{ width: "40%", display: "flex", height: "100%", flexDirection: "column", alignItems: 'center', justifyContent: "space-around" }}>
                    <div style={{ display: "flex", height: "60%", flexDirection: "column", alignItems: 'center', justifyContent: "space-around", width: "90%" }}>
                        <div style={{ display: "flex" }}>
                            <div style={{ fontWeight: 700, color: "white", fontSize: "57px" }}>{productName}</div> 
                            <img src={productLogo} alt={productName} style={{ width: "67.5px", height: "67.5px", marginLeft: "1rem" }} />
                        </div>
                        <div style={{ fontWeight: 400, color: "white", fontSize: "32px" }}>{productSlogan}</div>
                        <div style={{ backgroundColor: productColor, color: "white", width: "fit-content", borderRadius: "50px", padding: "25px 35px", fontWeight: 500, fontSize: "28.5px" }}>
                            {isWeb ? "Visit Site" : "Download App"}
                        </div>
                    </div>
                </div>
                <div style={{ width: "60%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={require(`../assets/products/${productName}/headerimage.png`)} style={{ width: "95%" }} alt="Product Main Screenshot"/>
                </div>
            </div>
            <div className='first-section' style={{ padding: "20px 0", height: "90vh", display: "flex" }}>
                <div style={{ width: "60%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={require(`../assets/products/${productName}/firstsectionimage.png`)} style={{ width: "90%", borderRadius: 50, border: `10px solid ${productColor}` }} alt="Product First Section Screenshot"/>
                </div>
                <div style={{ width: "40%", display: "flex", height: "100%", flexDirection: "column", alignItems: 'center', justifyContent: "space-around" }}>
                    <div style={{ display: "flex", height: "60%", flexDirection: "column", alignItems: 'center', justifyContent: "space-around", width: "90%" }}>
                        <div style={{ fontWeight: "bold", fontSize: "48px", color: "white" }}>{firstSectionTitle}</div>
                        <div style={{ fontSize: "36px", color: "white", whiteSpace: "pre-wrap", textAlign: "right" }}>{firstSectionText}</div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: productColor, padding: "20px 0", height: "90vh", display: "flex" }}>
                <div style={{ width: "40%", display: "flex", height: "100%", flexDirection: "column", alignItems: 'center', justifyContent: "space-around" }}>
                    <div style={{ display: "flex", height: "60%", flexDirection: "column", alignItems: 'center', justifyContent: "space-around", width: "90%" }}>
                        <div style={{ fontWeight: "bold", fontSize: "48px", color: "white" }}>{secondSectionTitle}</div>
                        <div style={{ fontSize: "36px", color: "white", whiteSpace: "pre-wrap", textAlign: "left" }}>{secondSectionText}</div>
                    </div>
                </div>      
                <div style={{ width: "60%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={require(`../assets/products/${productName}/secondsectionimage.png`)} style={{ width: "90%", borderRadius: 50, border: `10px solid ${productColor}` }} alt="Product Second Section Screenshot"/>
                </div>      
            </div>
            <div className='third-section' style={{ padding: "20px 0", height: "90vh", display: "flex" }}>
                <div style={{ width: "60%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={require(`../assets/products/${productName}/thirdsectionimage.png`)} style={{ width: "90%", borderRadius: 50, border: `10px solid ${productColor}` }} alt="Product Third Section Screenshot"/>
                </div>
                <div style={{ width: "40%", display: "flex", height: "100%", flexDirection: "column", alignItems: 'center', justifyContent: "space-around" }}>
                    <div style={{ display: "flex", height: "60%", flexDirection: "column", alignItems: 'center', justifyContent: "space-around", width: "90%" }}>
                        <div style={{ fontWeight: "bold", fontSize: "48px", color: "white", textAlign: "right" }}>{thirdSectionTitle}</div>
                        <div style={{ fontSize: "36px", color: "white", whiteSpace: "pre-wrap", textAlign: "right" }}>{thirdSectionText}</div>
                    </div>
                </div>
            </div>
        </div>
    )

}