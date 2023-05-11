import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPokemon, getPokemonName } from "../../redux/actions";
import styles from "./detail.module.css";
import imgLoader from "../../assets/loader.gif";
import imgPikachu from "../../assets/pikaelectric.gif";

const Detail = () => {

  const { id } = useParams();
  const {pokemonId, pokemonName } = useSelector((state) => state);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon(id));
  }, [id]);

  useEffect(() => {
    dispatch(getPokemonName(id));
  }, [id]);

  useEffect(() => {
    const regex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    if (isNaN(id)  && id.length !==36) {
      setData([...pokemonName]);
    }
    if (!isNaN(id) && id.length !==36){
      setData([...pokemonId]);
    }
    if (isNaN(id) && regex.test(id) && id.length ===36) {
      setData([...pokemonId]);
    }
  }, [id, pokemonName, pokemonId]);

  return (
    <div className={styles.container}>
      { data?.map((pokemon) => {
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
            <section className={styles.loader}>
              <div><img className={styles.imgOne} src={imgLoader} /></div>
              <div><img className={styles.imgTwo} src={imgLoader} /></div>
              <div><img className={styles.imgTree} src={imgLoader} /></div>
           </section>
          </>
        );
      })}
    </div>
  );
};

export default Detail;
