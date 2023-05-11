import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardsContainer from "../../components/CardsContainer/CardsContainer";
import {
  getPokemons,
  orderPokemon,
  filterPokemon,
  typePokemon,
  getTypes,
} from "../../redux/actions";
import styles from "./home.module.css";
import imgLoader from "../../assets/loader.gif"

const Home = () => {
  const dispatch = useDispatch();
  const { pokemons, pokemonTypes, pokemonsData,filterAndSort } = useSelector(
    (state) => state
  );
  const [typeState, setTypeState] = useState("");

  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  useEffect(() => {
    dispatch(getTypes());
  }, []);
  useEffect(() => {
    dispatch(filterPokemon('total'))
  }, []);

  console.log('dddd', filterAndSort, pokemonsData )


  return (
    <div className={styles.container}>
      <section className={styles.btns}>
      <button onClick={() =>  dispatch(filterPokemon('total'))}>
          Todos
        </button>
        <p>Ordenar:</p>
        <button onClick={() => dispatch(orderPokemon('ASC'))}>
          ASCENDENTE
        </button>
        <button onClick={() => dispatch(orderPokemon('DESC'))}>
          DESCENDENTE
        </button>
        <button onClick={() =>  dispatch(orderPokemon('AZ'))}>
          A-Z
        </button>
        <button onClick={() =>  dispatch(orderPokemon('ZA'))}>
          Z-A
        </button>
        <button onClick={() => dispatch(orderPokemon('attack'))}>
          PODER DE ATAQUE
        </button>
        <p>Filtrar:</p>
        <button onClick={() =>  dispatch(filterPokemon('API'))}>API</button>
        <button onClick={() => dispatch(filterPokemon('DB'))}>DB</button>
        <select onChange={(e) => setTypeState(e.target.value)}>
          <option>Tipo: </option>
          {pokemonTypes.map((el) => {
            return (
              <option key={el.id} value={el.name}>
                {el.name}
              </option>
            );
          })}
        </select>
        <div className={styles.btnFilter}>
          <button onClick={() =>  dispatch(typePokemon(typeState))}>Filtrar</button>
        </div>
      </section>
    
        <CardsContainer pokemons={pokemonsData} />
      
      <section className={styles.loader}>
        <div><img className={styles.imgOne} src={imgLoader} /></div>
        <div><img className={styles.imgTwo} src={imgLoader} /></div>
        <div><img className={styles.imgTree} src={imgLoader} /></div>
      </section>
    </div>
  );
};

export default Home;
