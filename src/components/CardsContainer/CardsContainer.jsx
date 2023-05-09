import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../Card/Card";
import styles from "./cardsContainer.module.css";
import imgPikachu from '../../assets/pikaelectric.gif';

const CardsContainer = ({pokemons}) => {
  let detail = false;

  const navigate = useNavigate();

  const [current, setCurrent] = useState(1);

  const amount = 12;
  const last = current * amount;
  const first = last - amount;
  const data = pokemons?.slice(first, last);

  const goToPage = (page) => {
    setCurrent(page);
    navigate(`/pokemons/${page}`);
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

  if (data.length === 0) {
    return (
      <div className={styles.container}>
      <h1 className={styles.textInfo}>
       No se encontraron pokemones. Intentalo de nuevo más tarde.
      </h1>
      <img src={imgPikachu} alt="Imagén de Pikachu" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <section className={styles.pagination}>
        <button className={styles.btn} onClick={goToPrevPage}>
          {'<'}
        </button>
        {<p className={styles.current}>{current}</p>}
        <button className={styles.btn} onClick={goToNextPage}>
        {'>'}
        </button>
      </section>

      <section className={styles.data}>
        {data?.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types}
              Types={pokemon?.Types}
              detail={detail}
            />
          );
        })}
      </section>
    </div>
  );
};

export default CardsContainer;
