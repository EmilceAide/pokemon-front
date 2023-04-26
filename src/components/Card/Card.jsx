import React from 'react';


const Card = ({id, name, image, hp, attack, defense, speed, height, weight, types, detail}) => {

    return (
        <div>
             {detail && (
            <h3>{id}</h3>
            )}
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
        </div>
    );
}

export default Card;
