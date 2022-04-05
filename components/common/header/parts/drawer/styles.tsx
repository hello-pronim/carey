import { styled } from "@styles/stitches";
import { motion } from "framer-motion";

const DrawerWrapper = styled(motion.div, {
  position: "absolute",
  display: "flex",
  boxSizing: "border-box",
  zIndex: 100,
  height: "calc(100vh - 80px)",
  left: 0,
  top: 80,
  borderLeft: "20px solid #fff",
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
});

const Primary = styled(motion.div, {
  position: "relative",
  py: 20,
  pr: 8,
  width: 380,
  height: "100%",
  bg: "#ffffff",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  zIndex: 40,
});

const Secondary = styled(motion.div, {
  py: 20,
  pr: 8,
  width: 380,
  height: "100%",
  bg: "#f4f4f4",
  zIndex: 30,
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
});

const Tertiary = styled(motion.div, {
  py: 20,
  pr: 8,
  width: 380,
  height: "100%",
  bg: "#f0f0f0",
  zIndex: 20,
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
});

const NavItems = styled("ul", {
  listStyleType: "none",
  margin: 0,
  padding: 0,
});

const PrimaryItem = styled("li", {
  position: "relative",
  display: "flex",
  pl: 80,
  pr: 40,
  py: 20,
  zIndex: 2,
  justifyContent: "space-between",
  variants: {
    active: {
      true: {},
    },
  },
});

const ActiveIndicator = styled(motion.div, {
  position: "absolute",
  background: "$crestBlue100",
  zIndex: 0,
});

export {
  DrawerWrapper,
  Primary,
  Secondary,
  Tertiary,
  PrimaryItem,
  NavItems,
  ActiveIndicator,
};
