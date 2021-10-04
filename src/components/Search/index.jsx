import { useState } from 'react';
import PokemonCard from '../PokemonCard';
import { api } from '../../services/api';
import './style.scss';

const Search = () => {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState();

  const getPokemon = async () => {
    const data = await api(search.toLowerCase());
    setPokemon(data);
  };

  return (
    <>
      <div className="searchbar">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
        />
        <button type="submit" onClick={getPokemon}>
          Buscar
        </button>
        <img src="/images/search-alt.svg" alt="Icon Search" />
      </div>

      <div className="container-search">
        {pokemon && (
          <PokemonCard
            name={pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}
            image={pokemon.sprites.other['official-artwork'].front_default}
            number={pokemon.id}
            height={pokemon.height / 10}
            weight={pokemon.weight / 10}
            type={
              pokemon.types[0].type.name[0].toUpperCase() +
              pokemon.types[0].type.name.substr(1)
            }
            abilitie={
              pokemon.abilities[0].ability.name[0].toUpperCase() +
              pokemon.abilities[0].ability.name.substr(1)
            }
            // abilitie2={pokemon.abilities[1]['ability']['name'][0].toUpperCase() + pokemon.abilities[1]['ability']['name'].substr(1) }
          />
        )}
      </div>
    </>
  );
};

export default Search;
