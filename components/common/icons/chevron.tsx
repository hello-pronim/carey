import * as React from "react";
import { styled } from "@styles/stitches";

const Chev = styled("svg", {
  transition: "transform 300ms",
  variants: {
    direction: {
      up: {
        transform: "rotate(-90deg)",
        "[data-state=open] > &": { transform: "rotate(90deg)" },
      },
      down: {
        transform: "rotate(90deg)",
        "[data-state=open] > &": { transform: "rotate(-90deg)" },
      },
      left: {
        transform: "rotate(180deg)",
        "[data-state=open] > &": { transform: "rotate(0deg)" },
      },
      right: {
        transform: "rotate(0deg)",
        "[data-state=open] > &": { transform: "rotate(180deg)" },
      },
    },
  },
  defaultVariants: {
    direction: "right",
  },
});

const Chevron = ({ width = 8, ...props }) => (
  <Chev
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
  </Chev>
);

export default Chevron;
