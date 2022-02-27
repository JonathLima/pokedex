import { usePokemon } from "../../context/PokemonContext";

import "./styles.modules.scss";

export default function LoadButton() {
  const { loadingMorePokemons } = usePokemon();
  return (
    <div id="loading-button">
      <button onClick={loadingMorePokemons}>Load More...</button>
    </div>
  );
}
