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
const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  a: {
    "&:last-child": {
      marginBottom: 0,
    },
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
    padding: "180px 200px",
    gap: 24,
  },
});

const Heading = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
});

const HeadingText = styled(Text, {
  color: "$navy",
  fontSize: "$headingXSmall",
  lineHeight: "$large",
  letterSpacing: "$regular",
});

const ImageWrapper = styled("div", {
  position: "relative",
  display: "block",
  flex: 1,
  span: {
    height: "100% !important",
  },
});

const PrimaryText = styled("div", {
  fontSize: "$bodyXXLarge",
  fontWeight: "$medium",
  lineHeight: "$large",
  color: "$navy",
  letterSpacing: "$tight",
});

const SecondaryText = styled("div", {
  fontSize: "$bodyRegular",
  lineHeight: 1.6,
  color: "$navy",
  letterSpacing: "$large",
});

const TextWidgetWrapper = styled("div", {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Wrapper = styled("div", {
  boxSizing: "border-box",
  bg: "$white",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  variants: {
    layout: {
      rightImageLeftText: {
        "@min768": {
          flexDirection: "row",
        },
      },
      leftImageRightText: {
        "@min768": {
          flexDirection: "row-reverse",
        },
      },
    },
  },
});

export {
  ActionItem,
  ActionsWrapper,
  Container,
  Content,
  Heading,
  HeadingText,
  ImageWrapper,
  PrimaryText,
  SecondaryText,
  TextWidgetWrapper,
  Wrapper,
};
