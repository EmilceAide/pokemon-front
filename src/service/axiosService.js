import axios from "axios";

export const url = "http://localhost:3001";

export const getAllPokemons = () => {
  return axios.get(`${url}/pokemons`);
};

export const getPokemonById = (id) => {
  return axios.get(`${url}/pokemons/${id}`);
};

export const getPokemonName = (name) => {
    return axios.get(`${url}/pokemons/${name}`);
}

export const getPokemonTypes = () => {
    return axios.get(`${url}/types`);
}