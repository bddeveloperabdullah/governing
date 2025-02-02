import React from "react";
import Container from "../../Similar/Container";
import Button from "../../Similar/Button";

const GetStart = () => {
  return (
    <section className="mt-24">
      <Container>
        <div className="bg-gradient-primary rounded-xl flex flex-col md:flex-row justify-between items-center p-5 md:p-10 space-y-5">
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-[46px] md:leading-11 lg:leading-16 text-white font-bold font-space w-full max-w-[566px]">
              Ready to Simplify Your Document Management?
            </h1>
            <p className="pt-7.5 text-base leading-5.5 text-white font-bold w-full max-w-[466px]">
              Sign up today and experience the power of AI-driven legal
              documentation.
            </p>
          </div>
          <div>
            <Button className="bg-white text-accent">Get Started Now</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetStart;
