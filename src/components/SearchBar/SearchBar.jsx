import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getPokemonName } from "../../redux/actions";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state) => state);

  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const onSearch = (name) => {
    dispatch(getPokemonName(name));
    navigate(`/detail/${name}`);
  };

  return (
    <div>
      <input onChange={handleChange} type="search" placeholder="search" />
      <button onClick={() => onSearch(name)}>Buscar</button>
    </div>
  );
};

export default SearchBar;
