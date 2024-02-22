import Image from "next/image";

import { CardWrapper } from "@components/CardWrapper";
import { SectionTitle } from "@components/SectionTitle";
import { BOARD } from "@data";
import "@styles/App.css";

const Team = () => {
  const BOARD_CUTOFF = 13;

  return (
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
    </div>
  );
};

export default Team;
