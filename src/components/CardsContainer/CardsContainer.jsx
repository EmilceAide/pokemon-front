import React, {useState} from "react";
import { useSelector } from "react-redux";

import Card from "../Card/Card";

const CardsContainer = () => {
  let detail = false;
  const { pokemons } = useSelector((state) => state);

  const [current, setCurrent] = useState(1);

  const amount = 6;
  const last = current * amount;
  const first = last - amount;
  const data = pokemons.slice(first, last);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pokemons.length / amount); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((pageNum) => (
        <button key={pageNum} onClick={() => setCurrent(pageNum)}>
          {pageNum}
        </button>
      ))}
      {data.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            id={pokemon.id}
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
