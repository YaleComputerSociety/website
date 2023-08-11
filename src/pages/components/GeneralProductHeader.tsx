import '../GeneralProduct.css'

interface GeneralProductHeaderProps {
    productName: string;
    productColor: string;
    productSlogan: string;
    productLink: string;
    buttonDescription: string;
}

export const GeneralProductHeader = ({
    productName,
    productColor,
    productSlogan,
    productLink,
    buttonDescription
}: GeneralProductHeaderProps) => {

    return (
        <div style={{ background: "#1F232C", padding: "20px 0", height: "100vh", display: "flex" }}>
            <div className='section-text-container'>
                <div className='text-container' style={{ width: "60%" }}>
                    <div style={{ display: "flex", width: "100%" }}>
                        <div style={{ fontWeight: 700, color: "white", fontSize: "44px", float: "left", display: "inline-block" }}>{productName}</div> 
                        <img src={require(`../../assets/products/${productName}/productlogo.png`)} alt={productName} style={{ width: "100%", height: "67.5px", marginLeft: "1rem", display: "inline-block" }} />
                    </div>
                    <div style={{ fontWeight: 400, color: "white", fontSize: "24px", textAlign: "left" }}>{productSlogan}</div>
                    <div className='visit-button' style={{ backgroundColor: productColor }} onClick={() => window.open(productLink, "_blank")}>
                        {buttonDescription}
                    </div>
                </div>
            </div>
            <div className='section-image-container'>
                <img src={require(`../../assets/products/${productName}/headerimage.png`)} style={{ width: "85%" }} alt="Product Main Screenshot"/>
            </div>
        </div>
    )

}