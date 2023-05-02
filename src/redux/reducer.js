import {
  GET_POKEMONS,
  GET_POKEMON_ID,
  GET_TYPES,
  GET_POKEMON_NAME,
  POKEMON_ORDER,
  POKEMON_FILTER,
} from "./actions-types";

const initialState = {
  pokemons: [],
  pokemonName: [],
  pokemonId: [],
  pokemonTypes: [],
  pokemonsFilter: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };

    case GET_POKEMON_ID:
      return { pokemonId: action.payload };

    case GET_TYPES:
      return { ...state, pokemonTypes: action.payload };

    case GET_POKEMON_NAME:
      return { pokemonName: action.payload };

    case POKEMON_ORDER:
      let dataOrder = [];
      if (action.payload === "ASC") {
        dataOrder = dataOrder.concat(
          state.pokemons?.sort((a, b) => {
           return a.id - b.id;
          })
        );
      }
      if (action.payload === "DESC") {
        dataOrder = dataOrder = state.pokemons?.sort((a, b) => {
         return b.id - a.id;
        });
      }
      if (action.payload === "alphabetical") {
        dataOrder = dataOrder.concat(state.pokemons?.sort((a, b) => {
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase())}));
      }
      if (action.payload === "attack") {
        dataOrder = dataOrder.concat(
          state.pokemons?.sort((a, b) => {
          return a.attack - b.attack;
          })
        );
      }
      return { pokemons: dataOrder };

    case POKEMON_FILTER:
      let dataFilter = [];
      if (action.payload === "API") {
        dataFilter = state.pokemons.filter((el) => el.created === false);
        console.log('API =>',dataFilter)
      }
      if (action.payload === "DB") {
        dataFilter = state.pokemons.filter((el) => el.created === true);
        console.log('DB =>',dataFilter)
      }

      return { pokemonsFilter: dataFilter };

    default:
      return { ...state };
  }
};

export default rootReducer;
