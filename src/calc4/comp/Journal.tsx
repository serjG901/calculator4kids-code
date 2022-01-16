import List from "./molecul/List";

type T = { data: string[] };

const styled = {
  display: "flex",
  flexDirection: "column" as "column",
  width: "100%",
  marginBottom: "1em",
  alignItems: "end",
  fontSize: "0.7em",
  textAlign: "right" as "right",
  color: "var(--journal-font-color)"
};

const Journal = ({ data }: T) => {
  return (
    <div style={styled}>
      <List data={data} />
    </div>
  );
};

export default Journal;
