import React from "react";
import Image from "next/image";
import { Button } from "@components/common";
import MainImage from "public/assets/img/junior_img.png";
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

const ApplicationFormCard = ({ title, description, href, size }) => {
  return (
    <Card size={size} css={{ backgroundImage: `url(assets/img/bg_card.png)` }}>
      <LeftWrapper>
        <LeftContainer size={size}>
          <CMarkImage />
          <ImageWrapper>
            <Image
              alt="main image"
              src={MainImage}
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

export default ApplicationFormCard;
