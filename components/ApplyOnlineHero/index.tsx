import React from "react";
import {
  Wrapper,
  InnerGrid,
  Bumper,
  Content,
  ImageWrapper,
  Div,
  VideoWrapper,
} from "./styles";
import { Text } from "@components/common";
import Image from "next/image";
import HeroButton from "./HeroButton";

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
        </Content>

        <VideoWrapper>
          <video
            preload="auto"
            loop={true}
            muted={true}
            autoPlay={true}
            playsInline={true}
          >
            <source
              src={props?.props?.videoUrl}
              type="video/mp4"
              media="(min-device-pixel-ratio:2), (-webkit-min-device-pixel-ratio:2), (min--moz-device-pixel-ratio:2), (-o-min-device-pixel-ratio:2)"
            />
          </video>
        </VideoWrapper>

        {props?.props?.image?.length ? (
          <ImageWrapper>
            <Image
              alt="principal"
              src={props?.props?.image[0]?.url}
              width={props?.props?.image[0]?.width}
              height={props?.props?.image[0]?.height}
              layout="responsive"
              objectFit="cover"
              priority
            />
          </ImageWrapper>
        ) : null}
        <Div
          css={{
            display: "none",
            "@max1024": { display: "flex" },
          }}
        >
          <HeroButton data={props.startApplication} />
        </Div>
      </InnerGrid>
      <Bumper
        css={{
          bg: "$darkBlue",
          display: "flex",
          "@max1024": { display: "none" },
        }}
      >
        <HeroButton data={props.resumeApplication} />
      </Bumper>
    </Wrapper>
  );
};

export default ApplyOnlineHero;
