import { styled } from "@styles/stitches";

const ImageWrapper = styled("div", {
  position: "relative",
  transition: "opacity 0.4s ease-in",
  variants: {
    show: {
      false: {
        opacity: 0,
      },
      true: {
        opacity: 1,
      },
    },
  },
});
const Wrapper = styled("div", {
  position: "relative",
});

export { ImageWrapper, Wrapper };
