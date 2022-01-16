import React from "react";

function useThrottle(f: () => void, delay: number) {
  const timerId = React.useRef<NodeJS.Timeout | null>(null);

  const throttled = () => {
    if (timerId.current === null) {
      timerId.current = setTimeout(() => {
        f();
        timerId.current = null;
      }, delay);
    }
  };

  React.useEffect(() => {
    return () => {
      if (timerId?.current !== null) {
        clearTimeout(timerId.current);
      }
    };
  }, []);

  return throttled;
}

export default useThrottle;
