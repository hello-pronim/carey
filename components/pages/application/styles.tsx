import { styled } from "@styles/stitches";

const LeftContent = styled("div", {
  gridColumn: "2 / span 4",
  pt: 70,
});

const RightContent = styled("div", {
  gridColumn: "9 / span 3",
});

const Content = styled("div", {
  background: "$white",
  p: 30,
  mt: 150,
});

const Div = styled("div", {});

export { LeftContent, RightContent, Content, Div };
