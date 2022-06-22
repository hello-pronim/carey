import React from "react";
// import { styled } from "@stitches/react";
// import { blackA } from "@radix-ui/colors";
import Hero from "@components/Hero";
// import { Wrapper } from "./styles";
import { Container } from "@components/common";
// import { Text, Accordians } from "@components/common";
// import ApplyResumeButton from "@components/common/applyResumeButton";
import { LeftContent, RightContent } from "./styles";
//import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

//export const AspectRatio = AspectRatioPrimitive;

const Enrolment = ({}) => {
  return (
    <>
      <Hero
        type="applyOnline"
        overHeadline="ENROLMENT"
        headline="Carey Baptist Grammar SchoolApplication for Admission"
        enableCta={false}
        overHeadlineBottom="YOUR UNIQUE IDENTITY NUMBER"
        idNumber="ID 2345"
        applicationSupport={{
          title: "Application Support",
          paragraphOne:
            " If you require assistance with your application, please contact us.",
          paragraphTwo:
            "Carey Baptist Grammar School349 Barkers Road, Kew VIC 3101 +61 3 9816 1222 or via email.",
        }}
      />
      <Container
        outerCSS={{
          background: "$background",
        }}
      >
        <LeftContent>Form Content</LeftContent>
        <RightContent>Sidebar Content</RightContent>
      </Container>
    </>
  );
};

export default Enrolment;
