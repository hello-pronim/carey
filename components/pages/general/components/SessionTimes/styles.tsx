import { styled } from "@styles/stitches";

//styles
export const Wrapper = styled("div", {
  display: "flex",
  gridColumn: "2 / span 6",
  flexDirection: "column",
  rowGap: 48,
});

export const Breakout = styled("div", {
  bg: "$white",
  p: 44,
  borderRadius: 4,
});
export const CTAPanel = styled("div", {
  p: 24,
  my: 24,
  bg: "$tintYellow",
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
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
