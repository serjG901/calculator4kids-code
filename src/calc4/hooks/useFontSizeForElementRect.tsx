import React from "react";
import useElementRect from "./useElementRect";

function useFontSizeFromElementRect<T extends HTMLElement>(
  k: number = 18
): [number, React.RefObject<T>] {
  const [fontSize, setFontSize] = React.useState(16);
  const { min, ref } = useElementRect<T>();

  React.useLayoutEffect(() => {
    setFontSize(Math.floor(min / k));
  }, [min, k]);

  return [fontSize, ref];
}

export default useFontSizeFromElementRect;
