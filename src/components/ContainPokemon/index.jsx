import React, { useEffect, useState } from "react";
import CardPokemon from "../CardPokemon";

const ContainPokemon = ({ pokemonList, Search }) => {
  const [Pokemons, setPokemons] = useState([]);
  useEffect(() => {
    setPokemons(pokemonList);
  }, [pokemonList]);

  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:w-9/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2  gap-y-12 pt-20 pb-20">
      {Pokemons.map((pokemon) => (
        <CardPokemon id={pokemon.id} props={pokemon} Search={Search} />
      ))}
    </div>
  );
};

export default ContainPokemon;
