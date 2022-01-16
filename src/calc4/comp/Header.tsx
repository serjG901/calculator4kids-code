import React from "react";
import NameApp from "./molecul/NameApp";
import Sunbutton from "./molecul/Sunbutton";
import Moonbutton from "./molecul/Moonbutton";
import { Action } from "../core/reducer";

type THeader = {
  dispatch: React.Dispatch<Action>;
};

const styled = {
  width: "100%",
  color: "gray",
  fontSize: "0.7em",
  userSelect: "none" as "none",
  fontFamily: "monospace",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

const Header = ({ dispatch }: THeader) => {
  return (
    <div style={styled}>
      <Sunbutton dispatch={dispatch} />
      <NameApp />
      <Moonbutton dispatch={dispatch} />
    </div>
  );
};

export default React.memo(Header);
