import * as React from "react";
import { theme } from "@styles/stitches";

const ArrowRight = ({
  width = 24,
  fill = theme.colors.navy.value,
  ...props
}) => (
  <svg
    viewBox="0 0 24 16.8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: width, height: "auto" }}
    {...props}
  >
    <path
      d="M13 0L11.59 1.41L16.17 6H0V8H16.17L11.58 12.59L13 14L20 7L13 0Z"
      fill={fill}
    />
  </svg>
);

export default ArrowRight;
