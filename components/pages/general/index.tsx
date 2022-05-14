import React from "react";
import { Container } from "@components/common";
import Hero from "@components/Hero";

const General = ({ pageData }) => {
  return (
    <>
      <Hero type="general" />
      <Container outerCSS={{ bg: "$background", height: "100vh" }}>
        Test
      </Container>
    </>
  );
};

export default General;
