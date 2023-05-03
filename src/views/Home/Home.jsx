import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { getPokemons, orderPokemon, filterPokemon } from "../../redux/actions";
import styles from './home.module.css'

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);


  return (
    <div>
      <button onClick={()=>  dispatch(orderPokemon('ASC'))}>ASC</button>
      <button onClick={()=>  dispatch(orderPokemon('DESC'))}>DESC</button>
      <button onClick={()=>  dispatch(orderPokemon('alphabetical'))}>ALFA</button>
      <button onClick={()=>  dispatch(orderPokemon('attack'))}>ATTACK</button>
      <button onClick={()=>  dispatch(filterPokemon('API'))}>API</button>
      <button onClick={()=>  dispatch(filterPokemon('DB'))}>DB</button>
      <CardsContainer/>
    </div>
  );
};

export default Home;
