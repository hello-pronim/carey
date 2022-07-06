import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Text } from "@components/common";
import {
  Wrapper,
  NavHeader,
  AccordionWrapper,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  SingleItem,
} from "./styles";
import { useClickAway, useMedia } from "react-use";
import { AnimatePresence } from "framer-motion";
import Chevron from "../icons/chevron";
import { styled } from "@styles/stitches";

const HeaderTrigger = styled("button", {
  all: "unset",
  display: "flex",
  boxSizing: "border-box",
  px: 24,
  cursor: "pointer",
  pt: 16,
  pb: "unset",
  "@min768": {
    px: "32px",
  },
  "@min1024": {
    px: "40px",
  },
});

const HeaderLabel = styled("a", {
  display: "flex",
  boxSizing: "border-box",
  flex: 1,
  pt: 56,
  pb: 46,
  px: 24,
  variants: {
    isMobile: {
      true: {
        cursor: "pointer",
        pt: 16,
        pb: "unset",
        "@min768": {
          px: "32px",
        },
        "@min1024": {
          px: "40px",
        },
      },
    },
  },
});

const SideNav = ({
  activeSlug,
  navigation,
  setMinHeight,
  minHeight,
}: SideNavTypes) => {
  const router = useRouter();
  const isMobile = useMedia("(max-width: 1440px)", false);
  const SidebarRef = useRef<HTMLDivElement>(null);
  const [navToggled, setNavToggled] = useState(false);
  const [openItems, setOpenItems] = useState([]);

  // on next router change  close the nav
  useEffect(() => {
    if (isMobile) {
      setNavToggled(false);
    }
  }, [router.asPath, isMobile]);

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

  const handleNavToggle = () => {
    if (isMobile) {
      setNavToggled(!navToggled);
    }
  };
  useClickAway(SidebarRef, () => {
    isMobile && setNavToggled(false);
  });
  useEffect(() => {
    if (!isMobile) {
      setNavToggled(true);
    } else setNavToggled(false);
  }, [isMobile]);

  if (!activeMenuItem) {
    return <></>;
  }

  return (
    <Wrapper ref={SidebarRef}>
      <NavHeader>
        <Link href={`/${activeMenuItem.url}`} passHref>
          <HeaderLabel isMobile={isMobile}>
            <Text
              variant={isMobile ? "Body-Small" : "Heading-Overline"}
              css={{ textTransform: !isMobile && "uppercase" }}
            >
              {activeMenuItem.label}
            </Text>
          </HeaderLabel>
        </Link>
        {isMobile && (
          <HeaderTrigger onClick={() => handleNavToggle()}>
            <Chevron toggleState={navToggled} aria-hidden direction="down" />
          </HeaderTrigger>
        )}
      </NavHeader>
      <AnimatePresence>
        {navToggled && (
          <AccordionWrapper
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            <Accordion
              type="multiple"
              value={openItems}
              onValueChange={(value) => setOpenItems(value)}
              defaultValue={[]}
            >
              {activeMenuItem?.subItems?.map((item: any, i: number) => {
                if (item.subItems.length > 0) {
                  const path = `/${activeMenuItem.url}/${item.url}`;
                  return (
                    <AccordionItem key={`sidenav-item-1-${i}`} value={item.id}>
                      <Link href={path} passHref>
                        <AccordionTrigger>
                          <Text variant="Body-Small">{item.label}</Text>
                        </AccordionTrigger>
                      </Link>
                      <AccordionContent>
                        {item.subItems.map((subItem: any, i: number) => {
                          const path = `/${activeMenuItem.url}/${item.url}/${subItem.url}`;
                          return (
                            <Link
                              key={`sidenav-item-2-${i}`}
                              href={path}
                              passHref
                            >
                              <SingleItem>
                                <Text variant="Body-Small">
                                  {subItem.label}
                                </Text>
                              </SingleItem>
                            </Link>
                          );
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  );
                }
                return (
                  <Link
                    key={`side-nav-0-${i}`}
                    href={`/${activeMenuItem.url}/${item.url}`}
                    passHref
                  >
                    <SingleItem
                      css={isActiveItem(item.url) && { bg: "$crestBlue150" }}
                    >
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
                    </SingleItem>
                  </Link>
                );
              })}
            </Accordion>
          </AccordionWrapper>
        )}
      </AnimatePresence>
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
