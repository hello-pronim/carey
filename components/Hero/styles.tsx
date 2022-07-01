import { styled } from "@styles/stitches";
import { container } from "@components/common/container/container";

const Actions = styled("div", {
  display: "none",
  position: "absolute",
  height: "100%",
  right: 0,
  background: "$crestBlue",
  "@min768": {
    display: "block",
  },
});
const ActionsWrapper = styled("div", {
  position: "relative",
  height: "100%",
});
const HeroText = styled("h1", {
  fontFamily: "$avallon",
  fontSize: "90px",
  lineHeight: "80%",
  fontWeight: "$regular",
  letterSpacing: "$regular",
  "@min768": {
    fontSize: "180px",
    lineHeight: "80%",
  },
  "@min1024": {
    fontSize: "180px",
    lineHeight: "80%",
  },
  "@min1440": {
    fontSize: "240px",
    lineHeight: "80%",
  },
  "@min1920": {
    fontSize: "300px",
    lineHeight: "80%",
  },
});
const Wrapper = styled(container.outer, {
  position: "relative",
  minHeight: 450,
  "@min768": {
    minHeight: 693,
  },
  "@min1920": {
    minHeight: 960,
  },
});

const ApplyOnlineWrapper = styled(container.outer, {
  position: "relative",
  minHeight: 450,
  "@min768": {
    minHeight: 693,
  },
});

const InnerGrid = styled(container.grid, {
  position: "relative",
  bg: "$darkBlue",
  mx: "auto",
});

// Mimics the spacing of the margin usually used for the inner grid.
// The bumpers are used instead of the margins as 2 different colours
// are displayed either side of the grid in the design, so a singular bg color wasn't viable.
const Bumper = styled("div", {
  display: "flex",
  flexGrow: 1,
  minWidth: "24px",
  "@min768": {
    minWidth: "32px",
  },
  "@min1024": {
    minWidth: "40px",
  },
  "@min1440": {
    minWidth: "56px",
  },
  "@min1920": {
    minWidth: "80px",
  },
});

const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  zIndex: 1,
  p: 44,
  rowGap: 24,
  gridColumn: "1 / span 2",
  "@min768": {
    gridColumn: "1 / span 3",
  },
  "@min1024": {
    gridColumn: "1 / span 5",
  },
  "@min1200": {
    gridColumn: "1 / span 4",
  },
  "h6, h1, h2": {
    margin: "unset",
    color: "$white",
  },
});

const ApplyOnlineContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  zIndex: 1,
  p: 44,
  pb: 0,
  rowGap: 24,
  gridColumn: "1 / span 6",
  "h6, h1, h2": {
    margin: "unset",
    color: "$white",
  },
  "@max1440": {
    gridColumn: "1 / span 8",
  },
});

const ApplicationSupport = styled("div", {
  gridColumn: "9 / span 3",
  "@max768": {
    gridColumn: "1 / 9",
    ml: 40,
    mr: 40,
  },
});

const ApplicationSupportContent = styled("div", {
  background: "$crestBlue",
  padding: 24,
  mt: 56,
  "h2,p": {
    color: "$white",
  },
  h2: {
    mt: 0,
    pb: 50,
  },
});

const DisplayContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  zIndex: 1,
  rowGap: 24,
  p: "42px 24px",
  gridRow: 1,
  gridColumn: "1 / span 2",
  "@min768": {
    width: "50%",
    justifyContent: "flex-end",
    gridColumn: "1 / span 6",
    p: "64px 48px",
  },
  "@min1024": {
    width: "60%",
    justifyContent: "center",
    gridColumn: "1 / span 12",
    p: "24px 80px",
  },
  "@min1440": {
    width: "60%",
    justifyContent: "center",
    p: "32px 80px",
  },
  "@min1920": {
    width: "60%",
    justifyContent: "center",
    p: "48px 144px",
  },
  "h6, h1, h2": {
    margin: "unset",
    color: "$white",
  },
});

const CTAWrapper = styled("div", {
  mt: 24,
});

const ImageWrapper = styled("div", {
  height: "auto",
  gridColumn: "1 / span 2",
  "@min768": {
    height: 108,
    gridColumn: "4 / span 3",
  },
  "@min1024": {
    gridColumn: "6 / span 7",
  },
  "@min1200": {
    gridColumn: "5 / span 8",
  },
  "@min1440": {
    height: 120,
  },
  "@min1920": {
    height: 160,
  },
  span: {
    height: "100% !important",
  },
});

const ApplyOnlineImageWrapper = styled("div", {
  height: "100%",
  gridColumn: "8 / span 5",
  display: "none",
  "@min1440": {
    display: "block",
  },
});

const VideoWrapper = styled("div", {
  height: "100%",
  gridColumn: "1 / span 2",
  "@min768": {
    gridColumn: "4 / span 3",
  },
  "@min1024": {
    gridColumn: "6 / span 7",
  },
  "@min1200": {
    gridColumn: "5 / span 8",
  },
  span: {
    height: "100% !important",
  },
  video: {
    width: "100%",
    maxHeight: "542px",
    objectFit: "cover",
  },
});

const DisplayImageWrapper = styled("div", {
  height: 432,
  gridColumn: "1 / span 2",
  gridRow: 1,
  "@min768": {
    height: "100%",
    gridColumn: "1 / span 6",
  },
  "@min1024": {
    height: "100%",
    gridColumn: "1 / span 12",
  },
  span: {
    height: "100% !important",
  },
});

