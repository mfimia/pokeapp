import { useContext, useEffect, Fragment } from "react";
import PokemonContext from "../../context/pokemon/PokemonContext";
import PokemonCard from "./PokemonCard";
import { Box, Pagination, TextField } from "@mui/material";
import Spinner from "../layout/Spinner";
import Grid from "@mui/material/Grid";

const PokemonList = () => {
  const pokemonContext = useContext(PokemonContext);

  const {
    getPokemonList,
    pokemonList,
    loading,
    setPokemonList,
    inputValue,
    filteredList,
    page,
    setPage,
    updateList,
  } = pokemonContext;

  useEffect(() => {
    getPokemonList();
    return () => setPokemonList([]);
    // eslint-disable-next-line
  }, []);

  const handleChange = (_, value) => setPage(value - 1);

  return (
    <Fragment>
      <Box display={"flex"} justifyContent={"space-between"} mt={1}>
        <Pagination
          variant="outlined"
          page={page + 1}
          count={
            inputValue.length >= 3
              ? Math.floor(filteredList.length / 16)
              : Math.round(pokemonList.length / 16)
          }
          onChange={handleChange}
          color="primary"
          size="large"
          sx={{
            mt: 1.5,
            ml: 1.5,
          }}
        />
        <TextField
          value={inputValue}
          onChange={updateList}
          label="Filter..."
          variant="standard"
        />
      </Box>
      {loading ? (
        <Spinner />
      ) : (
        <Grid container spacing={4} my={2}>
          {inputValue.length >= 3
            ? filteredList
                .slice(page * 16, page * 16 + 16)
                .map((pokemon) => (
                  <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))
            : pokemonList
                .slice(page * 16, page * 16 + 16)
                .map((pokemon) => (
                  <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
        </Grid>
      )}
      {!loading && (
        <Pagination
          variant="outlined"
          count={
            inputValue.length >= 3
              ? Math.floor(filteredList.length / 16)
              : Math.round(pokemonList.length / 16)
          }
          page={page + 1}
          onChange={handleChange}
          color="primary"
          size="large"
          sx={{
            pb: 4,
            mt: 1,
            ml: 1,
          }}
        />
      )}
    </Fragment>
  );
};

export default PokemonList;
