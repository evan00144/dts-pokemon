import { Link } from "react-router-dom";

export default function PokemonCard({ image, number, name, type }: any) {
  return (
    <Link to={`/detail/${number}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-2">
          <img src={image} alt={name} className="w-full h-32 object-contain " />
        </div>

        <div className="px-6 py-4">
          <div className="text-gray-700 font-bold text-sm text-gray-400 mb-2">
            #{number}
          </div>
          <div className="text-xl mb-2 capitalize">{name}</div>
          <div className="text-gray-700 text-base flex gap-2">
            {type?.map((e: any, index: number) => (
              <span
                key={index}
                className={`inline-block px-2 py-1 rounded-full bg-gray-400 capitalize text-white text-sm`}
              >
                {e?.type?.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
