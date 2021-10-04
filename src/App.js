import { useState, useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Pokedex from './components/Pokedex';
import Footer from './components/Footer';
import { getApi } from './services/api';

function App() {
  const [pokemons, setPokemons] = useState([]);

  function fetchPokemons() {
    getApi().then(setPokemons);
  }

  useEffect(() => {
    fetchPokemons();
  }, [pokemons]);

  return (
    <>
      <div>
        <Header />
        <Search />
        <Pokedex />
        <Footer />
      </div>
    </>
  );
}

export default App;
