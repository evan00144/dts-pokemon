import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailPokemonPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<any>();
  const navigate = useNavigate()
  const fetchDetail = useCallback(async () => {
    try {
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      let data = await res.json();

      setPokemon((prev: any) => {
        return {
          ...data,
        };
      });
      let res2 = await fetch(`https://pokeapi.co/api/v2/characteristic/${id}`);
      let data2 = await res2.json();

      setPokemon((prev: any) => {
        return {
          ...prev,
          ...data2,
        };
      });
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail, id]);
  return (
    <div
      style={{
        background: "#D2F1F9",
      }}
    >
      <div className="container px-12 py-5 mx-auto h-screen flex-col flex">
        <h1 className="text-4xl mb-4 font-bold">Pokedex</h1>
          <div onClick={()=>navigate('/')} className="flex text-gray-400 items-center gap-[0.5rem] mb-3 select-none cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-[20px] h-[20px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            Back
          </div>
        <div className="h-full shadow-lg w-full bg-white rounded-[36px] overflow-auto p-6">

          <div className="flex items-center">
            <img src={pokemon?.sprites?.front_default} alt="" width={250} />
            <img
              src={pokemon?.sprites?.back_default}
              alt=""
              width={pokemon?.sprites?.back_default ? 150 : 0}
            />
            <img
              src={pokemon?.sprites?.front_shiny}
              alt=""
              width={pokemon?.sprites?.front_shiny ? 150 : 0}
            />
            <div className="ms-12">
              <h1 className="text-4xl capitalize mb-3 ">{pokemon?.name}</h1>
              <div className="mb-3">
                <div>Description:</div>
                {pokemon?.descriptions
                  ?.filter((e: any) => e?.language?.name === "en")
                  ?.map((e: any) => e?.description) || "-"}
              </div>
              <div>Type:</div>
              <div className="text-gray-700 text-base flex gap-2 mt-auto">
                {pokemon?.types?.map((e: any, index: number) => (
                  <span
                    key={index}
                    className={`inline-block px-4 py-[0.1rem] text-xs  rounded-full bg-gray-400 capitalize text-white text-sm`}
                  >
                    {e?.type?.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="self-start ms-auto pr-5 pt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
          </div>
          <h4 className="text-lg mb-2"> Stats:</h4>
          <div className="grid grid-cols-3 gap-4">
            {pokemon?.stats?.map((e: any, index: any) => (
              <div className="capitalize text stats-card">
                <span className="stats">{e?.stat?.name}</span>
                <div className="flex items-center gap-1">
                  <div className="bar">
                    <div
                      className="absolute left-0 top-0 h-full"
                      style={{
                        width: `${(e?.base_stat / 200) * 15}rem`,
                        background: "#9BCC50",
                      }}
                    ></div>
                  </div>
                  {e?.base_stat}/200
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
