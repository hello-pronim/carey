import { styled } from "@styles/stitches";
import rem from "@utils/pxRem";
import Text from "../typography/typography";

const LogoWrapper = styled("div", {
  cursor: "pointer",
  transition: "width ease 0.2s",
  width: "122.96px",
  "> span": {
    width: "100%",
  },
  "@min768": {
    width: "180.33px",
  },
});

const Wrapper = styled("div", {
  display: "flex",
  top: 0,
  position: "sticky",
  width: "100%",
  background: "$crestYellow",
  margin: "0 auto",
  boxSizing: "border-box",
  maxWidth: 2560,
  justifyContent: "space-between",
  height: 80,
  px: "16px",
  zIndex: 100,
  transition: "height ease 0.3s",
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
  variants: {
    stuck: {
      true: {
        "@min1024": {
          height: 104,
          px: "56px",
        },
        "@min1920": {
          px: "96px",
        },
      },
      false: {
        "@min1024": {
          height: 120,
          px: "56px",
        },
        [`& ${LogoWrapper}`]: {
          "@min1200": {
            width: "257.43px",
          },
        },
        "@min1440": {
          height: 144,
        },
        "@min1920": {
          height: 160,
          px: "96px",
        },
      },
    },
  },
});

const HeaderRight = styled("ul", {
  display: "flex",
  listStyleType: "none",
  alignItems: "center",
  margin: 0,
  padding: 0,
  columnGap: "40px",
});

const HeaderLeft = styled("div", {
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

const DrawerToggleCompact = styled("div", {
  display: "flex",
  "@min1200": {
    display: "none",
  },
});

const DrawerToggleIcon = styled("button", {
  padding: 0,
  background: "none",
  border: "none",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  cursor: "pointer",
  "&:before": {
    position: "relative",
    borderTop: "2px solid $navy",
    borderBottom: "2px solid $navy",
    content: "' '",
    display: "block",
    height: "3px",
    marginBottom: "3px",
    transition: "all .3s ease-in-out",
    width: 18,
  },
  "&:after": {
    position: "relative",
    backgroundColor: "$navy",
    content: "' '",
    display: "block",
    height: "2px",
    transition: "all .3s ease-in-out",
    width: 18,
  },
  variants: {
    isOpen: {
      true: {
        "&:before": {
          marginBottom: "0px",
          border: "none",
          height: 2,
          backgroundColor: "$navy",
          transform: "translateY(1px) rotate(135deg)",
        },
        "&:after": {
          transform: "translateY(-1px) rotate(-135deg)",
        },
      },
    },
  },
});

export {
  Wrapper,
  HeaderRight,
  HeaderLeft,
  IconContainer,
  IconWrapper,
  LogoWrapper,
  NavItem,
  DrawerToggleIcon,
  DrawerToggleWrapper,
  DrawerToggleCompact,
};
