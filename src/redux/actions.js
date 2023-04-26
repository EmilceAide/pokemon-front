import { getAllPokemons, getPokemonById, getPokemonTypes } from "../service/axiosService";
import { GET_POKEMONS,  GET_POKEMON_ID, GET_TYPES } from "./actions-types";


export const getPokemons = () => {
  return async (dispatch) => {
    const data = await getAllPokemons();
    dispatch({ type: GET_POKEMONS, payload: data.data });
  };
};

export const getPokemon = () => {
    return async (dispatch) => {
      const data = await getPokemonById(3);
      dispatch({ type: GET_POKEMON_ID, payload: data.data });
    };
  };

  export const getTypes = () => {
    return async (dispatch) => {
      const data = await getPokemonTypes();
      dispatch({ type: GET_TYPES, payload: data.data });
    };
  };