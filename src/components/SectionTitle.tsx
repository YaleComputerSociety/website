interface SectionTitleProps {
    header: string;
    subheader: string;
}

export const SectionTitle = ({header, subheader}: SectionTitleProps) => (

    <>
        <h1>{header}</h1>
        <h4>{subheader}</h4>
    </>

)