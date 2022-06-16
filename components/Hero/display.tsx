import React from "react";
import {
  Wrapper,
  InnerGrid,
  Bumper,
  DisplayContent,
  DisplayImageWrapper,
  DisplayVideoWrapper,
  Div,
} from "./styles";
import { Text } from "@components/common";
import Image from "next/image";
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
            {props?.props?.scriptTitle || props?.props?.[0].bannerText}
          </Text>
        </DisplayContent>
        {(props?.props?.videoUrl || props?.props?.[0].videoUrl) && (
          <DisplayVideoWrapper>
            <video
              preload="auto"
              loop={true}
              muted={true}
              autoPlay={true}
              playsInline={true}
            >
              <source
                src={props?.props?.videoUrl || props?.props?.[0].videoUrl}
                type="video/mp4"
                media="(min-device-pixel-ratio:2), (-webkit-min-device-pixel-ratio:2), (min--moz-device-pixel-ratio:2), (-o-min-device-pixel-ratio:2)"
              />
            </video>
          </DisplayVideoWrapper>
        )}

        {props?.props?.image?.length ? (
          <DisplayImageWrapper>
            <Image
              alt="principal"
              src={props?.props?.[0].backgroundImage[0]?.url}
              width={props?.props?.image[0]?.width}
              height={props?.props?.image[0]?.height}
              layout="responsive"
              objectFit="cover"
              priority
            />
          </DisplayImageWrapper>
        ) : null}

        {props?.props?.[0]?.backgroundImage[0] ? (
          <DisplayImageWrapper>
            <Image
              alt="principal"
              src={props?.props?.[0].backgroundImage[0]?.url}
              width={props?.props?.[0].backgroundImage[0]?.width}
              height={props?.props?.[0].backgroundImage[0]?.height}
              layout="responsive"
              objectFit="cover"
              priority
            />
          </DisplayImageWrapper>
        ) : null}
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
