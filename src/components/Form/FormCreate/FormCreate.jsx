import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { postPokemon } from "../../../service/axiosService";
import styles from "./formCreate.module.css";
import Card from "../../Card/Card";

const FormCreate = () => {
  let detail = true;

  const navigate = useNavigate();
  const { pokemonTypes } = useSelector((state) => state);

  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [route, setRoute] = useState(0);
  const [typeSelect, setTypeSelect] = useState([]);
  const [form, setForm] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: []
  });

  const changeHandler = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    validate({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
  };

  const validate = (form) => {
  };
  
  const handleOnCheckbox = (e) => {
    const {value, checked} =  e.target;
    if(checked){
      setTypeSelect([...typeSelect, value])
      setForm({ ...form, types:[...typeSelect, value] })
    } else{
      setTypeSelect(typeSelect.filter(el => el !==value))
      setForm({ ...form, types: typeSelect.filter(el => el !==value)})
    }
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    postPokemon(form)
      .then((res) => {
        if (res.status === 201) {
          setSuccess(true);
          setRoute(res.data.id);
        }
      })
      .catch(() => {
        setFailed(true);
      });
  };

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
        </div>

        <div>
          <label>Ataque: </label>
          <input
            type="number"
            value={form.attack}
            onChange={changeHandler}
            name="attack"
          />
        </div>

        <div>
          <label>Defensa: </label>
          <input
            type="number"
            value={form.defense}
            onChange={changeHandler}
            name="defense"
          />
        </div>

        <div>
          <label>Velocidad: </label>
          <input
            type="number"
            value={form.speed}
            onChange={changeHandler}
            name="speed"
          />
        </div>

        <div>
          <label>Altura: </label>
          <input
            type="number"
            value={form.height}
            onChange={changeHandler}
            name="height"
          />
        </div>

        <div>
          <label>Peso: </label>
          <input
            type="number"
            value={form.weight}
            onChange={changeHandler}
            name="weight"
          />
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
        </div>

        <button type="submit">Enviar</button>
      </form>

      <div className={styles.cardContainer}>
        <Card
          id={1}
          name={form.name}
          image={form.image}
          hp={form.hp}
          attack={form.attack}
          defense={form.defense}
          speed={form.speed}
          height={form.height}
          weight={form.weight}
          types={form.types}
          detail={detail}
        />
        <div>
          {success
            ? `Se creo exitosamente el pokemon ${form.name}` && (
                <button onClick={() => navigate(`/pokemon/${route}`)}>
                  Visitar Nuevo Pokemon
                </button>
              )
            : null}

          {failed &&
            `Intentalo nuevamente. El pokemón ${form.name} no fue creado`}
        </div>
      </div>
    </div>
  );
};

export default FormCreate;
