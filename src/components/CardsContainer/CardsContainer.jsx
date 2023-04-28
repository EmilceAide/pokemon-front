import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Card from "../Card/Card";

const CardsContainer = () => {
  let detail = false;
  const navigate = useNavigate();
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

  const goToPage = (page) => {
    setCurrent(page);
    navigate(`/pokemons/${page}`); // Cambiar por la ruta correspondiente en tu caso
  };

  const goToPrevPage = () => {
    if (current > 1) {
      goToPage(current - 1);
    }
  };

  const goToNextPage = () => {
    if (first < pokemons.length) {
      goToPage(current + 1);
    }
  };

  return (
    <div>
      <button onClick={goToPrevPage}>Prev</button>
      {pageNumbers.map((pageNum) => (
        <button key={pageNum} onClick={() => setCurrent(pageNum)}>
          {pageNum}
        </button>
      ))}
      <button onClick={goToNextPage}>Next</button>
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
