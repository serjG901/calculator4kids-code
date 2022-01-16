import ActOnClick from "../atom/ActOnClick";
import Moon from "../atom/Moon";
import { Action } from "../../core/reducer";

type Tthemebutton = {
  dispatch: React.Dispatch<Action>;
};

const Sunbutton = ({ dispatch }: Tthemebutton) => {
  return (
    <ActOnClick type={"dark"} dispatch={dispatch}>
      <Moon />
    </ActOnClick>
  );
};

export default Sunbutton;
