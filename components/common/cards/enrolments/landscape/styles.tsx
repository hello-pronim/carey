import { styled } from "@styles/stitches";

const ActionWrapper = styled("div", {});
const Card = styled("div", {
  display: "flex",
  flexDirection: "column-reverse",
  position: "relative",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  objectFit: "cover",
  objectPosition: "bottom",
  boxShadow: "none",
  transition: "box-shadow 0.08s ease-out 0.08s",
  "@min768": {
    flexDirection: "row",
    height: 400,
  },
  "&:hover": {
    boxShadow: "inset 0px 30px 120px 60px rgb(255 204 0 / 20%)",
  },
});
const CMarkImage = styled("div", {
  position: "absolute",
  bg: "url('/assets/img/graphic-c-2.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
  objectFit: "cover",
  width: "30%",
  height: "100%",
  left: 0,
  top: "50%",
  transform: "translate(0, -50%)",
  "@min1024": {
    width: "30%",
    height: "100%",
  },
  "@min1440": {
    width: "25%",
    height: "100%",
  },
});
const Description = styled("span", {
  gridColumn: "1 / span 12",
  color: "$navy",
  fontSize: "$bodyRegular",
  lineHeight: "$large",
  fontWeight: "$medium",
  letterSpacing: "$regular",
  "@min1440": {
    fontSize: "$bodyXLarge",
    lineHeight: "$large",
    fontWeight: "$medium",
    gridColumn: "1 / span 12",
    letterSpacing: "$regular",
  },
  "@min1920": {
    fontSize: "$bodyXXLarge",
    lineHeight: "$large",
    fontWeight: "$medium",
    gridColumn: "1 / span 10",
    letterSpacing: "$roomy",
  },
});
const DescriptionWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
});
const Heading = styled("span", {
  color: "$navy",
  fontSize: "$bodySmall",
  lineHeight: "$large",
  letterSpacing: "$regular",
  "@min1440": {
    fontSize: "$headingXSmall",
  },
});
const HeadingWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 18,
  "@min1024": {
    gap: 16,
  },
  "@min1440": {
    gap: 24,
  },
});
const ImageWrapper = styled("div", {
  position: "relative",
  width: "100%",
  height: "100%",
  margin: "auto",
  overflow: "hidden",
  "@min1440": {
    width: "80%",
    height: "100%",
  },
  "@min1920": {
    width: "60%",
    height: "100%",
  },
  "& >span": {
    height: "100%!important",
  },
});
const LeftContainer = styled("div", {
  position: "relative",
  height: "100%",
  paddingLeft: "40%",
  "@min1024": {
    paddingLeft: "40%",
  },
  "@min1400": {
    paddingLeft: "30%",
  },
});
const LeftWrapper = styled("div", {
  flex: 1,
});
const RightContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: 24,
  gap: 24,
  "@min1024": {
    padding: 24,
    paddingLeft: 0,
    gap: 16,
  },
  "@min1440": {
    padding: 48,
    paddingLeft: 0,
    gap: 24,
  },
});
const RightWrapper = styled("div", {
  flex: 1,
});

export {
  ActionWrapper,
  CMarkImage,
  Card,
  Description,
  DescriptionWrapper,
  Heading,
  HeadingWrapper,
  ImageWrapper,
  LeftContainer,
  LeftWrapper,
  RightContainer,
  RightWrapper,
};
