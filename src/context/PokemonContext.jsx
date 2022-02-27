import { createContext, useContext, useState, useEffect } from "react";

import { getPokemon, getAllPokemons } from "../services/api";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState();
  const [allPokemons, setAllPokemons] = useState([]);
  const [step] = useState(20);
  const [pages, setPages] = useState(0);

  async function fetchPokemon(search) {
    try {
      const response = await getPokemon(search.toLowerCase());
      return setPokemon(response);
    } catch {
      setPokemon(null);
    }
  }

  async function fetchAllPokemons() {
    const response = await getAllPokemons(step, pages);
    const pokemons = await Promise.all(
      response.results.map((pokemon) => {
        return getPokemon(pokemon.name);
      }),
    );

    setAllPokemons([...allPokemons, ...pokemons]);
    setPages(pages + step);
  }

  function loadingMorePokemons() {
    return fetchAllPokemons();
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchAllPokemons(), []);

  return (
    <PokemonContext.Provider
      value={{ pokemon, fetchPokemon, allPokemons, loadingMorePokemons }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  const context = useContext(PokemonContext);

  return context;
}
