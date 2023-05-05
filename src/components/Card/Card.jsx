import React from "react";
import { Link } from "react-router-dom";

import styles from "./card.module.css";

const Card = ({
  id,
  name,
  image,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  Types,
  types,
  detail,
  created,
}) => {
  let arrType = [];
  if (types && !Types) {
    arrType = typeof types === "string" ? types.split(",") : [];
  }
  if (Types) {
    Types?.map((type) => arrType.push(type.name));
  }

  return (
    <div className={styles.container} key={id}>
      {!created && (
        <div className={styles.idContainer}>
          {detail && <h3 className={styles.id}>{id}</h3>}
        </div>
      )}

      <div className={styles.basicContainer}>
        {image && (
          <Link to={`/pokemon/${id}`}>
            <img
              src={image}
              alt="Avatar del pokemón"
              className={styles.image}
            />
          </Link>
        )}
        <div className={styles.basicTwo}>
          <h3 className={styles.name}>{name} </h3>
          <div className={styles.typesContainer}>
            {arrType.map((el, i) => {
              return <p key={i}>Tipo: {el}</p>;
            })}
          </div>
        </div>
      </div>

      {detail && (
        <div className={styles.detailContainer}>
          <p className={styles.hp}>Vida: {hp} </p>
          <p className={styles.attack}>Ataque: {attack} </p>
          <p className={styles.defense}>Defensa: {defense} </p>
          <p className={styles.speed}>Velocidad: {speed} </p>
          <p className={styles.height}>Altura: {height} </p>
          <p className={styles.weight}>Peso: {weight} </p>
        </div>
      )}
    </div>
  );
};

export default Card;