const DisplayVideoWrapper = styled("div", {
  height: "100%",
  width: "100%",
  gridColumn: "1 / span 2",
  gridRow: 1,
  "@min768": {
    gridColumn: "1 / span 6",
  },
  "@min1024": {
    gridColumn: "1 / span 12",
  },
  span: {
    height: "100% !important",
  },
  video: {
    width: "100%",
    maxHeight: "920px",
    objectFit: "cover",
  },
});

const Crest = styled("div", {
  display: "none",
  right: 40,
  "@min768": {
    display: "block",
  },
  "@min1024": {
    right: 80,
  },
  zIndex: 0,
  position: "absolute",

  height: "100%",
  width: "449px",
  span: {
    height: "100% !important",
  },
});
const Div = styled("div", {});
const MobileActions = styled("div", {
  display: "flex",
  gridArea: "2 / 1 / auto / span 2",
  marginLeft: -24,
  "@min768": {
    display: "none",
  },
});
const MobileActionsWrapper = styled("div", {
  display: "flex",
  width: "100%",
});
const ContentBox = styled("div", {
  position: "relative",
  flex: "auto",
  "@min768": {
    position: "absolute",
    right: "0",
    bottom: "0",
  },
});
const QuickLinks = styled("div", {
  width: "auto",
  backgroundColor: "#FFFFFF",
  p: "32px 24px 16px 24px",
  "@min768": {
    width: "280px",
    p: "32px 32px 16px",
  },
  "@min1440": {
    width: "306px",
    p: "32px 32px 16px",
  },
  "@min1920": {
    width: "378px",
    p: "56px 56px 32px",
  },
});
const QuickLinksList = styled("ul", {
  listStyle: "none",
  pl: 0,
  mb: 0,
  mt: 0,
  "@min768": {
    mt: 16,
  },
  "@min1024": {
    mt: 16,
  },
  "@min1440": {
    mt: 16,
  },
  "@min1920": {
    mt: 24,
  },
});
const QuickLinksListItem = styled("li", {
  borderBottom: "1px solid #B3CBDE",
  py: 16,
  "> a, > button": {
    flexDirection: "row-reverse",
    px: 0,
    justifyContent: "start",
    height: "auto",
    lineHeight: 1,
  },
  "&:last-of-type": {
    borderBottom: "none",
  },
});

const Description = styled("span", {
  gridColumn: "1 / span 12",
  fontSize: "$bodySmall",
  fontWeight: "$regular",
  lineHeight: "$large",
  letterSpacing: "$regular",
  "@min1024": {
    gridColumn: "1 / span 9",
    fontSize: "$bodySmall",
    letterSpacing: "$tight",
  },
  variants: {
    size: {
      small: {
        "@min1024": {
          fontSize: "$bodySmall",
          gridColumn: "1 / span 9",
          letterSpacing: "$regular",
        },
      },
      large: {
        "@min1024": {
          fontSize: "$bodySmall",
          gridColumn: "1 / span 9",
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
const FooterWrapper = styled("div", {
  position: "relative",
});
const Heading = styled("span", {
  color: "$black",
  fontSize: "$headingSmall",
  lineHeight: "$large",
  letterSpacing: "$regular",
  fontWeight: "$medium",
  "@min1024": {
    fontSize: "$headingSmall",
    fontWeight: "medium",
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
          gap: 32,
        },
      },
    },
  },
});

const VideoButton = styled("a", {
  display: "flex",
  textDecoration: "none",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "30px",
  "@max1440": {
    padding: "20px",
  },
  backgroundColor: "$navy",
  "> span": {
    color: "$white",
  },
});
const DownloadButton = styled("a", {
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "30px",
  "@max1440": {
    padding: "26px",
  },
  backgroundColor: "#213565",
  "> span": {
    color: "$white",
  },
});
const ContentWrapper = styled("div", {
  width: "380px",
  "@max1440": {
    width: "340px",
  },
  "@max1024": {
    width: "300px",
  },
  backgroundColor: "#FFFFFF",
  p: 24,
  display: "flex",
  flexDirection: "column",
  variants: {
    size: {
      small: {
        padding: 24,
        paddingBottom: 0,
        gap: 50,
        "@min1024": {
          // padding: 48,
          paddingBottom: 0,
          gap: 50,
        },
      },
      large: {
        padding: 24,
        paddingBottom: 0,
        gap: 24,
        "@min1024": {
          // padding: 48,
          paddingBottom: 0,
          gap: 80,
        },
      },
    },
    type: {
      default: {},
      landscape: { flex: 1 },
    },
  },
});

const IconWrapper = styled("div", {});
const ActionWrapper = styled("div", {
  paddingBottom: "63px",
});

export {
  Actions,
  ActionsWrapper,
  HeroText,
  Wrapper,
  ApplyOnlineWrapper,
  InnerGrid,
  Bumper,
  Content,
  ApplyOnlineContent,
  ApplicationSupport,
  ApplicationSupportContent,
  CTAWrapper,
  Crest,
  ImageWrapper,
  ApplyOnlineImageWrapper,
  DisplayContent,
  DisplayImageWrapper,
  Div,
  MobileActions,
  MobileActionsWrapper,
  VideoWrapper,
  DisplayVideoWrapper,
  ContentBox,
  QuickLinks,
  QuickLinksList,
  QuickLinksListItem,
  IconWrapper,
  HeadingWrapper,
  Heading,
  FooterWrapper,
  DescriptionWrapper,
  Description,
  ActionWrapper,
  ContentWrapper,
  DownloadButton,
  VideoButton,
};
