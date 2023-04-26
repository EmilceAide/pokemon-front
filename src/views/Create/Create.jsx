import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getTypes } from "../../redux/actions";

const Create = () => {

    const { pokemonTypes } = useSelector((state) => state);
 
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getTypes());
    }, []);

    return (
        <div>
            <p>Formulario para crear pokemones</p>
            {pokemonTypes.map(type => {
                return (
                    <h5> Tipo: {type.name}</h5>
                )
            })}
        </div>
    );
}

export default Create;
