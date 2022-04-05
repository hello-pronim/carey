import * as React from "react";

const Chevron = ({ width = 8, ...props }) => (
  <svg
    viewBox="0 0 8 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: width, height: "auto" }}
    {...props}
  >
    <path
      d="M1.41.815 0 2.225l4.58 4.59L0 11.405l1.41 1.41 6-6-6-6Z"
      fill="#051B3F"
    />
  </svg>
);

export default Chevron;
