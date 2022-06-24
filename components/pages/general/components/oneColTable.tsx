import React from "react";
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

//new styled component
const TitleBar = styled("div", {
  bg: "$crestBlue200",
  px: 24,
  py: 16,
  [`${Text}`]: {
    position: "relative",
    top: "0.1em",
  },
});
const GroupTitleBar = styled("div", {
  bg: "$tintYellow",
  px: 24,
  py: 16,
  [`${Text}`]: {
    position: "relative",
    top: "0.1em",
  },
});
const Group = styled("div", {});
const Items = styled("div", {
  px: 24,
  py: 16,
  display: "flex",
  flexDirection: "column",
  rowGap: 4,
});
const Item = styled("div", {});

const OneColTable = ({ tableTitle, oneColTable, ...props }) => {
  return (
    <Wrapper>
      {!!tableTitle && (
        <TitleBar>
          <Text css={{ fontWeight: "$semiBold" }} variant="Heading-xSmall">
            {tableTitle}
          </Text>
        </TitleBar>
      )}
      {oneColTable.map(({ groupLabel, groupItems }) => {
        return (
          <Group key={uuid()}>
            <GroupTitleBar>
              <Text>{groupLabel}</Text>
            </GroupTitleBar>
            <Items>
              {groupItems.map(({ rowLabel }) => {
                return (
                  <Item key={uuid()}>
                    <Text>{rowLabel}</Text>
                  </Item>
                );
              })}
            </Items>
          </Group>
        );
      })}
    </Wrapper>
  );
};

export default OneColTable;
