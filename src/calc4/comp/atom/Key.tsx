import COLORS from "./colors";

type TKey = {
  children: string;
};

const styled = (key: string) => {
  switch (key) {
    case "C":
      return { color: COLORS.GRAY };
    case "+":
      return { color: COLORS.LIME, transform: "scale(1.2)" };
    case "-":
      return { color: COLORS.SKYBLUE, transform: "scale(1.5)" };
    case "÷":
      return { color: COLORS.RED, transform: "scale(1.2)" };
    case "×":
      return { color: COLORS.ORANGE, transform: "scale(1.2)" };
    case ")":
    case "(":
      return { color: COLORS.GRAY };
    case "=":
      return { color: COLORS.PURPLE, transform: "scale(1.2)" };
    default:
      return { color: "inherit" };
  }
};

const Key = ({ children }: TKey) => {
  return <div style={styled(children)}>{children}</div>;
};

export default Key;
