import { styled } from "@styles/stitches";

const ImageWrapper = styled("div", {
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

export { ImageWrapper };
