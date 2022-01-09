import { useState } from "react";
import PokemonContext from "./PokemonContext";

function PokemonState(props) {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);

  // Get pokemons
  const getPokemonList = async (offset = 0) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=16&offset=${offset}`
      );
      const pokemonData = await res.json();
      setPokemonList(pokemonData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        loading,
        getPokemonList,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
}

export default PokemonState;
