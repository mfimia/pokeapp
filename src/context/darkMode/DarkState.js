import { useState, useEffect } from "react";
import DarkContext from "./DarkContext";

const DarkState = (props) => {
  const darkPref = JSON.parse(localStorage.getItem("darkModePref-pokeapp"));

  const [mode, setMode] = useState(darkPref || "light");

  useEffect(() => {
    localStorage.setItem("darkModePref-pokeapp", JSON.stringify(mode));
  }, [mode]);

  // Toggle dark mode
  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <DarkContext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkState;
