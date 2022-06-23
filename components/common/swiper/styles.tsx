import { motion } from "framer-motion";
import { styled } from "@styles/stitches";

export const Wrapper = styled("div", {
  position: "relative",
  boxSizing: "border-box",
  width: "100%",
  height: "fit-content",
});
export const Track = styled("div", {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr",
});
export const Slide = styled(motion.div, {
  gridRow: 1,
  gridColumn: 1,
  width: "100%",
});
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
