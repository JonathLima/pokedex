
import {useState, useEffect} from 'react'
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import Search from './components/Search';
import {getApi} from './services/api'

function App() {
 
const [pokemons, setPokemons] = useState([])


  useEffect(() => {
    const data = getApi();
    console.log(data)
    setPokemons(data);
    
  }, [])


  return (
    <>
    
    <Header/>
    <Search/>
    {/* <Pokedex/> */}
  
    </>
    )
  
}

export default App;
