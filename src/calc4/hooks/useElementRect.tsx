import React from "react";
import useThrottle from "./useThrottle";
import useWindowResize from "./useWindowResize";

function getElementRect<V extends HTMLElement>(ref: React.RefObject<V>) {
  const { height, width } = ref.current?.getBoundingClientRect() || {
    height: 356,
    width: 356
  };
  const min = height <= width ? height : width;
  return { min, width, height };
}

function useElementRect<T extends HTMLElement>() {
  const ref = React.useRef<T>(null);
  const [rect, setRect] = React.useState(getElementRect<T>(ref));
  const rectAfterWindowResize = () => {
    setRect(getElementRect(ref));
  };

  const throttledRectAfterWindowResize = useThrottle(
    rectAfterWindowResize,
    500
  );

  useWindowResize(throttledRectAfterWindowResize);

  React.useLayoutEffect(() => {
    rectAfterWindowResize();
  }, []);

  return { ...rect, ref };
}

export default useElementRect;
