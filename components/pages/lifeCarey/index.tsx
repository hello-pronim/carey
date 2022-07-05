import React from "react";
import { Text } from "@components/common";
import { Container, PreFooter } from "@components/common";
import AccordionCarousel from "@components/AccordionCarousel";
import { CommunityCarousel } from "./styles";

const LifeCarey = ({ pageData }) => {
  return (
    <>
      <Container outerCSS={{ py: 120 }}>
        <Text>Life At Carey</Text>
      </Container>
      <Container
        type="grid"
        outerCSS={{ overflow: "hidden", paddingBottom: "80px" }}
      >
        <CommunityCarousel>
          <AccordionCarousel accordionData={pageData.peopleSelection} />
        </CommunityCarousel>
      </Container>
      <PreFooter />
    </>
  );
};

export default LifeCarey;
