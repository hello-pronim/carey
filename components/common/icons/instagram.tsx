import * as React from "react";
import { theme } from "@styles/stitches";

const Instagram = ({
  width = 24,
  fill = theme.colors.navy.value,
  ...props
}) => (
  <svg
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: width, height: "100%" }}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.09595 7C2.09595 4.23858 4.33452 2 7.09595 2H17.0959C19.8574 2 22.0959 4.23858 22.0959 7V17C22.0959 19.7614 19.8574 22 17.0959 22H7.09595C4.33452 22 2.09595 19.7614 2.09595 17V7Z"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.096 11.37C16.3491 13.077 15.479 14.7538 13.9376 15.5297C12.3962 16.3055 10.5311 16.0054 9.31084 14.7852C8.09063 13.5649 7.7905 11.6998 8.56633 10.1584C9.34216 8.61697 11.019 7.74687 12.726 7.99999C14.469 8.25846 15.8375 9.62702 16.096 11.37Z"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Instagram;
