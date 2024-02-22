interface SmallSectionTitleProps {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    header: string;
    subheader: string;
}

export const SmallSectionTitle = ({header, subheader}: SmallSectionTitleProps) => (

    <div style={{paddingTop: "5vh", paddingBottom: "5vh", width: "100%"}}>
        <h1 style={{fontSize: "25px", fontWeight: "700"}}>{header}</h1>
        <h4 style={{fontSize: "20px", fontWeight: "400", marginTop: "21px", textAlign: "center"}}>{subheader}</h4>
    </div>

)
>>>>>>> a848807 (added components to about page)
=======
  header: string;
  subheader: string;
}

export const SmallSectionTitle = ({
  header,
  subheader,
}: SmallSectionTitleProps) => (
  <div className="py-10 w-full flex flex-col items-center">
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
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
