interface SectionTitleProps {
    header: string;
    subheader: string;
}

export const SectionTitle = ({header, subheader}: SectionTitleProps) => (

    <div style={{paddingTop: "10vh", paddingBottom: "10vh", width: "100%"}}>
        <h1 style={{fontSize: "65px", fontWeight: "700"}}>{header}</h1>
        <h4 style={{fontSize: "20px", fontWeight: "400", marginTop: "21px", marginLeft: "30%", marginRight: "30%", textAlign: "center"}}>{subheader}</h4>
    </div>

)