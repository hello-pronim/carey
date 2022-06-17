import { styled } from "@styles/stitches";

const ImageWrapper = styled("div", {
  gridColumn: "1 / span 4",
});
const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 48,
});

export { ImageWrapper, Wrapper };
