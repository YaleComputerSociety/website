interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export const SectionTitle = ({ title: header, subtitle: subheader }: SectionTitleProps) => (
  <section className="max-w-7xl mx-auto">
    <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">{header}</h1>
    <p className="text-zinc-400 text-lg mb-16 max-w-2xl">{subheader}</p>
  </section>
);
