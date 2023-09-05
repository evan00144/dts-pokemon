import React, { useState, useCallback, useEffect } from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<any>([]);
  const fetchPokemon = useCallback(async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await res.json();
      const pokemonPromises = data?.results?.map((e: any) => {
        return fetchPokemonDetail(e?.url);
      });

      const pokemonData = await Promise.all(pokemonPromises);

      setPokemons(pokemonData);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const fetchPokemonDetail = async (url: string) => {
    let data;
    try {
      const res = await fetch(url);
      data = await res.json();
    } catch (e) {
      console.log(e);
    } finally {
      return data;
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  return (
    <div className="grid grid-cols-5 gap-4">
      {pokemons?.map((e: any, index: number) => (
        <React.Fragment key={index}>
          <PokemonCard
            image={e?.sprites?.front_default}
            number={e?.id}
            name={e?.name}
            type={e?.types}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
