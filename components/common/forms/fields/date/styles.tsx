import ReactDatePicker from "react-datepicker";
import { styled } from "@styles/stitches";

const DateInput = styled(ReactDatePicker, {
  width: "90%",
  outline: "none",
  p: 16,
  fontFamily: "$poppins",
  fontWeight: "$regular",
  fontSize: "$bodySmall",
  lineHeight: "$medium",
  border: "1px solid $navy400",
  borderRadius: 2,
  overflowX: "scroll",
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

export { DateInput };
