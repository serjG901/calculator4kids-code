import COLORS from "./colors";

const styled = {
  color: COLORS.SKYBLUE,
  cursor: "pointer",
  fontSize: "1.5em"
};

const Moon = () => {
  return <div style={styled}>&#9789;</div>;
};

export default Moon;
