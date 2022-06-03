import { styled } from "@styles/stitches";

const Example = styled("div", {});
const AccordionContainer = styled("div", {
  width: "40%",

  "@media screen and (max-width: 768px)": {
    width: "100%",
  },
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "40px",
});

export { Example, AccordionContainer };
