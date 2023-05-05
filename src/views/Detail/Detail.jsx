import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPokemon } from "../../redux/actions";
import styles from "./detail.module.css";

const Detail = () => {

  const { id } = useParams();
  const { pokemonId, pokemonName } = useSelector((state) => state);
  const [dataPokemon, setDataPokemon] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon(id));
  }, [id]);
 
  useEffect(() => {
    if(isNaN(id)){
      setDataPokemon([...pokemonName]);
    }else{
      setDataPokemon([...pokemonId])
    }
  }, [id, pokemonName, pokemonId]);

  return (
    <div className={styles.container}>
      {
        dataPokemon?.map((pokemon) => {
          return (
            <>
              <div className={styles.containerTwo}>
                <div className={styles.detailContainer}>
                  <section className={styles.sectionContainer}>
                    <h3 className={styles.id}>{pokemon.id}</h3>
                    <img src={pokemon.image} alt="Imagén de pokemón" />
                    <h3 className={styles.name}>{pokemon.name}</h3>
                  </section>
                  <section className={styles.detailTwo}>
                    <p>Vida: {pokemon.hp}</p>
                    <p>Ataque: {pokemon.attack}</p>
                    <p>Defensa: {pokemon.defense}</p>
                    <p>Velocidad: {pokemon.speed}</p>
                    <p>Altura: {pokemon.height}</p>
                    <p>Peso: {pokemon.weight}</p>
                  </section>
                </div>
                <div className={styles.typesContainer}>
                  {console.log(pokemon.types)}
                  {pokemon?.types?.split(",").map((el, i) => {
                    return <p key={i}>Tipo: {el}</p>;
                  })}
                  {pokemon?.Types?.map((el, i) => {
                    return <p key={i}>Tipo: {el.name}</p>;
                  })}
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Detail;
