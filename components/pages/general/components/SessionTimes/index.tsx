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
import { useMedia } from "react-use";
import Link from "next/link";

const defaultCta = {
  title: "KEEP UP TO DATE",
  body: "Get notified when the next date becomes available",
  link: "#subscribe",
};

const OpenLinks = ({ children, status, href }) => {
  if (status === "regOpen") {
    return (
      <Link href={href} passHref>
        <a
          style={{
            textDecoration: "none",
            display: "flex",
            columnGap: 40,
            justifyContent: "flex-end",
            textAlign: "right",
          }}
        >
          {children}
        </a>
      </Link>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          columnGap: 40,
          justifyContent: "flex-end",
          textAlign: "right",
        }}
      >
        {children}
      </div>
    );
  }
};

const SessionTimes = (props) => {
  let atCapacity = [];
  let upcomming = [];
  const isMobile = useMedia("(max-width: 768px)", false);

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
          <EntryWrapper>
            {upcomming.map(({ date, link, status }) => {
              const dateParsed = dayjs(date).format("D MMMM");
              const dayInt = new Date(date).getDay();
              const day = dayjs()
                .day(dayInt)
                .format(isMobile ? "ddd" : "dddd");

              return (
                <Entry key={uuid()}>
                  <Text
                    css={{ fontWeight: "$medium", lineHeight: "$large" }}
                    variant="Heading-xSmall"
                  >
                    {day} {dateParsed}
                  </Text>
                  <OpenLinks status={status} href={link}>
                    <Text variant="Body-Small">{statusToString(status)}</Text>
                    <Chevron direction="right" />
                  </OpenLinks>
                </Entry>
              );
            })}
            {atCapacity.length > 0 &&
              atCapacity.map(({ date, link, status }) => {
                const dateParsed = dayjs(date).format("D MMMM");
                const dayInt = new Date(date).getDay();
                const day = dayjs()
                  .day(dayInt)
                  .format(isMobile ? "ddd" : "dddd");

                return (
                  <Entry key={uuid()}>
                    <Text
                      css={{ fontWeight: "$medium", lineHeight: "$large" }}
                      variant="Heading-xSmall"
                    >
                      {day} {dateParsed}
                    </Text>
                    <OpenLinks status={status} href={link}>
                      <Text variant="Body-Small">{statusToString(status)}</Text>
                      <Chevron direction="right" />
                    </OpenLinks>
                  </Entry>
                );
              })}
          </EntryWrapper>
          <CTAPanel>
            <Content>
              <Text variant="Heading-Overline">
                {props.ctaTitle ? props.ctaTitle : defaultCta.title}
              </Text>
              <Text css={{ fontWeight: "$medium" }} variant="Heading-xSmall">
                {props.ctaBody ? props.ctaBody : defaultCta.body}
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
        </Breakout>
      </Wrapper>
    </Container>
  );
};

export default SessionTimes;
