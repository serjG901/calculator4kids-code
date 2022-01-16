import { State, Action } from "./reducer";
import * as CF from "./clearFuncs";

export const fSetDark = (state: State): State => {
  if (state.theme === "dark") return state;
  return { ...state, theme: "dark" };
};

export const fSetLight = (state: State): State => {
  if (state.theme === "light") return state;
  return { ...state, theme: "light" };
};

export const fC = ({ display, journal, ...state }: State) => {
  if (CF.hasRes(display)) {
    display = [];
    return { ...state, display, journal, fastRes: "" };
  }
  if (!CF.hasItem(display)) {
    if (CF.hasItem(journal)) {
      journal = CF.pop(journal);
    }
    return { ...state, display, journal, fastRes: "" };
  }
  if (CF.last(display).length === 1) {
    display = CF.pop(display);
  } else {
    display[CF.lastI(display)] = CF.pops(CF.last(display));
  }
  const fastRes = CF.fastRes(display);
  return { ...state, display, journal, fastRes };
};

export const fR = (
  { display, journal, ...state }: State,
  { type }: Action
): State => {
  if (CF.resNotAllowed(display)) {
    return { ...state, display, journal };
  }
  return { ...state, ...CF.addRes(display, journal, type) };
};

export const fNum = ({ display, ...state }: State, { type }: Action): State => {
  if (CF.hasRes(display) || !CF.hasItem(display)) {
    display = [type];
    const fastRes = CF.fastRes(display);
    return { ...state, display, fastRes };
  }
  if (CF.last(display) === ")") {
    return { ...state, display };
  }
  if (/[.0-9]|^-\d+/.test(CF.last(display))) {
    display[CF.lastI(display)] = CF.last(display) + type;
    const fastRes = CF.fastRes(display);
    return { ...state, display, fastRes };
  }
  if (/[-÷+×(]/.test(CF.last(display))) {
    display = CF.push(display, type);
    const fastRes = CF.fastRes(display);
    return { ...state, display, fastRes };
  }
  return { ...state, display };
};

export const fS = ({ display, ...state }: State, { type }: Action): State => {
  if (
    !CF.hasItem(display) ||
    CF.last(display) === "(" ||
    CF.lastL(display) === ","
  ) {
    return { ...state, display };
  }
  if (/[-÷+×]$/.test(CF.last(display))) {
    display[CF.lastI(display)] = type;
    return { ...state, display };
  }
  if (CF.hasRes(display)) {
    display = [CF.last(display), type];
    return { ...state, display };
  }
  display = CF.push(display, type);
  return { ...state, display };
};

export const fCS = ({ display, ...state }: State): State => {
  if (/[0-9]/.test(CF.last(display)) && !CF.hasRes(display)) {
    const last: string = CF.last(display);
    display = CF.pop(display);
    if (last && last[0] === "-") display = CF.push(display, last.slice(1));
    if (last && last[0] !== "-") display = CF.push(display, "-" + last);
  }
  const fastRes = CF.fastRes(display);
  return { ...state, display, fastRes };
};

export const fD = ({ display, ...state }: State, { type }: Action): State => {
  if (CF.lastHasDot(display)) return { ...state, display };
  if (/[0-9]/.test(CF.last(display)) && !CF.hasRes(display)) {
    display[CF.lastI(display)] = CF.last(display) + type;
  }
  return { ...state, display };
};

export const fLS = ({ display, ...state }: State, { type }: Action): State => {
  if (CF.naOpenScope(display)) {
    return { ...state, display };
  }
  display = CF.push(display, type);
  return { ...state, display };
};

export const fRS = ({ display, ...state }: State, { type }: Action): State => {
  if (CF.naCloseScope(display)) {
    return { ...state, display };
  }
  display = CF.push(display, type);
  return { ...state, display };
};
