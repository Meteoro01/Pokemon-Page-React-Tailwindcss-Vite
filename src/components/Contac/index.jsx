import React from "react";
import Github from "../../assets/icons/github.svg";
import Linkedin from "../../assets/icons/linkedin.svg";

const Contact = () => {
  return (
    <div className="flex h-32 items-center justify-center pb-10">
      <div className="flex h-32 w-5/6 flex-col justify-between rounded-xl border border-zinc-400 bg-[rgba(6,11,21,.6)] px-9 backdrop-blur-md md:h-20 md:flex-row">
        <div className="flex flex-col py-3">
          <h2 className="px-8 text-center font-Nunito text-[1rem] text-white">
            Luis Saavedra F
          </h2>
          <a
            href="mailto:luis.xd.saavedra@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-full w-full items-center justify-center text-white"
          >
            luis.xd.saavedra@gmail.com
          </a>
        </div>
        <div className="mx-auto my-auto flex w-full justify-around gap-4 sm:mx-0 md:w-2/12 md:items-center">
          <a href="https://github.com/Meteoro01" target="_blank" className="">
            <img src={Github} className="w-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/luis-alfredo-saavedra-falcon-11147723a/"
            target="_blank"
            className=""
          >
            <img src={Linkedin} className="w-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
