import PokemonCard from '../PokemonCard';
import './style.scss'

const Search = () => {
  
  return ( 
  <>
  <div className="searchbar">
    <input type="text" placeholder="Buscar..."/>
      <img src="/images/search-alt.svg" alt="Icon Search" />
  </div>

  <div className="container-search">
  <PokemonCard/>
  <PokemonCard/>
  <PokemonCard/>
  <PokemonCard/>
  <PokemonCard/>
  <PokemonCard/>
  <PokemonCard/>
  <PokemonCard/>
  </div>
    </> 

  );
}
 
export default Search;