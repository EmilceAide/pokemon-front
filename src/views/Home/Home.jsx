import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { getPokemons } from "../../redux/actions";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);


  return (
    <div>
      <CardsContainer/>
    </div>
  );
};

export default Home;
