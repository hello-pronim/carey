import React from "react";
import { Text } from "@components/common";
import {
  Wrapper,
  NavHeader,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  SingleItem,
} from "./styles";

const mockNav = {
  navLabel: "Enrolment",
  items: [
    {
      key: "start",
      label: "Start",
      route: undefined,
      subItems: [],
    },
    {
      key: "step-1",
      label: "Step: 1 Student Details",
      link: undefined,
      subItems: [
        {
          label: "student 1",
          link: undefined,
        },
      ],
    },
    {
      key: "step-2",
      label: "Step 2: Parent/Guardian Details",
      link: undefined,
      subItems: [
        {
          label: "Parent 1",
          link: undefined,
        },
      ],
    },
    {
      key: "step-3",
      label: "Step 3: Carey Connection",
      route: undefined,
      subItems: [],
    },
  ],
};

const SideNav = (props: SideNavTypes) => {
  return (
    <Wrapper>
      <NavHeader>
        <Text variant="Heading-Overline" css={{ textTransform: "uppercase" }}>
          {mockNav.navLabel}
        </Text>
      </NavHeader>
      <Accordion type="multiple" defaultValue={["start"]}>
        {mockNav.items.map((item, i) => {
          if (item.subItems.length > 0) {
            return (
              <AccordionItem key={i} value={item.key}>
                <AccordionTrigger>
                  <Text variant="Body-Regular">{item.label}</Text>
                </AccordionTrigger>
                <AccordionContent>
                  {item.subItems.map((subItem, i) => {
                    return (
                      <SingleItem key={i}>
                        <Text variant="Body-Regular">{subItem.label}</Text>
                      </SingleItem>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            );
          }
          return (
            <SingleItem key={i}>
              <Text variant="Body-Regular">{item.label}</Text>
            </SingleItem>
          );
        })}
      </Accordion>
    </Wrapper>
  );
};

type SideNavTypes = {};

export default SideNav;
