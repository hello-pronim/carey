import React from "react";
import { styled } from "@styles/stitches";
import { Image, Container } from "@components/common";
import { Text } from "@components/common";

const Wrapper = styled("div", {
  gridColumn: "1 / span 2",
  "@min768": {
    gridColumn: "1 / span 7",
  },
  "@min1024": {
    gridColumn: "2 / span 10",
  },
  "@min1440": {
    gridColumn: "1 / span 8",
  },
  "@min1920": {
    gridColumn: "2 / span 7",
  },
  boxSizing: "border-box",
});

const CaptionWrapper = styled("div", {
  pt: 8,
  "@min1024": {
    pt: 16,
  },
});

const ImageWrapper = styled("div", {
  position: "relative",
  width: "100%",
  overflow: "hidden",

  maxHeight: 327,
  "@min480": {
    maxHeight: 460,
  },
  "@min768": {},
  "@min1024": {
    maxHeight: 465,
  },
  "@min1440": {
    maxHeight: 520,
  },
  "@min1920": {
    maxHeight: 600,
  },
  boxSizing: "border-box",
});

const OneUpImage = ({ __typename, image1, ...props }) => {
  const [image1src] = image1;
  if (!image1src?.url) return null;
  return (
    <Container>
      <Wrapper
        id={
          props?.jumpToToggle?.[0]?.available &&
          props?.jumpToToggle?.[0]?.anchorSlug
            ? props?.jumpToToggle?.[0]?.anchorSlug
            : null
        }
      >
        <ImageWrapper>
          <Image
            alt={props.captionImage1}
            src={image1src.url}
            width={image1src.width}
            height={image1src.height}
            enableSkeleton={true}
            layout="responsive"
            objectFit="cover"
          />
        </ImageWrapper>
        {props.captionImage1 && (
          <CaptionWrapper>
            <Text css={{ color: "$navy700" }} variant="Body-xxSmall">
              {props.captionImage1}
            </Text>
          </CaptionWrapper>
        )}
      </Wrapper>
    </Container>
  );
};

export default OneUpImage;
