import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { postPokemon } from "../../service/axiosService";
import { validation } from '../../models/validation'
import { getTypes } from "../../redux/actions";
import Card from '../../components/Card/Card'
import FormCreate from "../../components/Form/FormCreate/FormCreate";
import styles from "./create.module.css";

const Create = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, []);

  let detail = true;

  // const navigate = useNavigate();
  

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
    setErrors(validation({ ...form, [property]: value }));
    setForm({ ...form, [property]: value });
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
       {/* <button onClick={() => navigate(-1)}>Volver</button>
      <p>Crea tu pokemón</p> */}
      <div className={styles.formContainer}>
      <FormCreate 
      form={form}
      errors={errors}
      submitHandler={submitHandler} 
      changeHandler={changeHandler} 
      handleOnCheckbox={handleOnCheckbox}
      /> 
      </div>
      
      
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

export default Create;
