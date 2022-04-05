import React from "react";
import { Container } from "@components/common";

const Home = () => {
  return (
    <>
      <Container
        style={{
          background:
            "linear-gradient(90deg, hsla(312, 66%, 76%, 1) 0%, hsla(234, 93%, 67%, 1) 100%)",
        }}
      >
        <div style={{ height: "150vh", gridColumn: "1 / span 12" }}></div>
      </Container>
    </>
  );
};

export default Home;
