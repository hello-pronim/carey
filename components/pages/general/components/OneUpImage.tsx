import React from "react";
import { styled } from "@styles/stitches";
import { Image, Container } from "@components/common";

const ImageWrapper = styled("div", {
  position: "relative",
  width: "100%",
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

const OneUpImage = ({ __typename, image1, ...props }) => {
  const [image1src] = image1;
  if (!image1src?.url) return null;
  return (
    <Container>
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
    </Container>
  );
};

export default OneUpImage;
