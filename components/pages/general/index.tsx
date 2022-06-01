// I'M COMING BACK TO THIS TO SEPARATE THINGS AND CLEAN IT UP, MVP FOR MEETING COMMIT

import React from "react";
import { v4 as uuid } from "uuid";
import { parseDocument } from "htmlparser2";
import { Container, Text } from "@components/common";
import Hero from "@components/Hero";
import { styled } from "@styles/stitches";

const TableWrapper = styled("div", {
  display: "flex",
  gridColumn: "2 / span 6",
  flexDirection: "column",
  rowGap: 48,
});
const Table = styled("table", {
  all: "unset",
  width: "100%",
  "thead, tbody": {
    display: "block",
  },
});
const Row = styled("tr", {
  display: "grid",
  bg: "white",
  gridTemplateColumns: "repeat(3, 1fr)",
  width: "100%",
  borderBottom: "2px solid $background",
  variants: {
    type: {
      "Title-Row": {
        th: {
          borderLeft: "none",
          borderRight: "none",
        },
      },
      "Entry-Row": {
        "th:first-of-type, td:first-of-type": {
          borderRight: "2px solid $background",
        },
        "th:last-of-type, td:last-of-type": {
          borderLeft: "2px solid $background",
        },
      },
    },
  },
  defaultVariants: {
    type: "Entry-Row",
  },
});
const Head = styled("th", {
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  px: 24,
  py: 12,
  variants: {
    alignment: {
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
      },
    },
  },
  defaultVariants: {
    alignment: "left",
  },
});
const Cell = styled("td", {
  px: 24,
  py: 12,
  boxSizing: "border-box",
  variants: {
    alignment: {
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
      },
    },
  },
  defaultVariants: {
    alignment: "left",
  },
});

const TheBoy = (props) => {
  return (
    <TableWrapper>
      {props?.tableTitle && (
        <Text variant="Heading-Small">{props.tableTitle}</Text>
      )}
      <Table>
        <thead>
          <Row css={{ bg: "$crestBlue200" }}>
            <Head>
              <Text variant="Heading-xSmall">{props?.location}</Text>
            </Head>
            <Head alignment="right">
              <Text variant="Heading-xSmall">Full Year ($)</Text>
            </Head>
            <Head alignment="right">
              <Text variant="Heading-xSmall">Per Billing ($)</Text>
            </Head>
          </Row>
        </thead>
        <tbody>
          {props?.lcTableGroup.map((group, i) => {
            return (
              <React.Fragment key={uuid()}>
                <Row type="Title-Row" css={{ bg: "#FFF6D1" }}>
                  <Head css={{ gridColumn: "1 / span 3" }}>
                    <Text variant="Heading-xSmall">{group.groupTitle}</Text>
                  </Head>
                </Row>
                {group?.pricingTable.map((entry) => {
                  return (
                    <Row key={uuid()}>
                      <Cell>
                        <Text>2 full days</Text>
                      </Cell>
                      <Cell alignment="right">
                        <Text>$ {entry.fullYear}</Text>
                      </Cell>
                      <Cell alignment="right">
                        <Text>$ {entry.perBilling}</Text>
                      </Cell>
                    </Row>
                  );
                })}
              </React.Fragment>
            );
          })}
        </tbody>
        {/* end map here */}
      </Table>
    </TableWrapper>
  );
};

const Content = (props) => {
  const parsedHTML = parseDocument(props.bodyText);
  const Elements = new Map([
    [
      "p",
      (component: any, index: string) => (
        <Text as="p" key={uuid()} variant="Body-Small">
          {innards(component)}
        </Text>
      ),
    ],
    [
      "a",
      (component: any, index: string) => (
        <Text
          as="a"
          key={uuid()}
          href={component.attribs.href}
          variant="Body-Large"
        >
          {innards(component)}
        </Text>
      ),
    ],
    [
      "h1",
      (component: any, index: string) => (
        <Text as="h1" variant="Heading-xLarge" key={uuid()}>
          {innards(component)}
        </Text>
      ),
    ],
    [
      "h2",
      (component: any, index: string) => (
        <Text as="h2" variant="Heading-Large" key={uuid()}>
          {innards(component)}
        </Text>
      ),
    ],
    [
      "h3",
      (component: any, index: string) => (
        <Text as="h3" variant="Heading-Small" key={uuid()}>
          {innards(component)}
        </Text>
      ),
    ],
    [
      "h4",
      (component: any, index: string) => (
        <Text as="h4" key={uuid()} variant="Body-xLarge">
          {innards(component)}
        </Text>
      ),
    ],
    [
      "h5",
      (component: any, index: string) => (
        <Text as="h5" key={uuid()} variant="Body-Large">
          {innards(component)}
        </Text>
      ),
    ],
    [
      "h6",
      (component: any, index: string) => (
        <Text as="h6" key={uuid()} variant="Heading-Overline">
          {innards(component)}
        </Text>
      ),
    ],
    [
      "li",
      (component: any, index: string) => (
        <Text as="li" key={uuid()} variant="Body-Small">
          {innards(component)}
        </Text>
      ),
    ],
    [
      "ul",
      (component: any, index: string) => (
        <ul key={uuid()}>{innards(component)}</ul>
      ),
    ],
    [
      "ol",
      (component: any, index: string) => (
        <ol key={uuid()}>{innards(component)}</ol>
      ),
    ],
    [
      "strong",
      (component: any, index: string) => (
        <strong key={uuid()}>{innards(component)}</strong>
      ),
    ],
    [
      "em",
      (component: any, index: string) => (
        <em key={uuid()}>{innards(component)}</em>
      ),
    ],
  ]);

  const innards = (item: any) => {
    return (
      <>
        {item.children.map((child: any, index: number) => {
          if (child.type === "text") {
            return child.data;
          }
          if (child.type === "tag") {
            const Module = Elements.get(child.name);
            if (Module === undefined) {
              return null;
            }
            return Module(child, `ch-${index}`);
          }
        })}
      </>
    );
  };

  console.log(parsedHTML);
  return (
    <div style={{ gridColumn: "2 / span 6" }}>
      {parsedHTML.children.map((component: any, index: number) => {
        const Module = Elements.get(component.name);
        if (Module === undefined) {
          return null;
        }
        return Module(component, `p-${index}`);
      })}
    </div>
  );
};

const General = ({ pageData }) => {
  // console.log(pageData);
  const ModuleType = (type) => `generalComponents_${type}_BlockType`;

  const Modules = new Map([
    [ModuleType("learningCentre"), TheBoy],
    [ModuleType("contentBlock"), Content],
  ]);
  return (
    <>
      <Hero type="general" />
      <Container innerCSS={{ rowGap: 56, py: 56 }}>
        {pageData.map((module) => {
          const Module = Modules.get(module.__typename);
          if (Module === undefined) {
            return null;
          }
          return <Module key={uuid()} {...module} />;
        })}
      </Container>
    </>
  );
};

export default General;
