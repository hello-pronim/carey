import React from "react";
import { Text } from "@components/common";
import { Container, PreFooter } from "@components/common";
import Hero from "@components/Hero";
import ImageAccordion from "@components/ImageAccordion";

const Home = ({ heroData, applyNow, navigation }) => {
  return (
    <>
      <Hero
        type="display"
        props={heroData?.homePageBanner}
        applyNow={applyNow}
      />
      <Container outerCSS={{ py: 120 }}>
        <Text>Carey Home</Text>
      </Container>
      <Container type="flex">
        <ImageAccordion
          accordionData={heroData?.campuses}
          navigation={navigation}
        />
      </Container>
      <PreFooter />
    </>
  );
};

export default Home;
