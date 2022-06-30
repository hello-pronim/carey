import React from "react";
import { Text, Button, Container } from "@components/common";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";
import Chevron from "@components/common/icons/chevron";
import {
  Wrapper,
  Breakout,
  EntryWrapper,
  Entry,
  CTAPanel,
  Content,
} from "./styles";

const SessionTimes = (props) => {
  let atCapacity = [];
  let upcomming = [];

  props.sessions.filter((item) => {
    if (item.status === "atCapacity") {
      atCapacity.push(item);
    } else {
      upcomming.push(item);
    }
  });

  const statusToString = (status) => {
    switch (status) {
      case "atCapacity":
        return "Capacity reached";
      case "upcoming":
        return "Not yet open for registration";
      case "regOpen":
        return "open for registration";
      default:
        return "";
    }
  };

  return (
    <Container>
      <Wrapper>
        <Text variant="Heading-Small">Session Times</Text>
        <Breakout>
          <div style={{ marginBottom: 48 }}>
            {props.title && <Text variant="Heading-Small">{props.title}</Text>}
          </div>
          {atCapacity.length > 0 && (
            <EntryWrapper>
              {atCapacity.map(({ date, link, status }) => {
                const dateParsed = dayjs(date).format("D MMMM");
                const dayInt = new Date(date).getDay();
                const day = dayjs().day(dayInt).format("dddd");

                return (
                  <Entry key={uuid()}>
                    <Text
                      css={{ fontWeight: "$medium", lineHeight: "$large" }}
                      variant="Heading-xSmall"
                    >
                      {day} {dateParsed}
                    </Text>
                    <div style={{ display: "flex", columnGap: 40 }}>
                      <Text variant="Body-Small">{statusToString(status)}</Text>
                      <Chevron direction="right" />
                    </div>
                  </Entry>
                );
              })}
            </EntryWrapper>
          )}
          <CTAPanel>
            <Content>
              <Text variant="Heading-Overline">{props.ctaTitle}</Text>
              <Text css={{ fontWeight: "$medium" }} variant="Heading-xSmall">
                {props.ctaBody}
              </Text>
            </Content>
            <Button
              label="subscribe"
              scale="sm"
              type="outline"
              theme="light"
              arrow
            />
          </CTAPanel>
          <EntryWrapper>
            {upcomming.map(({ date, link, status }) => {
              const dateParsed = dayjs(date).format("D MMMM");
              const dayInt = new Date(date).getDay();
              const day = dayjs().day(dayInt).format("dddd");

              return (
                <Entry key={uuid()}>
                  <Text
                    css={{ fontWeight: "$medium", lineHeight: "$large" }}
                    variant="Heading-xSmall"
                  >
                    {day} {dateParsed}
                  </Text>
                  <div style={{ display: "flex", columnGap: 40 }}>
                    <Text variant="Body-Small">{statusToString(status)}</Text>
                    <Chevron direction="right" />
                  </div>
                </Entry>
              );
            })}
          </EntryWrapper>
        </Breakout>
      </Wrapper>
    </Container>
  );
};

export default SessionTimes;
