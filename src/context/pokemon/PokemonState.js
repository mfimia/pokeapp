import { useState } from "react";
import PokemonContext from "./PokemonContext";
import { P } from "../../utils/Pokedex";

function PokemonState(props) {
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(null);

  const [pokemonList, setPokemonList] = useState([]);

  const [basicInfo, setBasicInfo] = useState({});
  const [species, setSpecies] = useState({});

  // Get list of pokemons
  const getPokemonList = async (offset = 0) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=16&offset=${offset}`
      );
      const pokemonData = await res.json();
      setPokemonList(pokemonData.results);
      setPageCount(pokemonData.count);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // Get data for individual pokemon
  const getIndividualPokemonData = async (value) => {
    try {
      setLoading(true);
      const basicInfoData = await P.getPokemonByName(value);
      const speciesData = await P.getPokemonSpeciesByName(value);
      setBasicInfo(basicInfoData);
      setSpecies(speciesData);
      setLoading(false);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        loading,
        pageCount,
        basicInfo,
        species,
        getPokemonList,
        setPokemonList,
        getIndividualPokemonData,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
}

export default PokemonState;
