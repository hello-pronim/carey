import { styled } from "@styles/stitches";

const BreadCrumbWrapper = styled("div", {
  pt: 56,
  pb: 0,
  "@min1024": {
    gridColumn: "2 / span 10",
    pb: 0,
  },
});

const ImageWrapper = styled("div", {
  gridColumn: "1 / span 4",
});
const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 48,
});

export { BreadCrumbWrapper, ImageWrapper, Wrapper };
