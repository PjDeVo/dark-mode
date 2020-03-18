import { useEffect } from "react";

import useLocalStorage from "./useLocalStorage";

const useDarkMode = initialValue => {
  const [darkMode, setDarkMode] = useLocalStorage("setDark", initialValue);

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
