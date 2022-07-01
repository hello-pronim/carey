import { styled } from "@styles/stitches";
import { Swiper } from "swiper/react";

const CustomSwiper = styled(Swiper, {
  "&&&": {
    "& .swiper-slide": {
      width: "100%",
      height: "414px",
      transition: "all 0.5s ease",
      "@min768": {
        width: "32vw",
      },
      "@min1200": {
        width: "30vw",
        height: "600px",
      },
      "@min1440": {
        height: "720px",
      },
      "&.swiper-slide-active": {
        "@min768": {
          width: "56vw !important",
        },
        "@min1200": {
          width: "54vw !important",
          height: "600px",
        },
        "@min1440": {
          width: "52vw !important",
          height: "720px",
        },
      },
    },
  },
});

const SlideContainer = styled("div", {
  width: "100%",
  height: "100%",
  position: "relative",
  "&::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(0deg, rgba(5, 27, 63, 0.3), rgba(5, 27, 63, 0.3))",
    zIndex: 1,
  },
});

const SlideImage = styled("div", {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  transition: "visibility 0s linear 0.5s, opacity 0.5s",
  zIndex: 1,
});

const SlideVideo = styled("div", {
  width: "100%",
  height: "100%",
  position: "relative",
  "& video": {
    objectFit: "cover",
  },
});

const ModalVideoWrapper = styled("div", {
  gridColumn: "2 / span 10",
  gridRow: 1,
});

export {
  CustomSwiper,
  SlideContainer,
  SlideImage,
  SlideVideo,
  ModalVideoWrapper,
};
