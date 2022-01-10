import { useContext, useEffect, Fragment, useState } from "react";
import PokemonContext from "../../context/pokemon/PokemonContext";
import PokemonCard from "./PokemonCard";
import { Pagination } from "@mui/material";
import Spinner from "../layout/Spinner";
import Grid from "@mui/material/Grid";

const PokemonList = () => {
  const [page, setPage] = useState(0);

  const pokemonContext = useContext(PokemonContext);

  const { getPokemonList, pokemonList, loading, setPokemonList, pageCount } =
    pokemonContext;

  useEffect(() => {
    getPokemonList();
    return () => setPokemonList([]);
    // eslint-disable-next-line
  }, []);

  const handleChange = (event, value) => {
    setPage(value - 1);
    getPokemonList((value - 1) * 16);
  };

  return (
    <Fragment>
      <Pagination
        variant="outlined"
        page={page + 1}
        count={Math.round(pageCount / 16)}
        onChange={handleChange}
        color="primary"
        size="large"
        sx={{
          mt: 1.5,
          ml: 1.5,
        }}
      />

      {loading ? (
        <Spinner />
      ) : (
        <Grid container spacing={4} my={2}>
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </Grid>
      )}
      {!loading && (
        <Pagination
          variant="outlined"
          count={57}
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
