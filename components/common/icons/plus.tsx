import * as React from "react";

const Plus = ({ width = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: width, height: "auto" }}
    {...props}
  >
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#051c3f" />
  </svg>
);

export default Plus;
