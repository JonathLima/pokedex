import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2";

const getAllPokemons = async (step, page) => {
  const url = `${baseUrl}/pokemon?limit=${step}&offset=${page}`;

  const response = await axios.get(url);
  return response.data;
};

const getPokemon = async (pokemon) => {
  const url = `${baseUrl}/pokemon/${pokemon}`;

  const response = await axios.get(url);
  return response.data;
};

export { getAllPokemons, getPokemon };
