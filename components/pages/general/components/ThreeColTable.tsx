import React from "react";
import { styled } from "@styles/stitches";
import { Text } from "@components/common";
import { v4 as uuid } from "uuid";

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

const ThreeColTable = (props) => {
  return (
    <TableWrapper>
      {!!props?.tableTitle && (
        <Text variant="Heading-Small">{props.tableTitle}</Text>
      )}
      <Table>
        <thead>
          <Row css={{ bg: "$crestBlue200" }}>
            <Head>
              <Text variant="Heading-xSmall">{props.colOneLabel}</Text>
            </Head>
            <Head alignment="right">
              <Text variant="Heading-xSmall">{props.colTwoLabel}</Text>
            </Head>
            <Head alignment="right">
              <Text variant="Heading-xSmall">{props.colThreeLabel}</Text>
            </Head>
          </Row>
        </thead>
        <tbody>
          {props?.threeColTable.map((group, i) => {
            return (
              <React.Fragment key={uuid()}>
                {!!group.groupTitle && (
                  <Row type="Title-Row" css={{ bg: "#FFF6D1" }}>
                    <Head css={{ gridColumn: "1 / span 3" }}>
                      <Text variant="Heading-xSmall">{group.groupTitle}</Text>
                    </Head>
                  </Row>
                )}
                {group.tableRow?.map((entry) => {
                  return (
                    <Row key={uuid()}>
                      <Cell>
                        <Text>{entry.col1}</Text>
                      </Cell>
                      <Cell alignment="right">
                        <Text>{entry.col2}</Text>
                      </Cell>
                      <Cell alignment="right">
                        <Text>{entry.col3}</Text>
                      </Cell>
                    </Row>
                  );
                })}
              </React.Fragment>
            );
          })}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default ThreeColTable;
