import React from "react";
import Button from "../../Similar/Button";
import Container from "../../Similar/Container";

const Hero = () => {
  return (
    <>
      <section className="pt-3.5 md:pt-10">
        <Container>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="space-y-4 md:space-y-7">
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-11 lg:leading-16 xl:leading-[76px] font-bold font-space w-full max-w-[593px]">
                Simplify your real estate document analysis
              </h1>
              <p className="text-sm md:text-xl md:leading-7 font-semibold font-nunito w-full max-w-[400px] md:max-w-[519px] text-secondary ">
                Streamline, Automate, and Secure Your Business Documents with Ai
                GoverningDocs
              </p>
              <Button>Get Started Today</Button>
            </div>
            <div className="">
              <img
                className="w-full max-w-[350px] md:max-w-[740px] mx-auto"
                src="/hero-img.svg"
                alt=""
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
