import React, { useState } from "react";
import file from "../../assets/icons/file.svg";
import search from "../../assets/icons/search.svg";
import Delete from "../../assets/icons/x.svg";
import CategoryBtn from "../CategoryBtn/Index";
import { Detec } from "../../utils/DetectOptions";
const Panel = ({ Search, SearchType, StPagination, ResetType }) => {
  const [Poke, setPoke] = useState("");
  const [Type, setType] = useState("");
  const handleSearch = () => {
    if (Poke === "") return;
    Search(Poke);
  };

  return (
    <div
      className="mx-auto flex w-10/12 flex-col justify-around pt-8 md:w-9/12 lg:flex-row"
      id="panel"
    >
      <div className="flex w-full flex-col md:py-4  lg:w-3/6 lg:py-7">
        <a className="text-1xl flex items-center gap-3 pb-2 pl-3 font-Nunito text-white">
          <img src={file} alt="" className="w-8" />
          Busqueda Por Tipo:
        </a>
        <div className="flex rounded-lg border border-gray-300 py-3">
          <div className="mx-2 flex items-center">
            <CategoryBtn SearchType={SearchType} setType={setType} />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col  py-4  lg:w-3/6 lg:py-8">
        <a className="text-1xl flex items-center gap-3 pb-2 pl-3 font-Nunito text-white">
          <img src={search} alt="" className="w-8" />
          Busqueda por Pokémon
        </a>
        <div className="mx-4 flex">
          <input
            value={Poke}
            onChange={(e) => setPoke(e.target.value)}
            type="search"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="!Yo te Escojo¡"
            className="w-10/12 rounded-l-lg border border-gray-300 bg-gray-900 bg-transparent py-3 pl-4 text-white   placeholder:text-white focus:outline-none"
          />
          <button
            type="button"
            className="w-2/12 rounded-r-lg border border-gray-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            onClick={() => handleSearch()}
          >
            <img src={search} className=" mx-auto w-9" />
          </button>
        </div>

        <div className="mx-4 flex  lg:h-full">
          {StPagination ? (
            <>
            <h2 className="text-2xl mr-3 font-bold text-white my-auto">Filtro: </h2>
              <button
                onClick={() => ResetType()}
                className={`my-3 flex items-center justify-center gap-2 rounded-xl px-3 py-3 md:py-3 lg:my-8 lg:py-0 xl:my-2 ${Detec(Type).bg} `}
              >
                <img src={Delete} className="w-8" />
                <h2 className="mr-1 text-center font-bold uppercase text-white">
                  {Type}
                </h2>
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Panel;
