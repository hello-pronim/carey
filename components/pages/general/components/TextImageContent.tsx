import { styled } from "@styles/stitches";
import { v4 as uuid } from "uuid";
import { parseDocument } from "htmlparser2";
import InvokeElement from "@utils/invokeElement";
import RichText from "@utils/richTextRenderer";
import React from "react";
import { Container } from "@components/common";
import Image from "next/image";

const ContentWrapper = styled("div", {
  display: "flex",
  width: "100%",
  height: "100%",
  paddingTop: "100px",
  flexDirection: "column",
  gridRow: 1,
  variants: {
    layout: {
      leftImageRightText: {
        gridColumn: "7 / span 4",
      },
      rightImageLeftText: {
        gridColumn: "2 / span 4",
      },
    },
  },
  defaultVariants: {
    layout: "leftImageRightText",
  },
});

const ImageWrapper = styled("div", {
  gridRow: 1,
  variants: {
    layout: {
      leftImageRightText: {
        gridColumn: "2 / span 4",
      },
      rightImageLeftText: {
        gridColumn: "7 / span 4",
      },
    },
  },
  defaultVariants: {
    layout: "leftImageRightText",
  },
  span: {
    height: "100% !important",
    width: "100% !important",
    span: {
      height: "100% !important",
      width: "100% !important",
    },
  },
});

export default function TextImageContent(props) {
  // Converts HTML string into digestible object.
  const parsedHTML = parseDocument(props.bodyText);
  return (
    <Container>
      <ContentWrapper layout={props.layout}>
        {parsedHTML.children.map((component: any) => (
          <InvokeElement
            key={uuid()}
            el={component}
            type={component?.name}
            map={RichText}
          />
        ))}
      </ContentWrapper>
      <ImageWrapper layout={props.layout}>
        <Image
          alt="principal"
          width={500}
          height={500}
          layout="responsive"
          objectFit="cover"
          priority
          src={props?.image?.[0].url}
        />
      </ImageWrapper>
    </Container>
  );
}
