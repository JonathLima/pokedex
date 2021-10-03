
import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard";
import {getApi} from '../../services/api'

const Pokedex = () => {


  const [pokemons, setPokemons] = useState('');


  const getPokemon = async (e) =>{
    const data = await getApi()
    setPokemons(data)
  }

  useEffect(() => {
    getPokemon()
  }, [pokemons])




  return ( 
    <div className="container-search">
    
    <PokemonCard />
    <PokemonCard/>
    <PokemonCard/>
    <PokemonCard/>
    <PokemonCard/>
    <PokemonCard/>
    <PokemonCard/>
    <PokemonCard/>
  
    </div>
   );
}
 
export default Pokedex;