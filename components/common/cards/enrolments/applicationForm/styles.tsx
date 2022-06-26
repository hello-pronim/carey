import { styled } from "@styles/stitches";

const ActionWrapper = styled("div", {});
const Card = styled("div", {
  display: "flex",
  position: "relative",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  objectFit: "cover",
  objectPosition: "bottom",
  boxShadow: "none",
  transition: "box-shadow 0.08s ease-out 0.08s",
  variants: {
    size: {
      small: {
        minWidth: 327,
        "@min1024": {
          minWidth: 560,
        },
      },
      large: {
        minWidth: 327,
        "@min1024": {
          minWidth: 1024,
        },
      },
    },
  },
  "&:hover": {
    boxShadow: "inset 0px 30px 120px 60px rgb(255 204 0 / 20%)",
  },
});
const CMarkImage = styled("div", {
  position: "absolute",
  bg: "url('assets/img/graphic-c-2.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  objectFit: "cover",
  width: 220,
  height: 240,
  left: 0,
  top: "50%",
  transform: "translate(0, -50%)",
});
const Description = styled("span", {
  gridColumn: "1 / span 12",
  color: "$navy",
  fontSize: "$bodyLarge",
  fontWeight: "$medium",
  lineHeight: "$large",
  letterSpacing: "$regular",
  "@min1024": {
    gridColumn: "1 / span 9",
    fontSize: "$bodyXXLarge",
    letterSpacing: "$tight",
  },
  variants: {
    size: {
      small: {
        "@min1024": {
          fontSize: "$bodyXLarge",
          gridColumn: "1 / span 12",
          letterSpacing: "$regular",
        },
      },
      large: {
        "@min1024": {
          fontSize: "$bodyXLarge",
          gridColumn: "1 / span 12",
          letterSpacing: "$regular",
        },
      },
    },
  },
});
const DescriptionWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
});
const Heading = styled("span", {
  color: "$navy",
  fontSize: "$headingOverline",
  lineHeight: "$large",
  letterSpacing: "$regular",
  "@min1024": {
    fontSize: "$headingXSmall",
  },
});
const HeadingWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  variants: {
    size: {
      small: {
        gap: 18,
        "@min1024": {
          gap: 24,
        },
      },
      large: {
        gap: 18,
        "@min1024": {
          gap: 24,
        },
      },
    },
  },
});
const ImageWrapper = styled("div", {
  height: "100%",
  overflow: "hidden",
});
const LeftContainer = styled("div", {
  position: "relative",
  height: "100%",
  variants: {
    size: {
      small: {
        paddingLeft: 144,
        "@min1024": {
          paddingLeft: 200,
        },
      },
      large: {
        paddingLeft: 144,
        "@min1024": {
          paddingLeft: 200,
        },
      },
    },
  },
});
const LeftWrapper = styled("div", {
  height: "100%",
  flex: 1,
});
const RightContainer = styled("div", {
  height: "100%",
  padding: 24,
  display: "flex",
  flexDirection: "column",
  variants: {
    size: {
      small: {
        padding: 24,
        paddingLeft: 0,
        gap: 24,
        "@min1024": {
          padding: 48,
          paddingLeft: 0,
          gap: 24,
        },
      },
      large: {
        padding: 24,
        paddingLeft: 0,
        gap: 24,
        "@min1024": {
          padding: 48,
          paddingLeft: 0,
          gap: 24,
        },
      },
    },
  },
});
const RightWrapper = styled("div", {
  flex: 1,
});

export {
  ActionWrapper,
  CMarkImage,
  Card,
  Description,
  DescriptionWrapper,
  Heading,
  HeadingWrapper,
  ImageWrapper,
  LeftContainer,
  LeftWrapper,
  RightContainer,
  RightWrapper,
};
