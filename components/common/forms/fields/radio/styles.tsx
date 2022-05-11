import { styled } from "@stitches/react";
import { Text } from "@components/common";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

const RadioGroupRadio = styled(RadioGroupPrimitive.Item, {
  all: "unset",
  backgroundColor: "white",
  width: 25,
  height: 25,
  borderRadius: "100%",
  transition: "border ease-in-out 200ms",
  border: "1px solid $navy400",
  "&:hover": { borderColor: "$navy" },
  "&:focus": { borderColor: "$navy" },
  "&:disabled": {
    borderColor: "$darkBlue200",
  },
  variants: {
    error: {
      true: {
        borderColor: "$warning",
      },
    },
  },
});

const RadioGroupIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    width: 16,
    height: 16,
    borderRadius: "50%",
    backgroundColor: "$navy",
  },
});

const Root = styled(RadioGroupPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  rowGap: 12,
});

const Wrapper = styled("label", {
  display: "flex",
  alignItems: "center",
  columnGap: 12,
  height: "fit-content",
  cursor: "pointer",
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

export { RadioGroupRadio, RadioGroupIndicator, Root, Wrapper };
