import React, { useState, useCallback, useEffect } from "react";
import PokemonCard from "./PokemonCard";

interface iPokemonList {
  type?: string;
}

export default function PokemonList({ type = "" }: iPokemonList) {
  const [pokemons, setPokemons] = useState<any>([]);
  const fetchPokemon = useCallback(async () => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/${
          type === "" ? "pokemon" : `type/${type}/?limit=20`
        }`
      );
      const data = await res.json();
      const pokemonPromises =
        type === ""
          ? data?.results?.map((e: any) => {
              return fetchPokemonDetail(e?.url);
            })
          : data?.pokemon?.map((e: any) => {
              return fetchPokemonDetail(e?.pokemon?.url);
            });

      const pokemonData = await Promise.all(pokemonPromises);
      console.log(pokemonData);
      setPokemons(pokemonData);
    } catch (e) {
      console.log(e);
    }
  }, [type]);

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
    <div style={{maxHeight:'80vh'}} className="grid pt-24  grid-cols-4 gap-6 gap-y-32 overflow-auto">
      {pokemons?.map((e: any, index: number) => (
        <React.Fragment key={index}>
          {e?.sprites?.front_default && (
            <PokemonCard
              image={e?.sprites?.front_default}
              number={e?.id}
              name={e?.name}
              type={e?.types}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
