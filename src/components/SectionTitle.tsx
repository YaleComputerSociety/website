interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export const SectionTitle = ({ title: header, subtitle: subheader }: SectionTitleProps) => (
  <div className="flex flex-col mx-5">
    <div className="text-center py-10 max-w-xl self-center">
      <h1 className="bg-ycs-pink py-4 px-8 rounded-md text-2xl md:text-5xl xl:text-7xl font-bold inline-block">
        {header}
      </h1>
      <h4 className="text-lg mt-5">{subheader}</h4>
    </div>
  </div>
);
