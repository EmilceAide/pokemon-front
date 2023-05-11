import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { postPokemon } from "../../service/axiosService";
import { validation } from "../../models/validation";
import { getTypes } from "../../redux/actions";
import FormCreate from "../../components/Form/FormCreate/FormCreate";
import character from "../../assets/Pokemon05-540x1024.png";
import pika from "../../assets/d0a6b-pikachu-ball-png.webp";
import styles from "./create.module.css";

const Create = () => {
  const dispatch = useDispatch();
  const initialState = {
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  }

  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [typeSelect, setTypeSelect] = useState([]);
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: "",
  });

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  const changeHandler = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setErrors(validation({ ...form, [property]: value }));
    setForm({ ...form, [property]: value });
  };

  const handleOnCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTypeSelect([...typeSelect, value]);
      setForm({ ...form, types: [...typeSelect, value] });
    } else {
      setTypeSelect(typeSelect.filter((el) => el !== value));
      setForm({ ...form, types: typeSelect.filter((el) => el !== value) });
    }
    if(form.types.length !== 1){
      console.log(form.types)
     errors.types='Tiene que selecionar dos tipos'
    }else{
      delete errors.types
    }
  };
console.log(errors, 'errors')
  const submitHandler = (e) => {
    e.preventDefault();

    if(Object.entries(errors).length === 0){ 
      postPokemon(form)
        .then((res) => {
          if (res.status === 201) {
            setSuccess(true);
            setFailed(false);
            setForm(initialState)
          }
        })
        .catch(() => {
          setFailed(true);
        });
    }else{
      setFailed(true);
      setSuccess(false);
    }
    }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.createContainer}>
          <img
            className={styles.character}
            src={character}
            alt="Personaje de Pokemon"
          />
          <section className={styles.formContainer}>
            <h2>¡Agrega tu Pokemón!</h2>
            <FormCreate
              form={form}
              errors={errors}
              submitHandler={submitHandler}
              changeHandler={changeHandler}
              handleOnCheckbox={handleOnCheckbox}
            />
          </section>

          <section className={styles.cardContainer}>
            <div className={styles.detail}>
              <h3>Nombre: {form.name}</h3>
              {form.image && <img src={form.image} alt="Imagen de pokemón" />}
              <p>Vida: {form.hp}</p>
              <p>Ataque: {form.attack}</p>
              <p>Defensa: {form.defense}</p>
              <p>Velocidad: {form.speed}</p>
              <p>Altura: {form.height}</p>
              <p>Peso: {form.weight}</p>
            </div>

            <div>
              {success 
                && <p className={styles.textSuccess}>{`Se creo exitosamente` }</p> }

              {failed && 
              <p className={styles.textFailed}>{`El Pokemón no fue creado. 
              (Compruebe que los datos sean correctos o que el pokemón no fue creado anteriormente)`}</p>
               }
            </div>

            <img
              className={styles.pikachu}
              src={pika}
              alt="Personaje de Pokemon"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Create;
