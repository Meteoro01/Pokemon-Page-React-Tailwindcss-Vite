import React from "react";
import bug from "../../assets/types/bug.svg";
import dark from "../../assets/types/dark.svg";
import dragon from "../../assets/types/dragon.svg";
import electric from "../../assets/types/electric.svg";
import fairy from "../../assets/types/fairy.svg";
import fighting from "../../assets/types/fighting.svg";
import fire from "../../assets/types/fire.svg";
import flying from "../../assets/types/flying.svg";
import ghost from "../../assets/types/ghost.svg";
import grass from "../../assets/types/grass.svg";
import ground from "../../assets/types/ground.svg";
import ice from "../../assets/types/ice.svg";
import normal from "../../assets/types/normal.svg";
import poison from "../../assets/types/poison.svg";
import psychic from "../../assets/types/psychic.svg";
import rock from "../../assets/types/rock.svg";
import steel from "../../assets/types/steel.svg";
import water from "../../assets/types/water.svg";
import { TypesPokemonList } from "../../helpers/TypesPokemonList";

const CategoryBtn = ({ CatPoke, SearchType, setType }) => {
  return (
    <ul className="relative  flex w-full flex-wrap justify-center gap-2 ">
      {TypesPokemonList.map((item) => (
        <li className=" ">
          <button
            className=""
            onClick={() => {
              SearchType(item.name);
              setType(item.name);
            }}
          >
            <img
              src={item.img}
              className="w-10 duration-300 ease-in-out hover:scale-125"
              alt=""
            />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryBtn;
