import { styled } from "@styles/stitches";

const ActiveLinkText = styled("span", {
  color: "$navy",
  fontSize: "12px",
  lineHeight: "$large",
  letterSpacing: "$regular",
  "@min768": {
    fontSize: "14px",
  },
});

const BottomBarInner = styled("div", {
  // width: "100%",
  display: "flex",
  alignItems: "center",
  pt: 130,
  pl: 19,
});

const DotSeparator = styled("span", {
  color: "$crestBlue500",
  fontSize: "$bodyXSmall",
  lineHeight: "$large",
  letterSpacing: "$regular",
});

const EllipsisDots = styled("div", {
  display: "block",
  color: "$crestBlue500",
  fontSize: "$bodyXSmall",
  lineHeight: "$large",
  letterSpacing: "$regular",
  "@min768": {
    display: "none",
  },
});

const LinkWrapper = styled("div", {
  display: "none",
  alignItems: "center",
  columnGap: "4px",
  mt: 16,
  paddingRight: "4px",
  fontSize: "12px",
  color: "$navy",
  "&:first-child": {
    display: "flex",
    span: {
      display: "none",
      "@min768": {
        display: "block",
      },
    },
  },
  "&:last-child": {
    display: "flex",
  },
  "@min768": {
    display: "flex",
    fontSize: "14px",
    columnGap: "4px",
    paddingRight: "4px",
    span: {
      display: "block",
    },
  },
  svg: {
    transition: "ease all 0.3s",
    width: "12px",
    "@min768": {
      width: "20px",
    },
  },
  a: {
    textDecoration: "none",
    fontSize: "12px",
    lineHeight: "$large",
    color: "inherit",
    "@min768": {
      fontSize: "14px",
    },
    "&:hover": {
      textDecoration: "underline",
      lineHeight: "$medium",
    },
    "&:focus": {
      color: "$crestBlue",
      lineHeight: "$large",
      letterSpacing: "$regular",
      textDecoration: "none",
    },
  },
});

export {
  ActiveLinkText,
  BottomBarInner,
  DotSeparator,
  EllipsisDots,
  LinkWrapper,
};
