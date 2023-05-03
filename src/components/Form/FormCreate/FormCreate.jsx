import React from "react";
import { useSelector } from "react-redux";

import styles from "./formCreate.module.css";

const FormCreate = ({
  form,
  errors,
  submitHandler,
  changeHandler,
  handleOnCheckbox,
}) => {
  const { pokemonTypes } = useSelector((state) => state);

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <section className={styles.section_one}>
          <div className={styles.typesContainer}>
            <label>Tipo: </label>
            <div>
              {pokemonTypes?.map((type) => {
                return (
                  <div className={styles.checkbox} key={type.id}>
                    <label for={type.name}>
                      <input
                        type="checkbox"
                        name="types"
                        value={type.name}
                        id={type.name}
                        onChange={handleOnCheckbox}
                      />
                      {type.name}
                    </label>
                  </div>
                );
              })}
            </div>
            <p>
              {errors.types && <p style={{ color: "red" }}>{errors.types}</p>}
            </p>
          </div>
        </section>

        <section className={styles.section_two}>
          <div>
            <label>Nombre: </label>
            <input
              type="text"
              value={form.name}
              onChange={changeHandler}
              name="name"
            />
            <p>
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </p>
          </div>

          <div>
            <label>Imagen: </label>
            <input
              type="text"
              value={form.image}
              onChange={changeHandler}
              name="image"
              placeholder="https://imagenpokemon.com/image.pg"
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
              {errors.hp === 0
                ? null
                : errors.hp && <p style={{ color: "red" }}>{errors.hp}</p>}
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
              {errors.attack === 0
                ? null
                : errors.attack && (
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
              {errors.defense === 0
                ? null
                : errors.defense && (
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
              {errors.speed === 0
                ? null
                : errors.speed && (
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
              {errors.height === 0
                ? null
                : errors.height && (
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
              {errors.weight === 0
                ? null
                : errors.weight && (
                    <p style={{ color: "red" }}>{errors.weight}</p>
                  )}
            </p>
          </div>
          <section className={styles.section_tree}>
            <button type="submit">Enviar</button>
          </section>
        </section>
      </form>
    </div>
  );
};

export default FormCreate;
