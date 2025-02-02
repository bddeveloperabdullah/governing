import { searviceItem } from "../../../db/db";
import Arrow from "../../Similar/Arrow";
import Container from "../../Similar/Container";
import SectionTitle from "../../Similar/SectionTitle";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

const Problem = () => {
  return (
    <>
      <section className="mt-48">
        <Container>
          {/* title  */}
          <div className="flex justify-between items-center">
            <div>
              <SectionTitle gradientText={"Solution"}>Problem &</SectionTitle>
            </div>
            <div className="flex justify-center items-center gap-2.5">
              <Arrow>
                <MdArrowBackIosNew className="text-sm lg:text-xl" />
              </Arrow>
              <Arrow>
                <MdArrowForwardIos className="text-sm lg:text-xl" />
              </Arrow>
            </div>
          </div>

          {/* card item  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {searviceItem.map(({ icon, title, desc1, desc2 }, index) => (
              <div
                className="w-[272px] h-[349px] mx-auto shadow-cardShadow p-5 rounded-[20px] space-y-5 b mt-10 hover:bg-primary hover:shadow-none transition-all duration-500"
                key={index}
              >
                <div className="cardIcon">
                  <div className="size-[58px] bg-gradient-primary flex justify-center items-center rounded-full">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <div className="cardTitle">
                  <h3 className="text-[18px] font-bold text-secondary leading-[24px]">
                    {title}
                  </h3>
                </div>
                <div className="cardDesc space-y-2.5">
                  <p className="text-base leading-[21px] text-accent">
                    {desc1}
                  </p>
                  <p className="text-base leading-[21px] text-accent">
                    {desc2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Problem;
