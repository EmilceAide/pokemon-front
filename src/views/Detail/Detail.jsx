import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getPokemon } from "../../redux/actions";
import Card from "../../components/Card/Card";

const Detail = () => {
  let detail = true;
  const { id } = useParams();
  
  const { pokemonId, pokemonName } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getPokemon(id));
    },[id, pokemonId]);
   
    console.log('PokemonId', pokemonId)
    console.log('PokemonName Types', pokemonName?.map(el => console.log('soy el elemento',el?.Types?.map(element=>{
      console.log('soy typeName', element.name)
    }))))

  return (
    <div>
      {isNaN(id)  && (
        pokemonName?.map((pokemon) => {
          return (
             <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name} 
            image={pokemon.image} 
            hp={pokemon.hp} 
            attack={pokemon.attack}
            defense={pokemon.defense} 
            speed={pokemon.speed} 
            height={pokemon.height} 
            weight={pokemon.weight} 
            types={pokemon.types}
            Types={pokemon?.Types}
            detail={detail}
             />
          );
        })
      )}
      {id && (
          pokemonId?.map((pokemon) => {
            return (
               <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name} 
              image={pokemon.image} 
              hp={pokemon.hp} 
              attack={pokemon.attack}
              defense={pokemon.defense} 
              speed={pokemon.speed} 
              height={pokemon.height} 
              weight={pokemon.weight} 
              types={pokemon.types}
              Types={pokemon?.Types}
              detail={detail}
               />
            );
          })
      )}
    
    </div>
  );
};

export default Detail;
