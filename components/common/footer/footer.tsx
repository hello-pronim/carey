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

const Footer = ({ footerGlobals, footerNav, sitemap }) => {
  const {
    abn,
    copyrightText,
    cricos,
    firstNationStatement,
    legalLinks,
    socialLinks,
  } = footerGlobals;
  const footer = useRef(null);
  const [sitemapDrawerOpen, setSitemapDrawerOpen] = useState(false);
  return (
    <Wrapper ref={footer}>
      <FooterNav>
        <FooterLeft>
          {footerNav?.length > 0 &&
            footerNav.map((item, index) => {
              if (index < footerNav.length - 1) {
                return (
                  <NavItem
                    key={`footer-nav-item-${item.id}`}
                    hiddenUnder={1024}
                  >
                    <Link href={item.url ? item.url : "/"} passHref>
                      <NavItemText as="a" variant="Button-Regular-Med">
                        {item.label}
                      </NavItemText>
                    </Link>
                  </NavItem>
                );
              }
              return (
                <NavItem key={`footer-nav-item-${item.id}`}>
                  <Link href={item.url ? item.url : "/"} passHref>
                    <IconLinkWrapper as="a">
                      <CareyLink
                        fill={theme.colors.white.value}
                        css={{ mt: -3 }}
                      />
                      <NavItemText as="span" variant="Button-Regular-Med">
                        {item.label}
                      </NavItemText>
                    </IconLinkWrapper>
                  </Link>
                </NavItem>
              );
            })}
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
      <AnimatePresence>
        {sitemapDrawerOpen && <Collapse data={sitemap} />}
      </AnimatePresence>
      <ExtraFooter>
        <ExtraFooterTop>
          <ExtraFooterTopLeft>
            {copyrightText && (
              <Text
                variant="Body-xSmall"
                css={{ color: theme.colors.crestBlue300.value }}
              >
                {copyrightText}
              </Text>
            )}
            <TextWrapper>
              {abn && (
                <Text
                  variant="Body-xSmall"
                  css={{ color: theme.colors.crestBlue300.value }}
                >
                  {abn}
                </Text>
              )}
              {cricos && (
                <Text
                  variant="Body-xSmall"
                  css={{ color: theme.colors.crestBlue300.value }}
                >
                  {cricos}
                </Text>
              )}
            </TextWrapper>
          </ExtraFooterTopLeft>
          <ExtraFooterTopRight>
            <TextWrapper>
              {legalLinks?.length > 0 &&
                legalLinks.map((item) => {
                  return (
                    <NavItem key={`legal-item-${item.id}`} decoration={false}>
                      <Link href={item?.entry[0]?.uri} passHref>
                        <Text
                          as="a"
                          variant="Body-Small"
                          css={{ color: theme.colors.crestBlue300.value }}
                        >
                          {item.label}
                        </Text>
                      </Link>
                    </NavItem>
                  );
                })}
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
            {firstNationStatement && (
              <Text
                variant="Body-xSmall"
                css={{ color: theme.colors.crestBlue300.value }}
              >
                {firstNationStatement}
              </Text>
            )}
          </ExtraFooterBottomLeft>
          <ExtraFooterBottomRight>
            <IconContainer>
              {socialLinks?.length > 0 &&
                socialLinks.map((item) => {
                  return (
                    <Link
                      key={`social-${item.id}`}
                      href={item.socialLink ? item.socialLink : "/"}
                      passHref
                    >
                      <IconWrapper
                        target={item.openInNewTab ? "_blank" : "_self"}
                        as="a"
                      >
                        {item.icon.toLowerCase() === "facebook" ? (
                          <Facebook fill={theme.colors.white.value} />
                        ) : (
                          ""
                        )}
                        {item.icon.toLowerCase() === "linkedin" ? (
                          <LinkedIn fill={theme.colors.white.value} />
                        ) : (
                          ""
                        )}
                        {item.icon.toLowerCase() === "instagram" ? (
                          <Instagram fill={theme.colors.white.value} />
                        ) : (
                          ""
                        )}
                        {item.icon.toLowerCase() === "twitter" ? (
                          <Twitter fill={theme.colors.white.value} />
                        ) : (
                          ""
                        )}
                        {item.icon.toLowerCase() === "youtube" ? (
                          <Youtube fill={theme.colors.white.value} />
                        ) : (
                          ""
                        )}
                        {item.icon.toLowerCase() === "wechat" ? (
                          <WeChat fill={theme.colors.white.value} />
                        ) : (
                          ""
                        )}
                      </IconWrapper>
                    </Link>
                  );
                })}
            </IconContainer>
          </ExtraFooterBottomRight>
        </ExtraFooterBottom>
      </ExtraFooter>
    </Wrapper>
  );
};

export default Footer;
