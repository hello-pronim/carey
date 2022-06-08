import { styled } from "@styles/stitches";

const BreadCrumbWrapper = styled("div", {
  pl: "32px",
  pt: 92,
  pb: 0,
  "@min1024": {
    maxWidth: "2560px",
    pl: "27px",
    pb: 0,
  },
});

export { BreadCrumbWrapper };
