import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import styles from './nav.module.css'

const Nav = () => {
  return (
    <div className={styles.container}>
   
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
