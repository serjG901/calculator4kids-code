import React from "react";
import useLocalStorage from "./useLocalStorage";

function useThemeLocalDispatch<T>(
  theme: T,
  dispatch: React.Dispatch<{ type: T }>,
  initialTheme: T
) {
  const [themeLocal, setThemeLocal] = useLocalStorage<T>("theme", initialTheme);

  React.useLayoutEffect(() => {
    if (theme !== themeLocal) dispatch({ type: themeLocal });
  }, []);

  React.useEffect(() => {
    if (theme !== themeLocal) setThemeLocal(theme);
  }, [theme]);
}

export default useThemeLocalDispatch;
