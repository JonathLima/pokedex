
import {useState, useEffect} from 'react'
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer'
import {getApi} from './services/api'

function App() {
  
  // eslint-disable-next-line
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
    <Footer/>
  
    </>
    )
  
}

export default App;
