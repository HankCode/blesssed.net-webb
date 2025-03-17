import Container from "@/components/Container";
import React from "react";

const HomeAboutText = () => {
  return (
    <section>
      <Container section className="flex flex-col space-y-10">
        <p className="xl:text-2xl text-lg max-w-4xl mx-auto text-center !leading-[1.8]">
          Most people that stumble upon manifesting and the law of attraction all make this one
          mistake - to much theory and to little practice. Myself included.
        </p>
        <p className="xl:text-2xl text-lg max-w-4xl mx-auto text-center !leading-[1.8]">
          We at blesssed have made it our mission to change that. We have created a platform that is
          focused on the practical application of the spiritual laws into your daily life.
        </p>
      </Container>
    </section>
  );
};

export default HomeAboutText;
