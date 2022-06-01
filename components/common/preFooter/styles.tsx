import { styled } from "@styles/stitches";
import { Text } from "@components/common";

const ActionItem = styled("div", {
  display: "flex",
  width: "100%",
  "@min480": {
    width: "auto",
  },
  "@min768": {
    width: "100%",
  },
  "@min1024": {
    width: "auto",
  },
  "@min1440": {
    width: "100%",
  },
  "@min1800": {
    width: "auto",
  },
  [`${Text}`]: {
    color: "$white",
  },
  a: {
    width: "100%",
  },
  "& >div": {
    width: "100%",
  },
});

const ActionsWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 24,
  "@min480": {
    flexDirection: "row",
  },
  "@min768": {
    flexDirection: "column",
  },
  "@min1024": {
    flexDirection: "row",
  },
  "@min1440": {
    flexDirection: "column",
  },
  "@min1800": {
    flexDirection: "row",
  },
});

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 24,
  flex: 1,
  padding: "48px 24px",
  "@min1024": {
    padding: 40,
  },
  "@min1440": {
    padding: "56px 24px 56px 56px",
    gap: 28,
  },
  "@min1920": {
    padding: 80,
    gap: 40,
  },
});

const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  "@min1024": {
    gap: 24,
  },
  "@min1440": {
    gap: 28,
  },
  "@min1920": {
    gap: 40,
  },
});

const Heading = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
});

const HeadingText = styled(Text, {
  color: "$white",
  fontSize: "$headingOverline",
  lineHeight: "$medium",
  fontWeight: "$semiBold",
  letterSpacing: "$spaced",
});

const IconsWrapper = styled("div", {
  position: "absolute",
  right: 0,
  display: "flex",
  alignItems: "center",
  gap: 18,
  a: {
    lineHeight: 1,
    cursor: "pointer",
  },
  svg: {
    path: {
      fill: "$white",
    },
  },
});

const ImageWrapper = styled("div", {
  display: "block",
  width: "100%",
  flex: 1,
  "@min768": { display: "none" },
  "@min1440": { display: "block" },
  "& img": {
    transition: "transform 0.2s ease-out 0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});

const Left = styled("div", {
  flex: 1,
});

const LinkWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 18,
  px: 24,
  "@min480": {
    justifyContent: "flex-start",
    px: 0,
  },
  "@min768": {
    justifyContent: "flex-start",
    px: 20,
  },
  "@min1024": {
    justifyContent: "flex-start",
    px: 0,
  },
  "@min1440": {
    justifyContent: "flex-start",
    px: 24,
  },
  "@min1800": {
    justifyContent: "flex-start",
    px: 0,
  },
  a: {
    color: "$white",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  svg: {
    path: {
      fill: "$white",
    },
  },
});

const PreFooterWidget = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  backgroundColor: "$crestBlue",
  variants: {
    position: {
      left: {
        backgroundColor: "$crestBlue",
      },
      right: {
        backgroundColor: "$darkBlue",
      },
    },
  },
  "@min768": { flexDirection: "row" },
});

const Right = styled("div", {
  flex: 1,
});

const Description = styled("div", {
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  fontSize: 18,
  lineHeight: 1.6,
  color: "$white",
  "@min1440": {
    fontSize: 22,
  },
});

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  "@min768": {
    flexDirection: "row",
  },
});

export {
  ActionItem,
  ActionsWrapper,
  Container,
  Content,
  Description,
  Heading,
  HeadingText,
  IconsWrapper,
  ImageWrapper,
  Left,
  LinkWrapper,
  PreFooterWidget,
  Right,
  Wrapper,
};
