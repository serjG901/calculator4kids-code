import StrBlock from "../atom/StrBlock";

type TFastRes = {
  children: string;
};

const styled = {
  width: "100%",
  minHeight: "1.2em",
  marginTop: "1em",
  textAlign: "right" as "right",
  color: "gray"
};

const FastRes = ({ children }: TFastRes) => (
  <div style={styled}>
    <StrBlock>{children}</StrBlock>
  </div>
);

export default FastRes;
