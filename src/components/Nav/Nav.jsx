import React from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/log.png"
import styles from './nav.module.css'

const Nav = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
        <div>
          <img src={logo} alt="Logo de la página" />
          <button className={styles.btnView} onClick={() => navigate("/home")}> HOME </button>
          <button className={styles.btnView}  onClick={() => navigate("/create")}> AGREGAR POKEMON </button>
        </div>

        <div>
          <SearchBar />
        </div>
 
    </div>
  );
};

export default Nav;
