import './style.scss'

const PokemonCard = () => {
  return ( 
  <>
  <div className="container">
    <div className="profile-pokemon">
        <img  className="pokemon-img" src="/images/user.svg" alt="pokemon profile" />
        <h2>Pokémon Name</h2>
    </div>
    <div id="container2">
    <div className="container3">
      <div id="gender">
      <h2>Gender</h2>
      {/* <img src="#" alt="#"s/> */}
      <p>M | F</p>
      </div>

      <div id="category">
      <h2>Category</h2>
      <p>Another Name</p>
      </div>

      <div id="number-id">
      <h2>Nº 001</h2>
      </div>
      
    </div>

    <div className="container4">
      <div id="type-pokemon">
        <p>FIRE</p>
      </div>

      <div id="weaknesses">
          <p>Rock</p>
      </div> 

    </div>
    </div>

    <div className="container5">
      <div id="height">
      <h2>Height</h2>
      <p>0.0 m</p>
      </div>

      <div id="weight">
      <h2>Weight</h2>
      <p>0.0 Kg</p>
      </div>

      <div id="abilities">
      <h2>Abilities</h2>
      <p>Powerfull 1</p>
      <p>Powerfull 2</p>
      </div>
      
    </div>

    
  </div>
  </> 
  );
}
 
export default PokemonCard;