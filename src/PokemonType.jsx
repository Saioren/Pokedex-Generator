// PokemonType.js

import React from 'react';

const getTypeColor = (type) => {
  const typeColors = {
    grass: 'rgb(120,200,80)',
    poison: 'rgb(160,64,160)',
    electric: 'rgb(248,208,48)',
    fire: 'rgb(240,128,48)',
    water: 'rgb(104,144,240)',
    normal: 'rgb(168,168,120)',
    ice: 'rgb(152,216,216)',
    fighting: 'rgb(192,48,40)',
    ground: 'rgb((224,192,104)',
    flying: 'rgb(168,144,240)',
    psychic: 'rgb(248,88,136)',
    bug: 'rgb(168,184,32)',
    rock: 'rgb(184,160,56)',
    ghost: 'rgb(153,142,182)',
    dragon: 'rgb(112,56,248)',
    dark: 'rgb(112,88,72)',
    steel: 'rgb(184,184,208)',
    fairy: 'rgb(240,182,188)',
    // Add more type-color mappings as needed
  };

  if (typeColors.hasOwnProperty(type)) {
    return <span style={{ color: typeColors[type] }}>{type}</span>;
  }

  return <span style={{ color: 'white' }}>{type}</span>;
};

const PokemonType = ({ types }) => {
  const typeElements = types.map((type, index) => {
    return (
      <span key={index}>
        {getTypeColor(type)}
        {index < types.length - 1 && ' & '}
      </span>
    );
  });

  return (
    <p>{typeElements} type</p>
  );
};

export default PokemonType;
