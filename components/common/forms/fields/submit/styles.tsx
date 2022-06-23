import { styled } from "@styles/stitches";

const Input = styled("input", {
  outline: "none",
  border: "none",
  p: 16,
  transition: "background ease-in-out 200ms",
  fontFamily: "$poppins",
  fontWeight: "$regular",
  fontSize: "$bodySmall",
  lineHeight: "$medium",
  background: "$crestYellow",
  color: "$navy",
  borderRadius: 44,
  minWidth: "156px",
  cursor: "pointer",
  "&:focus-visible": {},
  "&:disabled": {
    background: "$crestBlue",
    color: "$white",
    cursor: "initial",
  },
  "&:hover": {
    bg: "$navy600",
    color: "$white",
  },
});

export { Input };
