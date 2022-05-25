import React, { forwardRef } from "react";
import { styled, theme } from "@styles/stitches";

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
    toggleState: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      direction: "up",
      toggleState: true,
      css: { transform: "rotate(90deg)" },
    },
    {
      direction: "down",
      toggleState: true,
      css: { transform: "rotate(-90deg)" },
    },
    {
      direction: "left",
      toggleState: true,
      css: { transform: "rotate(0deg)" },
    },
    {
      direction: "right",
      toggleState: true,
      css: { transform: "rotate(180deg)" },
    },
  ],
  defaultVariants: {
    direction: "right",
  },
});

const Chevron = forwardRef(
  (
    { width = 8, fill = theme.colors.navy.value, ...props }: ChevronTypes,
    ref
  ) => (
    <Chev
      {...ref}
      viewBox="0 0 8 13"
      fill="none"
      style={{ width: width, height: "auto" }}
      {...props}
    >
      <path
        d="M1.41.815 0 2.225l4.58 4.59L0 11.405l1.41 1.41 6-6-6-6Z"
        fill={fill}
      />
    </Chev>
  )
);

Chevron.displayName = "Chevron";

type ChevronTypes = {
  direction?: "up" | "down" | "left" | "right";
  toggleState?: boolean;
  state?: any;
  width?: number;
  fill?: string;
  props?: any;
};

export default Chevron;
