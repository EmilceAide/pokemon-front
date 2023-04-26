import React from 'react';

const Detail = ({ name, image, hp, attack, defense, speed, height,
weight, types }) => {
    return (
        <div>
            <h3>Nombre: {name} </h3>
            <img src={image} alt="Avatar del pokemón" />
            <p>Vida: {hp} </p>
            <p>Ataque: {attack} </p>
            <p>Defensa: {defense} </p>
            <p>Velocidad: {speed} </p>
            <p>Altura: {height} </p>
            <p>Peso: {weight} </p>
            <p>Tipo: {types} </p>
        </div>
    );
}

export default Detail;
