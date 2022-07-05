import { styled } from "@styles/stitches";

const BreadCrumbWrapper = styled("div", {
  pt: 56,
  pb: 0,
  gridColumn: "1 / span 2",
  "@min768": {
    gridColumn: "1 / span 8",
    pb: 0,
  },
  "@min1024": {
    gridColumn: "2 / span 10",
    pb: 0,
  },
  "@min1440": {
    gridColumn: "1 / span 12",
    pb: 0,
  },
  "@min1920": {
    gridColumn: "2 / span 10",
    pb: 0,
  },
});

export { BreadCrumbWrapper };
