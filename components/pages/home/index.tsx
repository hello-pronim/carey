import React from "react";
import { Container } from "@components/common";

const Home = () => {
  return (
    <>
      <Container
        style={{
          background: "#fefefe",
        }}
      >
        <div
          style={{
            minHeight: "150vh",
            gridColumn: "1 / span 12",
            paddingTop: 120,
            paddingBottom: 120,
          }}
        ></div>
      </Container>
    </>
  );
};

export default Home;
