import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

const Nav = () => {
  return (
    <div>
   
        <Link to="/home">
          <button> HOME </button>
        </Link>

        <Link to="/create">
          <button> AGREGAR POKEMON </button>
        </Link>

        <div>
          <SearchBar />
        </div>
 
    </div>
  );
};

export default Nav;
