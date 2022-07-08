import React from "react";
import Image from "next/image";
import ApplyButton from "@components/ApplyButton";

import QuickLinksMenu from "./quickLinksMenu";
import FeaturePanel from "./featurePanel";
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
          <HeroText
            as="h1"
            dangerouslySetInnerHTML={{
              __html:
                props?.props?.scriptTitle || props?.props?.[0]?.bannerText,
            }}
          />
        </DisplayContent>
        {(props?.props?.videoUrl || props?.props?.[0]?.videoUrl) && (
          <DisplayVideoWrapper>
            <video
              preload="auto"
              loop={true}
              muted={true}
              autoPlay={true}
              playsInline={true}
            >
              <source
                src={props?.props?.videoUrl || props?.props?.[0]?.videoUrl}
                type="video/mp4"
                media="(min-device-pixel-ratio:2), (-webkit-min-device-pixel-ratio:2), (min--moz-device-pixel-ratio:2), (-o-min-device-pixel-ratio:2)"
              />
            </video>
          </DisplayVideoWrapper>
        )}

        {props?.props?.image?.length &&
        !(props?.props?.videoUrl || props?.props?.[0]?.videoUrl) ? (
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

        {props?.props?.[0]?.backgroundImage[0] &&
        !(props?.props?.videoUrl || props?.props?.[0]?.videoUrl) ? (
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
              {props.props?.[0]?.quicklinks?.length ? (
                <QuickLinksMenu data={props?.props} />
              ) : (
                <FeaturePanel data={props?.props} />
              )}
            </ContentBox>
            <Bumper
              css={{
                display: "flex",
                flex: "none",
              }}
            >
              <ApplyButton data={props.applyNow} />
            </Bumper>
          </MobileActionsWrapper>
        </MobileActions>
      </InnerGrid>
      <Actions>
        <ActionsWrapper>
          <ContentBox>
            {props.props?.[0]?.quicklinks?.length ? (
              <QuickLinksMenu data={props?.props} />
            ) : (
              <FeaturePanel data={props?.props} />
            )}
          </ContentBox>
          <Bumper
            css={{
              display: "flex",
            }}
          >
            <ApplyButton data={props.applyNow} />
          </Bumper>
        </ActionsWrapper>
      </Actions>
    </Wrapper>
  );
};

export default Display;
