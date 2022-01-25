export interface PokemonDescriptionTypes {
  basicInfo: {
    stats: {
      base_stat: string;
    }[];
    types: {
      type: {
        name: string;
      };
    }[];
    weight: string;
    moves: {
      move: {
        name: string;
      };
      version_group_details: {
        version_group: {
          name: string;
        };
      }[];
    }[];
    name: string;
    id: number;
    sprites: {
      front_default: string;
      other: {
        home: {
          front_default: string;
        };
      };
    };
  };
  speciesText: string;
}
