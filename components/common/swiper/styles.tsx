import { motion } from "framer-motion";
import { styled } from "@styles/stitches";

export const Wrapper = styled("div", {
  position: "relative",
  boxSizing: "border-box",
  width: "100%",
  gridColumn: "1 / span 2",
  "@min768": {
    gridColumn: "1 / span 6",
  },
  "@min1024": {
    gridColumn: "1 / span 12",
  },
  ".swiper-pagination": {
    position: "absolute !important",
    bottom: "16px !important",
    left: "unset !important",
    right: "16px !important",
    width: "fit-content !important",
    ".swiper-pagination-bullet": {
      bg: "$white",
      opacity: 1,
    },
    ".swiper-pagination-bullet-active": {
      bg: "$crestYellow",
    },
  },
});
export const Track = styled("div", {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr",
});
export const Slide = styled(motion.div, {});
export const Pagination = styled("div", {
  display: "flex",
  columnGap: 8,
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  bottom: 16,
  right: 16,
});
export const Dot = styled("div", {
  borderRadius: "50%",
  width: 8,
  height: 8,
  bg: "$white",
  variants: {
    active: {
      true: {
        bg: "$crestYellow",
      },
    },
  },
});
