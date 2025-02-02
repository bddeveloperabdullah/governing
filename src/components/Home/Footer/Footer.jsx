import React from "react";
import Logo from "../../Similar/Logo";
import Container from "../../Similar/Container";
import { NavItem, socialMenuItem } from "../../../db/db";

const Footer = () => {
  return (
    <>
      <footer className="mt-[900px]">
        <Container>
          {/* Footer Top  */}
          <div className="flex flex-col md:flex-row pb-2.5 justify-between items-center space-y-3.5 md:space-y-0">
            <div>
              <Logo>Ai GoverningDocs</Logo>
            </div>
            <div className="hidden md:flex gap-5">
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
            <div className="flex gap-5">
              {socialMenuItem.map(({ icon, url }, index) => (
                <div
                  className="size-6 md:size-9 bg-gradient-primary flex justify-center items-center rounded-full"
                  key={index}
                >
                  <a href={url}>
                    <img
                      className="size-3.5 md:size-5"
                      src={icon}
                      alt="social icon"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* Footer Bottom  */}
          <div className="mt-5 md:mt-[45px] p-2.5 md:p-5 border-t-[1px] border-primary">
            <p className="text-center font-nunito text-xs md:text-xl text-[#111]">
              Ai GoverningDocs 2024. All Rights Reserved.
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
