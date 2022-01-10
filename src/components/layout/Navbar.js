import { useContext } from "react";
import { Link } from "react-router-dom";
import DarkContext from "../../context/darkMode/DarkContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const linkStyle = {
  textDecoration: "none",
};

const Navbar = () => {
  const darkContext = useContext(DarkContext);

  const { mode, toggleMode } = darkContext;

  const navColor = mode === "dark" ? "primary" : "white";
  const togglerColor = mode === "dark" ? "primary" : "inherit";

  const handleClick = () => toggleMode();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            color="inherit"
          >
            <CatchingPokemonIcon fontSize="large" />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              letterSpacing: 4,
              ml: 4,
              fontFamily: "Pokemon Solid",
            }}
          >
            <Link color="white" style={linkStyle} to="/">
              PokéApp
            </Link>
          </Typography>
          <Stack spacing={2} direction="row">
            <Link style={linkStyle} to="/">
              <Button
                sx={{ color: navColor, borderColor: navColor }}
                variant="outlined"
              >
                Home
              </Button>
            </Link>
            <Link style={linkStyle} to="/poke">
              <Button
                sx={{ color: navColor, borderColor: navColor }}
                variant="outlined"
              >
                Search
              </Button>
            </Link>
          </Stack>
          <IconButton sx={{ ml: 2 }} onClick={handleClick} color={togglerColor}>
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
