//@ts-nocheck - THIS IS ONLY HERE AS REACT 18 HAS BROKEN DEPENDENCIES ON SOME PACKAGES AND SCREWS UP THE BUILD

import { useState, useRef, useEffect } from "react";
import { useMedia } from "react-use";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import CareyLink from "@components/common/icons/careyLink";
import Chevron from "@components/common/icons/chevron";
import {
  DrawerToggleWrapper,
  FooterNav,
  FooterLeft,
  FooterRight,
  IconContainer,
  IconWrapper,
  LogoWrapper,
  NavItem,
  NavItemText,
  Wrapper,
} from "./styles";

const Footer = () => {
  const footer = useRef(null);
  const [sitemapDrawerOpen, setSitemapDrawerOpen] = useState(false);

  return (
    <Wrapper ref={footer}>
      <FooterNav>
        <FooterLeft>
          <NavItem hiddenUnder={600}>
            <Link href="/why-carey" passHref>
              <NavItemText as="a" variant="Button-Regular-Med">
                ABOUT CAREY
              </NavItemText>
            </Link>
          </NavItem>
          <NavItem hiddenUnder={768}>
            <Link href="/life-at-carey" passHref>
              <NavItemText as="a" variant="Button-Regular-Med">
                OUR SCHOOL
              </NavItemText>
            </Link>
          </NavItem>
          <NavItem hiddenUnder={768}>
            <Link href="/life-at-carey" passHref>
              <NavItemText as="a" variant="Button-Regular-Med">
                ENROLMENT
              </NavItemText>
            </Link>
          </NavItem>
          <NavItem hiddenUnder={768}>
            <Link href="/life-at-carey" passHref>
              <NavItemText as="a" variant="Button-Regular-Med">
                NEWS AND EVENTS
              </NavItemText>
            </Link>
          </NavItem>
          <NavItem hiddenUnder={768}>
            <Link href="/life-at-carey" passHref>
              <NavItemText as="a" variant="Button-Regular-Med">
                CONTACT
              </NavItemText>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/life-at-carey" passHref>
              {/* <CareyLink /> */}
              <NavItemText variant="Button-Regular-Med">CAREYLINK</NavItemText>
            </Link>
          </NavItem>
        </FooterLeft>
        <FooterRight>
          <NavItem>
            <DrawerToggleWrapper onClick={() => setDrawerOpen(!drawerOpen)}>
              <NavItemText variant="Button-Regular-Med">Sitemap</NavItemText>
              <Chevron aria-hidden direction="up" />
            </DrawerToggleWrapper>
          </NavItem>
        </FooterRight>
      </FooterNav>
      <AnimatePresence>
        {/* {sitemapDrawerOpen && (
          <Collapse/>
        )} */}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Footer;
