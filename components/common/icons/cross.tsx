import * as React from "react";

const Cross = ({ width = 14, color = "#6696BE", ...props }) => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: width, height: "auto" }}
    {...props}
  >
    <path
      fill={color}
      d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z"
    />
  </svg>
);

export default Cross;
