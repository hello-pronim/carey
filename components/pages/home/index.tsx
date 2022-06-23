import React from "react";
// import { Text } from "@components/common";
import { Container, PreFooter } from "@components/common";
import Hero from "@components/Hero";
// import TwoUpModule from "../general/components/TwoUpModule";
import Swiper from "@components/common/swiper";
const Home = ({ heroData, applyNow }) => {
  return (
    <>
      <Hero
        type="display"
        props={heroData?.homePageBanner}
        applyNow={applyNow}
      />
      <Container outerCSS={{ py: 120 }}>
        {/* <Text variant="Heading-Small">Home</Text> */}
        <Swiper />
        {/* <TwoUpModule /> */}
      </Container>
      <PreFooter />
    </>
  );
};

export default Home;
