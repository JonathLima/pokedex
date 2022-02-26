import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2";

const getAllPokemons = async (page = 20) => {
  const url = `${baseUrl}/pokemon?limit=${page}`;

  const response = await axios.get(url);
  return response.data;
};

const getPokemon = async (pokemon) => {
  const url = `${baseUrl}/pokemon/${pokemon}`;

  const response = await axios.get(url);
  return response.data;
};

export { getAllPokemons, getPokemon };
