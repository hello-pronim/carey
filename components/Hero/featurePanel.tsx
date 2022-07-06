import React from "react";
import {
  DownloadButton,
  VideoButton,
  HeadingWrapper,
  Heading,
  FooterWrapper,
  DescriptionWrapper,
  Description,
  ContentWrapper,
} from "./styles";
import { Text } from "@components/common";
import HeroIcons from "@components/common/icons/heroIcons";

const FeaturePanel = ({ data }) => {
  return (
    <>
      <ContentWrapper size={"small"}>
        <HeadingWrapper size={"small"}>
          <Heading>{data?.[0]?.featurePanelTitle}</Heading>
          <DescriptionWrapper>
            <Description
              dangerouslySetInnerHTML={{
                __html: data?.[0]?.featurePanelBody,
              }}
            />
          </DescriptionWrapper>
        </HeadingWrapper>
      </ContentWrapper>
      <FooterWrapper>
        <VideoButton href={data?.[0]?.featureVideoUrl}>
          <Text>{data?.[0]?.featureVideoTitle}</Text>
          <HeroIcons type={"video"} />
        </VideoButton>
        <DownloadButton href={data?.[0]?.featureDownloadAsset?.[0]?.url}>
          <Text>{data?.[0]?.featureDownloadTitle}</Text>
          <HeroIcons type={"download"} />
        </DownloadButton>
      </FooterWrapper>
    </>
  );
};

export default FeaturePanel;
