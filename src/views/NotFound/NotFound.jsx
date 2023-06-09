import React from 'react';
import { useLocation } from "react-router-dom";

import styles from './NotFound.module.css';
import image from '../../assets/interno.gif'

const NotFound = () => {

  const location = useLocation(); 

  return (
    <div className={styles.container}>
      <h1>404 - Página no encontrada</h1>
      <p>La ruta {`http://localhost:3000${location.pathname}`} no existe</p>
      <img src={image} alt='Imagen de Pikachu' />
    </div>
  );
};

export default NotFound;
