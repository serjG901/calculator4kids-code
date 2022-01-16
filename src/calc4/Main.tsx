import "./styles.css";
import React from "react";
import Header from "./comp/Header";
import Display from "./comp/Display";
import Keyboard from "./comp/Keyboard";
import {
  reducer,
  initialState,
  Reducer,
  State,
  Action,
  ThemeTypes
} from "./core/reducer";
import useThemeLocalDispatch from "./hooks/useThemeLocalDispatch";
import useFontSizeFromElementRect from "./hooks/useFontSizeForElementRect";

const style = (fs?: number) => ({
  width: "100%",
  height: "100%",
  display: "grid",
  grid: "5% 50% 45%/100%",
  background: "var(--main-bg)",
  justifyItems: "center",
  alignItems: "center",
  fontSize: fs ? `${fs}px` : "var(--key-font-size)"
});

const Main = () => {
  const [state, dispatch] = React.useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  );
  const [fontSize, ref] = useFontSizeFromElementRect<HTMLDivElement>();
  useThemeLocalDispatch<ThemeTypes>(state.theme, dispatch, "light");

  return (
    <div className={state.theme} style={style(fontSize)} ref={ref}>
      <Header dispatch={dispatch} />
      <Display
        display={state.display}
        journal={state.journal}
        fastRes={state.fastRes}
      />
      <Keyboard dispatch={dispatch} />
    </div>
  );
};

export default Main;
