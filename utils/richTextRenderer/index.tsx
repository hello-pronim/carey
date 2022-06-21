import { Button, Text } from "@components/common";
import Link from "next/link";
import { styled } from "@styles/stitches";
import InvokeElement from "../invokeElement";

const Divider = styled("div", {
  width: "100%",
  bg: "$navy200",
  height: "1px",
  my: 56,
});

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

const RichText = new Map([
  // HEADINGS
  [
    "h1",
    (props) => (
      <Text
        as="h1"
        variant="Heading-xLarge"
        {...props.attribs}
        css={{ mb: 24 }}
      >
        {filterChildren(props.children)}
      </Text>
    ),
  ],
  [
    "h2",
    (props) => (
      <Text as="h2" variant="Heading-Large" {...props.attribs} css={{ mb: 24 }}>
        {filterChildren(props.children)}
      </Text>
    ),
  ],
  [
    "h3",
    (props) => (
      <Text as="h3" variant="Heading-Small" {...props.attribs} css={{ mb: 16 }}>
        {filterChildren(props.children)}
      </Text>
    ),
  ],
  [
    "h4",
    (props) => (
      <Text
        as="h4"
        variant="Heading-xSmall"
        {...props.attribs}
        css={{ mb: 16 }}
      >
        {filterChildren(props.children)}
      </Text>
    ),
  ],
  [
    "h5",
    (props) => (
      <Text as="h5" variant="Body-Regular" {...props.attribs} css={{ mb: 16 }}>
        {filterChildren(props.children)}
      </Text>
    ),
  ],
  [
    "h6",
    (props) => (
      <Text
        as="h6"
        variant="Heading-Overline"
        {...props.attribs}
        css={{ mb: 16, textTransform: "uppercase" }}
      >
        {filterChildren(props.children)}
      </Text>
    ),
  ],
  // GENERAL
  [
    "p",
    (props) => (
      <Text as="p" variant="Body-Small" {...props.attribs} css={{ mb: 16 }}>
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
  // div is a stand in for custom elements from craft rich text
  // from here we do another key map based on the type_* classname
  ["div", (props) => ParseCustomFormatting(props)],
]);

const expandedRichText = new Map([
  [
    "type_button",
    (props) => {
      const { properties } = props;
      let label;
      let link;

      // assigns the inner content of received data to label
      // in the case of the child being an a tag, gets text from inner children
      // if the child is an <a> tag, assigns its href to link which is then passed to button
      props.children.forEach((child) => {
        if (!child.children) {
          label = child.data;
        }
        if (child.children) {
          child.children.forEach((innerChild) => {
            label = innerChild.data;
          });
        }
        if (child.name === "a") {
          link = child.attribs.href;
        }
      });
      return (
        <Button
          {...properties}
          label={label}
          href={link}
          css={{ mt: 40, mb: 56 }}
        />
      );
    },
  ],
  ["type_divider", () => <Divider className="inline-divider" />],
]);

const ParseCustomFormatting = (props) => {
  // splits string into array at the spaces
  const makeArr = props.attribs.class?.split(" ");

  // receives type name extracted from propsArray
  let componentType;
  // creates new array with just prop classes, passes type class to componentName
  const propsArray = makeArr.filter((item) => {
    if (item.includes("type_")) {
      componentType = item;
    }
    if (!item.includes("type_")) {
      return item;
    }
  });

  const makePropsArray = propsArray.map((item) => {
    // turns hyphenated string into array of individual words
    // then assigns left side of hyphen to object key, and right side to object value
    const dissectProps = item.split("-");
    const [prop, value] = dissectProps;
    return { [prop]: value };
  });

  // iterates over props array to turn into object
  let objectProps = {};
  makePropsArray.forEach((property) => {
    Object.assign(objectProps, property);
  });

  const propsForElement = {
    properties: objectProps,
    parent: props.parent,
    children: props.children,
  };

  return (
    <InvokeElement
      el={propsForElement}
      type={componentType}
      map={expandedRichText}
    />
  );
};

const filterChildren = (children) =>
  children?.map((child) => {
    if (child.type === "text") {
      return child.data;
    }
    if (child.type === "tag") {
      return InvokeElement({ el: child, type: child.name, map: RichText });
    }
  });

export default RichText;
