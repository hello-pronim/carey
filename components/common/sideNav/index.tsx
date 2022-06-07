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

const SideNav = ({ activeSlug, navigation }: SideNavTypes) => {
  const getActiveParentMenu = () => {
    const findActiveNavItem = navigation.find((navItem: any) => {
      // check top level
      if (activeSlug === navItem.url) {
        return true;
      }
      // check sub Item
      const findActiveSubNavItem = navItem?.subItems.find((navItem: any) => {
        if (activeSlug === navItem.url) {
          return true;
        }
      });
      if (findActiveSubNavItem) {
        return true;
      }
      return false;
    });
    console.log("Herer", findActiveNavItem);
    return findActiveNavItem;
  };

  const activeMenuItem = getActiveParentMenu();
  return (
    <Wrapper>
      <NavHeader>
        <Text variant="Heading-Overline" css={{ textTransform: "uppercase" }}>
          {activeMenuItem.label}
        </Text>
      </NavHeader>
      <Accordion type="multiple" defaultValue={["start"]}>
        {activeMenuItem?.subItems?.map((item: any, i: number) => {
          if (item.subItems.length > 0) {
            return (
              <AccordionItem key={`sidenav-item-1-${i}`} value={item.id}>
                <AccordionTrigger>
                  <Text variant="Body-Regular">{item.label}</Text>
                </AccordionTrigger>
                <AccordionContent>
                  {item.subItems.map((subItem: any, i: number) => {
                    return (
                      <SingleItem key={`sidenav-item-2-${i}`}>
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

type SideNavTypes = {
  navigation: Array<any>;
  activeSlug: string;
};

export default SideNav;
