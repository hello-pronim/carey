import * as React from "react";

const Play = ({ width = 40, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    style={{ width: width, height: "auto" }}
    {...props}
  >
    <path
      fill="#FC0"
      d="M19.999 3.332c-9.2 0-16.667 7.467-16.667 16.667 0 9.2 7.467 16.666 16.667 16.666 9.2 0 16.666-7.466 16.666-16.666S29.2 3.332 20 3.332Zm-3.334 24.167v-15l10 7.5-10 7.5Z"
    />
  </svg>
);

export default Play;
