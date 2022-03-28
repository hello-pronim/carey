import { styled } from "@styles/stitches";

const Container = styled("div", {
  position: "relative",
  margin: "0 auto",
  boxSizing: "border-box",
  maxWidth: 2560,
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  columnGap: "16px",
  px: "16px",
  "@min600": {
    gridTemplateColumns: "repeat(6, 1fr)",
    px: "40px",
  },
  "@min768": {
    gridTemplateColumns: "repeat(12, 1fr)",
    px: "56px",
  },
  "@min1024": {
    gridTemplateColumns: "repeat(12, 1fr)",
    columnGap: "24px",
    px: "80px",
  },
  "@min1440": {
    gridTemplateColumns: "repeat(12, 1fr)",
    columnGap: "48px",
    px: "80px",
  },
  "@min1660": {
    gridTemplateColumns: "repeat(12, 1fr)",
    columnGap: "40px",
  },
  "@min1920": {
    gridTemplateColumns: "repeat(12, 1fr)",
    px: "96px",
  },
});

export default Container;
