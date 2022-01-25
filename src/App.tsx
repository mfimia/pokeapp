import { useMemo, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DarkContext from "./context/darkMode/DarkContext";
import PokemonList from "./components/pokemon/PokemonList";
import PokemonPage from "./components/pokemon/PokemonPage";
import PokemonState from "./context/pokemon/PokemonState";
import Navbar from "./components/layout/Navbar";
import AlertState from "./context/alert/AlertState";
import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const App = () => {
  const darkContext = useContext(DarkContext);

  const { mode } = darkContext;

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
      }),
    [mode]
  );

  return (
    <PokemonState>
      <AlertState>
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container
              maxWidth="lg"
              sx={{
                bgcolor: "background.default",
                color: "text.primary",
                px: 4,
              }}
            >
              <Navbar />
              <Routes>
                <Route path="/" element={<PokemonList />} />
                <Route path="/poke" element={<PokemonPage />} />
              </Routes>
            </Container>
          </ThemeProvider>
        </Router>
      </AlertState>
    </PokemonState>
  );
};

export default App;
