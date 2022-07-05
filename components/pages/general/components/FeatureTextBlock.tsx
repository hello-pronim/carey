import { styled } from "@styles/stitches";
import React from "react";
import { Container, Text } from "@components/common";

const ContentWrapper = styled("div", {
  display: "flex",
  variants: {
    layout: {
      wide: {
        gridColumn: "1 / span 2",
        "@min768": {
          gridColumn: "1 / span 7",
        },
        "@min1024": {
          gridColumn: "2 / span 10",
        },
        "@min1440": {
          gridColumn: "1 / span 7",
        },
        "@min1920": {
          gridColumn: "2 / span 6",
        },
      },
      narrow: {
        gridColumn: "1 / span 2",
        "@min768": {
          gridColumn: "1 / span 4",
        },
        "@min1024": {
          gridColumn: "2 / span 6",
        },
        "@min1440": {
          gridColumn: "1 / span 4",
        },
        "@min1920": {
          gridColumn: "2 / span 4",
        },
      },
    },
    alignment: {
      left: {
        textAlign: "left",
      },
      center: {
        textAlign: "center",
      },
    },
  },
  defaultVariants: {
    alignment: "left",
  },
});

const FeatureTextBlock = ({
  featureLayout,
  featureTextAlignment,
  bodyText,
}) => {
  return (
    <Container>
      <ContentWrapper layout={featureLayout} alignment={featureTextAlignment}>
        <Text
          variant="Heading-Large"
          dangerouslySetInnerHTML={{
            __html: bodyText,
          }}
        />
      </ContentWrapper>
    </Container>
  );
};
export default FeatureTextBlock;
