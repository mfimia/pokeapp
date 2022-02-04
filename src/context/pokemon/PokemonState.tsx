import { useState } from "react";
import { IproviderProps } from "../../utils/IproviderProps";
import { P } from "../../utils/Pokedex";
import PokemonContext from "./PokemonContext";

const PokemonState = (props: IproviderProps) => {
  const [loading, setLoading] = useState(true);

  const [inputValue, setInputValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(0);

  const [basicInfo, setBasicInfo] = useState({
    name: "",
    id: 0,
    stats: [
      {
        base_stat: "",
      },
    ],
    types: [
      {
        type: {
          name: "",
        },
      },
    ],
    sprites: {
      other: {
        home: {
          front_default: "",
        },
      },
    },
  });
  const [species, setSpecies] = useState({
    habitat: {
      name: "",
    },
    is_legendary: false,
    generation: {
      name: "",
    },
    is_mythical: false,
    flavor_text_entries: [
      {
        flavor_text: "",
      },
    ],
  });

  // Get list of pokemons
  const getPokemonList = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0`
      );
      const pokemonData = await res.json();
      setPokemonList(pokemonData.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // Get data for individual pokemon
  const getIndividualPokemonData = async (
    value: string | number
  ): Promise<boolean> => {
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

  const updateList = (input: any) => {
    setInputValue(input);
    if (input.length >= 3) {
      const filter = pokemonList.filter((pokemon: any) =>
        pokemon["name"].includes(input)
      );
      setFilteredList(filter);
      if (input.length === 3 && page !== 0) {
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
};

export default PokemonState;
