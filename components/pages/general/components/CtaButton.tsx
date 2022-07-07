import React from "react";
import { Button, Container } from "@components/common";
import { useGetFullPath } from "@hooks/useGetFullPath";
import { styled } from "@styles/stitches";

export default function CtaButton(props) {
  const getFullPath = useGetFullPath();

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
      {props?.buttonLabel && (props?.buttonUrl || props?.buttonLink?.[0]) && (
        <ButtonWrapper
          id={
            props?.jumpToToggle?.[0]?.available &&
            props?.jumpToToggle?.[0]?.anchorSlug
              ? props?.jumpToToggle?.[0]?.anchorSlug
              : null
          }
        >
          <Button
            arrow={props?.buttonArrow}
            label={props.buttonLabel}
            theme={props?.buttonTheme}
            type={props?.buttonType}
            scale={props?.buttonSize}
            href={props.buttonUrl || getFullPath(props?.buttonLink?.[0])}
          />
        </ButtonWrapper>
      )}
    </Container>
  );
}
