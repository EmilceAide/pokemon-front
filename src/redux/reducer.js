import {
  GET_POKEMONS,
  GET_POKEMON_ID,
  GET_TYPES,
  GET_POKEMON_NAME,
  POKEMON_ORDER,
  POKEMON_FILTER,
  POKEMON_TYPES,
} from "./actions-types";

const initialState = {
  pokemons: [],
  pokemonName: [],
  pokemonId: [],
  pokemonTypes: [],
  typesData: [],
  pokemonsFilter: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };

    case GET_POKEMON_ID:
      return { ...state, pokemonId: action.payload };

    case GET_TYPES:
      return { ...state, pokemonTypes: action.payload };

    case GET_POKEMON_NAME:
      return { ...state,  pokemonName: action.payload };

    case POKEMON_ORDER:
      let dataOrder = [];
      if (action.payload === "ASC") {
        dataOrder = state.pokemons?.sort((a, b) => {
          return a.id - b.id;
        });
      }
      if (action.payload === "DESC") {
        dataOrder = state.pokemons?.sort((a, b) => {
          return b.id - a.id;
        });
      }
      if (action.payload === "alphabetical") {
        dataOrder = state.pokemons?.sort((a, b) => {
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        });
      }
      if (action.payload === "attack") {
        dataOrder = state.pokemons?.sort((a, b) => {
          return a.attack - b.attack;
        });
      }
      return { ...state, pokemons: dataOrder };

    case POKEMON_FILTER:
      let dataFilter = [];
      if (action.payload === "API") {
        dataFilter = state.pokemons?.filter((el) => el.created === false);
      }
      if (action.payload === "DB") {
        dataFilter = state.pokemons?.filter((el) => el.created === true);
      }
      return { ...state, pokemonsFilter: dataFilter };

    case POKEMON_TYPES:
      let dataTypes = [];
      let database = state.pokemons?.filter((el) => el.created === true);
      let dataApi = state.pokemons?.filter((el) => el.created === false);
      dataApi?.filter((el) => {
        if (typeof el.types === "string") {
          const arr = el.types.split(",");
          arr.map((element) => {
            if (element === action.payload) {
              dataTypes.push(el);
            }
          });
        }
      });
      database?.filter((el) => {
        el.Types.map((element) => {
          if (element.name === action.payload) {
            dataTypes.push(el);
          }
        });
      });
      return { ...state, typesData: dataTypes };

    default:
      return { ...state };
  }
};

export default rootReducer;
