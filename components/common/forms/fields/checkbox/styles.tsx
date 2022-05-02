import { Text } from "@components/common";
import { styled } from "@styles/stitches";
import * as Check from "@radix-ui/react-checkbox";

const Root = styled(Check.Root, {
  position: "relative",
  width: 24,
  height: 24,
  bg: "$white",
  borderRadius: 2,
  border: "1px solid $navy400",
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  variants: {
    disabled: {
      true: {
        borderColor: "$darkBlue200",
      },
    },
    error: {
      true: {
        borderColor: "$warning",
      },
    },
  },
});

const Indicator = styled(Check.Indicator, {
  alignItems: "center",
  justifyContent: "center",
  display: "contents",
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

export { Root, Indicator, Wrapper };
