import {
  getAllPokemons,
  getPokemonById,
  getPokemonTypes,
  getPokemonByName,
} from "../service/axiosService";
import {
  GET_POKEMONS,
  GET_POKEMON_ID,
  GET_TYPES,
  GET_POKEMON_NAME,
} from "./actions-types";

export const getPokemons = () => {
  return async (dispatch) => {
    const data = await getAllPokemons();
    dispatch({ type: GET_POKEMONS, payload: data.data });
  };
};

export const getPokemon = (id) => {
    return async (dispatch) => {
      const data = await getPokemonById(id);
      dispatch({ type: GET_POKEMON_ID, payload: data.data });
    };
};

export const getPokemonName = (name) => {
  return async (dispatch) => {
    const data = await getPokemonByName(name);
    dispatch({ type: GET_POKEMON_NAME, payload: data.data });
  };
};

export const getTypes = () => {
  return async (dispatch) => {
    const data = await getPokemonTypes();
    dispatch({ type: GET_TYPES, payload: data.data });
  };
};
