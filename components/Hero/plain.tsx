import React from "react";
import {
  Wrapper,
  InnerGrid,
  Bumper,
  Content,
  CTAWrapper,
  Crest,
} from "./styles";
import { Button, Text } from "@components/common";
import { useGetFullPath } from "@hooks/useGetFullPath";
import cGraphic from "public/assets/c-graphic.svg";
import Image from "next/image";
import HeroButton from "./HeroButton";

const Plain = (props) => {
  const getFullPath = useGetFullPath();

  return (
    <Wrapper>
      <Bumper css={{ bg: "$crestYellow" }} />
      <InnerGrid>
        <Content>
          <Text as="h6" variant="Heading-Overline">
            {props?.props?.overHeadline}
          </Text>
          <Text as="h1" variant="Heading-Large">
            {props?.props?.headline}
          </Text>
          <Text
            dangerouslySetInnerHTML={{
              __html: props?.bodyText,
            }}
          />
          <CTAWrapper>
            <Button
              href={
                props?.props?.buttonUrl ||
                getFullPath(props?.props?.buttonLink?.[0])
              }
              label={props?.props?.buttonLabel}
              arrow={true}
            />
          </CTAWrapper>
        </Content>
        <Crest>
          <Image
            alt=""
            src={cGraphic}
            width="440"
            height="449"
            layout="responsive"
            objectFit="fill"
            priority
          />
        </Crest>
      </InnerGrid>
      <Bumper
        css={{
          bg: "$darkBlue",
        }}
      >
        <HeroButton data={props.applyNow} />
      </Bumper>
    </Wrapper>
  );
};

export default Plain;
