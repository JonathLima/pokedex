import fetch from 'cross-fetch'

const api = () => {

  fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then(response => response.json())
  .then(data => {return data.results})
    .catch(err => console.log(err));
  
} 

export default api;
      