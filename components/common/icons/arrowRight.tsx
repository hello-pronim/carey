import * as React from "react";
import { theme } from "@styles/stitches";

const ArrowRight = ({
  width = 24,
  fill = theme.colors.navy.value,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="14"
    viewBox="0 0 20 14"
    fill="none"
    style={{ width: width, height: "auto" }}
    {...props}
  >
    <path
      d="M12.4791 0L11.144 1.41L15.4806 6H0.169922V8H15.4806L11.1346 12.59L12.4791 14L19.1071 7L12.4791 0Z"
      fill={fill}
    />
  </svg>
);

export default ArrowRight;
