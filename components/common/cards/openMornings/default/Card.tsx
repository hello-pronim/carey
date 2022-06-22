import React from "react";
import Image from "next/image";
import { Button } from "@components/common";
import MainImage from "public/assets/img/junior_img.png";
import {
  ActionWrapper,
  BottomWrapper,
  Card,
  CMarkImage,
  Description,
  DescriptionWrapper,
  Heading,
  HeadingWrapper,
  ImageWrapper,
  TopWrapper,
} from "./styles";

const DefaultCard = ({ title, description, href, size }) => {
  return (
    <Card
      size={size}
      css={{ backgroundImage: `url(assets/img/bg_card_blue.png)` }}
    >
      <TopWrapper size={size}>
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
      </TopWrapper>
      <BottomWrapper size={size}>
        <CMarkImage size={size} />
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
      </BottomWrapper>
    </Card>
  );
};

export default DefaultCard;
