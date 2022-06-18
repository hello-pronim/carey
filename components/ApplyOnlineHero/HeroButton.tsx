import React from "react";
import HeroButtonArrow from "@components/common/icons/HeroArrow";
import { styled } from "@styles/stitches";
import { Text } from "@components/common";

export default function HeroButton({ data }) {
  const ButtonWrraper = styled("a", {
    cursor: "pointer",
    zIndex: 1,
    textDecoration: "none",
    backgroundColor: "#051B3F",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    height: "50%",
    width: "24px",
    transition: "1s",
    "@min768": {
      width: "32px",
      transition: "1s",
    },
    "@min1024": {
      width: "40px",
      transition: "1s",
    },
    "@min1440": {
      width: "56px",
      transition: "1s",
    },
    "@min1920": {
      width: "80px",
      transition: "1s",
    },
    "@max1024": {
      position: "absolute",
      bottom: 0,
      right: 0,
      height: "40%",
      width: "40px",
    },
    "&:hover": {
      backgroundColor: "#FFCC00",
      transition: "1s",
      [` ${Text}`]: {
        color: "#051B3F",
      },
      svg: {
        path: {
          fill: "#051B3F",
        },
      },
    },
  });

  const Button = styled("div", {
    display: "flex",
    alignItems: "center",
    transform: "rotate(270deg)",
    [`> ${Text}`]: {
      color: "white",
      whiteSpace: "nowrap",
      paddingLeft: "20px",
      textTransform: "uppercase",
      letterSpacing: "0.145em",
    },
    svg: {
      transform: "rotate(90deg)",
    },
  });

  return (
    <>
      {data.buttonLabel && (data.buttonUrl || data.buttonLink?.[0]?.uri) && (
        <ButtonWrraper href={data?.buttonLink?.[0]?.uri || data.buttonUrl}>
          <Button>
            <HeroButtonArrow />
            <Text variant={"Heading-xSmall"}>{data?.buttonLabel}</Text>
          </Button>
        </ButtonWrraper>
      )}
    </>
  );
}
