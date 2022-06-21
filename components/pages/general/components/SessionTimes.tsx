//@ts-nocheck
import React from "react";
import { styled } from "@styles/stitches";
import { Text, Button } from "@components/common";
import { v4 as uuid } from "uuid";

const Wrapper = styled("div", {
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

const Breakout = styled("div", {
  bg: "$white",
  p: 44,
});
const CTAPanel = styled("div", {
  p: 24,
  bg: "$lightYellow",
  justifyContent: "space-between",
  display: "flex",
});
const EntryWrapper = styled("div", {});
const Content = styled("div", {
  display: "flex",
  flexFlow: "column",
  maxWidth: 350,
});

const SessionTimes = (props) => {
  let atCapacity = [];
  let upcomming = [];

  props.sessions.filter((item) => {
    if (item.status === "capacityReached") {
      atCapacity.push(item);
    } else {
      upcomming.push(item);
    }
  });

  console.log(props);
  console.log("cap", atCapacity);
  console.log("rest", upcomming);
  return (
    <Wrapper>
      <Text variant="Heading-Small">Session Times</Text>
      <Breakout>
        {props.title && <Text variant="Heading-Small">{props.title}</Text>}
        {atCapacity.length > 0 && (
          <EntryWrapper>
            <p>lord am i at capacity</p>
          </EntryWrapper>
        )}
        <CTAPanel>
          <Content>
            <Text variant="Heading-Overline">{props.ctaTitle}</Text>
            <Text variant="Heading-xSmall">{props.ctaContent}</Text>
          </Content>
          <Button
            label="subscribe"
            scale="sm"
            type="outline"
            theme="light"
            arrow
          />
        </CTAPanel>
      </Breakout>
    </Wrapper>
  );
};

export default SessionTimes;
