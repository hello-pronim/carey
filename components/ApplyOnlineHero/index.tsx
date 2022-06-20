import React from "react";
import { Wrapper, InnerGrid, Bumper, Content, ImageWrapper } from "./styles";
import { Text } from "@components/common";
import Image from "next/image";
import ApplyResumeButton from "@components/ApplyResumeButton";
import Graphic from "../../public/assets/GraphicC.svg";

const ApplyOnlineHero = (props) => {
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
            {props?.overHeadline}
          </Text>
          <Text as="h1" variant="Heading-xLarge">
            {props?.headline}
          </Text>
          <Text as="h2" variant="Heading-Small">
            {props?.contentText}
          </Text>
          <ApplyResumeButton />
        </Content>
        <ImageWrapper>
          <Image
            alt="principal"
            src={Graphic}
            width={782}
            height={840}
            layout="responsive"
            priority
          />
        </ImageWrapper>
      </InnerGrid>
    </Wrapper>
  );
};

export default ApplyOnlineHero;
