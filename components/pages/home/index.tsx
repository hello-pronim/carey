import React from "react";
import { Text } from "@components/common";
import { Container, PreFooter } from "@components/common";

const Home = () => {
  return (
    <>
      <Container outerCSS={{ py: 120 }}>
        <Text variant="Heading-Small">Home</Text>
      </Container>
      <PreFooter />
    </>
  );
};

export default Home;
