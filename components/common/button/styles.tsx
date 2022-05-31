import { styled } from "@styles/stitches";

const Root = styled("button", {
  all: "unset",
  width: "fit-content",
  transition: "background ease-in-out 200ms",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  columnGap: 18,
  "&:disabled": {
    pointerEvents: "none",
    cursor: "initial",
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
        lineHeight: 44,
        px: 24,
        "@min375": {
          borderRadius: 40,
          height: 40,
          lineHeight: 40,
          px: 20,
        },
        "@min1440": {
          borderRadius: 44,
          height: 44,
          lineHeight: 44,
          px: 24,
        },
      },
      sm: {
        borderRadius: 40,
        height: 40,
        lineHeight: "40px",
        px: 16,
      },
      xs: {
        borderRadius: 32,
        height: 32,
        lineHeight: "32px",
        px: 24,
      },
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
      transparent: {},
    },
    fullWidth: {
      true: {
        width: "100%",
      },
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
      theme: "transparent",
      css: {
        borderColor: "$crestYellow",
        bg: "transparent",
        boxSizing: "border-box",
        "&:hover": {
          bg: "$darkBlue",
        },
        span: {
          color: "$white",
        },
        svg: {
          path: {
            fill: "$white",
          },
        },
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
