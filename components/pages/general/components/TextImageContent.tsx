import { styled } from "@styles/stitches";
import React from "react";
import { Text } from "@components/common";
import Image from "next/image";

export default function TextImageContent(props) {
  const ContentWrapper = styled("div", {
    display: "flex",
    "@max1024": {
      flexDirection: "column",
    },
    gridColumn: "2 / span 6",
    gridTemplateColumns: "repeat(12, 1fr)",
    columnGap: 62,
  });

  const ImageWrapper = styled("div", {
    height: "100%",
    span: {
      height: "100% !important",
      width: "100% !important",
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
    width: props.imageAspect === "portrait" ? "50%" : "100%",
    order: props.layout === "leftImageRightText" ? 1 : 2,
    height: "100%",
  });

  return (
    <ContentWrapper>
      <RightSection {...props}>
        <Text
          variant="Body-xxLarge"
          dangerouslySetInnerHTML={{
            __html: props.bodyText,
          }}
        />
      </RightSection>

      <LeftSection>
        <ImageWrapper>
          <Image
            alt="principal"
            width={500}
            height={500}
            layout="responsive"
            objectFit="cover"
            priority
            src={props?.image?.[0].url}
          />
        </ImageWrapper>
      </LeftSection>
    </ContentWrapper>
  );
}
