import COLORS from "./colors";

const styled = {
  color: COLORS.ORANGE,
  cursor: "pointer",
  fontSize: "1.5em"
};

const Sun = () => {
  return <div style={styled}>&#9728;</div>;
};

export default Sun;
