import React from "react";
import { Wrapper, InnerGrid, Bumper, Content, ImageWrapper } from "./styles";
import { Text } from "@components/common";
import Image from "next/image";
import principal from "public/assets/principal.png";

const General = (props) => {
  return (
    <Wrapper>
      <Bumper css={{ bg: "$crestYellow" }} />
      <InnerGrid
        css={{
          backgroundColor: "rgb(21,72,121)",
          bg: "linear-gradient(142deg, rgba(21,72,121,1) 0%, rgba(1,101,166,1) 15%, rgba(38,56,92,1) 97%)",
        }}
      >
        <Content>
          <Text as="h6" variant="Heading-Overline">
            LEADERSHIP
          </Text>
          <Text as="h1" variant="Heading-xLarge">
            Meet our Principal <br /> Jonathan Walter
          </Text>
          <Text as="h2" variant="Heading-Small">
            Applications are accepted for all year levels however our key intake
            years are as follows: 3 year old ELC, Prep, Year 5, Year 7 and Year
            10.
          </Text>
        </Content>
        <ImageWrapper>
          <Image
            alt="principal"
            src={principal}
            width={1200}
            height={598}
            layout="responsive"
            objectFit="cover"
          />
        </ImageWrapper>
      </InnerGrid>
      <Bumper
        css={{
          bg: "$darkBlue",
          display: "none",
          "@min768": { display: "flex" },
        }}
      />
    </Wrapper>
  );
};

export default General;
