import React from "react";
import { styled } from "@styles/stitches";
import { keyframes } from "@stitches/react";
import { violet, mauve } from "@radix-ui/colors";
import * as Accordion from "@radix-ui/react-accordion";
import { CaretRightIcon } from "@radix-ui/react-icons";

const AccordionChevron = styled(CaretRightIcon, {
  transition: "transform 300ms",
  "[data-state=open] &": { transform: "rotate(90deg)" },
  padding: "10px 5px",

  // backgroundColor: 'red',
});

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledContent = styled(Accordion.Content, {
  overflow: "hidden",
  fontSize: 18,
  color: "black",
  backgroundColor: mauve.mauve2,

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
});

const StyledTrigger = styled(Accordion.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  padding: "0px 0px",
  boxSizing: "unset",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 18,
  lineHeight: 1,
  color: violet.violet11,
  borderBottom: "1px solid gray",
  width: "100%",

  // boxShadow: `0 1px 0 ${mauve.mauve6}`,
  // '&[data-state="closed"]': { backgroundColor: 'white' },
  // '&[data-state="open"]': { backgroundColor: 'white' },
  // '&:hover': { backgroundColor: mauve.mauve2 },
});

const Accordions = ({ items }) => {
  return (
    <Accordion.Root type="single" collapsible>
      {items.map((item, index) => {
        return (
          <Accordion.Item value={`item-${index}`} key={`item-${index}`}>
            <Accordion.Header>
              <StyledTrigger>
                <Accordion.Trigger>
                  <AccordionChevron aria-hidden />
                  <span>{item.title}</span>
                </Accordion.Trigger>
              </StyledTrigger>
            </Accordion.Header>
            <StyledContent>
              <Accordion.Content>{item.details}</Accordion.Content>
            </StyledContent>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
};

export default Accordions;
