import React from "react";
import { useSelector } from "react-redux";

import Card from "../Card/Card";

const CardsContainer = () => {

  let detail = false; 
  const { pokemons} = useSelector((state) => state);

  return (
    <div>
      {pokemons.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            detail={detail}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
