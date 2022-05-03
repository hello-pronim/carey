import React from "react";
import { Container } from "@components/common";
import SideNav from "@components/common/sideNav";

const Home = () => {
  return (
    <>
      <Container outerCSS={{ bg: "$background", height: "100vh" }}>
        <SideNav />
      </Container>
    </>
  );
};

export default Home;
