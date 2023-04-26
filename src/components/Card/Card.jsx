import React from 'react';


const Card = ({name, image, type}) => {
    return (
        <div>
            <h1>Nombre: {name} </h1>
            <img src={image} alt="Avatar del pokemón" />
            <p>Tipo: {type} </p>
        </div>
    );
}

export default Card;
