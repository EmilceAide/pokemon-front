import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./landing.module.css";
import logo from "../../assets/log.png";
import pikachu from "../../assets/pokachu-lo.png";
import cat from "../../assets/equipor.png";
import squar from "../../assets/squar.png";
import interno from "../../assets/Pokemon05-540x1024.png";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.page}>
        {/**Main Content */}
        <section className={styles.container}>
          <div className={styles.navBar}>
            <div className={styles.navBar_content}>
              <img src={logo} alt="logo" />
            </div>
          </div>

          <section className={styles.main_content}>
            <h1>¡Atrápalos Ya!</h1>
            <p>
              {" "}
              Para extender nuestro reinos hasta las estrellas. Ríndanse ahora o
              preparense a luchar.
            </p>
            <button onClick={() => navigate(`/home`)}>Ingresar</button>
          </section>

          <section className={styles.side_content}>
            <div></div>
            <p>Pokemón</p>
            <img src={interno} alt="Imagen de Pikachu" />
          </section>

          <section className={styles.footer}>
            <div className={styles.poke1}>
              <img src={pikachu} alt="Imagen de Pikachu" />
            </div>
            <div>
              <img className={styles.catStyle} src={cat} alt="Imagen de pokemón" />
            </div>
            <div>
              <img src={squar} alt="Imagen de pokemon" />
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Landing;
