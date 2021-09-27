import './style.scss'
const PokemonCard = (props) => {


  return ( 
  <>
  <div className="container">
    <div className="profile-pokemon">
        <img  className="pokemon-img" src={props.image} alt="pokemon profile" />
        <h2>{props.name}</h2>
    </div>
    <div id="container2">
    <div className="container3">
      <div id="gender">
      <h2>Gender</h2>
      {/* <img src="#" alt="#"s/> */}
      <p>{props.gender}</p>
      </div>

      <div id="category">
      <h2>Category</h2>
      <p>{props.category}</p>
      </div>

      <div id="number-id">
      <h2>Nº {props.number}</h2>
      </div>
      
    </div>

    <div className="container4">
      <div id="type-pokemon">
        <p>{props.type}</p>
      </div>

      <div id="habitats">
          <p>{props.habitat}</p>
      </div> 

    </div>
    </div>

    <div className="container5">
      <div id="height">
      <h2>Height</h2>
      <p>{props.height} m</p>
      </div>

      <div id="weight">
      <h2>Weight</h2>
      <p>{props.weight} Kg</p>
      </div>

      <div id="abilities">
      <h2>Abilities</h2>
      <p>{props.abilitie1}</p>
      <p>{props.abilitie2}</p>
      </div>
      
    </div>
  </div>
  </> 
  );
}
 
export default PokemonCard;