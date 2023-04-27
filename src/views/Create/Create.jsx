import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTypes } from "../../redux/actions";

const Create = () => {
  const { pokemonTypes } = useSelector((state) => state);

  const form ={

  }

  const changeHandler = () =>{

  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, []);

  return (
    <div>
      <p>Formulario para crear pokemones</p>
      <form>
        <div>
          <label>Nombre: </label>
          <input type="text" value={form.name} onChange={changeHandler} />
        </div>

        <div>
          <label>Imagen: </label>
          <input type="text" value={form.image} onChange={changeHandler} />
        </div>

        <div>
          <label>hp: </label>
          <input type="number"  value={form.hp} onChange={changeHandler} />
        </div>

        <div>
          <label>Ataque: </label>
          <input type="number"  value={form.attack} onChange={changeHandler} />
        </div>

        <div>
          <label>Defensa: </label>
          <input type="number"  value={form.defense} onChange={changeHandler} />
        </div>

        <div>
          <label>Velocidad: </label>
          <input type="number"  value={form.speed} onChange={changeHandler} />
        </div>

        <div>
          <label>Altura: </label>
          <input type="number"  value={form.height} onChange={changeHandler} />
        </div>

        <div>
          <label>Peso: </label>
          <input type="number"  value={form.weigth} onChange={changeHandler} />
        </div>


        <div>
          {pokemonTypes.map((type) => {
            return (
                <div key={type.id}>
                    <h5>{type.name}</h5>
                </div>
            )
          })}
        </div>
      </form>
    </div>
  );
};

export default Create;
