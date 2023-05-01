import React from 'react';
import { Link } from "react-router-dom";

import styles from './card.module.css'

const Card = ({id, name, image, hp, attack, defense, speed, height, weight, types, detail, formulario}) => {
    if(formulario){
     const    {id,
     name,
     image,
     hp,
     attack,
     defense,
     speed,
     height,
     weight,
     types
    } = formulario;
}

    return (
        <div>
            <h3>Id: {id}</h3>
            <h3>Nombre: {name} </h3>
            <img src={image} alt="Avatar del pokemón" />
            {detail && (
              <div>
              <p>Vida: {hp} </p>
              <p>Ataque: {attack} </p>
              <p>Defensa: {defense} </p>
              <p>Velocidad: {speed} </p>
              <p>Altura: {height} </p>
              <p>Peso: {weight} </p>
              </div>
          )}
            <p>Tipo: {types} </p>
            {!detail && (
            <Link to={`/pokemon/${id}`}>
            <button >{` Ver más + `} </button>
            </Link>
            )}
        </div>
    );
}

export default Card;
