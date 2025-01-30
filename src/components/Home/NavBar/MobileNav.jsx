import React from "react";
import Logo from "../../Similar/Logo";
import { NavItem } from "../../../db/db";

const MobileNav = ({ toggleMenu }) => {
  return (
    <>
      <div className="block lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-hidden">
        <div className="flex justify-between items-center gap-5 pb-5">
          <Logo />
          <button className="text-black text-4xl self-end" onClick={toggleMenu}>
            &times;
          </button>
        </div>
        <div className="space-y-4">
          {NavItem.map(({ url, itemName }, index) => (
            <a
              key={index}
              href={url}
              className="block text-lg text-accent hover:text-primary transition-colors duration-300 md:leading-5  font-nunito"
            >
              {itemName}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
