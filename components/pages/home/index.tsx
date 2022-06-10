import React from "react";
import { Text } from "@components/common";
import { Container, PreFooter } from "@components/common";
import OpenMorningsCard from "@components/common/cards/openMornings/Card";

const Home = () => {
  return (
    <>
      <Container outerCSS={{ py: 120 }}>
        <Text variant="Heading-Small">Home</Text>
        <OpenMorningsCard
          title="Open Mornings"
          description="We invite you to visit us to explore our school and discover why a Carey education is right for your family."
          href="#"
          image=""
          size="small"
        />
      </Container>
      <PreFooter />
    </>
  );
};

export default Home;
