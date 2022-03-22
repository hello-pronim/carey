const theme = {
  fonts: ["Verdana"],
  fontSizes: [12, 14, 16, 18, 24, 26, 32, 42, 44, 74, 80, 100],
  lineHeights: ["110%", "115%", "130%", "135%", "140%"],
  letterSpacings: ["-0.01em", "-0.02em", "-0.03em", "0.1em"],
  fontWeights: ["normal", 600],
  colors: {},
  shadows: {},
  breakpoints: [
    "375px",
    "600px",
    "768px",
    "1024px",
    "1440px",
    "1660px",
    "1920px",
  ],
  mediaQueries: {
    xxSmall: `@media screen and (min-width: 375px)`,
    xSmall: `@media screen and (min-width: 600px)`,
    small: `@media screen and (min-width: 768px)`,
    medium: `@media screen and (min-width: 1024px)`,
    large: `@media screen and (min-width: 1440px)`,
    xLarge: `@media screen and (min-width: 1660px)`,
    xxLarge: `@media screen and (min-width: 1920px)`,
  },
};

export default theme;
