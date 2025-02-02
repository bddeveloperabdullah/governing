import React from "react";

const Logo = ({ children }) => {
  return (
    <div>
      <h1 className="text-xl md:text-2xl xl:text-4xl leading-5 md:leading-10 xl:leading-[51px] font-bold font-space ">
        <a href="#">{children}</a>
      </h1>
    </div>
  );
};

export default Logo;
