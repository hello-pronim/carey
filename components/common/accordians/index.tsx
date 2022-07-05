import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  AccordionChevron,
  StyledHeader,
  StyledItem,
  StyledContent,
  StyledTrigger,
} from "./styles";

interface AccordianItem {
  title: string;
  details: string;
}

const Accordions = ({ items }) => {
  return (
    <Accordion.Root type="single" collapsible>
      {items.map((item: AccordianItem, index: number) => {
        return (
          <StyledItem value={`item-${index}`} key={`item-${index}`}>
            <StyledHeader>
              <StyledTrigger>
                <AccordionChevron aria-hidden />
                <span>{item.title}</span>
              </StyledTrigger>
            </StyledHeader>
            <StyledContent dangerouslySetInnerHTML={{ __html: item.details }} />
          </StyledItem>
        );
      })}
    </Accordion.Root>
  );
};

export default Accordions;
