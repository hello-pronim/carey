import React from "react";
import {
  Wrapper,
  InnerGrid,
  Bumper,
  Content,
  CTAWrapper,
  Crest,
} from "./styles";
import { Button, Text } from "@components/common";
import cGraphic from "public/assets/c-graphic.svg";
import Image from "next/image";

const Plain = (props) => {
  return (
    <Wrapper>
      <Bumper css={{ bg: "$crestYellow" }} />
      <InnerGrid>
        <Content>
          <Text as="h6" variant="Heading-Overline">
            ENROLMENT
          </Text>
          <Text as="h1" variant="Heading-Large">
            Carey Enrolment
          </Text>
          <Text as="h2" variant="Heading-Small">
            Applications are accepted for all year levels however our key intake
            years are as follows: 3 year old ELC, Prep, Year 5, Year 7 and Year
            10.
          </Text>
          <CTAWrapper>
            <Button
              arrow
              label="Apply online"
              type="solid"
              theme="dark"
              scale="lg"
              href="#"
            />
          </CTAWrapper>
        </Content>
        <Crest>
          <Image
            alt=""
            src={cGraphic}
            width="440"
            height="449"
            layout="responsive"
            objectFit="fill"
            priority
          />
        </Crest>
      </InnerGrid>
      <Bumper css={{ bg: "$darkBlue" }} />
    </Wrapper>
  );
};

export default Plain;
