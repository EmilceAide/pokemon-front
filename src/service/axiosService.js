import axios from "axios";

export const url = "http://localhost:3001";

export const getAllPokemons = () => {
  return axios.get(`${url}/pokemons`);
};

export const getPokemonById = (id) => {
  return axios.get(`${url}/pokemons/${id}`);
};

export const getPokemonByName = (name) => {
    return axios.get(`${url}/pokemons?name=${name}`);
}

export const getPokemonTypes = () => {
    return axios.get(`${url}/types`);
}

export const postPokemon = (data) =>{
  return  axios.post(`${url}/pokemons`, data);
}