import { styled } from "@styles/stitches";

const ActionWrapper = styled("div", {});
const BottomWrapper = styled("div", {
  position: "relative",
  variants: {
    size: {
      small: {
        paddingLeft: "40%",
      },
      large: {
        paddingLeft: "40%",
      },
    },
  },
});
const Card = styled("div", {
  position: "relative",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  objectFit: "cover",
  objectPosition: "bottom",
  boxShadow: "none",
  transition: "box-shadow 0.08s ease-out 0.08s",
  height: "max-content",
  variants: {
    size: {
      small: {
        // minWidth: 327,
        "@min1024": {
          // minWidth: 560,
        },
      },
      large: {
        // minWidth: 327,
        "@min1024": {
          // minWidth: 859,
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
  bg: "url('/assets/img/graphic-c-2.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  objectFit: "cover",
  left: 0,
  top: "50%",
  transform: "translate(0, -50%)",
  variants: {
    size: {
      small: {
        width: "40%",
        height: "100%",
        "@min1440": {
          width: "35%",
          height: "100%",
        },
      },
      large: {
        width: "40%",
        height: "100%",
        "@min1024": {
          width: "35%",
          height: "100%",
        },
      },
    },
  },
});
const Description = styled("span", {
  gridColumn: "1 / span 12",
  color: "$navy",
  variants: {
    size: {
      small: {
        gridColumn: "1 / span 12",
        fontSize: "$bodyRegular",
        lineHeight: "$large",
        fontWeight: "$medium",
        letterSpacing: "$regular",
        "@min768": {
          gridColumn: "1 / span 12",
          fontSize: "$bodyRegular",
          lineHeight: "$large",
          fontWeight: "$medium",
          letterSpacing: "$regular",
        },
        "@min1920": {
          gridColumn: "1 / span 12",
          fontSize: "$bodyXLarge",
          lineHeight: "$large",
          fontWeight: "$medium",
          letterSpacing: "$regular",
        },
      },
      large: {
        gridColumn: "1 / span 12",
        fontSize: "$bodyRegular",
        lineHeight: "$large",
        fontWeight: "$medium",
        letterSpacing: "$regular",
        "@min768": {
          gridColumn: "1 / span 12",
          fontSize: "$bodyRegular",
          lineHeight: "$large",
          fontWeight: "$medium",
          letterSpacing: "$regular",
        },
        "@min1440": {
          gridColumn: "1 / span 10",
          fontSize: "$bodyXLarge",
          lineHeight: "$large",
          fontWeight: "$medium",
          letterSpacing: "$regular",
        },
        "@min1920": {
          gridColumn: "1 / span 9",
          fontSize: "$bodyXXLarge",
          lineHeight: "$large",
          fontWeight: "$medium",
          letterSpacing: "$tight",
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
  variants: {
    size: {
      small: {
        fontSize: "$headingOverline",
        lineHeight: "$large",
        letterSpacing: "$regular",
        "@min768": {
          fontSize: "$bodySmall",
          fontWeight: "$medium",
          lineHeight: "$medium",
        },
        "@min1024": {
          fontSize: "$headingXSmall",
          fontWeight: "$regular",
          lineHeight: "$large",
        },
        "@min1920": {
          fontSize: "$headingXSmall",
          fontWeight: "$regular",
          lineHeight: "$large",
        },
      },
      large: {
        fontSize: "$bodySmall",
        lineHeight: "$medium",
        letterSpacing: "$regular",
        "@min1440": {
          fontSize: "$headingXSmall",
          fontWeight: "$regular",
          lineHeight: "$large",
        },
      },
    },
  },
});
const HeadingWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  variants: {
    size: {
      small: {
        gap: 18,
        "@min768": {
          gap: 16,
        },
        "@min1920": {
          gap: 24,
        },
      },
      large: {
        gap: 18,
        "@min1440": {
          gap: 24,
        },
        "@min1920": {
          gap: 32,
        },
      },
    },
  },
});
const ImageWrapper = styled("div", {});
const TopWrapper = styled("div", {
  padding: 24,
  display: "flex",
  flexDirection: "column",
  variants: {
    size: {
      small: {
        padding: 24,
        paddingBottom: 0,
        gap: 24,
        "@min1024": {
          padding: 24,
          paddingBottom: 0,
          gap: 16,
        },
        "@min1440": {
          padding: 32,
          paddingBottom: 0,
          gap: 16,
        },
        "@min1920": {
          padding: 48,
          paddingBottom: 0,
          gap: 24,
        },
      },
      large: {
        padding: 24,
        paddingBottom: 0,
        gap: 24,
        "@min768": {
          padding: 24,
          paddingBottom: 0,
          gap: 32,
        },
        "@min1024": {
          padding: 32,
          paddingBottom: 0,
          gap: 32,
        },
        "@min1440": {
          padding: 48,
          paddingBottom: 0,
          gap: 40,
        },
        "@min1920": {
          padding: 48,
          paddingBottom: 0,
          gap: 80,
        },
      },
    },
  },
});

export {
  ActionWrapper,
  BottomWrapper,
  CMarkImage,
  Card,
  Description,
  DescriptionWrapper,
  Heading,
  HeadingWrapper,
  ImageWrapper,
  TopWrapper,
};
