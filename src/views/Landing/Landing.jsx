import React from "react";
import styles from "./landing.module.css";

const Landing = () => {
  return (
    <>
      <div className={styles.page}>
        {/**Main Content */}
        <section className={styles.container}>
          <div className={styles.navBar}>
            <div className={styles.navBar_content}>
              <img src="" alt="" />
              <ul>
                <li>
                  <a href="/">Crear</a>
                </li>
              </ul>
            </div>
          </div>

          <section className={styles.main_content}>
            <p>Hola 1</p>
            <h1>Hola 2</h1>
            <p>Hola 3</p>
          </section>

          <section className={styles.side_content}>
            <div></div>
            <p>Pokemon</p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/25.png" alt="imagen de pikachu" />
          </section>

          <section className={styles.footer}>
            <div>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/4.png" alt="" />
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/9.png" alt="" />
            </div>
            <div>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/38.png" alt="" />
            </div>
          </section>
        </section>
        {/**Loader */}
        <section className={styles.loader}>
          <div></div>
          <div></div>
          <div></div>
        </section>
        {/**Modal */}
        <section></section>

      </div>
    </>
  );
};

export default Landing;
