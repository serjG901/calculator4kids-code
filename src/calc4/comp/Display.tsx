import Journal from "./Journal";
import List from "./molecul/List";
import FastRes from "./molecul/FastRes";

type T = { display: string[]; journal: string[]; fastRes: string };

const styled = {
  display: "flex",
  flexWrap: "wrap" as "wrap",
  justifyContent: "flex-end",
  alignContent: "flex-end",
  width: "98%",
  height: "98%",
  overflow: "hidden",
  padding: "0.5em",
  background: "var(--display-bg)",
  fontSize: "1em",
  textAlign: "right" as "right",
  color: "var(--display-font-color)",
  border: "var(--display-border)",
  borderRadius: "var(--display-border-radius)",
  boxShadow: "var(--display-box-shadow)"
};

const Display = ({ display, journal, fastRes }: T) => {
  return (
    <div style={styled}>
      {journal.length ? <Journal data={journal} /> : null}
      {display.length ? <List data={display} /> : null}
      <FastRes>{fastRes}</FastRes>
    </div>
  );
};

export default Display;
