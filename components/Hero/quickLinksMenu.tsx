import React from "react";
import Image from "next/image";
import { Text, Button } from "@components/common";
import HeroIcons from "@components/common/icons/heroIcons";
import {
  QuickLinks,
  QuickLinksList,
  QuickLinksListItem,
  ImageWrapper,
  DownloadButton,
  VideoButton,
  HeadingWrapper,
  Heading,
  FooterWrapper,
  DescriptionWrapper,
  Description,
  ContentWrapper,
} from "./styles";

const QuickLinksMenu = ({ data }) => {
  return data?.[0]?.quicklinks && data?.[0]?.quicklinks?.length ? (
    <>
      <QuickLinks>
        <Text as="h3" variant="Heading-xSmall" css={{ fontWeight: "$medium" }}>
          Quicklinks
        </Text>
        <QuickLinksList>
          {data?.[0]?.quicklinks.map((item, index) => {
            return (
              <QuickLinksListItem key={index}>
                <Button
                  arrow
                  theme="transparent"
                  type="ghost"
                  scale="md"
                  label={item.linkTitle}
                  href={item?.linkEntry?.[0]?.uri || item?.linkUrl}
                />
              </QuickLinksListItem>
            );
          })}
        </QuickLinksList>
      </QuickLinks>
      <ImageWrapper>
        <Image
          alt="main image"
          src={data?.[0]?.featurePanelImage?.[0]?.url}
          width={data?.[0]?.featurePanelImage?.[0]?.width}
          height={data?.[0]?.featurePanelImage?.[0]?.height}
          layout="responsive"
          objectFit="cover"
          objectPosition="top"
          priority
        />
      </ImageWrapper>
    </>
  ) : (
    <>
      <ContentWrapper size={"small"}>
        <HeadingWrapper size={"small"}>
          <Heading>{data?.headline}</Heading>
          <DescriptionWrapper>
            <Description
              dangerouslySetInnerHTML={{
                __html: data?.bodyText,
              }}
            />
          </DescriptionWrapper>
        </HeadingWrapper>
      </ContentWrapper>
      <FooterWrapper>
        <VideoButton href={data?.featureVideoUrl}>
          <Text>{data?.featureVideoTitle}</Text>
          <HeroIcons type={"video"} />
        </VideoButton>
        <DownloadButton href={data?.featureDownloadAsset?.[0]?.url}>
          <Text>{data?.featureDownloadLinkTitle}</Text>
          <HeroIcons type={"download"} />
        </DownloadButton>
      </FooterWrapper>
    </>
  );
};

export default QuickLinksMenu;
