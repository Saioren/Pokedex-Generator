import React from 'react';
import './PokemonInfoPage.css'
import PokemonType from './PokemonType';

const Pokemon = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  // Check if the response is "Not Found" and display an error message
  if (data.status === 404) {
    return <div>Error: Pokémon not found</div>;
  }

  return (
    <div className="pokemon-details">
      <h2>{data.name}</h2>
      <img className="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt="" />

      <PokemonType types={data.types.map(type => type.type.name)} />
      <p>pokédex number {data.id}</p>
      <p>height: 0.{data.height} m</p>
      <p>weight: {(data.weight / 10).toFixed(1)} kg</p>
      <p>abilities: {data.abilities[0].ability.name}, {data.abilities[1].ability.name}</p>
    </div>
  );
};



export default Pokemon;
