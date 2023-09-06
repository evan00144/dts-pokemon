import React, { useState } from "react";
import StarIcon from "../icons/StarIcon";
import { Link } from "react-router-dom";

export default function FavoritePage() {
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favorite") as string)
  );

  const addToFavorite = (fav: any) => {
    const favorite = localStorage.getItem("favorite");
    if (!favorite) {
      const parse = JSON.stringify([fav]);
      setFavorite([fav]);
      localStorage.setItem("favorite", parse);
    } else {
      let arr: any[] = JSON.parse(favorite);
      const isFavorited = arr?.find((e: any) => e?.id === fav?.id);
      if (isFavorited) {
        setFavorite(arr?.filter((e: any) => e?.id !== fav?.id));
        localStorage.setItem(
          "favorite",
          JSON.stringify(arr?.filter((e: any) => e?.id !== fav?.id))
        );
      } else {
        arr.push(fav);
        setFavorite(arr);
        localStorage.setItem("favorite", JSON.stringify(arr));
      }
    }
  };

  return (
    <div
      style={{
        background: "#D2F1F9",
      }}
    >
      <div className="container px-12 py-5 mx-auto h-screen flex-col flex">
        <div className="flex  items-center">
          <h1 className="text-4xl  mb-2 font-bold me-auto">Pokédex</h1>
          <Link className="me-12 text-lg" to={"/"}>
            Home
          </Link>
          <Link className="text-lg" to={"/favorite"}>
            Favorite
          </Link>
        </div>{" "}
        <h1 className="text-xl mb-4">Favorite Pokemon</h1>
        <div className="h-full shadow-lg w-full bg-white rounded-[36px] overflow-auto p-6">
          <div className="grid grid-cols-6">
            {favorite?.map((e: any, index: any) => (
              <div key={index}>
                <img src={e?.sprites?.front_default} alt="" width={250} />
                <div className="flex items-center justify-center gap-2">
                  <h6 className="capitalize">{e?.name}</h6>
                  <div
                    className="cursor-pointer"
                    onClick={() => addToFavorite(e)}
                  >
                    <StarIcon checked={true} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
