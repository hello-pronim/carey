import { styled } from "@styles/stitches";

const LeftContent = styled("div", {
  gridColumn: "2 / span 5",
  pt: 70,
  "@max1200": {
    gridColumn: "1",
    pt: 40,
  },
  // "@max768": {
  //   gridColumn: "1",
  //   pt: 40,
  // },
  // "@max1024": {
  //   gridColumn: "1",
  //   pt: 40,
  // },
  // "@max1440": {
  //   gridColumn: "1 / 6",
  // },
});

const RightContent = styled("div", {
  gridColumn: "9 / span 3",
  "@max1200": {
    gridColumn: "1",
  },
  // "@max768": {
  //   gridColumn: "1 / 6",
  // },
  // "@max1024": {
  //   // gridColumn: "2 / 6",

  // },
  // "@max1440": {
  //   gridColumn: "1",
  // },
});

const Content = styled("div", {
  background: "$white",
  p: 30,
  mt: 150,
  "@max768": {
    gridColumn: "1",
    mt: 80,
  },
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
