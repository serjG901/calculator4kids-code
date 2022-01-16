import COLORS from "./colors";

type TColorLetter = {
  children: string;
};

const colors: { [key: string]: string } = {
  k: COLORS.RED,
  i: COLORS.ORANGE,
  d: COLORS.SKYBLUE,
  s: COLORS.LIME
};

const ColorLetter = ({ children }: TColorLetter) => {
  return <span style={{ color: colors[children] }}>{children}</span>;
};

export default ColorLetter;
