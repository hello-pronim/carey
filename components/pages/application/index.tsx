import React from "react";
// import { styled } from "@stitches/react";
// import { blackA } from "@radix-ui/colors";
import Hero from "@components/ApplyOnlineHero";
// import { Wrapper } from "./styles";
import { Container } from "@components/common";
//import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

//export const AspectRatio = AspectRatioPrimitive;

const Application = ({}) => {
  return (
    <>
      <Hero
        overHeadline="APPLY ONLINE"
        headline="Carey Baptist Grammar SchoolApplication for Admission"
        contentText="Carey is an open-entry, inclusive and diverse co-educational school. We invite you to apply to enrol at ELC, Junior School, Middle and Senior School."
        startApplication={{
          buttonLink: "test",
          buttonLabel: "Start Application",
          buttonUrl: "url",
        }}
        resumeApplication={{
          buttonLink: "test",
          buttonLabel: "Resume Application",
          buttonUrl: "url",
        }}
      />
      <Container>asdfadsfsaf</Container>
    </>
  );
};

export default Application;
