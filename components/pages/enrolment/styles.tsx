import { styled } from "@styles/stitches";

const LeftContent = styled("div", {
  gridColumn: "2 / span 7",
  pt: 55,
});

const RightContent = styled("div", {
  gridColumn: "10 / span 3",
  // "@max768": {
  //   gridColumn: "1",
  // },
});

const Div = styled("div", {});

export { LeftContent, RightContent, Div };
