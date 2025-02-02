import React from "react";
import Container from "../../Similar/Container";
import SectionTitle from "../../Similar/SectionTitle";
import { partnerItem } from "../../../db/db";

const Partner = () => {
  return (
    <>
      <section className="mt-20">
        <Container>
          <div className="bg-[#E6F9FD] rounded-xl py-[50px]">
            <SectionTitle gradientText={"Partners"} className="text-center">
              Our
            </SectionTitle>
            <div className="flex justify-center flex-wrap gap-5 mt-6">
              {partnerItem.map((item, index) => (
                <div
                  className="w-[274px] h-[101] bg-white flex justify-center items-center p-5 border border-[#D6D6D6] rounded-md"
                  key={index}
                >
                  <img className="w-[150px]" src={item.logo} alt="" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Partner;
