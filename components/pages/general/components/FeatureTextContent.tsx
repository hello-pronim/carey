import { styled } from "@styles/stitches";
import React from "react";
import { Text, Button } from "@components/common";
import Image from "next/image";

export default function TextContent(props) {
  const ContentWrapper = styled("div", {
    display: "flex",
    "@max1024": {
      flexDirection: "column",
    },
    gridColumn: "2 / span 6",
    gridTemplateColumns: "repeat(12, 1fr)",
    columnGap: 62,
  });
  const ButtonWrapper = styled("div", {
    paddingTop: "2rem",
  });

  const ImageWrapper = styled("div", {
    height: "100%",
    span: {
      height: "100% !important",
      width: "100% !important",
    },
    "@max1024": {
      paddingTop: "34px",
    },
  });

  const RightSection = styled("div", {
    display: "flex",
    order: props.layout === "leftImageRightText" ? 2 : 1,
    width: "100%",
    height: "100%",
    paddingTop: "100px",
    flexDirection: "column",
    [`>${Text}`]: {
      paddingTop: "24px",
    },
  });
  const LeftSection = styled("div", {
    width: "100%",
    order: props.layout === "leftImageRightText" ? 1 : 2,
    height: "100%",
  });

  const studentImage = props?.featuredPanel?.[0]?.imageOfStudent?.[0];

  return (
    <ContentWrapper>
      <RightSection {...props}>
        <Text variant="Heading-xSmall">{props.overHeadline}</Text>
        <Text variant="Body-xxLarge">{props.headline}</Text>
        <Text variant="Body-Regular">{props.contentText}</Text>
        {props.buttonLabel && (props.buttonUrl || props.buttonLink?.[0]?.uri) && (
          <ButtonWrapper>
            <Button
              href={props.buttonLink?.[0]?.uri || props.buttonUrl}
              label={props.buttonLabel}
              arrow={true}
            />
          </ButtonWrapper>
        )}
      </RightSection>

      <LeftSection>
        <ImageWrapper>
          <Image
            alt="principal"
            width={studentImage?.width}
            height={studentImage?.height}
            layout="responsive"
            objectFit="cover"
            priority
            src={studentImage?.url}
          />
        </ImageWrapper>
      </LeftSection>
    </ContentWrapper>
  );
}
