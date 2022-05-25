import { styled } from "@styles/stitches";
import rem from "@utils/pxRem";
import { Text } from "@components/common";

const Wrapper = styled("div", {
  // bottom: 0,
  // position: "absolute",
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
  display: "flex",
  alignItems: "center",
  gap: 24,
  cursor: "pointer",
  border: 0,
  bg: "transparent",
});

const ExtraFooter = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 48,
  padding: "48px 0",
});

const ExtraFooterBottom = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 24,
  "@min768": {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
});

const ExtraFooterBottomLeft = styled("div", {
  "@min768": {
    flex: 2,
  },
  "@min1024": {
    flex: 2,
  },
  "@min1200": {
    flex: 1,
  },
});

const ExtraFooterBottomRight = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  "@min768": {
    flex: 2,
  },
  "@min1024": {
    flex: 1,
  },
  "@min1200": {
    flex: 1,
  },
});

const ExtraFooterTop = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 24,
  "@min1024": {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
});

const ExtraFooterTopLeft = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 24,
  "@min768": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 40,
  },
  "@min1024": {
    flexDirection: "column",
    gap: 24,
  },
  "@min1440": {
    flexDirection: "row",
  },
});

const ExtraFooterTopRight = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 24,
  "@min768": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 32,
  },
});

const FooterNav = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: `1px solid $crestBlue`,
  padding: "48px 0",
});

const FooterLeft = styled("ul", {
  display: "flex",
  listStyleType: "none",
  alignItems: "center",
  margin: 0,
  padding: 0,
  "@min1024": {
    columnGap: "20px",
  },
  "@min1440": {
    columnGap: "120px",
  },
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

const IconLinkWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  textDecoration: "none",
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
  listStyle: "none",
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
      1024: {
        display: "none",
        "@min1024": {
          display: "list-item",
        },
      },
    },
  },
});

const NavItemText = styled(Text, {
  color: "$white",
  textDecoration: "none",
});

const TextWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 40,
  "@min1024": {
    justifyContent: "flex-start",
  },
});

export {
  Wrapper,
  DrawerToggleWrapper,
  ExtraFooter,
  ExtraFooterBottom,
  ExtraFooterBottomLeft,
  ExtraFooterBottomRight,
  ExtraFooterTop,
  ExtraFooterTopLeft,
  ExtraFooterTopRight,
  FooterNav,
  FooterRight,
  FooterLeft,
  IconContainer,
  IconLinkWrapper,
  IconWrapper,
  NavItem,
  NavItemText,
  TextWrapper,
};
