import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getPokemons } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div>
      <SearchBar />
      <h1>Home</h1>
      <CardsContainer />
    </div>
  );
};

export default Home;
