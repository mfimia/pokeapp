import { useState, useEffect } from "react";
import { IproviderProps } from "../../utils/IproviderProps";
import DarkContext, { darkPref } from "./DarkContext";

const DarkState = (props: IproviderProps) => {
  const [mode, setMode] = useState(darkPref);

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
