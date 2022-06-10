import { styled } from "@styles/stitches";
import { Text } from "@components/common";

const ActionWrapper = styled("div", {});
const Card = styled("div", {
  width: 859,
  bg: "$crestBlue",
});
const Description = styled(Text, {
  color: "$white",
  fontSize: "$bodyXLarge",
  fontWeight: "$medium",
  lineHeight: "$large",
  letterSpacing: "$regular",
  "@min1024": {
    fontSize: "$bodyXXLarge",
  },
});
const Heading = styled(Text, {
  color: "$crestYellow",
  fontSize: "$headingXSmall",
  lineHeight: "$regular",
  letterSpacing: "$regular",
});
const Wrapper = styled("div", {
  padding: 48,
  display: "flex",
  flexDirection: "column",
  gap: 24,
});

export { ActionWrapper, Card, Description, Heading, Wrapper };
