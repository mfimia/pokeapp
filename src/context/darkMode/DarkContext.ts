import { PaletteMode } from "@mui/material";
import { createContext } from "react";

interface DarkMode {
  mode: PaletteMode;
  toggleMode: () => void;
}

export const darkPref: PaletteMode = JSON.parse(
  localStorage.getItem("darkModePref-pokeapp") || "light"
);

const initialState = {
  mode: darkPref,
  toggleMode: () => {},
};

const DarkContext = createContext<DarkMode>(initialState);

export default DarkContext;
