import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { primaryDrawer } from "./animations";
import { Mobile } from "./styles";
import AccordionItem from "./accordionItem";

const MobileDrawer = ({ navigation }) => {
  return (
    <Mobile variants={primaryDrawer}>
      <Accordion.Root type="single" collapsible>
        {navigation.map((item) => {
          return <AccordionItem key={`primary-${item.id}`} item={item} />;
        })}
      </Accordion.Root>
    </Mobile>
  );
};

export default MobileDrawer;
