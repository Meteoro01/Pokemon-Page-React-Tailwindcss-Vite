import React from "react";
import "./style.css";
import rayo from "../../assets/icons/rayo.svg";
import altura from "../../assets/icons/altura.svg";
import peso from "../../assets/icons/peso.svg";
import {Detec}from "../../utils/DetectOptions";

const CardPokemon = ({ props, id, Search }) => {
  const { name, sprites, types, height, weight } = props;
  const imgPok = sprites.other["official-artwork"].front_default;

  // * calculos de medidas y peso
  const kg = (e) => {
    return (e * 0.1).toFixed(1);
  };

  return (
    <div id="cardPoke" className="mb-16" key={id}>
      <div
        className={`relative mx-auto  flex flex-col rounded-3xl  bg-gradient-to-b from-black shadow-xl shadow-[rgba(175,209,212,0.76)] w-[90%] sm:w-[420px] md:w-10/12   ${Detec(types[0].type.name).bg} shadow-slate-400`}
      >
        <div className="flex justify-center">
          <img
            src={imgPok}
            className="-mt-20 w-52 saturate-200 md:w-40 lg:w-52 "
          />
        </div>
        <h1 className="text-center font-Nunito text-2xl font-bold text-white">
          {name}
        </h1>
        <div className="flex justify-center">
          <div className="flex w-5/6  justify-between gap-2 text-white  lg:gap-4">
            {types.map((type) => (
              <div
                className={` mx-auto my-2 flex w-5/6 items-center justify-center gap-2 rounded-xl lg:w-1/2  ${Detec(type.type.name).bg}   py-2`}
              >
                <img src={Detec(type.type.name).img} alt="" className="w-5" />
                <h2 className="font-Nunito font-bold uppercase">
                  {type.type.name}
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between px-8 py-3 font-Nunito text-white">
          <div className="flex flex-col justify-center">
            <h2 className="px-3 text-center lg:text-xl">{kg(height)} M</h2>
            <h2 className="flex gap-2  lg:text-xl   ">
              <img src={altura} />
              Height
            </h2>
          </div>
          <div className="flex flex-col justify-center ">
            <h2 className="text-center  lg:text-xl">{kg(weight)} KG</h2>
            <h2 className="flex gap-2    lg:text-xl ">
              <img src={peso} />
              Weight
            </h2>
          </div>
        </div>

        <div className="flex w-full justify-center py-4">
          <button
            type="button"
            onClick={() => Search(name)}
            className="lg:text-1xl  flex w-4/6 items-center justify-center  rounded-xl bg-zinc-900 py-3 font-Nunito text-white duration-200 ease-in hover:bg-zinc-800"
          >
            <img src={rayo} className="w-7" />
            more details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPokemon;
