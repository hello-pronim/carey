import { styled } from "@styles/stitches";
import ArrowRight from "@components/common/icons/arrowRight";

const CarouselScrollbarWrapper = styled("div", {
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "1fr auto",
  gap: "40px",
  "@min1024": {
    gap: "100px",
  },
  "@min1200": {
    gap: "200px",
  },
});

const ProgressBar = styled("div", {
  height: "8px",
  borderRadius: "16px",
  backgroundColor: "$crestBlue700",
});

const ArrowsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "18px",
  [`& ${ArrowRight}`]: {
    cursor: "pointer",
  },
});

const ArrowLeftWrappers = styled("div", {
  display: "inline-grid",
  transform: "rotate(180deg)",
});

const ActiveProgress = styled("div", {
  height: "100%",
  borderRadius: "16px",
  backgroundColor: "$navy",
  transition: "width 0.4s ease",
});

export {
  CarouselScrollbarWrapper,
  ProgressBar,
  ActiveProgress,
  ArrowsContainer,
  ArrowLeftWrappers,
};
