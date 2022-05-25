import { styled, keyframes } from "@styles/stitches";
import { motion } from "framer-motion";
import { Text } from "@components/common";

const DrawerWrapper = styled(motion.div, {
  position: "absolute",
  display: "flex",
  boxSizing: "border-box",
  zIndex: 100,
  height: "calc(100vh - 80px)",
  left: 0,
  top: 80,
  borderLeft: "20px solid #fff",
  transition: "height, top ease 0.3s",
  width: "calc(100% + 20px)",
  "@min600": {
    width: "auto",
  },
  variants: {
    stuck: {
      true: {
        "@min1024": {
          height: "calc(100vh - 104px)",
          top: 104,
        },
      },
      false: {
        "@min1024": {
          height: "calc(100vh - 120px)",
          top: 120,
        },
        "@min1440": {
          height: "calc(100vh - 144px)",
          top: 144,
        },
        "@min1920": {
          height: "calc(100vh - 160px)",
          top: 160,
        },
      },
    },
  },
});

const Mobile = styled(motion.div, {
  boxSizing: "border-box",
  position: "relative",
  py: 40,
  height: "100%",
  bg: "#ffffff",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  zIndex: 40,
  width: "100%",
  display: "block",
  "@min600": {
    width: 375,
  },
  "@min1024": {
    display: "none",
  },
});

const Primary = styled(motion.div, {
  position: "relative",
  py: 8,
  pr: 8,
  height: "100%",
  bg: "#ffffff",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  zIndex: 40,
  width: 300,
  display: "none",
  "@min1024": {
    display: "block",
  },
  "@min1200": {
    width: 380,
  },
});

const Secondary = styled(motion.div, {
  pt: 24,
  pb: 8,
  pr: 8,
  width: 300,
  display: "none",
  "@min1024": {
    display: "block",
  },
  "@min1200": {
    width: 380,
  },
  height: "100%",
  bg: "#f4f4f4",
  zIndex: 30,
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
});

const Tertiary = styled(motion.div, {
  pt: 24,
  pb: 8,
  pr: 8,
  width: 300,
  display: "none",
  "@min1024": {
    display: "block",
  },
  "@min1200": {
    width: 380,
  },
  height: "100%",
  bg: "#f0f0f0",
  zIndex: 20,
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
});

const NavItems = styled(motion.nav, {
  listStyleType: "none",
  margin: 0,
  padding: 0,
  cursor: "pointer",
});

const NavItem = styled("a", {
  textDecoration: "none",
  position: "relative",
  display: "flex",
  "&:focus-visible": {
    outline: "none",
  },
  zIndex: 2,
  cursor: "pointer",
  justifyContent: "space-between",
  pr: 24,
  "@min1200": {
    pr: 48,
  },
  variants: {
    active: {
      true: {
        [`& ${Text}`]: {
          fontWeight: 500,
        },
      },
    },
    primary: {
      true: {
        pl: 40,
        py: 20,
        "@min1200": {
          pl: 80,
        },
      },
    },
    subItem: {
      true: {
        pl: 24,
        py: 13.5,
        "@min1200": {
          pl: 40,
        },
      },
    },
  },
  defaultVariants: {
    primary: true,
  },
});

const ActvIndicator = styled(motion.div, {
  position: "absolute",
  background: "$crestBlue100",
  zIndex: 0,
});

const AccordionItem = styled("div", {});

const ItemHeader = styled("a", {
  position: "relative",
  boxSizing: "border-box",
  display: "flex",
  textDecoration: "none",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  p: 24,
  border: "none",
  "&:after": {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    content: "' '",
    display: "none",
    height: "1px",
    mx: "auto",
    width: "calc(100% - 16px)",
  },
  variants: {
    level: {
      primary: {
        bg: "$white",
        borderBottom: "1px solid $navy200",
      },
      secondary: {
        bg: "$background",
        "&:after": {
          display: "block",
          bg: "#E9EBEE",
        },
      },
      tertiary: {
        bg: "#E9EBEE",
        "&:after": {
          display: "block",
          bg: "$white",
        },
      },
    },
  },
});
const close = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const AccordionContent = styled(motion.div, {
  overflow: "hidden",
  display: "block !important",
  '&[data-state="closed"]': { animation: `${close} 200ms ease-out forwards` },
});

export {
  DrawerWrapper,
  Mobile,
  Primary,
  Secondary,
  Tertiary,
  NavItem,
  NavItems,
  ActvIndicator,
  AccordionItem,
  ItemHeader,
  AccordionContent,
};
