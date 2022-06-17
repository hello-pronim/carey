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
  FooterWrapper,
  Heading,
  HeadingWrapper,
  ImageWrapper,
  Wrapper,
} from "./styles";

const OpenMorningsCard = ({
  title,
  description,
  href = "#",
  background,
  type = "default",
  size = "small",
}: CardPropsType) => {
  return (
    <Card
      size={size}
      type={type}
      css={{ backgroundImage: `url(${background})` }}
    >
      <Wrapper size={size}>
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
      </Wrapper>
      <FooterWrapper size={size}>
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
      </FooterWrapper>
    </Card>
  );
};

type CardPropsType = {
  title: string;
  description: string;
  background: string;
  href?: string | Object;
  type?: "default" | "landscape" | "application-form";
  size?: "small" | "large";
  landscape?: boolean;
};

export default OpenMorningsCard;
