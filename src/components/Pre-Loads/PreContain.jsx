import React from "react";
import Pokeball from "../../assets/icons/pokeball.svg";
const PreContain = () => {
  return (
    <div className="flex w-full animate-pulse flex-col items-center justify-center h-[400px]">
      <h1 className="text-center text-3xl text-white   ">Loading...</h1>
      {/* <img src={Pokeball} className="w-36 animate-spin py-10 " alt="" /> */}
    </div>
  );
};

export default PreContain;
