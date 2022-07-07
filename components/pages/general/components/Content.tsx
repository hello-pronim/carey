import { parseDocument } from "htmlparser2";
import getTextColor from "@utils/contrastAwareColors";
import { styled } from "@styles/stitches";
import { v4 as uuid } from "uuid";
import InvokeElement from "@utils/invokeElement";
import RichText from "@utils/richTextRenderer";
import { Container } from "@components/common";

const ContentWrapper = styled("div", {
  width: "100%",
  boxSizing: "border-box",
  "> *:last-child": {
    mb: "unset !important",
  },
  variants: {
    hasBG: {
      true: {
        p: 44,
        borderRadius: 4,
      },
    },
  },
});

const ContentContainer = styled("div", {
  gridColumn: "1 / span 2",
  "@min768": {
    gridColumn: "1 / span 7",
  },
  "@min1024": {
    gridColumn: "2 / span 10",
  },
  "@min1440": {
    gridColumn: "1 / span 7",
  },
  "@min1920": {
    gridColumn: "2 / span 6",
  },
});

const Divider = styled("div", {
  width: "100%",
  bg: "$navy200",
  height: "1px",
  mt: 56,
});

const Content = (props) => {
  const condWrapperStyles = {
    bg: !!props.brandColours && props.brandColours,
    "> *": {
      color: !!props.brandColours && getTextColor(props.brandColours),
    },
    "p, li": {
      a: {
        color: !!props.brandColours && getTextColor(props.brandColours),
      },
    },
    ".inline-divider": {
      opacity: !!props.brandColours && 0.3,
      backgroundColor: !!props.brandColours && getTextColor(props.brandColours),
    },
  };

  // Converts HTML string into digestible object.
  const parsedHTML = parseDocument(props.bodyText);

  return (
    <Container>
      <ContentContainer
        id={
          props?.jumpToToggle?.[0]?.available &&
          props?.jumpToToggle?.[0]?.anchorSlug
            ? props?.jumpToToggle?.[0]?.anchorSlug
            : null
        }
      >
        <ContentWrapper css={condWrapperStyles} hasBG={!!props.brandColours}>
          {parsedHTML.children.map((component: any) => (
            <InvokeElement
              key={uuid()}
              el={component}
              type={component?.name}
              map={RichText}
            />
          ))}
        </ContentWrapper>
        {props.dividerToggle && <Divider />}
      </ContentContainer>
    </Container>
  );
};

export default Content;
