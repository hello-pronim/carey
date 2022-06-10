import { parseDocument } from "htmlparser2";
import getTextColor from "@utils/contrastAwareColors";
import { styled } from "@styles/stitches";
import { v4 as uuid } from "uuid";
import InvokeElement from "@utils/invokeElement";
import RichText from "@utils/richTextRenderer";

const ContentWrapper = styled("div", {
  gridColumn: "2 / span 6",
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

const Content = (props) => {
  // Converts HTML string into digestible object.
  const parsedHTML = parseDocument(props.bodyText);

  return (
    <ContentWrapper
      css={{
        bg: !!props.bgColor && props.bgColor,
        "*": { color: !!props.bgColor && getTextColor(props.bgColor) },
      }}
      hasBG={!!props.bgColor}
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
  );
};

export default Content;
