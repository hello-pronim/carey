import { Text } from "@components/common";
import { styled } from "@styles/stitches";

const Input = styled("input", {
  width: "100%",
  outline: "none",
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

const PassToggle = styled("button", {
  position: "absolute",
  height: "calc(100% - 2px)",
  bg: "$white",
  border: "none",
  borderRadius: "0 2px 2px 0",
  right: 1,
  width: 64,
  [`& ${Text}`]: {
    fontSize: 12,
    fontWeight: 300,
    lineHeight: "$medium",
    textDecoration: "underline",
  },
});

export { Input, PassToggle };
