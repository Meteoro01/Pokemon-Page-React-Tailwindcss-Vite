import React from "react";
import altura from "../../assets/icons/altura.svg";
import peso from "../../assets/icons/peso.svg";
import close from "../../assets/icons/close.svg";
import {Detec, DetectStats} from "../../utils/DetectOptions";

const CardDetailPokemond = ({ Pokemon, CloseCard }) => {
  const { name, sprites, types, height, weight, stats } = Pokemon;
  const imgPok = sprites.other["official-artwork"].front_default;
  
  const kg = (e) => {
    return (e * 0.1).toFixed(1);
  };

  return (
    <div className=" fixed  left-0 top-0  z-50 flex h-[100dvh]  w-full items-center justify-center bg-[rgba(6,11,21,.6)] backdrop-blur-md">
      <div
        id="cardPoke"
        className={`mx-auto  flex w-[90%] sm:w-[420px] md:w-[420px] lg:w-[400px] xl:w-[410px] flex-col ${Detec(types[0].type.name).bg}  justify-center rounded-xl border bg-gradient-to-b from-black shadow-xl shadow-[rgba(175,209,212,0.76)]   `}
      >
        <div className="relative">
          <button
          onClick={CloseCard} 
          className="absolute  right-2 top-2 ">
            <img src={close} alt=""className="h-10 w-10 cursor-pointer" />
          </button>
        </div>

        <img
          src={imgPok}
          className="w-[270px] sm:w-50 md:w-50  mx-auto -mt-20  saturate-200 lg:w-64 "
        />
        <h1 className="text-center font-Nunito text-3xl capitalize text-white">
          {name}
        </h1>
        <div className="mx-auto flex w-11/12 justify-around border-b-2 border-t-2 font-Nunito text-2xl text-white sm:w-10/12 md:w-5/6">
          <div className="flex   w-4/12 flex-col   items-center justify-center">
            <h2 className="text-center font-bold text-white">{kg(height)} M</h2>
            <h2 className="text-md flex gap-2 font-medium lg:text-xl ">
              <img src={altura} alt=""  />
              Height
            </h2>
          </div>
          <div className="my-2 flex w-4/12  justify-around border-l-2 border-r-2">
            {types.map((type) => (
              <img
                src={Detec(type.type.name).icon}
                alt=""
                className="w-10"
              />
            ))}
          </div>
          <div className="flex  w-4/12 flex-col   items-center justify-center">
            <h2 className="text-center font-bold text-white">
              {kg(weight)} KG
            </h2>
            <h2 className="flex gap-2  font-medium lg:text-xl ">
              <img src={peso} alt=""   />
              Weight
            </h2>
          </div>
        </div>
        <div className="pt-4 pb-5 font-Nunito">
          {stats.map((stat) => {
            return (
              <div className="mx-8 flex items-center    justify-around pb-1 font-Nunito text-white  ">
                <div className="flex justify-start gap-1 pr-4  ">
                  <img
                    src={DetectStats(stat.stat.name).img}
                    className="w-5"
                    alt=""
                  />
                  <h2 className=""> {stat.base_stat}</h2>
                </div>
                <div className=" flex w-full items-start rounded-full bg-[rgba(6,11,21,.6)]">
                  <div
                    className={`rounded-full  p-[0.4rem] ${DetectStats(stat.stat.name).bg}`}
                    style={{ width: `${stat.base_stat}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardDetailPokemond;
