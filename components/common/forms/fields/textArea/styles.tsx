import { styled } from "@styles/stitches";
import { Input } from "../sharedStyles";

const AreaHeight = 160;

const AreaInput = styled(Input, {
  resize: "vertical",
  overflow: "scroll",
  minHeight: AreaHeight,
  maxHeight: `calc(${AreaHeight}px * 2)`,
  "&:disabled": {
    resize: "none",
  },
});

export { AreaInput };
