import React from "react";
import { Link } from "react-router-dom";

import styles from "./card.module.css";

const Card = ({ id, name, image, hp, attack, defense, speed, height, weight, Types, types, detail}) => {

  let arrType = [];
  if (types && !Types) {
    arrType = typeof types === 'string' ? types.split(',') : [];
  }
  if (Types) {
    Types?.map((type) => arrType.push(type.name));
  }

  return (
    <div className={styles.container}>
      {detail && <h3 className={styles.id}>Id: {id}</h3>}
      <img src={image} alt="Avatar del pokemón" className={styles.image} />
      <h3 className={styles.name}>{name} </h3>
      {detail && (
        <div>
          <p className={styles.hp}>Vida: {hp} </p>
          <p className={styles.attack}>Ataque: {attack} </p>
          <p className={styles.defense}>Defensa: {defense} </p>
          <p className={styles.speed}>Velocidad: {speed} </p>
          <p className={styles.height}>Altura: {height} </p>
          <p className={styles.weight}>Peso: {weight} </p>
        </div>
      )}
      {arrType.map((el) => {
        return (<p>Tipo: {el}</p>)
      })}
      {!detail && (
        <Link to={`/pokemon/${id}`}>
          <button>{` Ver más + `} </button>
        </Link>
      )}
    </div>
  );
};

export default Card;
