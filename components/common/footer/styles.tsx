import { styled } from "@styles/stitches";
import rem from "@utils/pxRem";
import { Text } from "@components/common";

const Wrapper = styled("div", {
  bottom: 0,
  position: "absolute",
  width: "100%",
  background: "$navy",
  margin: "0 auto",
  boxSizing: "border-box",
  maxWidth: 2560,
  px: "16px",
  zIndex: 100,
  "@min600": {
    px: "27px",
  },
  "@min768": {
    px: "43px",
  },
  "@min1024": {
    px: "56px",
  },
  "@min1440": {},
  "@min1920": {
    px: "96px",
  },
});

const DrawerToggleWrapper = styled("button", {
  display: "none",
  alignItems: "center",
  columnGap: 8,
  cursor: "pointer",
  border: 0,
  bg: "transparent",
  [`& ${Text}`]: {
    mt: 4,
  },
  "@min1200": {
    display: "flex",
  },
});

const FooterNav = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 120,
  borderBottom: `1px solid $crestBlue`,
});

const FooterLeft = styled("ul", {
  display: "flex",
  listStyleType: "none",
  alignItems: "center",
  margin: 0,
  padding: 0,
  columnGap: "120px",
});

const FooterRight = styled("div", {
  display: "flex",
  alignItems: "center",
  columnGap: 10,
  "@min1200": {
    columnGap: 44,
  },
});

const IconContainer = styled("ul", {
  display: "flex",
  listStyleType: "none",
  margin: 0,
  padding: 0,
  columnGap: rem("25px"),
});

const IconWrapper = styled("li", {
  listStyle: "none",
  variants: {
    hiddenUnder: {
      400: {
        display: "none",
        "@media screen and (min-width: 400px)": {
          display: "list-item",
        },
      },
    },
  },
});

const NavItem = styled("li", {
  variants: {
    hiddenUnder: {
      600: {
        display: "none",
        "@min600": {
          display: "list-item",
        },
      },
      768: {
        display: "none",
        "@min768": {
          display: "list-item",
        },
      },
    },
  },
});

const NavItemText = styled(Text, {
  color: "$white",
});

export {
  Wrapper,
  DrawerToggleWrapper,
  FooterNav,
  FooterRight,
  FooterLeft,
  IconContainer,
  IconWrapper,
  NavItem,
  NavItemText,
};
