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
    const regex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    
    if (isNaN(id) && regex.test(id) && id.length ===36) { 
         setDataPokemon([...pokemonId]);
    } else if (isNaN(id)) {
        setDataPokemon([...pokemonName]);
    } else if (id.length !==36){
      setDataPokemon([...pokemonId]);
    }
  }, [id, pokemonName, pokemonId]);

  return (
    <div className={styles.container}>
      {dataPokemon?.map((pokemon) => {
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
