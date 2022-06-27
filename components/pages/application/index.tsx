import React from "react";
// import { styled } from "@stitches/react";
// import { blackA } from "@radix-ui/colors";
import Hero from "@components/Hero";
// import { Wrapper } from "./styles";
import { Container } from "@components/common";
import { Text, Accordians } from "@components/common";
import ApplyResumeButton from "@components/common/applyResumeButton";
import {
  LeftContent,
  RightContent,
  Content,
  VisibleMobile,
  HiddenMobile,
} from "./styles";
import Graphic from "../../../public/assets/GraphicC.svg";
import { Div } from "@components/Hero/styles";

//import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

//export const AspectRatio = AspectRatioPrimitive;

const Application = ({}) => {
  const accordinaItems = [
    {
      index: 1,
      title: "Lorem ipsum dolor sit amet, consectetur",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non",
    },
    {
      index: 2,
      title: "Lorem ipsum dolor sit ame",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non",
    },
  ];
  return (
    <>
      <Hero
        type="applyOnline"
        overHeadline="APPLY ONLINE"
        headline="Carey Baptist Grammar SchoolApplication for Admission"
        contentText="Carey is an open-entry, inclusive and diverse co-educational school. We invite you to apply to enrol at ELC, Junior School, Middle and Senior School."
        enableCta={true}
        image={Graphic}
      />
      <Container
        outerCSS={{
          pt: 25,
          pb: 100,
          background: "$background",
        }}
        innerCSS={{
          "@max768": {
            gridTemplateColumns: "repeat(1, 1fr)",
          },
        }}
      >
        <LeftContent>
          <Div css={{ maxWidth: 560 }}>
            <Text as="h2" variant="Heading-Large" css={{ mb: 16 }}>
              What do I need?
            </Text>
            <Text as="p" variant="Body-Regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non
            </Text>
            <Accordians items={accordinaItems} />
            <Text as="h2" variant="Heading-Large" css={{ mb: 16, mt: 80 }}>
              How much does it cost
            </Text>
            <Text as="p" variant="Body-Regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non
            </Text>
          </Div>
          <HiddenMobile>
            <ApplyResumeButton resumeBttnTheme="light" />
          </HiddenMobile>
        </LeftContent>
        <RightContent>
          <Content>
            <Text as="h2" variant="Heading-Small" css={{ mb: 16 }}>
              Application Support
            </Text>
            <Text as="p" variant="Body-Regular" css={{ pb: 30 }}>
              If you require assistance with your application, please contact us
              using the details below.
            </Text>
            <Text as="p" variant="Body-Regular">
              <Text css={{ fontWeight: "$semiBold" }}>
                Carey Baptist Grammar School
              </Text>
              <br />
              349 Barkers Road, Kew 3101 Victoria + 61 3 9816 1222or via email
            </Text>
          </Content>
          <VisibleMobile>
            <ApplyResumeButton resumeBttnTheme="light" />
          </VisibleMobile>
        </RightContent>
      </Container>
    </>
  );
};

export default Application;
