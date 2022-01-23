import { useState } from "react";
import PokemonContext from "./PokemonContext";
import { P } from "../../utils/Pokedex";

function PokemonState(props) {
  const [loading, setLoading] = useState(true);

  const [inputValue, setInputValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(0);

  const [basicInfo, setBasicInfo] = useState({});
  const [species, setSpecies] = useState({});

  // Get list of pokemons
  const getPokemonList = async (offset = 0) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=1118&offset=${offset}`
      );
      const pokemonData = await res.json();
      setPokemonList(pokemonData.results);
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

  const updateList = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.length >= 3) {
      const filter = pokemonList.filter((pokemon) =>
        pokemon["name"].includes(e.target.value)
      );
      setFilteredList(filter);
      if (inputValue === 3 && page !== 0) {
        setPage(0);
      }
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        loading,
        basicInfo,
        species,
        inputValue,
        filteredList,
        page,
        setPage,
        setFilteredList,
        setInputValue,
        updateList,
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
