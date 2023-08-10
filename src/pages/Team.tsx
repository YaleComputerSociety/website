import { CardWrapper } from "../components/CardWrapper";
import { SectionTitle } from "../components/SectionTitle";
import { BOARD } from "../data";

export const Team = () => {
  return (
    <div style={{ paddingTop: "10vh", color: "white" }}>
      <SectionTitle header="Our Team" subheader="Meet the people that make up y/cs." />
        <h1 style={{fontWeight: 700, fontSize: "35px", paddingBottom: "3vh"}}>Board</h1>
      <div className="card-grid">
        {BOARD.slice(0, 7).map((board_member, i) => (
          <CardWrapper key={i}>
            <img src={board_member.image} alt={board_member.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", maxWidth: "200px", maxHeight: "200px", borderRadius: "40px" }} />
            <strong style={{ margin: "1rem 0" }}>{board_member.name}</strong>
              <div style={{color: "#389C8E", fontFamily: "Space Mono"}} key={i}>
                  {board_member.role[0].toUpperCase()}
              </div>
          </CardWrapper>
        ))}
      </div>
        <h1 style={{fontWeight: 700, fontSize: "35px", paddingTop: "10vh", paddingBottom: "3vh"}}>Product Leads</h1>
      <div className="card-grid">
        {BOARD.slice(7).map((board_member, i) => (
            <CardWrapper key={i}>
                <img src={board_member.image} alt={board_member.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", maxWidth: "200px", maxHeight: "200px", borderRadius: "40px" }} />
                <strong style={{ margin: "1rem 0" }}>{board_member.name}</strong>
                <div style={{color: "#389C8E", padding: "2.5px 5px 2.5px 5px", borderRadius: "5px" }} key={i}>
                    {board_member.role[0].toUpperCase()}
                </div>
            </CardWrapper>
        ))}
      </div>
    </div>
  );
};
