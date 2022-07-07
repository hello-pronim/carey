import React from "react";
import Image from "next/image";
import { Button } from "@components/common";

import {
  ActionWrapper,
  Card,
  CMarkImage,
  Description,
  DescriptionWrapper,
  Heading,
  HeadingWrapper,
  LeftContainer,
  LeftWrapper,
  RightContainer,
  RightWrapper,
  ImageWrapper,
} from "./styles";

const LandscapeCard = ({
  title,
  description,
  backgroundImage,
  studentImage,
  href,
}) => {
  return (
    <Card css={{ backgroundImage: `url(${backgroundImage})` }}>
      <LeftWrapper>
        <LeftContainer>
          <CMarkImage />
          <ImageWrapper>
            <Image
              alt="main image"
              src={studentImage}
              width={480}
              height={600}
              layout="responsive"
              objectFit="cover"
              objectPosition="top"
              priority
            />
          </ImageWrapper>
        </LeftContainer>
      </LeftWrapper>
      <RightWrapper>
        <RightContainer>
          <HeadingWrapper>
            <Heading>{title}</Heading>
            <DescriptionWrapper>
              <Description>{description}</Description>
            </DescriptionWrapper>
          </HeadingWrapper>
          <ActionWrapper>
            <Button
              arrow
              label="Attend an Open Morning"
              type="outline"
              theme="transparent"
              scale="md"
              href={href}
            />
          </ActionWrapper>
        </RightContainer>
      </RightWrapper>
    </Card>
  );
};

export default LandscapeCard;
