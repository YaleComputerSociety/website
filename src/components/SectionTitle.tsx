interface SectionTitleProps {
    header: string;
    subheader: string;
}

export const SectionTitle = ({header, subheader}: SectionTitleProps) => (

    <div style={{paddingTop: "10vh", paddingBottom: "10vh"}}>
        <h1 style={{fontSize: "65px", fontWeight: "700"}}>{header}</h1>
        <h4 style={{fontSize: "20px", marginTop: "21px"}}>{subheader}</h4>
    </div>

)