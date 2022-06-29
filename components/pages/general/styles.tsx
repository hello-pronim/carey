import { styled } from "@styles/stitches";

const BreadCrumbWrapper = styled("div", {
  pt: 56,
  pb: 0,
  "@min1024": {
    gridColumn: "2 / span 10",
    pb: 0,
  },
});

export { BreadCrumbWrapper };
