import { Button, Container } from "@components/common";
import { styled } from "@styles/stitches";
import React from "react";

export default function CtaButton(props) {
  const ButtonWrapper = styled("div", {
    display: "flex",
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
  });

  return (
    <Container>
      {props?.buttonLabel && (props?.buttonUrl || props?.buttonLink?.[0]?.uri) && (
        <ButtonWrapper>
          <Button
            arrow={props?.buttonArrow}
            label={props.buttonLabel}
            theme={props?.buttonTheme}
            type={props?.buttonType}
            scale={props?.buttonSize}
            href={props?.buttonLink?.[0]?.uri || props.buttonUrl}
          />
        </ButtonWrapper>
      )}
    </Container>
  );
}
