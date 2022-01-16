import React from "react";

const useWindowResize = (f: () => void) => {
  React.useEffect(() => {
    window.addEventListener("resize", f);
    return () => {
      window.removeEventListener("resize", f);
    };
  }, []);
};

export default useWindowResize;
