import { cn } from "../../utility/cn";

const Button = ({ children, className }) => {
  return (
    <>
      <button
        className={cn(
          `bg-gradient-primary text-white py-2.5 sm:py-4 px-4 sm:px-[25px] rounded-full flex justify-center items-center text-xs sm:text-base font-nunito font-semibold sm:font-bold cursor-pointer opacity-95 hover:opacity-100 transition-all delay-150`,
          className
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
