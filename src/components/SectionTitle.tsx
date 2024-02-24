interface SectionTitleProps {
  header: string;
  subheader: string;
}

export const SectionTitle = ({ header, subheader }: SectionTitleProps) => (
  <div className="text-center py-10 m-auto">
    <h1 className="bg-ycs-pink p-4 xl:px-8 rounded-md text-2xl md:text-5xl xl:text-7xl font-bold">
      {header}
    </h1>
    <h4 style={{ fontSize: "20px", fontWeight: "400", marginTop: "21px" }}>{subheader}</h4>
  </div>
);
