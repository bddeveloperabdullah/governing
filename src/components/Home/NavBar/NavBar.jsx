import { useState } from "react";
import { NavItem } from "../../../db/db";
import Button from "../../Similar/Button";
import Container from "../../Similar/Container";
import Logo from "../../Similar/Logo";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <nav className="py-[46px]">
        <Container>
          <div className="w-full mx-w-[1248px] flex justify-between items-center gap-2 py-5 px-[30px] rounded-full  bg-white">
            {/* logo Area  */}
            <Logo />

            {/* Menu Area  */}
            <div className="hidden lg:flex justify-center items-center gap-5">
              {NavItem.map(({ url, itemName }, index) => (
                <a
                  key={index}
                  href={url}
                  className="text-sm md:text-base text-accent hover:text-primary transition-colors duration-300 md:leading-5 font-nunito"
                >
                  {itemName}
                </a>
              ))}
            </div>
            {/* Button Area  */}
            <div className="flex justify-center items-center gap-2">
              <button className="block lg:hidden" onClick={toggleMenu}>
                <div className="space-y-1">
                  <span className="block w-6 h-0.5 bg-black" />
                  <span className="block w-6 h-0.5 bg-black" />
                  <span className="block w-6 h-0.5 bg-black" />
                </div>
              </button>
              <Button>Get Started Today</Button>
            </div>
          </div>
          {isMenuOpen && <MobileNav toggleMenu={toggleMenu} />}
        </Container>
      </nav>
    </>
  );
};

export default NavBar;
