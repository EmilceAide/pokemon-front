import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPokemon, getPokemonName } from "../../redux/actions";
import styles from "./detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const { pokemonNameOrId } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon(id));
  }, [id]);

  useEffect(() => {
    dispatch(getPokemonName(id));
  }, [id]);

  return (
    <div className={styles.container}>
      { pokemonNameOrId?.map((pokemon) => {
        return (
          <>
            <div className={styles.containerTwo}>
              <div className={styles.detailContainer}>
                <section className={styles.sectionContainer}>
                  <h3 className={styles.id}>{pokemon.id}</h3>
                  <div className={styles.imgContainer}>
                    <img src={pokemon.image} alt="Imagén de pokemón" />
                  </div>
                  <h3 className={styles.name}>{pokemon.name}</h3>
                  <div className={styles.typesContainer}>
                    {console.log(pokemon.types)}
                    {pokemon?.types?.split(",").map((el, i) => {
                      return <p key={i}>Tipo: {el}</p>;
                    })}
                    {pokemon?.Types?.map((el, i) => {
                      return <p key={i}>Tipo: {el.name}</p>;
                    })}
                  </div>
                </section>
                <section className={styles.detailTwo}>
                  <p className={styles.hp}>Vida: {pokemon.hp}</p>
                  <p className={styles.attack}>Ataque: {pokemon.attack}</p>
                  <p className={styles.defense}>Defensa: {pokemon.defense}</p>
                  <p className={styles.speed}>Velocidad: {pokemon.speed}</p>
                  <p className={styles.height}>Altura: {pokemon.height}</p>
                  <p className={styles.weight}>Peso: {pokemon.weight}</p>
                </section>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Detail;
