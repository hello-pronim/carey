import React from "react";
import { Container, PreFooter } from "@components/common";
import Hero from "@components/Hero";
import ImageAccordion from "@components/ImageAccordion";
import { FullGridContainer } from "./styles";

const Home = ({ heroData, applyNow }) => {
  return (
    <>
      <Hero
        type="display"
        props={heroData?.homePageBanner}
        applyNow={applyNow}
      />
      <Container type="grid">
        <FullGridContainer>
          <ImageAccordion accordionData={heroData?.campuses} />
        </FullGridContainer>
      </Container>
      <PreFooter />
    </>
  );
};

export default Home;
