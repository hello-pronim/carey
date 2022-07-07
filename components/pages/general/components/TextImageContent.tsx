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
  flexDirection: "column",
  justifyContent: "center",
  boxSizing: "border-box",
  pt: 32,
  pb: 0,
  "@min1024": {
    py: 16,
  },
  a: {
    mt: 16,
    mb: 32,
    "&:last-child": {
      mb: 0,
    },
  },
  variants: {
    orientation: {
      portrait: {},
      landscape: {},
    },
    layout: {
      leftImageRightText: {
        gridColumn: "1 / span 2",
        "@min768": {
          gridColumn: "1 / span 7",
        },
        "@min1024": {
          gridColumn: "8 / span 4",
        },
        "@min1440": {
          gridColumn: "7 / span 4",
        },
        "@min1920": {
          gridColumn: "8 / span 4",
        },
      },
      rightImageLeftText: {
        gridColumn: "1 / span 2",
        "@min768": {
          gridColumn: "1 / span 7",
        },
        "@min1024": {
          gridRow: 1,
          gridColumn: "2 / span 4",
        },
        "@min1440": {
          gridColumn: "1 / span 4",
        },
        "@min1920": {
          gridColumn: "2 / span 4",
        },
      },
    },
  },
  compoundVariants: [
    {
      orientation: "portrait",
      layout: "leftImageRightText",
      css: {
        gridColumn: "1 / span 2",
        "@min768": {
          gridColumn: "1 / span 7",
        },
        "@min1024": {
          gridColumn: "8 / span 4",
        },
        "@min1440": {
          gridColumn: "6 / span 4",
        },
        "@min1920": {
          gridColumn: "7 / span 4",
        },
      },
    },
  ],
  defaultVariants: {
    layout: "leftImageRightText",
  },
});

const ImageWrapper = styled("div", {
  gridRow: 1,
  variants: {
    orientation: {
      portrait: {},
      landscape: {},
    },
    layout: {
      leftImageRightText: {},
      rightImageLeftText: {},
    },
  },
  compoundVariants: [
    {
      orientation: "portrait",
      layout: "leftImageRightText",
      css: {
        gridColumn: "1 / span 2",
        "@min768": {
          gridColumn: "1 / span 7",
        },
        "@min1024": {
          gridColumn: "2 / span 5",
        },
        "@min1440": {
          gridColumn: "1 / span 4",
        },
        "@min1920": {
          gridColumn: "2 / span 4",
        },
      },
    },
    {
      orientation: "portrait",
      layout: "rightImageLeftText",
      css: {
        gridColumn: "1 / span 2",
        "@min768": {
          gridColumn: "1 / span 7",
        },
        "@min1024": {
          gridColumn: "7 / span 5",
        },
        "@min1440": {
          gridColumn: "6 / span 5",
        },
        "@min1920": {
          gridColumn: "7 / span 4",
        },
      },
    },
    {
      orientation: "landscape",
      layout: "leftImageRightText",
      css: {
        gridColumn: "1 / span 2",
        "@min768": {
          gridColumn: "1 / span 7",
        },
        "@min1024": {
          gridColumn: "2 / span 5",
        },
        "@min1440": {
          gridColumn: "1 / span 5",
        },
        "@min1920": {
          gridColumn: "2 / span 5",
        },
      },
    },
    {
      orientation: "landscape",
      layout: "rightImageLeftText",
      css: {
        gridColumn: "1 / span 2",
        "@min768": {
          gridColumn: "1 / span 7",
        },
        "@min1024": {
          gridColumn: "7 / span 5",
        },
        "@min1440": {
          gridColumn: "6 / span 6",
        },
        "@min1920": {
          gridColumn: "7 / span 5",
        },
      },
    },
  ],
  defaultVariants: {
    layout: "leftImageRightText",
    orientation: "landscape",
  },
  span: {
    height: "100% !important",
  },
});

export default function TextImageContent(props) {
  // Converts HTML string into digestible object.
  const parsedHTML = parseDocument(props.bodyText);

  return (
    <Container>
      <ContentWrapper
        layout={props.layout}
        orientation={props.imageAspect}
        id={
          props?.jumpToToggle?.[0]?.available &&
          props?.jumpToToggle?.[0]?.anchorSlug
            ? props?.jumpToToggle?.[0]?.anchorSlug
            : null
        }
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
      <ImageWrapper layout={props.layout} orientation={props.imageAspect}>
        <Image
          alt=""
          height={props?.image?.[0].height}
          width={props?.image?.[0].width}
          layout="responsive"
          priority
          objectFit="cover"
          src={props?.image?.[0].url}
        />
      </ImageWrapper>
    </Container>
  );
}
