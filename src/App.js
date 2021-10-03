import {useState, useEffect} from 'react'
import Header from './components/Header';
import Search from './components/Search';
// import Pokedex from './components/Pokedex'
import Footer from './components/Footer'
import {getApi} from './services/api'

function App() {
  
  // eslint-disable-next-line
const [pokemons, setPokemons] = useState([]) 


  function fetchPokemons(){
    getApi().then(setPokemons)
  }

  useEffect(() => {
    fetchPokemons()
  }, [pokemons])

  return (
    <>
    
    <Header/>
    <Search/>
    {/* <Pokedex /> */}
    <Footer/>
  
    </>
    )
  
}

export default App;
