interface SectionTitleProps {
  header: string;
  subheader: string;
}

export const SectionTitle = ({ header, subheader }: SectionTitleProps) => (
  <div
    style={{
      paddingTop: "10vh",
      paddingBottom: "10vh",
      width: "50%",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <h1
      className="bg-ycs-pink p-4 rounded-md"
      style={{ fontSize: "65px", fontWeight: "700" }}
    >
      {header}
    </h1>
    <h4 style={{ fontSize: "20px", fontWeight: "400", marginTop: "21px" }}>
      {subheader}
    </h4>
  </div>
);
