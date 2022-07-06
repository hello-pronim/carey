import { styled } from "@styles/stitches";
import { container } from "@components/common/container/container";

const Wrapper = styled(container.outer, {
  position: "relative",
  minHeight: 550,
  "@min768": {
    minHeight: 470,
  },
  "@min1440": {
    minHeight: 450,
  },
  "@min1920": {
    minHeight: 600,
  },
});

const InnerGrid = styled(container.grid, {
  position: "relative",
  bg: "$darkBlue",
  mx: "unset",
});

// Mimics the spacing of the margin usually used for the inner grid.
// The bumpers are used instead of the margins as 2 different colours
// are displayed either side of the grid in the design, so a singular bg color wasn't viable.
const Bumper = styled("div", {
  display: "flex",
  width: "100%",
  maxWidth: "24px",
  "@min768": {
    maxWidth: "32px",
  },
  "@min1024": {
    maxWidth: "40px",
  },
  "@min1440": {
    maxWidth: "56px",
  },
  "@min1920": {
    maxWidth: "80px",
  },
});

const Content = styled("div", {
  display: "flex",
  zIndex: 1,
  width: "100%",
  p: 24,
  boxSizing: "border-box",
  rowGap: 32,
  div: { display: "flex", flexDirection: "column", rowGap: 32 },
  gridColumn: "1 / span 2",
  gridRow: 1,
  height: "max-content",
  alignSelf: "flex-end",
  alignItems: "flex-start",
  columnGap: "1em",
  "*": { flex: 1 },
  bg: "linear-gradient(142deg, rgba(21,72,121,1) 0%, rgba(1,101,166,1) 15%, rgba(38,56,92,1) 97%)",
  "@min768": {
    p: 32,
    gridColumn: "1 / span 7",
  },
  "@min1024": {
    p: 40,
    gridColumn: "1 / span 8",
  },
  "@min1440": {
    bg: "unset",
    alignSelf: "flex-start",
    flexDirection: "column",
    gridColumn: "1 / span 4",
  },
  "@min1920": {
    p: 56,
  },
  "h6, h1, h2, p": {
    margin: "unset",
    color: "$white",
  },
});

const ImageWrapper = styled("div", {
  gridRow: 1,
  span: {
    height: "100% !important",
  },
  gridColumn: "1 / span 2",
  "@min768": {
    gridColumn: "1 / span 8",
  },
  "@min1024": {
    gridColumn: "1 / span 12",
  },
  "@min1440": {
    gridColumn: "5 / span 8",
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

export { Wrapper, InnerGrid, Bumper, Content, Crest, ImageWrapper };
