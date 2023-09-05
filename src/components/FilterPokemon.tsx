import { useEffect, useState } from "react";

export default function FilterPokemon() {
  const [types, setTypes] = useState<any>([]);
  const fetchType = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/type");
      const data = await res.json();

      setTypes(data?.results);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(types)

  useEffect(() => {
    fetchType();
  }, []);
  return <>
    <div className="flex items-center gap-2">
        Type:
        <select name="type" defaultValue={''}>
            <option value="">All</option>
            {types?.map((e:any,index:number)=>(
                <option value={e?.name} key={index}>{e?.name.charAt(0).toUpperCase() + e?.name.slice(1)}</option>
            ))}
        </select>
    </div>
  </>;
}
