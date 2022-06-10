import { Button } from "@components/common";
import { styled } from "@stitches/react";
import React from "react";

export default function CtaButton(props) {
  const ButtonWrapper = styled("div", {
    display: "flex",
    gridColumn: "2 / span 6",
    gridTemplateColumns: "repeat(12, 1fr)",
    columnGap: 62,
    paddingTop: "2rem",
  });

  return (
    <>
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
    </>
  );
}
