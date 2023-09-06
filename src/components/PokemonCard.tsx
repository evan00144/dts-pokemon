import { useNavigate } from "react-router-dom";
import StarIcon from "../icons/StarIcon";

export default function PokemonCard({
  image,
  number,
  name,
  type,
  favorite,
  addToFavorite,
}: any) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/detail/${number}`)} className="h-100 flex">
      <div className="bg-white shadow-lg rounded-xl relative h-full w-full">
        <img
          src={image}
          alt={name}
          width={180}
          className="object-contain absolute top-[-70%] left-[50%] translate-x-[-50%]"
        />
        <div className="px-6 pb-4 pt-12 flex h-full flex-col">
          <div className="text-gray-500 font-bold text-sm  mb-2">#{number}</div>
          <div className="flex items-center mb-2">
            <div className="text-xl w-full  capitalize justify-between">
              {name}
            </div>
            <div className="relative z-[100]" onClick={addToFavorite}>
              <StarIcon checked={favorite} />
            </div>
          </div>{" "}
          <div className="text-gray-700 text-base flex gap-2 mt-auto">
            {type?.map((e: any, index: number) => (
              <span
                key={index}
                className={`inline-block px-4 py-[0.1rem] text-xs  rounded-full bg-gray-400 capitalize text-white text-sm`}
              >
                {e?.type?.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
