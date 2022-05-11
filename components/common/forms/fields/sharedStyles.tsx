import { Text } from "@components/common";
import { styled } from "@styles/stitches";

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: 8,
});

const Label = styled("label", {
  display: "flex",
  flexDirection: "column",
  rowGap: 8,
  [`& ${Text}`]: {
    color: "$navy",
  },
  variants: {
    required: {
      true: {
        [`& ${Text}`]: {
          "&:after": {
            color: "$warning",
            content: "*",
            ml: 8,
          },
        },
      },
    },
    disabled: {
      true: {
        [`& ${Text}`]: {
          color: "$darkBlue200",
        },
      },
    },
  },
});

const Subtext = styled(Text, {
  color: "$warning",
  defaultVariants: {
    variant: "Body-xSmall",
  },
});

const InputWrapper = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
});

const Input = styled("input", {
  width: "100%",
  outline: "none",
  boxSizing: "border-box",
  bg: "$white",
  p: 16,
  fontFamily: "$poppins",
  fontWeight: "$regular",
  fontSize: "$bodySmall",
  lineHeight: "$medium",
  border: "1px solid $navy400",
  borderRadius: 2,
  overflowX: "scroll",
  '&[type="password"]': {
    pr: 64,
    letterSpacing: "0.125em",
    "&::placeholder": {
      letterSpacing: "initial",
    },
  },
  "&::placeholder": {
    color: "$navy300",
  },
  "&:focus-visible": {
    borderColor: "$navy",
  },
  "&:disabled": {
    borderColor: "$darkBlue200",
    background: "initial",
    "&::placeholder": {
      color: "$darkBlue200",
    },
  },
  variants: {
    error: {
      true: {
        borderColor: "$warning",
        "&:focus-visible": {
          borderColor: "$warning",
        },
      },
    },
  },
});

export { Wrapper, Label, Subtext, InputWrapper, Input };
