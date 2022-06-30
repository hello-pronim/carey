import React from "react";
import { Text } from "@components/common";
import { Container, PreFooter } from "@components/common";
import AccordionCarousel from "@components/AccordionCarousel";

const LifeCarey = ({ pageData }) => {
  return (
    <>
      <Container outerCSS={{ py: 120 }}>
        <Text>Life At Carey</Text>
      </Container>
      <Container type="unbound">
        <AccordionCarousel accordionData={pageData.peopleSelection} />
      </Container>
      <PreFooter />
    </>
  );
};

export default LifeCarey;
