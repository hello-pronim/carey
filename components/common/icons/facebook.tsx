import * as React from "react";
import { theme } from "@styles/stitches";

const Facebook = ({ width = 24, fill = theme.colors.navy.value, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: width, height: "100%" }}
    {...props}
  >
    <path
      d="M9.21593 3.32003H11.0959V0.14003C10.1857 0.045377 9.27109 -0.00135428 8.35593 2.98641e-05C5.63593 2.98641e-05 3.77593 1.66003 3.77593 4.70003V7.32003H0.705933V10.88H3.77593V20H7.45593V10.88H10.5159L10.9759 7.32003H7.45593V5.05003C7.45593 4.00003 7.73593 3.32003 9.21593 3.32003Z"
      fill={fill}
    />
  </svg>
);

export default Facebook;
