import React, {useState} from "react";
import { useSelector } from "react-redux";

import { postPokemon } from "../../../service/axiosService"
import styles from "./formCreate.module.css";
import Card from "../../Card/Card";

const FormCreate = () => {

  let detail = true;
  const { pokemonTypes } = useSelector((state) => state);

  const [form, setForm] = useState({
      name: '',
      image: '', 
      hp: 0,
      attack: 0, 
      defense: 0, 
      speed: 0, 
      height: 0, 
      weight: 0, 
      types: ["normal", "grass"]
  });
const [errors, setErrors] = useState({
    name: '',
    image: '', 
    hp: 0,
    attack: 0, 
    defense: 0, 
    speed: 0, 
    height: 0, 
    weight: 0, 
    // types: []
});

  const changeHandler = (e) => {
   const property = e.target.name; 
   const value = e.target.value; 

   validate({...form, [property]: value})
   setForm({...form, [property]: value})
  };

  const validate = (form) => {
  {/**momentaneo */}
   let regex = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/gm;

    if (regex.test(form.hp) && form.hp !== undefined && form.hp !== '') {
      console.log('Es mayor a 0')
    } 

  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form)
    postPokemon(form)
    .then(res => console.log(res))
    .catch(err => console.log(err))

  }

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <div>
          <label>Nombre: </label>
          <input type="text" value={form.name} onChange={changeHandler} name="name" />
        </div>

        <div>
          <label>Imagen: </label>
          <input type="text" value={form.image} onChange={changeHandler} name="image" />
        </div>

        <div>
          <label>hp: </label>
          <input type="number" value={form.hp} onChange={changeHandler} name="hp" />
          {/**momentaneo */}
          {errors.hp && <p>{errors.hp}</p>}
        </div>

        <div>
          <label>Ataque: </label>
          <input type="number" value={form.attack} onChange={changeHandler} name="attack"/>
        </div>

        <div>
          <label>Defensa: </label>
          <input type="number" value={form.defense} onChange={changeHandler} name="defense"/>
        </div>

        <div>
          <label>Velocidad: </label>
          <input type="number" value={form.speed} onChange={changeHandler} name="speed"/>
        </div>

        <div>
          <label>Altura: </label>
          <input type="number" value={form.height} onChange={changeHandler} name="height"/>
        </div>

        <div>
          <label>Peso: </label>
          <input type="number" value={form.weight} onChange={changeHandler} name="weight" />
        </div>

        {/* <div className={styles.typesContainer}>
        <label>Tipo: </label>
          {pokemonTypes.map((type) => {
            return (
              <div key={type.id}>
                <h5>{type.name}</h5>
              </div>
            );
          })}
        </div> */}

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
      </div>

    </div>
  );
};

export default FormCreate;
