import {
  GET_POKEMONS,
  GET_POKEMON_ID,
  GET_TYPES,
  GET_POKEMON_NAME,
  POKEMON_SORT,
  POKEMON_FILTER,
  POKEMON_TYPES,
} from "./actions-types";

const initialState = {
  pokemons: [],
  pokemonsData: [],
  filterAndSort: {
    from: "",
    types: "",
    sort: "",
  },
  pokemonName: [],
  pokemonId: [],
  pokemonTypes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload, pokemonsData: action.payload  };

    case GET_POKEMON_ID:
      return { ...state, pokemonId: action.payload };

    case GET_TYPES:
      return { ...state, pokemonTypes: action.payload };

    case GET_POKEMON_NAME:
      return { ...state, pokemonName: action.payload };

    //*Pokemons Filter
    case POKEMON_FILTER:
      const dataAPI = state.pokemons?.filter((el) => el.created === false);
      const dataDB = state.pokemons?.filter((el) => el.created === true);
      if (action.payload === "total") {
        return {
          ...state,
          filterAndSort: { ...state.filterAndSort, from: "total" },
          pokemonsData: [...dataAPI, ...dataDB],
        };
      }
      if (action.payload === "API") {
        return {
          ...state,
          filterAndSort: { ...state.filterAndSort, from: "API" },
          pokemonsData: [...dataAPI],
        };
      }
      if (action.payload === "DB") {
        return {
          ...state,
          filterAndSort: { ...state.filterAndSort, from: "DB" },
          pokemonsData: [...dataDB],
        };
      }

    //*Pokemons Sort
    case POKEMON_SORT:
      if (action.payload === "ASC") {
        return {
          ...state,
          filterAndSort: { ...state.filterAndSort, sort: "ASC" },
          pokemonsData: state.pokemonsData?.sort((a, b) => {
            return a.id - b.id;
          }),
        };
      }
      if (action.payload === "DESC") {
        return {
          ...state,
          filterAndSort: { ...state.filterAndSort, sort: "DESC" },
          pokemonsData: state.pokemonsData?.sort((a, b) => {
            return b.id - a.id;
          }),
        };
      }
      if (action.payload === "AZ") {
        return {
          ...state,
          filterAndSort: { ...state.filterAndSort, sort: "AZ" },
          pokemonsData: state.pokemonsData?.sort((a, b) => {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
          }),
        };
      }
      if (action.payload === "ZA") {
        return {
          ...state,
          filterAndSort: { ...state.filterAndSort, sort: "ZA" },
          pokemonsData: state.pokemonsData?.sort((a, b) => {
            return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
          }),
        };
      }
      if (action.payload === "attack") {
        return {
          ...state,
          filterAndSort: { ...state.filterAndSort, sort: "attack" },
          pokemonsData: state.pokemonsData?.sort((a, b) => {
            return a.attack - b.attack;
          }),
        };
      }
    //*Pokemons Types
    case POKEMON_TYPES:
      const api = state.pokemons?.filter((el) => el.created === false);
      const db = state.pokemons?.filter((el) => el.created === true);
      const dbTypes = [];
      const apiTypes = [];

      if(state.filterAndSort.from === "API") {
        api?.filter((el) => {
          if (typeof el.types === "string") {
            const arr = el.types.split(",");
            arr.map((element) => {
              if (element === action.payload) {
                apiTypes.push(el);
              }
            });
          }
        });
      }

      if(state.filterAndSort.from === "DB") {
        db?.filter((el) => {
          el.Types.map((element) => {
            if (element.name === action.payload) {
              dbTypes .push(el);
            }
          });
        });
      }

      if(state.filterAndSort.from === "total") {
        api?.filter((el) => {
          if (typeof el.types === "string") {
            const arr = el.types.split(",");
            arr.map((element) => {
              if (element === action.payload) {
                apiTypes.push(el);
              }
            });
          }
        });
        db?.filter((el) => {
          el.Types.map((element) => {
            if (element.name === action.payload) {
              dbTypes .push(el);
            }
          });
        });
      }

      return {
        ...state,
        filterAndSort: { ...state.filterAndSort, types: action.payload },
        pokemonsData:[...dbTypes, ...apiTypes],
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
