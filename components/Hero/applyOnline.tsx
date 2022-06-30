import React from "react";
import {
  ApplyOnlineWrapper,
  InnerGrid,
  Bumper,
  ApplyOnlineContent,
  ApplicationSupport,
  ApplicationSupportContent,
  ApplyOnlineImageWrapper,
} from "./styles";
import { Text } from "@components/common";
import Image from "next/image";
import ApplyResumeButton from "@components/common/applyResumeButton";

const ApplyOnline = (props) => {
  return (
    <ApplyOnlineWrapper>
      <Bumper css={{ bg: "$crestYellow" }} />
      <InnerGrid
        css={{
          backgroundColor: "rgb(21,72,121)",
          bg: "linear-gradient(142deg, rgba(21,72,121,1) 0%, rgba(1,101,166,1) 15%, rgba(38,56,92,1) 97%)",
        }}
      >
        <ApplyOnlineContent>
          <Text as="h6" variant="Heading-Overline">
            {props?.overHeadline}
          </Text>
          <Text as="h1" variant="Heading-xLarge">
            {props?.headline}
          </Text>
          <Text as="h2" variant="Heading-Small">
            {props?.contentText}
          </Text>
          {props.enableCta && <ApplyResumeButton />}
          {props?.overHeadlineBottom && (
            <Text as="h6" variant="Heading-Overline">
              {props.overHeadlineBottom}
            </Text>
          )}
          {props?.idNumber && (
            <Text as="h2" variant="Heading-Small">
              {props.idNumber}
            </Text>
          )}
        </ApplyOnlineContent>
        {props.applicationSupport && (
          <ApplicationSupport>
            <ApplicationSupportContent>
              <Text as="h2" variant="Heading-Small">
                {props?.applicationSupport?.title}
              </Text>
              <Text as="p" variant="Body-Regular">
                {props?.applicationSupport?.paragraphOne}
              </Text>
              <Text as="p" variant="Body-Regular">
                {props?.applicationSupport?.paragraphTwo}
              </Text>
            </ApplicationSupportContent>
          </ApplicationSupport>
        )}
        {props?.image && (
          <ApplyOnlineImageWrapper>
            <Image
              alt="principal"
              src={props.image}
              width={782}
              height={840}
              layout="responsive"
              priority
            />
          </ApplyOnlineImageWrapper>
        )}
      </InnerGrid>
    </ApplyOnlineWrapper>
  );
};

export default ApplyOnline;
