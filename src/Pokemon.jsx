import React, { useState } from 'react';
import './Pokemon.css'
import PokemonInfoPage from './PokemonInfoPage'; // Import the component to display Pokemon information

const GeneratePokemonPage = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemonData = () => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched data
        setPokemonData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };


  return (
    <>
      <div className="container">
        <input
          className="generator"
          type="text"
          placeholder="Input Pokemon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)} 
        />
        <button className='fetch-button' onClick={fetchPokemonData}>Who's That Pokemon?</button>
        {pokemonData && <PokemonInfoPage data={pokemonData} />}
      </div>
    </>
  );
};

export default GeneratePokemonPage;
