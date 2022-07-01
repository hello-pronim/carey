import { styled } from "@styles/stitches";

//styles
export const Wrapper = styled("div", {
  display: "flex",
  gridColumn: "1 / span 2",
  "@min768": {
    gridColumn: "1 / span 7",
  },
  "@min1024": {
    gridColumn: "2 / span 10",
  },
  "@min1440": {
    gridColumn: "1 / span 7",
  },
  "@min1920": {
    gridColumn: "2 / span 6",
  },
  flexDirection: "column",
  rowGap: 48,
});

export const Breakout = styled("div", {
  bg: "$white",
  p: 36,
  "@min768": {
    p: 44,
  },
  borderRadius: 4,
});
export const CTAPanel = styled("div", {
  p: 24,
  my: 24,
  bg: "$tintYellow",
  justifyContent: "space-between",

  display: "flex",
  rowGap: 24,
  flexDirection: "column",
  "@min600": {
    alignItems: "center",
    rowGap: "unset",
    columnGap: 24,
    flexDirection: "row",
  },
});
export const EntryWrapper = styled("div", {
  width: "100%",
});
export const Content = styled("div", {
  display: "flex",
  flexFlow: "column",
  maxWidth: 350,
  rowGap: 24,
});
export const Entry = styled("div", {
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flex: 1,
  py: 24,
  borderBottom: "1px solid $crestBlue300",
  "&:first-of-type": {
    pt: 0,
  },
  "&:last-of-type": {
    pb: 0,
    border: "none",
  },
});
