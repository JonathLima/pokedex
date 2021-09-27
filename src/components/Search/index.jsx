import { useState, useEffect } from 'react';
import PokemonCard from '../PokemonCard';
import Api from '../../services/api'
import './style.scss'

const Search = () => {

  const [pokemons, setPokemons] = useState()

  useEffect(() => {
    setPokemons(Api)
  
  }, [])
  

  return ( 
  <>
  <div className="searchbar">
    <input data={pokemons} key={pokemon => pokemon.name} type="text" placeholder="Buscar..."/>
      <img src="/images/search-alt.svg" alt="Icon Search" />
  </div>

  <div className="container-search">
    
    
   <PokemonCard />
  </div>
    </> 

  );
}
 
export default Search;