import axios from "axios";
axios.defaults.baseURL = "https://pokemon-pi-production-6a8f.up.railway.app";


export const getAllPokemons = () => {
  return axios.get(`/pokemons`);
};

export const getPokemonById = (id) => {
  return axios.get(`/pokemons/${id}`);
};

export const getPokemonByName = (name) => {
    return axios.get(`/pokemons?name=${name}`);
}

export const getPokemonTypes = () => {
    return axios.get(`/types`);
}

export const postPokemon = (data) =>{
  return  axios.post(`/pokemons`, data);
}