import React from "react";
import { cn } from "../../utility/cn";

const TextGradient = ({ children, className }) => {
  return (
    <>
      <span
        className={cn(
          "bg-gradient-to-b from-[#00d2ff] to-[#059dbe] bg-clip-text text-transparent font-bold",
          className
        )}
      >
        {children}
      </span>
    </>
  );
};

export default TextGradient;
