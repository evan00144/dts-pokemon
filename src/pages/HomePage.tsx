import React, { useCallback, useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import FilterPokemon from "../components/FilterPokemon";
import PokemonList from "../components/PokemonList";

export default function HomePage() {
  return (
    <>
      <h1 className="text-4xl font-bold">Pokedex</h1>
      <FilterPokemon />
     <PokemonList/>
    </>
  );
}
