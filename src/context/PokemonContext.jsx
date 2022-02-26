import { createContext, useContext, useState, useEffect } from "react";

import { getPokemon, getAllPokemons } from "../services/api";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState();
  const [allPokemons, setAllPokemons] = useState([]);

  async function fetchPokemon(search) {
    try {
      const response = await getPokemon(search.toLowerCase());
      return setPokemon(response);
    } catch {
      setPokemon(null);
    }
  }

  async function fetchAllPokemons() {
    const response = await getAllPokemons();
    const pokemons = await Promise.all(
      response.results.map((pokemon) => {
        return getPokemon(pokemon.name);
      }),
    );

    setAllPokemons(pokemons);
  }

  useEffect(() => fetchAllPokemons(), []);

  return (
    <PokemonContext.Provider
      value={{ pokemon, fetchPokemon, allPokemons, setAllPokemons }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  const context = useContext(PokemonContext);

  return context;
}
