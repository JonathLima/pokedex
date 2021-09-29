import { useState } from 'react';
import PokemonCard from '../PokemonCard';
import {api} from '../../services/api'
import './style.scss'

const Search = (props) => {

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
    height={pokemon.height / 10}
    number={pokemon.id}
    gender={pokemon.gender}
    category={pokemon.category}
    weight={pokemon.weight / 10}
    abilitie1={pokemon.ability}
    />
     
    }

  </div>

    </> 

  );
}
 
export default Search;