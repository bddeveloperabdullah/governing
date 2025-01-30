import React from "react";
import { cn } from "../../utility/cn";
import TextGradient from "./TextGradient";

const SectionTitle = ({ children, className, gradientText }) => {
  return (
    <>
      <h1
        className={cn(
          "text-2xl md:text-4xl lg:text-[46px] md:leading-12 lg:leading-[58px] font-bold font-space text-secondary",
          className
        )}
      >
        {children} <TextGradient>{gradientText}</TextGradient>
      </h1>
    </>
  );
};

export default SectionTitle;
