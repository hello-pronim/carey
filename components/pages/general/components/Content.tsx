import { parseDocument } from "htmlparser2";
import getTextColor from "@utils/contrastAwareColors";
import { styled } from "@styles/stitches";
import { v4 as uuid } from "uuid";
import InvokeElement from "@utils/invokeElement";
import RichText from "@utils/richTextRenderer";

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
  gridColumn: "2 / span 6",
});

const Divider = styled("div", {
  width: "100%",
  bg: "$navy200",
  height: "1px",
  mt: 56,
});

const Content = (props) => {
  // Converts HTML string into digestible object.
  const parsedHTML = parseDocument(props.bodyText);

  return (
    <ContentContainer>
      <ContentWrapper
        css={{
          bg: !!props.brandColours && props.brandColours,
          "*": { color: !!props.bgColour && getTextColor(props.brandColours) },
        }}
        hasBG={!!props.brandColours}
      >
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
  );
};

export default Content;
