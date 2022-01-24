import { createContext } from "react";

interface DarkMode {
  mode: string;
  toggleMode: () => void;
}

const DarkContext = createContext<DarkMode | null>(null);

export default DarkContext;
