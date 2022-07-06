import React from "react";
import { Container, PreFooter } from "@components/common";
import Hero from "@components/Hero";
import ImageAccordion from "@components/ImageAccordion";
import { FullGridContainer } from "./styles";

const WhyCarey = ({ pageData, applyNow }) => {
  return (
    <>
      <Hero
        type="display"
        props={pageData?.whyCareyBanner}
        applyNow={applyNow}
      />
      <Container type="grid">
        <FullGridContainer>
          <ImageAccordion accordionData={pageData?.campuses} />
        </FullGridContainer>
      </Container>
      <PreFooter />
    </>
  );
};

export default WhyCarey;
