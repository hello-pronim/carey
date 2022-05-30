import * as React from "react";
import { theme } from "@styles/stitches";

const CareyLink = ({
  width = 24,
  fill = theme.colors.navy.value,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: width, height: "auto" }}
    {...props}
  >
    <g clipPath="url(#a)" fill={fill}>
      <path d="M12.718 18.382c-3.536 0-6.418-2.862-6.418-6.387 0-3.518 2.876-6.387 6.418-6.387a6.41 6.41 0 0 1 5.34 2.85l.242.363-1.915 1.256-.242-.365a4.158 4.158 0 0 0-3.477-1.866c-2.294 0-4.164 1.86-4.164 4.143 0 2.283 1.87 4.143 4.164 4.143a4.15 4.15 0 0 0 3.477-1.867l.242-.364 1.915 1.255-.242.364a6.4 6.4 0 0 1-5.34 2.862Z" />
      <path d="M18.79 15.869a7.315 7.315 0 0 1-6.073 3.205c-4.017 0-7.286-3.212-7.286-7.159 0-3.947 3.269-7.159 7.286-7.159a7.315 7.315 0 0 1 6.074 3.205l.256.381L21 7.083l-.256-.38c-1.794-2.696-4.814-4.295-8.076-4.295-5.332 0-9.668 4.26-9.668 9.5s4.336 9.5 9.668 9.5c3.262 0 6.282-1.599 8.076-4.28l.256-.381-1.953-1.26-.256.382Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill={theme.colors.white.value}
          transform="translate(3 2.408)"
          d="M0 0h18v19H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default CareyLink;
