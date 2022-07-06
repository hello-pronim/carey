import React from "react";
import Image from "next/image";
import { Text, Button } from "@components/common";
import {
  QuickLinks,
  QuickLinksList,
  QuickLinksListItem,
  ImageWrapper,
} from "./styles";

const QuickLinksMenu = ({ data }) => {
  return (
    <>
      <QuickLinks>
        <Text as="h3" variant="Heading-xSmall" css={{ fontWeight: "$medium" }}>
          Quicklinks
        </Text>
        <QuickLinksList>
          {data?.[0]?.quicklinks?.map((item, index) => {
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
      <ImageWrapper href={data?.[0]?.featurePanelLink?.[0]?.uri}>
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
  );
};

export default QuickLinksMenu;
