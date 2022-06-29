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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  height: "340px",
  transition: "all 0.5s ease",
  "@min768": {
    flex: 1,
    height: "540px",
  },
});

const AccordionContent = styled("div", {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  maxWidth: "220px",
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
  AccordionContent,
};
