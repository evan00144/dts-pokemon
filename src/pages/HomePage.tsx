import { useState } from "react";
import FilterPokemon from "../components/FilterPokemon";
import PokemonList from "../components/PokemonList";

export default function HomePage() {

  const [filterType,setFilterType]=useState<string>("")
  
  return (
    <>
      <h1 className="text-4xl text-white mb-2 font-bold">Pokedex</h1>
      <FilterPokemon setFilterType={setFilterType} filterType={filterType} />
      <PokemonList type={filterType} />
    </>
  );
}
