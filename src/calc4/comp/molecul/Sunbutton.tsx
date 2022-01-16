import ActOnClick from "../atom/ActOnClick";
import Sun from "../atom/Sun";
import { Action } from "../../core/reducer";

type Tthemebutton = {
  dispatch: React.Dispatch<Action>;
};

const Sunbutton = ({ dispatch }: Tthemebutton) => {
  return (
    <ActOnClick type={"light"} dispatch={dispatch}>
      <Sun />
    </ActOnClick>
  );
};

export default Sunbutton;
