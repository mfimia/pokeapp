import { useState, useContext, Fragment, SetStateAction } from "react";
import AlertContext from "../../context/alert/AlertContext";
import PokemonContext from "../../context/pokemon/PokemonContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AlertMessage from "../layout/AlertMessage";
import CardSkeleton from "../layout/CardSkeleton";
import IndividualPokemonCard from "./IndividualPokemonCard";

const PokemonPage = () => {
  const [value, setValue] = useState("");

  const alertContext = useContext(AlertContext);
  const pokemonContext = useContext(PokemonContext);

  const { displayAlert, clearAlert } = alertContext;
  const { basicInfo, species, getIndividualPokemonData } = pokemonContext;

  const handleChange = (e: { target: { value: SetStateAction<string> } }) =>
    setValue(e.target.value);

  const handleSubmit = async (e: {
    preventDefault: () => void;
  }): Promise<void> => {
    e.preventDefault();
    if (value) {
      clearAlert();
      const response = await getIndividualPokemonData(value.toLowerCase());
      response
        ? setValue("")
        : displayAlert("Pokemon not found!", "error", true);
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
          label="Type a POKéMON (name/ID)"
          variant="standard"
        />
      </Box>
      <AlertMessage />
      {basicInfo.name ? (
        <IndividualPokemonCard basicInfo={basicInfo} species={species} />
      ) : (
        <CardSkeleton />
      )}
    </Fragment>
  );
};

export default PokemonPage;
