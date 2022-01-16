const styled = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column" as "column",
  justifyContent: "center",
  alignContent: "center",
  background: "var(--main-bg)",
  justifyItems: "center",
  alignItems: "center",
  fontSize: "18px",
  color: "white"
};

const Error = () => {
  return (
    <div className="error" style={styled}>
      <div>(⊙.⊙(◉̃_᷅◉)⊙.⊙)</div>
      <div>Sorry, but something went wrong.</div>
      <div>We are already working on this issue.</div>
      <div>Try come back later or reload page.</div>
    </div>
  );
};

export default Error;
