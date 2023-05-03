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
  POKEMON_ORDER,
  POKEMON_FILTER, 
  POKEMON_TYPES, 
} from "./actions-types";

//*Pokemons data
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

//* Order and filter
export const orderPokemon = (option) => {
  return (dispatch) => {
    console.log('action', option)
    dispatch({ type: POKEMON_ORDER, payload: option });
  };
};

export const filterPokemon = (option) => {
  return (dispatch) => {
    console.log('action', option)
    dispatch({ type: POKEMON_FILTER, payload: option });
  };
};

export const typePokemon = (option) => {
  return (dispatch) => {
    console.log('action', option)
    dispatch({ type: POKEMON_TYPES, payload: option });
  };
};
