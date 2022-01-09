import { useState, useContext, Fragment } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { P } from "../../utils/Pokedex";
import AlertContext from "../../context/alert/AlertContext";
import AlertMessage from "../layout/AlertMessage";
import CardSkeleton from "../layout/CardSkeleton";
import IndividualPokemonCard from "./IndividualPokemonCard";

const PokemonPage = () => {
  const [value, setValue] = useState("");
  const [pokemon, setPokemon] = useState({ basicInfo: null, species: null });

  const alertContext = useContext(AlertContext);

  const { displayAlert, clearAlert } = alertContext;

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value) {
      clearAlert();
      try {
        const basicInfo = await P.getPokemonByName(value);
        const species = await P.getPokemonSpeciesByName(value);
        setPokemon((prev) => {
          return { ...prev, basicInfo, species };
        });
        setValue("");
      } catch (err) {
        displayAlert("Pokemon not found!", "error", true);
      }
    } else {
      displayAlert("Please write something!", "warning", true);
    }
  };
  return (
    <Fragment>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
        display="flex"
        justifyContent="center"
        sx={{ m: 1 }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          label="Type a POKéMON"
          variant="standard"
        />
      </Box>
      <AlertMessage />
      {pokemon.basicInfo ? (
        <IndividualPokemonCard pokemon={pokemon} />
      ) : (
        <CardSkeleton />
      )}
    </Fragment>
  );
};

export default PokemonPage;
