import React from "react";
import Pokeball from "../../assets/icons/pokeball.svg";
const PreCard = () => {
  return (
    <div className="fixed  left-0 top-0  z-50 flex h-[100dvh]  w-full items-center justify-center bg-[rgba(6,11,21,.6)] backdrop-blur-md">
      <div
        id="cardPoke"
        className={`mx-auto flex  h-[500px] w-[90%] animate-pulse flex-col items-center justify-center rounded-xl border  bg-zinc-600 bg-gradient-to-b from-black shadow-xl shadow-[rgba(175,209,212,0.76)] sm:w-[420px] md:w-[420px]   lg:w-[400px] xl:w-[410px]`}
      >
        <h1 className="text-center text-3xl text-white">Loading...</h1>
        <img src={Pokeball} className="w-36 animate-spin py-10 " alt="" />
      </div>
    </div>
  );
};

export default PreCard;
