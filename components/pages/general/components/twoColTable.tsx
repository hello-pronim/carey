import React, { Fragment } from "react";
import { styled } from "@styles/stitches";
import { Container, Text } from "@components/common";
import { v4 as uuid } from "uuid";

const Wrapper = styled("div", {
  display: "flex",
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
  flexDirection: "column",
  bg: "$white",
  boxSizing: "border-box",
});

const GroupTitleBar = styled("div", {
  bg: "$tintYellow",
  pl: 24,
  pr: 40,
  py: 16,
  [`${Text}`]: {
    position: "relative",
    top: "0.1em",
  },
});

const Group = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: 2,
  bg: "$background",
});

const Items = styled("div", {
  px: 24,
  py: 16,
  display: "flex",
  flexDirection: "column",
  rowGap: 8,
  bg: "$white",
  flex: 1,
});

const Item = styled("div", {});

const TwoColTable = ({ twoColumnTable, ...props }) => {
  return (
    <Container>
      <Wrapper
        id={
          props?.jumpToToggle?.[0]?.available &&
          props?.jumpToToggle?.[0]?.anchorSlug
            ? props?.jumpToToggle?.[0]?.anchorSlug
            : null
        }
      >
        <Group>
          {twoColumnTable.map(({ groupLabel, groupRows }) => {
            return (
              <Fragment key={uuid()}>
                <GroupTitleBar>
                  <Text>{groupLabel}</Text>
                </GroupTitleBar>
                <Items>
                  {groupRows.map(({ groupItem }) => {
                    return (
                      <Item key={uuid()}>
                        <Text>{groupItem}</Text>
                      </Item>
                    );
                  })}
                </Items>
              </Fragment>
            );
          })}
        </Group>
      </Wrapper>
    </Container>
  );
};

export default TwoColTable;
