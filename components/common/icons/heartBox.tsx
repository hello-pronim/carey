import * as React from "react";

const HeartBox = ({ width = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: width, height: "auto" }}
    {...props}
  >
    <path
      d="M21 3H3c-1.1 0-2 .85-2 1.95v14c0 1.1.9 2.05 2 2.05h18c1.1 0 2-.95 2-2.05v-14C23 3.85 22.1 3 21 3Zm0 16H3V5h18v14Z"
      fill="#051B3F"
    />
    <path
      d="M6 9.929c0 .814.337 1.528.878 2.071L12 17l5.122-5A2.904 2.904 0 0 0 18 9.929C18 8.314 16.654 7 15 7c-.834 0-1.58.329-2.122.857L12 8.714l-.878-.843A3 3 0 0 0 9 7C7.346 7 6 8.314 6 9.929Z"
      fill="#051B3F"
    />
  </svg>
);

export default HeartBox;
