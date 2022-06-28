import React from "react";
import Image from "next/image";
import HeroButton from "./HeroButton";
import QuickLinksMenu from "./quickLinksMenu";
import {
  Actions,
  ActionsWrapper,
  Wrapper,
  InnerGrid,
  Bumper,
  DisplayContent,
  DisplayImageWrapper,
  DisplayVideoWrapper,
  ContentBox,
  HeroText,
  MobileActions,
  MobileActionsWrapper,
} from "./styles";

const Display = (props) => {
  return (
    <Wrapper>
      <Bumper css={{ bg: "$crestYellow" }} />
      <InnerGrid>
        <DisplayContent>
          {/* <Text as="h1" variant="Display-Large">
            {props?.props?.scriptTitle || props?.props?.[0].bannerText}
          </Text> */}
          <HeroText as="h1">
            {props?.props?.scriptTitle || props?.props?.[0].bannerText}
          </HeroText>
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
        <MobileActions>
          <MobileActionsWrapper>
            <ContentBox>
              <QuickLinksMenu data={props?.props} />
            </ContentBox>
            <Bumper
              css={{
                display: "flex",
                flex: "none",
              }}
            >
              <HeroButton data={props.applyNow} />
            </Bumper>
          </MobileActionsWrapper>
        </MobileActions>
      </InnerGrid>
      <Actions>
        <ActionsWrapper>
          <ContentBox>
            <QuickLinksMenu data={props?.props} />
          </ContentBox>
          <Bumper
            css={{
              display: "flex",
            }}
          >
            <HeroButton data={props.applyNow} />
          </Bumper>
        </ActionsWrapper>
      </Actions>
    </Wrapper>
  );
};

export default Display;
