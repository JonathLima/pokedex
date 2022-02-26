import { usePokemon } from "../../context/PokemonContext";

import "./styles.modules.scss";

const Search = ({ onSearch }) => {
  const { pokemon } = usePokemon();

  function handleSearch(event) {
    onSearch(event.target.value);
    // if (event.keyCode === 13) {
    //   return onSearch(event.target.value);
    // }
    // onSearch("");
    //setSearch(event.target.value);
    // if (timeToSearch) {
    //   clearInterval(timeToSearch);
    // }
    // setTimeToSearch(setTimeout(() => onSearch(search), 500));
  }

  function handleSubmit(event) {
    event.preventDefault();
    return pokemon;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="searchbar">
        <img src="/images/search-alt.svg" alt="Icon Search" />
        <input onKeyUp={handleSearch} type="input" placeholder="Search..." />
      </form>

      <div className="container-search" />
    </>
  );
};

export default Search;
