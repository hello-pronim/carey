import { styled } from "@styles/stitches";
import { keyframes } from "@stitches/react";
import * as Accordion from "@radix-ui/react-accordion";
import { CaretUpIcon } from "@radix-ui/react-icons";

const Div = styled("div", {});

const AccordionChevron = styled(CaretUpIcon, {
  transition: "transform 300ms",
  "[data-state=open] &": { transform: "rotate(180deg)" },
  color: "$navy",
});

const AccordionChevronWrapper = styled(AccordionChevron, {
  width: 32,
  height: 32,
  border: "solid 1px $darkBlue400",
  borderRadius: 50,
});

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledHeader = styled(Accordion.Header, {
  all: "unset",
  display: "flex",
  justifyContent: "center",
});

const StyledItem = styled(Accordion.Item, {
  overflow: "hidden",
  marginTop: 1,
  mb: 15,
  "&:first-child": {
    marginTop: 25,
  },
});

const StyledContent = styled(Accordion.Content, {
  overflow: "hidden",
  fontSize: 18,
  lineHeight: 1.5,
  color: "$navy",
  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
  mb: 15,
  pt: 15,
});

const StyledTrigger = styled(Accordion.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "none",
  padding: "0px 0px",
  boxSizing: "unset",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 18,
  lineHeight: 1,
  width: "100%",
  color: "$navy",
  "button, [type='button'], [type='reset'], [type='submit']": {
    border: "none",
    background: "transparent",
  },
});

const Divider = styled("hr", {
  mt: 20,
  mb: 20,
  background: "$navy200",
});

const ButtonWrap = styled("div", {
  mt: 20,
  mb: 50,
});

const AddButton = styled("div", {
  fontSize: 20,
  color: "$navy",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 44,
  height: 56,
  lineHeight: "32px",
  px: 24,
  cursor: "pointer",
  transition: "background ease-in-out 200ms",
  display: "inline-flex",
  variants: {
    outlined: {
      true: {
        border: "2px solid $navy",
        "&:hover": {
          color: "$white",
          borderColor: "$darkBlue900",
          background: "$darkBlue900",
          svg: {
            path: {
              fill: "$white",
            },
          },
        },
      },
    },
    disabled: {
      true: {
        color: "$darkBlue300",
        cursor: "not-allowed",
        svg: {
          path: {
            fill: "$darkBlue300",
          },
        },
      },
    },
  },
  svg: {
    path: {
      fill: "$navy",
    },
    width: 14,
    height: 14,
    mt: -4,
    mr: 20,
  },
});

const ButtonsContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  columnGap: 15,
  mt: 30,
  mb: 100,
});

export {
  AddButton,
  ButtonsContainer,
  Div,
  AccordionChevronWrapper,
  slideUp,
  StyledHeader,
  StyledItem,
  StyledContent,
  StyledTrigger,
  Divider,
  ButtonWrap,
};
