import { styled } from "@styles/stitches";

const CommunityCarousel = styled("div", {
  position: "relative",
  gridColumn: "1 / span 12",
  "@min1440": {
    gridColumn: "2 / span 11",
  },
  "&:before": {
    content: "",
    backgroundColor: "$background",
    width: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "-100%",
    pointerEvents: "none",
    zIndex: 3,
  },
});

export { CommunityCarousel };
