import React from "react";
import { styled } from "@styles/stitches";
import * as Accordion from "@radix-ui/react-accordion";
import { CaretRightIcon } from "@radix-ui/react-icons";

const AccordionChevron = styled(CaretRightIcon, {
  transition: "transform 300ms",
  "[data-state=open] &": { transform: "rotate(90deg)" },
});

const Accordions = ({ items }) => {
  return (
    <Accordion.Root type="single" collapsible>
      {items.map((item, index) => {
        return (
          <Accordion.Item value={`item-${index}`} key={`item-${index}`}>
            <Accordion.Header>
              <Accordion.Trigger>
                <AccordionChevron aria-hidden />
                <span>{item.title}</span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>{item.details}</Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
};

export default Accordions;
