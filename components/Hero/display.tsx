import React from "react";
import {
  Wrapper,
  InnerGrid,
  Bumper,
  DisplayContent,
  DisplayImageWrapper,
  Div,
} from "./styles";
import { Text } from "@components/common";
import Image from "next/image";
import principal from "public/assets/principal.png";
import HeroButton from "./HeroButton";

const Display = (props) => {
  return (
    <Wrapper>
      <Bumper css={{ bg: "$crestYellow" }} />
      <InnerGrid
        css={{
          backgroundColor: "rgb(21,72,121)",
          bg: "linear-gradient(142deg, rgba(21,72,121,1) 0%, rgba(1,101,166,1) 15%, rgba(38,56,92,1) 97%)",
        }}
      >
        <DisplayContent>
          <Text as="h1" variant="Display-Large">
            {props?.props?.scriptTitle}
          </Text>
        </DisplayContent>
        <DisplayImageWrapper>
          <Image
            alt="principal"
            src={principal}
            width={1200}
            height={598}
            layout="responsive"
            objectFit="cover"
            priority
          />
        </DisplayImageWrapper>
        <Div
          css={{
            display: "none",
            "@max1024": { display: "flex" },
          }}
        >
          <HeroButton data={props.applyNow} />
        </Div>
      </InnerGrid>
      <Bumper
        css={{
          bg: "$darkBlue",
          display: "flex",
          "@max1024": { display: "none" },
        }}
      >
        <HeroButton data={props.applyNow} />
      </Bumper>
    </Wrapper>
  );
};

export default Display;
