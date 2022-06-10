import React from "react";
import {
  Wrapper,
  InnerGrid,
  Bumper,
  DisplayContent,
  DisplayImageWrapper,
} from "./styles";
import { Text } from "@components/common";
import Image from "next/image";
import principal from "public/assets/principal.png";

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
          <Text as="h3" variant="Display-Regular" css={{ color: "$white" }}>
            carey
          </Text>
          <Text as="h1" variant="Display-Large">
            News&nbsp;+&nbsp;Events
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

export default Display;
