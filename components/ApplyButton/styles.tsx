import { styled } from "@styles/stitches";
import { Text } from "@components/common";

const ButtonWrapper = styled("a", {
  cursor: "pointer",
  zIndex: 1,
  textDecoration: "none",
  backgroundColor: "$navy",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  width: "48px",
  height: "207px",
  transition: "1s",
  "@min768": {
    width: "48px",
    height: "260px",
    transition: "1s",
  },
  "@min1024": {
    width: "48px",
    height: "257px",
    transition: "1s",
  },
  "@min1440": {
    width: "56px",
    height: "276px",
    transition: "1s",
  },
  "@min1920": {
    width: "80px",
    height: "400px",
    transition: "1s",
  },
  // "@max1024": {
  //   position: "absolute",
  //   bottom: 0,
  //   right: 0,
  //   height: "40%",
  //   width: "40px",
  // },
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
    fontSize: "$bodyXSmall",
    lineHeight: "$large",
    fontWeight: "$medium",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    letterSpacing: "0.145em",
    paddingLeft: "20px",
    "@min1024": {
      fontSize: "$bodySmall",
      lineHeight: "$large",
      paddingLeft: "24px",
    },
    "@min1440": {
      fontSize: "$buttonRegular",
      lineHeight: "$large",
      paddingLeft: "24px",
    },
    "@min1920": {
      fontSize: "$buttonRegular",
      lineHeight: "$large",
      paddingLeft: "32px",
    },
  },
  svg: {
    transform: "rotate(90deg)",
  },
});

export { Button, ButtonWrapper };
