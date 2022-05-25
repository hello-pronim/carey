import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { theme } from "@styles/stitches";
import { Text } from "@components/common";
import ArrowRight from "@components/common/icons/arrowRight";
import CareyLink from "@components/common/icons/careyLink";
import Chevron from "@components/common/icons/chevron";
import Facebook from "@components/common/icons/facebook";
import LinkedIn from "@components/common/icons/linkedin";
import Instagram from "@components/common/icons/instagram";
import Twitter from "@components/common/icons/twitter";
import Youtube from "@components/common/icons/youtube";
import WeChat from "@components/common/icons/wechat";
import Collapse from "./collapse";
import {
  DrawerToggleWrapper,
  ExtraFooter,
  ExtraFooterBottom,
  ExtraFooterBottomLeft,
  ExtraFooterBottomRight,
  ExtraFooterTop,
  ExtraFooterTopLeft,
  ExtraFooterTopRight,
  FooterNav,
  FooterLeft,
  FooterRight,
  IconContainer,
  IconLinkWrapper,
  IconWrapper,
  NavItem,
  NavItemText,
  TextWrapper,
  Wrapper,
} from "./styles";

const Footer = () => {
  const footer = useRef(null);
  const [sitemapDrawerOpen, setSitemapDrawerOpen] = useState(false);

  return (
    <Wrapper ref={footer}>
      <FooterNav>
        <FooterLeft>
          <NavItem hiddenUnder={1024}>
            <Link href="/#" passHref>
              <NavItemText as="a" variant="Button-Regular-Med">
                ABOUT CAREY
              </NavItemText>
            </Link>
          </NavItem>
          <NavItem hiddenUnder={1024}>
            <Link href="/#" passHref>
              <NavItemText as="a" variant="Button-Regular-Med">
                OUR SCHOOL
              </NavItemText>
            </Link>
          </NavItem>
          <NavItem hiddenUnder={1024}>
            <Link href="/#" passHref>
              <NavItemText as="a" variant="Button-Regular-Med">
                ENROLMENT
              </NavItemText>
            </Link>
          </NavItem>
          <NavItem hiddenUnder={1024}>
            <Link href="/#" passHref>
              <NavItemText as="a" variant="Button-Regular-Med">
                NEWS AND EVENTS
              </NavItemText>
            </Link>
          </NavItem>
          <NavItem hiddenUnder={1024}>
            <Link href="/#" passHref>
              <NavItemText as="a" variant="Button-Regular-Med">
                CONTACT
              </NavItemText>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/#" passHref>
              <IconLinkWrapper as="a">
                <CareyLink fill={theme.colors.white.value} />
                <NavItemText as="span" variant="Button-Regular-Med">
                  CAREYLINK
                </NavItemText>
              </IconLinkWrapper>
            </Link>
          </NavItem>
        </FooterLeft>
        <FooterRight>
          <NavItem>
            <DrawerToggleWrapper
              onClick={() => setSitemapDrawerOpen(!sitemapDrawerOpen)}
            >
              <NavItemText variant="Button-Regular-Med">Sitemap</NavItemText>
              <Chevron
                aria-hidden
                direction={sitemapDrawerOpen ? "up" : "down"}
                fill={theme.colors.white.value}
              />
            </DrawerToggleWrapper>
          </NavItem>
        </FooterRight>
      </FooterNav>
      <AnimatePresence>{sitemapDrawerOpen && <Collapse />}</AnimatePresence>
      <ExtraFooter>
        <ExtraFooterTop>
          <ExtraFooterTopLeft>
            <Text
              variant="Body-xSmall"
              css={{ color: theme.colors.crestBlue300.value }}
            >
              © Carey Baptist Grammar School Limited
            </Text>
            <TextWrapper>
              <Text
                variant="Body-xSmall"
                css={{ color: theme.colors.crestBlue300.value }}
              >
                ABN 83 051 576 062
              </Text>
              <Text
                variant="Body-xSmall"
                css={{ color: theme.colors.crestBlue300.value }}
              >
                CRICOS #00135G
              </Text>
            </TextWrapper>
          </ExtraFooterTopLeft>
          <ExtraFooterTopRight>
            <TextWrapper>
              <NavItem>
                <Link href="/#" passHref>
                  <Text
                    as="a"
                    variant="Body-Small"
                    css={{ color: theme.colors.crestBlue300.value }}
                  >
                    Privacy Policy
                  </Text>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/#" passHref>
                  <Text
                    as="a"
                    variant="Body-Small"
                    css={{ color: theme.colors.crestBlue300.value }}
                  >
                    Terms of Use
                  </Text>
                </Link>
              </NavItem>
            </TextWrapper>
            <NavItem>
              <Link href="/#" passHref>
                <IconLinkWrapper as="a">
                  <Text
                    as="span"
                    variant="Body-Small"
                    css={{ color: theme.colors.crestYellow.value }}
                  >
                    Subscribe to Carey News
                  </Text>
                  <ArrowRight fill={theme.colors.crestYellow.value} />
                </IconLinkWrapper>
              </Link>
            </NavItem>
          </ExtraFooterTopRight>
        </ExtraFooterTop>
        <ExtraFooterBottom>
          <ExtraFooterBottomLeft>
            <Text
              variant="Body-xSmall"
              css={{ color: theme.colors.crestBlue300.value }}
            >
              First Nations acknowledgment statement. In the spirit of
              reconciliation Carey Baptist Grammar School acknowledges the
              Traditional Custodians of country throughout Australia and their
              connections to land, sea and community. We pay our respect to
              their elders past and present and extend that respect to all
              Aboriginal and Torres Strait Islander peoples today.
            </Text>
          </ExtraFooterBottomLeft>
          <ExtraFooterBottomRight>
            <IconContainer>
              <Link href="https://www.facebook.com/CareyBaptist" passHref>
                <IconWrapper as="a">
                  <Facebook fill={theme.colors.white.value} />
                </IconWrapper>
              </Link>
              <Link
                href="https://www.linkedin.com/school/careygrammar/"
                passHref
              >
                <IconWrapper as="a">
                  <LinkedIn fill={theme.colors.white.value} />
                </IconWrapper>
              </Link>
              <Link href="https://www.instagram.com/careygrammar/" passHref>
                <IconWrapper as="a">
                  <Instagram fill={theme.colors.white.value} />
                </IconWrapper>
              </Link>
              <Link href="/#" passHref>
                <IconWrapper as="a">
                  <Twitter fill={theme.colors.white.value} />
                </IconWrapper>
              </Link>
              <Link href="https://www.youtube.com/user/CareyGrammar" passHref>
                <IconWrapper as="a">
                  <Youtube fill={theme.colors.white.value} />
                </IconWrapper>
              </Link>
              <Link href="/#" passHref>
                <IconWrapper as="a">
                  <WeChat fill={theme.colors.white.value} />
                </IconWrapper>
              </Link>
            </IconContainer>
          </ExtraFooterBottomRight>
        </ExtraFooterBottom>
      </ExtraFooter>
    </Wrapper>
  );
};

export default Footer;
