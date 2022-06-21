import React from "react";
import { styled } from "@styles/stitches";
import { keyframes } from "@stitches/react";
import { mauve } from "@radix-ui/colors";
import * as Accordion from "@radix-ui/react-accordion";
import { CaretRightIcon } from "@radix-ui/react-icons";

const AccordionChevron = styled(CaretRightIcon, {
  transition: "transform 300ms",
  "[data-state=open] &": { transform: "rotate(90deg)" },
  color: "$navy",
  mr: 20,
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
  fontSize: 18,
  lineHeight: 1,
  width: "100%",
  borderBottom: `1px solid ${mauve.mauve10}`,
  color: "$navy",
  pb: 15,
  "button, [type='button'], [type='reset'], [type='submit']": {
    border: "none",
    background: "transparent",
  },
});

const Accordions = ({ items }) => {
  return (
    <Accordion.Root type="single" collapsible>
      {items.map((item, index) => {
        return (
          <StyledItem value={`item-${index}`} key={`item-${index}`}>
            <StyledHeader>
              <StyledTrigger>
                <AccordionChevron aria-hidden />
                <span>{item.title}</span>
              </StyledTrigger>
            </StyledHeader>
            <StyledContent>{item.details}</StyledContent>
          </StyledItem>
        );
      })}
    </Accordion.Root>
  );
};

export default Accordions;
