import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  AccordionChevron,
  StyledHeader,
  StyledItem,
  StyledContent,
  StyledTrigger,
} from "./styles";

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
