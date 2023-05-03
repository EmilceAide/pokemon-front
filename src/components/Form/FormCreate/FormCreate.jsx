import React from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import { postPokemon } from "../../../service/axiosService";
// import { validation } from '../../../models/validation'
import styles from "./formCreate.module.css";
// import Card from "../../Card/Card";

const FormCreate = ({form, errors, submitHandler, changeHandler, handleOnCheckbox}) => {

  const { pokemonTypes } = useSelector((state) => state);
  
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            value={form.name}
            onChange={changeHandler}
            name="name"
          />
            <p>
            {errors.name && (
              <p style={{ color: "red" }}>{errors.name}</p>
            )}
          </p>

        </div>

        <div>
          <label>Imagen: </label>
          <input
            type="text"
            value={form.image}
            onChange={changeHandler}
            name="image"
          />
        </div>

        <div>
          <label>hp: </label>
          <input
            type="number"
            value={form.hp}
            onChange={changeHandler}
            name="hp"
          />
          <p>
            {errors.hp && (
              <p style={{ color: "red" }}>{errors.hp}</p>
            )}
          </p>
        </div>

        <div>
          <label>Ataque: </label>
          <input
            type="number"
            value={form.attack}
            onChange={changeHandler}
            name="attack"
          />
           <p>
            {errors.attack && (
              <p style={{ color: "red" }}>{errors.attack}</p>
            )}
          </p>
        </div>

        <div>
          <label>Defensa: </label>
          <input
            type="number"
            value={form.defense}
            onChange={changeHandler}
            name="defense"
          />
           <p>
            {errors.defense && (
              <p style={{ color: "red" }}>{errors.defense}</p>
            )}
          </p>
        </div>

        <div>
          <label>Velocidad: </label>
          <input
            type="number"
            value={form.speed}
            onChange={changeHandler}
            name="speed"
          />
           <p>
            {errors.speed && (
              <p style={{ color: "red" }}>{errors.speed}</p>
            )}
          </p>
        </div>

        <div>
          <label>Altura: </label>
          <input
            type="number"
            value={form.height}
            onChange={changeHandler}
            name="height"
          />
           <p>
            {errors.height && (
              <p style={{ color: "red" }}>{errors.height}</p>
            )}
          </p>
        </div>

        <div>
          <label>Peso: </label>
          <input
            type="number"
            value={form.weight}
            onChange={changeHandler}
            name="weight"
          />
           <p>
            {errors.weight && (
              <p style={{ color: "red" }}>{errors.weight}</p>
            )}
          </p>
        </div>

        <div className={styles.typesContainer}>
          <label>Tipo: </label>
          {pokemonTypes?.map((type) => {
            return (
              <div className={styles.checkbox} key={type.id}>
                <input
                  type="checkbox"
                  name="types"
                  value={type.name}
                  id={type.name}
                  onChange={handleOnCheckbox}
                />
                <label for={type.name}>{type.name}</label>
              </div>
            );
          })}
           <p>
            {errors.types && (
              <p style={{ color: "red" }}>{errors.types}</p>
            )}
          </p>
        </div>

        <button type="submit">Enviar</button>
      </form>

    </div>
  );
};

export default FormCreate;
