import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { getPokemons, orderPokemon, filterPokemon, typePokemon, getTypes} from "../../redux/actions";
import styles from './home.module.css'

const Home = () => {

  const dispatch = useDispatch();
  const { pokemons, pokemonTypes, pokemonsFilter, typesData } = useSelector((state) => state);
  const [typeState, setTypeState] = useState('');

  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  useEffect(() => {
    dispatch(getTypes());
  }, []);


  return (
    <div className={styles.container}>
      <section className={styles.btns}>
        <p>Ordenar:</p>
        <button onClick={() => dispatch(orderPokemon("ASC"))}>
          ASCENDENTE
        </button>
        <button onClick={() => dispatch(orderPokemon("DESC"))}>
          DESCENDENTE
        </button>
        <button onClick={() => dispatch(orderPokemon("alphabetical"))}>
          A-Z
        </button>
        <button onClick={() => dispatch(orderPokemon("attack"))}>
          PODER DE ATAQUE
        </button>
        <button onClick={() => dispatch(filterPokemon("API"))}>
          API
        </button>
        <button onClick={() => dispatch(filterPokemon("DB"))}>
          DB
        </button>
        <label>Tipo: </label>
        <select onChange={(e)=> setTypeState(e.target.value)}>
          {pokemonTypes.map(el => {
          return <option key={el.id} value={el.name}>{el.name}</option>
          })}
        </select>
        <button onClick={() => dispatch(typePokemon(typeState))}>
          Filter
        </button>
      </section>
      <CardsContainer pokemons={pokemons}/>
      <CardsContainer pokemons={pokemonsFilter}/>
      <CardsContainer pokemons={typesData}/>
    </div>
  );
};

export default Home;
