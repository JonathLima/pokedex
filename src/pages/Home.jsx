import { useState } from "react";
import { usePokemon } from "../context/PokemonContext";

import Search from "../components/Search";
import PokemonCard from "../components/PokemonCard";
import LoadButton from "../components/LoadButton";

import "../styles/home.modules.scss";

export default function Home() {
  const [search, setSearch] = useState("");
  const { allPokemons } = usePokemon();

  return (
    <>
      <h1 id="header-text">Pokédex</h1>

      <Search onSearch={setSearch} />
      <div className="container-pokemons">
        {allPokemons
          .filter((item) =>
            search.length
              ? item.name.toLowerCase().includes(search.toLowerCase())
              : true,
          )
          .map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other["official-artwork"].front_default}
              number={pokemon.id}
              height={pokemon.height / 10}
              weight={pokemon.weight / 10}
              type={
                pokemon.types[0].type.name[0].toUpperCase() +
                pokemon.types[0].type.name.substr(1)
              }
              abilities={
                pokemon.abilities[0].ability.name[0].toUpperCase() +
                pokemon.abilities[0].ability.name.substr(1)
              }
            />
          ))}
      </div>
      <LoadButton />
      <footer>
        <div id="container-footer">
          <p>Create by Jonathan Silva</p>
        </div>
      </footer>
    </>
  );
}
