import BulbJpg from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeChars = {
    type: "Grass",
    move: "Vine Whip"
  };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={BulbJpg} alt={favPokemon}></img>
      <h2>
        {favPokemon}'s Type is{" "}
        <span style={{ backgroundColor: "green" }}>{pokeChars.type}</span> and
        Move is <span>{pokeChars.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
