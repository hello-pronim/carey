import { styled } from "@styles/stitches";

const LeftContent = styled("div", {
  gridColumn: "2 / span 5",
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

const VisibleMobile = styled("div", {
  display: "none",
  "@max768": {
    display: "block",
  },
});

const HiddenMobile = styled("div", {
  display: "none",
  "@min768": {
    display: "block",
  },
});

const Div = styled("div", {});

export { LeftContent, RightContent, Content, Div, HiddenMobile, VisibleMobile };
