import { styled } from "@stitches/react";
import React from "react";
import { Text } from "@components/common";

export default function FeatureTextBlock(props) {
  const ContentWrapper = styled("div", {
    display: "flex",
    textAlign: props.featureTextAlignment === "left" ? "left" : "center",
    gridColumn: props.featureLayout === "wide" ? "2 / span 8" : "2 / span 6",
    gridTemplateColumns: "repeat(12, 1fr)",
  });
  return (
    <ContentWrapper {...props}>
      <Text
        variant="Heading-Large"
        dangerouslySetInnerHTML={{
          __html: props.bodyText,
        }}
      />
    </ContentWrapper>
  );
}
