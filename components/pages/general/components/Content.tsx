import { parseDocument } from "htmlparser2";
import Link from "next/link";
import { styled } from "@styles/stitches";
import { v4 as uuid } from "uuid";
import { Text } from "@components/common";
import InvokeElement from "../utils/invokeElement";

const Unordered = styled("ul", {
  display: "block",
  listStyleType: "disc",
  marginLeft: 0,
  marginRight: 0,
  paddingLeft: 30,
  marginBottom: 32,
  li: {
    lineHeight: "160%",
    mb: 12,
    fontSize: "inherit",
  },
});

const Ordered = styled("ol", {
  display: "block",
  listStyleType: "decimal",
  marginLeft: 0,
  marginRight: 0,
  paddingLeft: 30,
  marginBottom: 32,
  li: {
    lineHeight: "160%",
    mb: 12,
    fontSize: "inherit",
  },
  "li > ol": {
    listStyleType: "lower-alpha",
    "li > ol": {
      listStyleType: "lower-roman",
    },
  },
});

const Elements = new Map([
  // HEADINGS
  [
    "h1",
    (props) => (
      <Text as="h1" variant="Heading-xLarge" {...props.attribs}>
        {filterChildren(props.children)}
      </Text>
    ),
  ],
  [
    "h2",
    (props) => (
      <Text as="h2" variant="Heading-Large" {...props.attribs}>
        {filterChildren(props.children)}
      </Text>
    ),
  ],
  [
    "h3",
    (props) => (
      <Text as="h3" variant="Heading-Small" {...props.attribs}>
        {filterChildren(props.children)}
      </Text>
    ),
  ],
  [
    "h4",
    (props) => (
      <Text as="h4" variant="Heading-xSmall" {...props.attribs}>
        {filterChildren(props.children)}
      </Text>
    ),
  ],
  [
    "h5",
    (props) => (
      <Text as="h5" variant="Body-Regular" {...props.attribs}>
        {filterChildren(props.children)}
      </Text>
    ),
  ],
  [
    "h6",
    (props) => (
      <Text as="h6" variant="Heading-Overline" {...props.attribs}>
        {filterChildren(props.children)}
      </Text>
    ),
  ],
  // GENERAL
  [
    "p",
    (props) => (
      <Text as="p" variant="Body-Small" {...props.attribs}>
        {filterChildren(props.children)}
      </Text>
    ),
  ],
  [
    "a",
    (props) => (
      <Link href={props.attribs.href}>
        <a {...props.attribs}>{filterChildren(props.children)}</a>
      </Link>
    ),
  ],
  ["strong", (props) => <strong>{filterChildren(props.children)}</strong>],
  ["em", (props) => <em>{filterChildren(props.children)}</em>],
  // LISTS
  [
    "li",
    (props) => (
      <Text as="li" variant="Body-Small" {...props.attribs}>
        {filterChildren(props.children)}
      </Text>
    ),
  ],
  [
    "ul",
    (props) => (
      <Unordered {...props.attribs}>{filterChildren(props.children)}</Unordered>
    ),
  ],
  [
    "ol",
    (props) => (
      <Ordered {...props.attribs}>{filterChildren(props.children)}</Ordered>
    ),
  ],
]);

const filterChildren = (children) =>
  children?.map((child) => {
    if (child.type === "text") {
      return child.data;
    }
    if (child.type === "tag") {
      return InvokeElement({ el: child, type: child.name, map: Elements });
    }
  });

const Content = (props) => {
  // Converts HTML string into digestible object.
  const parsedHTML = parseDocument(props.bodyText);

  return (
    <div style={{ gridColumn: "2 / span 6" }}>
      {parsedHTML.children.map((component: any) => (
        <InvokeElement
          key={uuid()}
          el={component}
          type={component?.name}
          map={Elements}
        />
      ))}
    </div>
  );
};

export default Content;
