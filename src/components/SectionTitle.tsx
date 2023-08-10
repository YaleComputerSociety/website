interface SectionTitleProps {
<<<<<<< HEAD
  title: string;
  subtitle: string;
}

export const SectionTitle = ({ title: header, subtitle: subheader }: SectionTitleProps) => (
  <div className="flex flex-col mx-5 mt-8">
    <div className="text-center py-10 self-center">
      <h1 className="md:text-8xl sm:text-7xl text-[2.3rem] font-bold text-ycs-pink sm:mb-5">
        &lt;{header} /&gt;
      </h1>
      <h4 className="md:text-3xl sm:text-2xl text-lg text-center mb-10 md:mx-16">{subheader}</h4>
    </div>
  </div>
);
=======
    header: string;
    subheader: string;
}

export const SectionTitle = ({header, subheader}: SectionTitleProps) => (

    <div style={{paddingTop: "10vh", paddingBottom: "10vh"}}>
        <h1 style={{fontSize: "65px", fontWeight: "700"}}>{header}</h1>
        <h4 style={{fontSize: "20px", marginTop: "21px"}}>{subheader}</h4>
    </div>

)
>>>>>>> 359653e (New pages, sticky header)
