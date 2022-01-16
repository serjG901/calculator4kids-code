import COLORS from "./colors";

type TStrBlock = { children: string };

const styled = (key: string) => {
  const margin = "0 0.25rem";
  switch (key) {
    case "+":
      return { color: COLORS.LIME, margin };
    case "-":
      return { color: COLORS.SKYBLUE, margin };
    case "÷":
      return { color: COLORS.RED, margin };
    case "×":
      return { color: COLORS.ORANGE, margin };
    case ")":
    case "(":
      return { color: COLORS.GRAY, margin };
    case "=":
      return { color: COLORS.PURPLE, margin };
    default:
      return { color: "inherit", margin };
  }
};

const three = (str: string): string => {
  const i = str.indexOf(",");
  if (i !== -1) {
    const left = str.slice(0, i);
    const right = str.slice(i);
    return three(left) + right;
  }
  return str
    .split("")
    .reverse()
    .join("")
    .replace(/(\d{3})(?!-)/g, "$1 ")
    .split("")
    .reverse()
    .join("");
};

const StrBlock = ({ children }: TStrBlock) => {
  return (
    <div style={styled(children)}>
      {children.split(" ").map(three).join(" ")}
    </div>
  );
};

export default StrBlock;
