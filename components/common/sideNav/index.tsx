import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
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

const SideNav = ({
  activeSlug,
  navigation,
  setMinHeight,
  minHeight,
}: SideNavTypes) => {
  const router = useRouter();
  const SidebarRef = useRef<HTMLDivElement>(null);

  const [openItems, setOpenItems] = useState([]);

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
    return findActiveNavItem;
  };

  const isActiveItem = (url) => {
    return activeSlug === url;
  };

  const activeMenuItem = getActiveParentMenu();

  useEffect(() => {
    if (activeMenuItem) {
      const [activeItem] = activeMenuItem?.subItems?.filter(
        (item) => item.url === activeSlug
      );

      setOpenItems([activeItem?.id.toString()]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  useEffect(() => {
    if (SidebarRef.current) {
      setMinHeight(SidebarRef.current.clientHeight + 200);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMenuItem, minHeight]);

  if (!activeMenuItem) {
    return <></>;
  }
  return (
    <Wrapper ref={SidebarRef}>
      <NavHeader>
        <Text variant="Heading-Overline" css={{ textTransform: "uppercase" }}>
          {activeMenuItem.label}
        </Text>
      </NavHeader>
      <Accordion
        type="multiple"
        value={openItems}
        onValueChange={(value) => setOpenItems(value)}
        defaultValue={[]}
      >
        {activeMenuItem?.subItems?.map((item: any, i: number) => {
          if (item.subItems.length > 0) {
            return (
              <AccordionItem key={`sidenav-item-1-${i}`} value={item.id}>
                <AccordionTrigger>
                  <Link href={item.url}>
                    <a>
                      <Text variant="Body-Small">{item.label}</Text>
                    </a>
                  </Link>
                </AccordionTrigger>
                <AccordionContent>
                  {item.subItems.map((subItem: any, i: number) => {
                    return (
                      <SingleItem key={`sidenav-item-2-${i}`}>
                        <Link href={subItem.url}>
                          <a>
                            <Text variant="Body-Small">{subItem.label}</Text>
                          </a>
                        </Link>
                      </SingleItem>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            );
          }
          return (
            <SingleItem
              css={isActiveItem(item.url) && { bg: "$crestBlue150" }}
              key={`side-nav-0-${i}`}
            >
              <Link href={item.url}>
                <a>
                  <Text
                    css={
                      isActiveItem(item.url) && {
                        fontWeight: "$semiBold !important",
                      }
                    }
                    variant="Body-Small"
                  >
                    {item.label}
                  </Text>
                </a>
              </Link>
            </SingleItem>
          );
        })}
      </Accordion>
    </Wrapper>
  );
};

type SideNavTypes = {
  minHeight: number;
  setMinHeight: any;
  navigation: Array<any>;
  activeSlug: string;
};

export default SideNav;
