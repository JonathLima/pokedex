import { useState } from 'react';
import PokemonCard from '../PokemonCard';
import {api} from '../../services/api'
import './style.scss'

const Search = () => {

  const [search, setSearch] = useState("")
  const [pokemon, setPokemon] = useState()

  const getPokemon = async (e) =>{
    const data = await api(search.toLowerCase())
    setPokemon(data)
  }


  return ( 
  <>
  <div className="searchbar">
    <input onChange={e => setSearch(e.target.value)} type="text" placeholder="Search..."/>
    <button onClick={getPokemon}>Buscar</button>
      <img src="/images/search-alt.svg" alt="Icon Search" />   
  </div>

  <div className="container-search">

    {pokemon && 
    
    <PokemonCard 
    name={pokemon.name[0].toUpperCase() + pokemon.name.substr(1)} 
    image={pokemon.sprites.other.dream_world.front_default}
    number={pokemon.id}
    height={pokemon.height / 10}
    weight={pokemon.weight / 10}
    gender={pokemon.gender}
    category={pokemon.category}
    abilitie1={pokemon.abilities.ability[0].name}
    abilitie2={pokemon.abilities.ability[1].name}
    />
     
    }

  </div>

    </> 

  );
}
 
export default Search;


