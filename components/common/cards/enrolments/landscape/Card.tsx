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
  size,
}) => {
  return (
    <Card size={size} css={{ backgroundImage: `url(${backgroundImage})` }}>
      <LeftWrapper>
        <LeftContainer size={size}>
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
        <RightContainer size={size}>
          <HeadingWrapper size={size}>
            <Heading>{title}</Heading>
            <DescriptionWrapper>
              <Description size={size}>{description}</Description>
            </DescriptionWrapper>
          </HeadingWrapper>
          <ActionWrapper>
            <Button
              arrow
              label="Apply Online"
              type="solid"
              theme="light"
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
