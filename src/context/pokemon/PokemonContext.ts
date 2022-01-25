import { createContext, Dispatch, SetStateAction } from "react";

const initialState = {
  pokemonList: [],
  loading: false,
  basicInfo: {
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
  },
  species: {
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
  },
  inputValue: "",
  filteredList: [],
  page: 0,
  setFilteredList: () => {},
  setPage: () => {},
  setInputValue: () => {},
  updateList: () => {},
  setPokemonList: () => {},
  getPokemonList: () => {},
  getIndividualPokemonData: (): Promise<boolean> =>
    false as unknown as Promise<boolean>,
};

export interface PokemonListType {
  pokemon: {
    name: string;
  };
}

export interface PokemonTypes {
  pokemonList: never[];
  loading: boolean;
  basicInfo: {
    name: string;
    id: number;
    stats: {
      base_stat: string;
    }[];
    types: {
      type: {
        name: string;
      };
    }[];
    sprites: {
      other: {
        home: {
          front_default: string;
        };
      };
    };
  };
  species: {
    habitat: {
      name: string;
    };
    is_legendary: boolean;
    generation: {
      name: string;
    };
    is_mythical: boolean;
    flavor_text_entries: {
      flavor_text: string;
    }[];
  };
  inputValue: string;
  filteredList: never[];
  page: number;
  setFilteredList: Dispatch<SetStateAction<never[]>>;
  setPage: Dispatch<SetStateAction<number>>;
  setInputValue: Dispatch<SetStateAction<string>>;
  updateList: (input: string) => void;
  setPokemonList: Dispatch<SetStateAction<never[]>>;
  getPokemonList: () => void;
  getIndividualPokemonData: (value: string | number) => Promise<boolean>;
}

const PokemonContext = createContext<PokemonTypes>(initialState);

export default PokemonContext;
