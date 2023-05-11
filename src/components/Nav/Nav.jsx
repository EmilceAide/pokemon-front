import React from "react";
import { useNavigate, Link } from "react-router-dom";

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
        <Link to='/'>
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
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
