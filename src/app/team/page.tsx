<<<<<<< HEAD
<<<<<<< HEAD
import { SectionTitle } from "@components/SectionTitle";
import { BOARD } from "@data";
import "@styles/App.css";
import { TeamGrid } from "@components/TeamGrid";
=======
import Image from "next/image";

import { CardWrapper } from "@components/CardWrapper";
=======
>>>>>>> 8d111fe (Refactor team page and make responsive; fix image sizes)
import { SectionTitle } from "@components/SectionTitle";
import { BOARD } from "@data";
<<<<<<< HEAD
<<<<<<< HEAD
import "@styles/App.css";
<<<<<<< HEAD
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
>>>>>>> 6919d97 (Remove unused files)
=======
import "@styles/App.css";
>>>>>>> e5c05d1 (Change thickness of mobile menu 'x')
=======
import { TeamGrid } from "@components/TeamGrid";
>>>>>>> 8d111fe (Refactor team page and make responsive; fix image sizes)

const Team = () => {
  const BOARD_CUTOFF = 13;

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="flex flex-col mb-12">
      <SectionTitle title="Our Team" subtitle="Meet the people that make up the y/cs" />
      <TeamGrid title="Board" people={BOARD.slice(0, BOARD_CUTOFF)} />
      <TeamGrid title="Product Leads" people={BOARD.slice(BOARD_CUTOFF)} />
=======
    <div
      style={{
        paddingTop: "10vh",
        paddingLeft: "15vw",
        paddingRight: "15vw",
        color: "white",
      }}
    >
      <SectionTitle
        header="Our Team"
        subheader="Meet the people that make up the y/cs"
      />
      <h1 className="font-bold text-3xl pb-6 text-center">Board</h1>
      <div className="card-grid">
        {BOARD.slice(0, BOARD_CUTOFF).map((board_member, i) => (
          <CardWrapper key={i}>
            <Image
              src={board_member.image}
              alt={board_member.name}
              loading="lazy"
              height="200"
              // width="200"
              style={{
                objectFit: "cover",
                borderRadius: "40px",
              }}
            />
            <strong style={{ margin: "1rem 0" }}>{board_member.name}</strong>
            <div style={{ color: "#389C8E", fontFamily: "Space Mono" }} key={i}>
              {board_member.role[0].toUpperCase()}
            </div>
          </CardWrapper>
        ))}
      </div>
      <h1 className="font-bold text-3xl py-6 text-center">Product Leads</h1>
      <div className="card-grid">
        {BOARD.slice(BOARD_CUTOFF).map((board_member, i) => (
          <CardWrapper key={i}>
            <Image
              src={board_member.image}
              alt={board_member.name}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxWidth: "200px",
                maxHeight: "200px",
                borderRadius: "40px",
              }}
            />
            <strong style={{ margin: "1rem 0" }}>{board_member.name}</strong>
            <div
              style={{
                color: "#389C8E",
                padding: "2.5px 5px 2.5px 5px",
                borderRadius: "5px",
              }}
              key={i}
            >
              {board_member.role[0].toUpperCase()}
            </div>
          </CardWrapper>
        ))}
      </div>
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
=======
    <div className="flex flex-col align-middle">
      <SectionTitle header="Our Team" subheader="Meet the people that make up the y/cs" />
      <TeamGrid title="Board" people={BOARD.slice(0, BOARD_CUTOFF)} />
      <TeamGrid title="Product Leads" people={BOARD.slice(BOARD_CUTOFF)} />
>>>>>>> 8d111fe (Refactor team page and make responsive; fix image sizes)
    </div>
  );
};

export default Team;
