import React from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/log.png";
import styles from "./nav.module.css";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav>
        <input type="checkbox" id="check" className={styles.check} />
        <label for="check" className={styles.checkbtn}>
          ≡
        </label>
      <section className={styles.sectionOne}>
        <a href="#" className={styles.logoEnlace}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </a>
      </section>
      
      <section className={styles.sectiontwo}>
        <ul>
          <li>
            <button
              className={styles.btnView}
              onClick={() => navigate("/home")}
            >
              {" "}
              HOME{" "}
            </button>
          </li>
          <li>
            <button
              className={styles.btnView}
              onClick={() => navigate("/create")}
            >
              {" "}
              AGREGAR POKEMON{" "}
            </button>
          </li>
          <div>
            <SearchBar />
          </div>
        </ul>
      </section>
    </nav>
  );
};

export default Nav;
