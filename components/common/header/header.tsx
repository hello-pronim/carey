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

const Header = ({ navigation }) => {
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
          <Image
            alt="Carey Baptist Grammar School"
            src={isMobile ? CareyCompact : CareyPrimary}
            width={isMobile ? 122.96 : 257.43}
            height={isMobile ? 56 : 80}
            layout="responsive"
            priority
          />
        </LogoWrapper>
        <DrawerToggleWrapper onClick={() => setDrawerOpen(!drawerOpen)}>
          <DrawerToggleIcon as="div" isOpen={drawerOpen} />
          <Text variant="Button-Regular-Med">Menu</Text>
        </DrawerToggleWrapper>
      </HeaderLeft>
      <HeaderRight>
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
        <IconContainer>
          <IconWrapper hiddenUnder={400}>
            <HeartBox />
          </IconWrapper>
          <IconWrapper>
            <Phone />
          </IconWrapper>
          <IconWrapper>
            <CareyLink />
          </IconWrapper>
          <IconWrapper hiddenUnder={400}>
            <Search />
          </IconWrapper>
        </IconContainer>
      </HeaderRight>
      <AnimatePresence>
        {drawerOpen && (
          <Drawer stuck={hasStuck} navigation={navigation.NavItemsDrawer} />
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Header;
