//@ts-nocheck - THIS IS ONLY HERE AS REACT 18 HAS BROKEN DEPENDENCIES ON SOME PACKAGES AND SCREWS UP THE BUILD

import { useState, useRef, useEffect } from "react";
import { useMedia } from "react-use";
import { AnimatePresence } from "framer-motion";
import { Text } from "@components/common";
import Link from "next/link";
import {
  FooterLeft,
  FooterRight,
  IconContainer,
  IconWrapper,
  LogoWrapper,
  NavItem,
  Wrapper,
} from "./styles";

const Footer = () => {
  const footer = useRef(null);
  const [sitemapDrawerOpen, setSitemapDrawerOpen] = useState(false);
  console.log("AAAAAAAAAAAAAAA");

  return (
    <Wrapper ref={footer}>
      <FooterLeft>
        <NavItem hiddenUnder={600}>
          <Link href="/why-carey" passHref>
            <Text as="a" variant="Button-Regular-Med">
              ABOUT CAREY
            </Text>
          </Link>
        </NavItem>
        <NavItem hiddenUnder={768}>
          <Link href="/life-at-carey" passHref>
            <Text as="a" variant="Button-Regular-Med">
              OUR SCHOOL
            </Text>
          </Link>
        </NavItem>
        <NavItem hiddenUnder={768}>
          <Link href="/life-at-carey" passHref>
            <Text as="a" variant="Button-Regular-Med">
              ENROLMENT
            </Text>
          </Link>
        </NavItem>
        <NavItem hiddenUnder={768}>
          <Link href="/life-at-carey" passHref>
            <Text as="a" variant="Button-Regular-Med">
              NEWS AND EVENTS
            </Text>
          </Link>
        </NavItem>
        <NavItem hiddenUnder={768}>
          <Link href="/life-at-carey" passHref>
            <Text as="a" variant="Button-Regular-Med">
              CONTACT
            </Text>
          </Link>
        </NavItem>
        <NavItem hiddenUnder={768}>
          <Link href="/life-at-carey" passHref>
            <Text as="a" variant="Button-Regular-Med">
              CAREYLINK
            </Text>
          </Link>
        </NavItem>
      </FooterLeft>
      <FooterRight>
        <NavItem hiddenUnder={600}>
          <Link href="/why-carey" passHref>
            <Text as="a" variant="Button-Regular-Med">
              Why Carey
            </Text>
          </Link>
        </NavItem>
        <NavItem hiddenUnder={768}>
          <Link href="/life-at-carey" passHref>
            <Text as="a" variant="Button-Regular-Med">
              Life at carey
            </Text>
          </Link>
        </NavItem>
      </FooterRight>
      <AnimatePresence>
        {/* {sitemapDrawerOpen && (
          <Collapse/>
        )} */}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Footer;
