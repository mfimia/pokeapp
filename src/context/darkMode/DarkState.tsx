import { useState, useEffect, ReactChild } from "react";
import DarkContext from "./DarkContext";

const DarkState = (props: { children: ReactChild }) => {
  const darkPref = JSON.parse(
    localStorage.getItem("darkModePref-pokeapp") || ""
  );

  const [mode, setMode] = useState<string>(darkPref || "light");

  useEffect(() => {
    localStorage.setItem("darkModePref-pokeapp", JSON.stringify(mode));
  }, [mode]);

  // Toggle dark mode
  const toggleMode = (): void => {
    setMode((prev: string) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <DarkContext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkState;
