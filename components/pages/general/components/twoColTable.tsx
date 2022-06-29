import React, { Fragment } from "react";
import { styled } from "@styles/stitches";
import { Text } from "@components/common";
import { v4 as uuid } from "uuid";

const Wrapper = styled("div", {
  display: "flex",
  gridColumn: "2 / span 6",
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
    <Wrapper>
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
  );
};

export default TwoColTable;
