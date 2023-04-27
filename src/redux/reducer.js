import {
  GET_POKEMONS,
  GET_POKEMON_ID,
  GET_TYPES,
  GET_POKEMON_NAME,
} from "./actions-types";

const initialState = {
  pokemons: [],
  pokemon: [],
  pokemonId: [],
  pokemonTypes: [],
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
      return { ...state, pokemon: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
