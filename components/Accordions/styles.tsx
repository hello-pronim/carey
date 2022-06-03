import { styled } from "@styles/stitches";
import { motion } from "framer-motion";
import { theme } from "@styles/stitches";

const AccordionItem = styled("div", {
  width: "100%",
});

const Div = styled(motion.div, {});

const Title = styled("div", {
  fontSize: "$headingSmall",
  fontWeight: 500,
  "@media screen and (max-width: 1440px)": {
    fontSize: "$headingXSmall",
  },
  marginLeft: "24px",
});

const ContentSecondBlock = styled("div", {
  padding: "2.5rem",
  background: "#FFFFFF",
  marginTop: "56px",
});

const Number = styled("span", {
  padding: "10px 16px 6px 16px",
  borderRadius: "100%",
  border: "1px solid #051B3F",
});

const Dot = styled("div", {
  padding: "3px",
  borderRadius: "100%",
  border: "1px solid",
  backgroundColor: "#051B3F",
});

const TitleWrraper = styled("div", {
  display: "flex",
  alignItems: "center",
  "&:hover": {
    span: {
      backgroundColor: "#051B3F",
      color: "white",
    },
  },
});

const ButtonWrapper = styled("div", {
  paddingTop: "2rem",
});

const AccordionTitle = styled("div", {
  color: "#051B3F",
  display: "flex",
  fontFamily: `${theme.fonts.poppins}`,
  flexDirection: "row",
  justifyContent: "space-between",
  cursor: "pointer",
  backgroundColor: "transparent",
  padding: "1rem",
});

const AccordionContent = styled(motion.div, {
  fontFamily: "$poppins",
  fontWeight: "400px",
  fontSize: "$bodyRegular",
  "@media screen and (max-width: 1440px)": {
    fontSize: "16px",
  },
  lineHeight: "160%",
  letterSpacing: "0.01em",
  color: "#051B3F",
  padding: "1rem",
  marginLeft: "60px",
});

export {
  AccordionItem,
  AccordionTitle,
  AccordionContent,
  Div,
  ButtonWrapper,
  Number,
  TitleWrraper,
  Title,
  ContentSecondBlock,
  Dot,
};
