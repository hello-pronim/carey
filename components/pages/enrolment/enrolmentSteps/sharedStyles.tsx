import { styled } from "@styles/stitches";

const AddButton = styled("div", {
  fontSize: 20,
  color: "$navy",
  border: "2px solid $navy",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 44,
  height: 56,
  lineHeight: "32px",
  px: 24,
  cursor: "pointer",
  transition: "background ease-in-out 200ms",
  display: "inline-flex",
  mt: 30,
  mb: 50,
  svg: {
    path: {
      fill: "$navy",
    },
    width: 24,
    height: 24,
    mt: -4,
  },
  "&:hover": {
    color: "$white",
    borderColor: "$darkBlue900",
    background: "$darkBlue900",
    svg: {
      path: {
        fill: "$white",
      },
    },
  },
});

const ButtonsContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  columnGap: 15,
  mt: 30,
});

export { AddButton, ButtonsContainer };
