import React from "react";

const Pagination = ({ handlePagination }) => {
  return (
    <div className="mt-8 flex h-32 w-full justify-around">
      <div className="flex h-full items-center justify-center">
        <button
          className="rounded-xl  bg-[rgba(6,11,21,0.8)] font-Nunito text-lg font-bold text-white py-6 px-8 md:px-12 md:py-6 md:text-2xl "
          onClick={() => handlePagination(false)}
        >
          Anterior
        </button>
      </div>
      <div className="flex h-full items-center justify-center">
        <button
          className="rounded-xl  bg-[rgba(6,11,21,0.8)] font-Nunito text-lg font-bold text-white py-6 px-8 md:px-12 md:py-6 md:text-2xl "
          onClick={() => handlePagination(true)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Pagination;
