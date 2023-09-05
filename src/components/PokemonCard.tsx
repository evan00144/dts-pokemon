import { Link } from "react-router-dom";

export default function PokemonCard({ image, number, name, type }: any) {
  return (
    <Link to={`/detail/${number}`} className="h-100 flex">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            {/* Filled Star */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              />
            </svg> */}
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
    </Link>
  );
}
