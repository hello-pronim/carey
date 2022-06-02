import { styled } from "@styles/stitches";
import rem from "@utils/pxRem";

const Text = styled("span", {
  //consistent Styles
  color: "$navy",
  fontFeatureSettings: "'pnum' on, 'lnum' on",
  textDecoration: "none",
  a: {
    color: "$link",
  },
  //Variants
  variants: {
    variant: {
      "Display-Large": {
        fontWeight: "$regular",
        fontSize: rem("300px"),
        lineHeight: "80%",
        letterSpacing: "$regular",
      },
      "Display-Regular": {
        fontWeight: "$regular",
        fontSize: rem("112px"),
        lineHeight: "80%",
        letterSpacing: "$regular",
        "@min768": {
          fontWeight: "$regular",
          fontSize: rem("112px"),
          lineHeight: "80%",
          letterSpacing: "$regular",
        },
      },
      "Heading-xLarge": {
        fontWeight: "$medium",
        fontSize: "$headingLarge",
        lineHeight: "$small",
        letterSpacing: "$tight",
        "@min768": {
          fontWeight: "$medium",
          fontSize: "$headingXLarge",
          lineHeight: "$large",
          letterSpacing: "$tight",
        },
      },
      "Heading-Large": {
        fontWeight: "$medium",
        fontSize: "$headingSmall",
        lineHeight: "$large",
        letterSpacing: "$regular",
        "@min768": {
          fontWeight: "$medium",
          fontSize: "$headingLarge",
          lineHeight: "$small",
          letterSpacing: "$tight",
        },
      },
      "Heading-Small": {
        fontWeight: "$regular",
        fontSize: "$headingXSmall",
        letterSpacing: "$tight",
        lineHeight: "$large",

        "@min768": {
          fontWeight: "$medium",
          fontSize: "$headingSmall",
          lineHeight: "$large",
          letterSpacing: "$regular",
        },
      },
      "Heading-xSmall": {
        fontWeight: "$regular",
        fontSize: rem("16px"),
        lineHeight: "$large",
        letterSpacing: "$regular",
        "@min768": {
          fontWeight: "$regular",
          fontSize: "$headingXSmall",
          lineHeight: "$small",
          letterSpacing: "$tight",
        },
      },
      "Heading-Overline": {
        fontWeight: "$semiBold",
        fontSize: "$headingOverline",
        lineHeight: "$medium",
        letterSpacing: "$spaced",
      },
      "Button-Large": {
        fontWeight: "$regular",
        fontSize: "$buttonLarge",
        lineHeight: "$large",
        letterSpacing: "$regular",
      },
      "Button-Large-Med": {
        fontWeight: "$medium",
        fontSize: "$buttonLarge",
        lineHeight: "$large",
        letterSpacing: "$roomy",
        textTransform: "uppercase",
      },
      "Button-Regular": {
        fontWeight: "$regular",
        fontSize: "$buttonRegular",
        lineHeight: "$large",
        letterSpacing: "$regular",
        "@min375": {
          fontSize: "$bodySmall",
        },
        "@min1440": {
          fontSize: "$buttonRegular",
        },
      },
      "Button-Regular-Med": {
        fontWeight: "$medium",
        fontSize: "$bodySmall",
        lineHeight: "$large",
        letterSpacing: "$regular",
        textTransform: "uppercase",
        "@min1200": {
          fontSize: "$buttonRegular",
        },
      },
      "Body-xxLarge": {
        fontWeight: "$regular",
        fontSize: "$bodyXLarge",
        lineHeight: "$large",
        letterSpacing: "$regular",
        "@min768": {
          fontWeight: "$medium",
          fontSize: "$bodyXXLarge",
          lineHeight: "$large",
          letterSpacing: "$tight",
        },
      },
      "Body-xLarge-Bold": {
        fontWeight: "$semiBold",
        fontSize: "$bodyLarge",
        lineHeight: "$large",
        "@min768": {
          fontWeight: "$semiBold",
          fontSize: "$bodyXLarge",
          lineHeight: "$large",
          letterSpacing: "$regular",
        },
      },
      "Body-xLarge": {
        fontWeight: "$regular",
        fontSize: "$bodyLarge",
        lineHeight: "$large",
        letterSpacing: "$regular",
        "@min768": {
          fontWeight: "$regular",
          fontSize: "$bodyXLarge",
          lineHeight: "$large",
          letterSpacing: "$regular",
        },
      },
      "Body-Large-Bold": {
        fontWeight: "$semiBold",
        fontSize: "$bodyRegular",
        lineHeight: "$large",
        letterSpacing: "$regular",
        "@min768": {
          fontWeight: "$semiBold",
          fontSize: "$bodyLarge",
          lineHeight: "$large",
        },
      },
      "Body-Large": {
        fontWeight: "$regular",
        fontSize: "$bodyRegular",
        lineHeight: "$large",
        letterSpacing: "$regular",
        "@min768": {
          fontWeight: "$regular",
          fontSize: "$bodyLarge",
          lineHeight: "$large",
          letterSpacing: "$regular",
        },
      },
      "Body-Regular-Bold": {
        fontWeight: "$semiBold",
        fontSize: "$bodySmall",
        lineHeight: "$medium",
        "@min768": {
          fontWeight: "$semiBold",
          fontSize: "$bodyRegular",
          lineHeight: "$large",
          letterSpacing: "$regular",
        },
      },
      "Body-Regular": {
        fontWeight: "$regular",
        fontSize: "$bodySmall",
        lineHeight: "$large",
        letterSpacing: "$regular",
        "@min768": {
          fontWeight: "$regular",
          fontSize: "$bodyRegular",
          lineHeight: "$large",
          letterSpacing: "$regular",
        },
      },
      "Body-Small-Bold": {
        fontWeight: "$semiBold",
        fontSize: "$bodyXSmall",
        lineHeight: "$large",
        letterSpacing: "$regular",
        "@min768": {
          fontWeight: "$semiBold",
          fontSize: "$bodySmall",
          lineHeight: "$medium",
        },
      },
      "Body-Small": {
        fontWeight: "$regular",
        fontSize: "$bodyXSmall",
        lineHeight: "$large",
        letterSpacing: "$regular",
        "@min768": {
          fontWeight: "$regular",
          fontSize: "$bodySmall",
          lineHeight: "$large",
          letterSpacing: "$regular",
        },
      },
      "Body-xSmall-Bold": {
        fontWeight: "$semiBold",
        fontSize: "$bodyXSmall",
        lineHeight: "$large",
        letterSpacing: "$regular",
      },
      "Body-xSmall": {
        fontWeight: "$regular",
        fontSize: "$bodyXSmall",
        lineHeight: "$large",
        letterSpacing: "$regular",
      },
      "Body-xxSmall-Bold": {
        fontWeight: "$semiBold",
        fontSize: "$bodyXXSmall",
        lineHeight: "$small",
        letterSpacing: "$regular",
      },
      "Body-xxSmall": {
        fontWeight: "$regular",
        fontSize: "$bodyXXSmall",
        lineHeight: "$small",
        letterSpacing: "$regular",
      },
    },
    font: {
      poppins: { fontFamily: "$poppins" },
      avallon: { fontFamily: "$avallon" },
    },
  },
  defaultVariants: {
    variant: "Body-Regular",
    font: "poppins",
  },
});

export default Text;
