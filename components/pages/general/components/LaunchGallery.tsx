import React from "react";
import { styled } from "@styles/stitches";
import { Text } from "@components/common";
import { Container } from "@components/common";
import { Button } from "@components/common";

const LaunchGallery = (props) => {
  const ContentContainer = styled("div", {
    display: "grid",
    alignItems: "center",
    "@max480": {
      gap: "16px",
      gridTemplateColumns: "1fr",
      gridColumn: "1 / span 6",
    },
    "@min480": {
      gap: "16px",
      gridTemplateColumns: "1fr",
      gridColumn: "1 / span 6",
    },
    "@min1024": {
      gridTemplateColumns: "1fr",
      gridColumn: "2 / span 12",
    },
    "@min1440": {
      gridTemplateColumns: "1fr 1fr",
      gridColumn: "1 / span 10",
    },
    "@min1920": {
      gridTemplateColumns: "1fr 1fr",
      gridColumn: "2 / span 8",
    },
  });

  return (
    <Container>
      <ContentContainer>
        <Text variant={"Heading-Large"}>{props?.galleryTitle}</Text>
        <Button
          arrow
          label={props?.buttonLabel}
          type="outline"
          scale="md"
          href={"/"}
        />
      </ContentContainer>
    </Container>
  );
};

export default LaunchGallery;
