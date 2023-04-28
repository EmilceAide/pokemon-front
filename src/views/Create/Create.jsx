import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { getTypes } from "../../redux/actions";
import FormCreate from "../../components/Form/FormCreate/FormCreate";

const Create = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, []);


  return (
    <div>
       <button onClick={() => navigate(-1)}>Volver</button>
      <p>Crea tu pokemón</p>
      <FormCreate />  
    </div>
  );
};

export default Create;
