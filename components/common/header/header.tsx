import { useState, useRef, useEffect } from "react";
import { useMedia, useClickAway, useWindowScroll } from "react-use";
import { AnimatePresence } from "framer-motion";
import { Text } from "@components/common";
import Link from "next/link";
import Phone from "@components/common/icons/phone";
import HeartBox from "@components/common/icons/heartBox";
import CareyLink from "@components/common/icons/careyLink";
import CareyPrimary from "public/assets/carey-brandmark-primary.svg";
import CareyCompact from "public/assets/carey-brandmark-compact.svg";
import Search from "@components/common/icons/search";
import Drawer from "./parts/drawer";
import {
  HeaderLeft,
  HeaderRight,
  IconContainer,
  IconWrapper,
  LogoWrapper,
  NavItem,
  Wrapper,
  DrawerToggleIcon,
  DrawerToggleWrapper,
  DrawerToggleCompact,
} from "./styles";
import Image from "next/image";

const Header = ({ navigation, headerNav, headerGlobals }) => {
  const { headerRightLinks } = headerGlobals;
  const [hasStuck, setHasStuck] = useState(false);
  const header = useRef(null);
  const yPos = useWindowScroll().y;
  useEffect(() => {
    if (yPos >= 30) {
      setHasStuck(true);
    }
    if (yPos === 0) {
      setHasStuck(false);
    }
  }, [yPos]);

  useClickAway(header, () => {
    setDrawerOpen(false);
  });

  const isMobile = useMedia("(max-width: 768px)", false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Wrapper ref={header} stuck={hasStuck}>
      <HeaderLeft>
        <DrawerToggleCompact>
          <DrawerToggleIcon
            isOpen={drawerOpen}
            onClick={() => setDrawerOpen(drawerOpen ? false : true)}
          />
        </DrawerToggleCompact>
        <LogoWrapper>
          <Link href="/" passHref>
            <Image
              alt="Carey Baptist Grammar School"
              src={isMobile ? CareyCompact : CareyPrimary}
              width={isMobile ? 122.96 : 257.43}
              height={isMobile ? 56 : 80}
              layout="responsive"
              priority
            />
          </Link>
        </LogoWrapper>
        <DrawerToggleWrapper onClick={() => setDrawerOpen(!drawerOpen)}>
          <DrawerToggleIcon as="div" isOpen={drawerOpen} />
          <Text variant="Button-Regular-Med">Menu</Text>
        </DrawerToggleWrapper>
      </HeaderLeft>
      <HeaderRight>
        {headerNav?.length > 0 &&
          headerNav.map((navItem: any, index: number) => {
            return (
              <NavItem
                hiddenUnder={index === 0 ? 600 : 768}
                key={`item-${navItem.id}`}
              >
                <Link href={`/${navItem.url}`} passHref>
                  <Text as="a" variant="Button-Regular-Med">
                    {navItem.label}
                  </Text>
                </Link>
              </NavItem>
            );
          })}
        <IconContainer>
          {headerRightLinks?.length > 0 &&
            headerRightLinks.map((item: any, index: number) => {
              return (
                <IconWrapper
                  key={`rightItem-${item.id}`}
                  hiddenUnder={index === 0 || index === 3 ? 400 : 0}
                >
                  <Link href={item.itemlink ? item.itemlink : "/"}>
                    <a>
                      {item.icon.toLowerCase() === "heartbox" ? (
                        <HeartBox />
                      ) : (
                        ""
                      )}
                      {item.icon.toLowerCase() === "phone" ? <Phone /> : ""}
                      {item.icon.toLowerCase() === "careylink" ? (
                        <CareyLink />
                      ) : (
                        ""
                      )}
                      {item.icon.toLowerCase() === "search" ? <Search /> : ""}
                    </a>
                  </Link>
                </IconWrapper>
              );
            })}
        </IconContainer>
      </HeaderRight>
      <AnimatePresence>
        {drawerOpen && <Drawer stuck={hasStuck} navigation={navigation} />}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Header;
