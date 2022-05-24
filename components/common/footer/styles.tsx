import { styled } from "@styles/stitches";
import rem from "@utils/pxRem";

const Wrapper = styled("div", {
  display: "flex",
  bottom: 0,
  position: "sticky",
  width: "100%",
  background: "$crestBlue",
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

const FooterLeft = styled("ul", {
  display: "flex",
  listStyleType: "none",
  alignItems: "center",
  margin: 0,
  padding: 0,
  columnGap: "40px",
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

export {
  Wrapper,
  FooterRight,
  FooterLeft,
  IconContainer,
  IconWrapper,
  NavItem,
};
