import { useEffect, useState } from 'react';
import { getApi } from '../../services/api';
import PokemonCard from '../PokemonCard';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState('');

  const getPokemon = async () => {
    const data = await getApi();
    setPokemons(data);
  };

  useEffect(() => {
    getPokemon();
  }, [pokemons]);

  return (
    <div className="container-search">
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  );
};

export default Pokedex;
