import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import styles from './nav.module.css'

const Nav = () => {
  return (
    <div className={styles.container}>
        <div>
        <Link to="/home">
          <button className={styles.btnView}> HOME </button>
        </Link>

        <Link to="/create">
          <button className={styles.btnView}> AGREGAR POKEMON </button>
        </Link>
        </div>

        <div>
          <SearchBar />
        </div>
 
    </div>
  );
};

export default Nav;
