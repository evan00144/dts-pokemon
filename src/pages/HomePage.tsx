import { useState } from "react";
import FilterPokemon from "../components/FilterPokemon";
import PokemonList from "../components/PokemonList";

export default function HomePage() {
  const [filterType, setFilterType] = useState<string>("");

  return (
    <>
      <div className="fieldbg">
        <img
          src="/landscape.jpg"
          className=" w-full h-full z-[-1] top-0 left-0  absolute"
          alt=""
        />
        <div className="container  p-5 mx-auto flex flex-col h-full">
          <h1 className="text-4xl text-white mb-2 font-bold">Pokedex</h1>
          <FilterPokemon
            setFilterType={setFilterType}
            filterType={filterType}
          />
          <PokemonList type={filterType} />
        </div>
      </div>
    </>
  );
}
