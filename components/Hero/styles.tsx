import { styled } from "@styles/stitches";
import { container } from "@components/common/container/container";

const Wrapper = styled(container.outer, {
  minHeight: 450,
});

const InnerGrid = styled(container.grid, {
  position: "relative",
  bg: "$darkBlue",
  mx: "auto",
});

// Mimics the spacing of the margin usually used for the inner grid.
// The bumpers are used instead of the margins as 2 different colours
// are displayed either side of the grid in the design, so a singular bg color wasn't viable.
const Bumper = styled("div", {
  display: "flex",
  flexGrow: 1,
  minWidth: "24px",
  "@min768": {
    minWidth: "32px",
  },
  "@min1024": {
    minWidth: "40px",
  },
  "@min1440": {
    minWidth: "56px",
  },
  "@min1920": {
    minWidth: "80px",
  },
});

const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  zIndex: 1,
  p: 44,
  rowGap: 24,
  gridColumn: "1 / span 2",
  "@min768": {
    gridColumn: "1 / span 3",
  },
  "@min1024": {
    gridColumn: "1 / span 5",
  },
  "@min1200": {
    gridColumn: "1 / span 4",
  },
  "h6, h1, h2": {
    margin: "unset",
    color: "$white",
  },
});

const DisplayContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  zIndex: 1,
  p: 44,
  rowGap: 24,
  gridRow: 1,
  gridColumn: "1 / span 2",
  "@min768": {
    gridColumn: "1 / span 6",
  },
  "@min1024": {
    gridColumn: "1 / span 12",
  },
  "h6, h1, h2": {
    margin: "unset",
    color: "$white",
  },
});

const CTAWrapper = styled("div", {
  mt: 24,
});

const ImageWrapper = styled("div", {
  height: "100%",
  gridColumn: "1 / span 2",
  "@min768": {
    gridColumn: "4 / span 3",
  },
  "@min1024": {
    gridColumn: "6 / span 7",
  },
  "@min1200": {
    gridColumn: "5 / span 8",
  },
  span: {
    height: "100% !important",
  },
});

const VideoWrapper = styled("div", {
  height: "542px",
  gridColumn: "1 / span 2",
  "@min768": {
    gridColumn: "4 / span 3",
  },
  "@min1024": {
    gridColumn: "6 / span 7",
  },
  "@min1200": {
    gridColumn: "5 / span 8",
  },
  span: {
    height: "100% !important",
  },
  video: {
    width: "100%",
    maxHeight: "100%",
  },
});

const DisplayImageWrapper = styled("div", {
  height: "100%",
  gridColumn: "1 / span 2",
  gridRow: 1,
  "@min768": {
    gridColumn: "1 / span 6",
  },
  "@min1024": {
    gridColumn: "1 / span 12",
  },
  span: {
    height: "100% !important",
  },
});

const Crest = styled("div", {
  display: "none",
  right: 40,
  "@min768": {
    display: "block",
  },
  "@min1024": {
    right: 80,
  },
  zIndex: 0,
  position: "absolute",

  height: "100%",
  width: "449px",
  span: {
    height: "100% !important",
  },
});
const Div = styled("div", {});

export {
  Wrapper,
  InnerGrid,
  Bumper,
  Content,
  CTAWrapper,
  Crest,
  ImageWrapper,
  DisplayContent,
  DisplayImageWrapper,
  Div,
  VideoWrapper,
};
