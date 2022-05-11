import { styled } from "@styles/stitches";

const Root = styled("button", {
  all: "unset",
  width: "fit-content",
  transition: "background ease-in-out 200ms",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  span: { lineHeight: "inherit" },
  columnGap: 18,
  "&:disabled": {
    pointerEvents: "none",
    cursor: "initial",
  },
  svg: {
    mt: -3,
  },
  variants: {
    scale: {
      xl: {
        borderRadius: 72,
        height: 72,
        lineHeight: "72px",
        px: 24,
      },
      lg: {
        borderRadius: 44,
        height: 56,
        lineHeight: "56px",
        px: 24,
      },
      md: {
        borderRadius: 44,
        height: 44,
        lineHeight: "44px",
        px: 16,
      },
      sm: {
        borderRadius: 40,
        height: 40,
        lineHeight: "40px",
        px: 16,
      },
      xs: {},
    },
    type: {
      solid: {},
      outline: {
        border: "1px solid $navy",
      },
      ghost: {},
    },
    theme: {
      light: {},
      dark: {},
    },
  },
  compoundVariants: [
    {
      type: "outline",
      scale: "xl",
      css: {
        borderWidth: 2,
      },
    },
    {
      type: "outline",
      theme: "light",
      css: {
        borderColor: "$navy",
        bg: "$white",
        "&:hover": {
          bg: "$darkBlue100",
        },
        "&:active": {
          bg: "$white",
        },
        "&:focus-visible": {
          bg: "$crestBlue150",
        },
        "&:disabled": {
          span: { color: "$darkBlue300" },
          svg: {
            path: {
              fill: "$darkBlue300",
            },
          },
          borderColor: "$darkBlue300",
        },
      },
    },
    {
      type: "outline",
      theme: "dark",
      css: {
        borderColor: "$crestYellow",
        bg: "$navy",
        span: { color: "$white" },
        svg: {
          path: {
            fill: "$white",
          },
        },
        "&:hover": {
          bg: "$darkBlue",
        },
        "&:active": {
          bg: "$darkBlue900",
        },
        "&:focus-visible": {
          borderColor: "$darkBlue600",
        },
        "&:disabled": {
          span: { color: "$darkBlue900" },
          borderColor: "$darkBlue900",
          svg: {
            path: {
              fill: "$darkBlue900",
            },
          },
        },
      },
    },
    {
      type: "solid",
      theme: "light",
      css: {
        bg: "$darkBlue",
        span: { color: "$white" },
        svg: {
          path: {
            fill: "$white",
          },
        },
        "&:hover": {
          span: { color: "$crestYellow" },
          svg: {
            path: {
              fill: "$crestYellow",
            },
          },
          bg: "$navy",
        },
        "&:active": {
          bg: "$darkBlue",
        },
        "&:focus-visible": {
          bg: "$crestBlue",
        },
        "&:disabled": {
          span: { color: "$darkBlue300" },
          bg: "$darkBlue100",
          svg: {
            path: {
              fill: "$darkBlue300",
            },
          },
        },
      },
    },
    {
      type: "solid",
      theme: "dark",
      css: {
        bg: "$crestYellow",
        "&:hover": {
          bg: "$darkerYellow",
        },
        "&:active": {
          bg: "$crestYellow",
        },
        "&:focus-visible": {
          border: "1px solid $white",
        },
        "&:disabled": {
          span: { color: "$darkBlue900" },
          svg: {
            path: {
              fill: "$darkBlue900",
            },
          },
          bg: "$darkBlue600",
        },
      },
    },
  ],
  defaultVariants: {
    scale: "md",
    type: "solid",
    theme: "light",
  },
});

export default Root;