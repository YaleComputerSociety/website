import { SectionTitle } from "@components/SectionTitle";
import { BOARD } from "@data";
import "@styles/App.css";
import { TeamGrid } from "@components/TeamGrid";

const Team = () => {
  const BOARD_CUTOFF = 13;

  return (
    <div className="flex flex-col mb-12">
      <SectionTitle title="Our Team" subtitle="Meet the people that make up the y/cs" />
      <TeamGrid title="Board" people={BOARD.slice(0, BOARD_CUTOFF)} />
      <TeamGrid title="Product Leads" people={BOARD.slice(BOARD_CUTOFF)} />
    </div>
  );
};

export default Team;
