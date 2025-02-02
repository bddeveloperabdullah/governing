import React from "react";

const Arrow = ({ children }) => {
  return (
    <>
      <button className="rightIcon cursor-pointer size-7.5 md:size-10 inline-flex justify-center items-center rounded-full shadow-arrowShadow hover:shadow-none hover:bg-indigo-200 hover:text-white duration-300">
        {children}
      </button>
    </>
  );
};

export default Arrow;
