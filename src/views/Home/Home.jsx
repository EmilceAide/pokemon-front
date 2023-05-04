import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { getPokemons, orderPokemon, filterPokemon, typePokemon, getTypes} from "../../redux/actions";
import styles from './home.module.css'

const Home = () => {

  const dispatch = useDispatch();
  const { pokemons, pokemonTypes, pokemonsFilter, typesData } = useSelector((state) => state);
  const [typeState, setTypeState] = useState('');
  const [dataPokemonFilter, setDataPokemonFilter] = useState(false);
  const [dataPokemonTypes, setDataPokemonTypes] = useState(false);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  useEffect(() => {
    dispatch(getTypes());
  }, []);
   
  const changeDataFilter = (option) => {
    setDataPokemonFilter(true)
    dispatch(filterPokemon(option))
    console.log('info', dataPokemonFilter)
  }
 
  const changeDataTypes = (typeState) => {
    setDataPokemonTypes(true)
    dispatch(typePokemon(typeState))
    console.log('info', dataPokemonTypes)
  }

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
        <button onClick={() =>changeDataFilter("API")}>
          API
        </button>
        <button onClick={() =>changeDataFilter("DB")}>
          DB
        </button>
        <select onChange={(e)=> setTypeState(e.target.value)}>
        <option>Tipo: </option>
          {pokemonTypes.map(el => {
          return <option key={el.id} value={el.name}>{el.name}</option>
          })}
        </select>
        <button onClick={() => changeDataTypes(typeState)}>
          Filter
        </button>
      </section>
      {!dataPokemonFilter && !dataPokemonTypes  &&(
        <CardsContainer pokemons={pokemons}/>
      )}
      {dataPokemonFilter && (
        <CardsContainer pokemons={pokemonsFilter}/>
      )}
      {dataPokemonTypes && (
      <CardsContainer pokemons={typesData}/>
      )}
      <section className={styles.loader}>
          <div></div>
          <div></div>
          <div></div>
        </section>
    </div>
  );
};

export default Home;
