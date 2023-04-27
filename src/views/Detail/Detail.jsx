import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemon } from "../../redux/actions";
import Card from "../../components/Card/Card";

const Detail = () => {
  let detail = true;
  const { pokemonId } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemon());
  }, []);

  return (
    <div>
      {pokemonId.map((pokemon) => {
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
            detail={detail}
          />
        );
      })}
    </div>
  );
};

export default Detail;
