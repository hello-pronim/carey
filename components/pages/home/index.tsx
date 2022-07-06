import React from "react";
import { Container, PreFooter } from "@components/common";
import Hero from "@components/Hero";
import ImageAccordion from "@components/ImageAccordion";

const Home = ({ heroData, applyNow }) => {
  return (
    <>
      <Hero
        type="display"
        props={heroData?.homePageBanner}
        applyNow={applyNow}
      />
      <Container type="unbound">
        <ImageAccordion accordionData={heroData?.campuses} />
      </Container>
      <PreFooter />
    </>
  );
};

export default Home;
