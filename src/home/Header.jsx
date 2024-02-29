import React from "react";
import LogoPokemon from "../assets/img/LogoPokemon.webp";
import Rayo from "../assets/icons/rayo.svg";
import Charizart from "../assets/img/charizart.webp";
// types
import fire from "../assets/types/fire.svg";
import flying from "../assets/types/flying.svg";

import Waves from "../components/Waves/index.jsx";
const Header = () => {
  return (
    <div id="header" className="relative flex   flex-col overflow-hidden ">
      <Waves />
      <div className="mx-auto flex flex-col ">
        <div className="mx-auto">
          <a className="">
            <img src={LogoPokemon} className="  my-2 h-[130px]" alt="" />
          </a>
        </div>
        <div className=" mx-auto flex items-center  w-11/12 flex-col  text-white md:w-10/12   lg:flex-row xl:w-10/12">
          {/* img */}
          <div className="md:w-12/12 flex items-center justify-center   lg:order-2 lg:w-6/12    ">
            <img
              src={Charizart}
              className="w-[350px] sm:w-[450px] md:w-[500px] lg:w-full "
              alt=""
            />
          </div>

          {/* info */}
          <div className="mx-auto w-full  mb-20 lg:w-6/12">
            <h1 className="py-2 font-Nunito text-2xl font-bold tracking-normal md:text-3xl lg:text-5xl">
              Charizard
            </h1>
            <div className=" flex items-center gap-4 py-5">
              <a title="fire">
                <img src={fire} className="w-16" />
              </a>
              <a title="flying">
                <img src={flying} className="w-16" />
              </a>
            </div>
            <p className="font-sans pb-3 text-left font-Nunito lg:text-lg   ">
              Charizard, the imposing flying and fire Pokémon, is the
              final evolution of the adorable Charmander. With its majestic wings
              and burning flames, Charizard dominates the skies and commands respect.
              His strength and courage are legendary and his destructive fire is
              capable of incinerating his opponents. Despite his temperament
              wild, Charizard is known to form deep and loyal bonds
              with their coaches. His imposing presence and his skills of
              flight make it a valuable and protective companion in
              any team.
            </p>
            <div className=" flex justify-center ">
              <button className="mx-auto flex   w-full justify-center rounded-xl bg-zinc-900  py-2 text-2xl duration-200 ease-in-out hover:w-11/12 hover:bg-zinc-800">
                <span>
                  <img src={Rayo} className="w-9" />
                </span>
                <span>Details</span>
              </button>
            </div>
            <div>
              <ul>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href=""></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
