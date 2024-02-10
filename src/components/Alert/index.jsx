import React from "react";
import alert from "../../assets/icons/alert.svg";

const Alert = () => {
  return (
    <div   className="fixed top-5 z-50 flex w-full justify-center ">
      <div className="flex w-[370px] sm:w-[400px] md:w-[420px] items-center justify-center rounded-xl border border-zinc-200 bg-[rgba(6,11,21,.6)] py-2 shadow-md shadow-slate-50 backdrop-blur-md gap-4">
        <img src={alert} className="w-[30px]" />
        <h2 className="text-center text-xl font-extrabold text-white">
          Pokemon no encontrado
        </h2>
      </div>
    </div>
  );
};

export default Alert;
