interface SmallSectionTitleProps {
  header: string;
  subheader: string;
}

export const SmallSectionTitle = ({ header, subheader }: SmallSectionTitleProps) => (
  <div className="py-10 flex flex-col items-center mx-5">
    <h1 style={{ fontSize: "25px", fontWeight: "700" }}>{header}</h1>
    <h4
      style={{
        fontSize: "20px",
        fontWeight: "400",
        marginTop: "21px",
        textAlign: "center",
      }}
    >
      {subheader}
    </h4>
  </div>
);
