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

const IconWrapper = styled("div", {});
const AccordionWrapper = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  "@min768": {
    flexDirection: "row",
  },
});

const AccordionItem = styled("div", {
  position: "relative",
  height: "340px",
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  overflow: "hidden",
  transition: "all 0.5s ease",
  "@min768": {
    flex: 1,
    height: "540px",
  },
});

const AccordionImage = styled("div", {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
});

const AccordionContent = styled("div", {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  maxWidth: "220px",
  position: "relative",
  "@min1024": {
    maxWidth: "150px",
  },
});

export {
  Wrapper,
  InnerGrid,
  IconWrapper,
  AccordionWrapper,
  AccordionItem,
  AccordionImage,
  AccordionContent,
};
