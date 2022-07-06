import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Text } from "@components/common";
import { useGetFullPath } from "@hooks/useGetFullPath";
import {
  AccordionWrapper,
  AccordionItem,
  AccordionImage,
  AccordionContent,
} from "./styles";

const ImageAccordion = ({ accordionData }) => {
  const router = useRouter();
  const getFullPath = useGetFullPath();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseOver = (index: any) => {
    setActiveIndex(index);
  };

  const handleItemClick = (pageSlug) => {
    if (!pageSlug) return;

    router.push(getFullPath(pageSlug));
  };

  return (
    <>
      <AccordionWrapper>
        {accordionData?.map((item, index) => {
          const { title, subtitle, pageLink, campusAccordionImage } = item;
          const xPoint = campusAccordionImage?.[0]?.focalPoint?.[0] * 100 + "%";
          const yPoint = campusAccordionImage?.[0]?.focalPoint?.[1] * 100 + "%";

          return (
            <AccordionItem
              key={title}
              css={{
                "@min768": {
                  flex: `${activeIndex === index ? "2.5" : "1"}`,
                },
              }}
              onMouseOver={() => handleMouseOver(index)}
              onClick={() => handleItemClick(pageLink?.[0])}
            >
              {campusAccordionImage?.[0]?.url && (
                <AccordionImage
                  css={{
                    transform: `scale(${activeIndex === index ? "1.15" : "1"})`,
                  }}
                >
                  <Image
                    src={campusAccordionImage?.[0]?.url}
                    alt={title ?? ""}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={`${xPoint} ${yPoint}`}
                  />
                </AccordionImage>
              )}

              <AccordionContent>
                {title && (
                  <Text
                    as="h3"
                    variant="Heading-Large"
                    css={{
                      color: "$white",
                    }}
                  >
                    {title}
                  </Text>
                )}
                {subtitle && (
                  <Text
                    variant="Body-Regular"
                    css={{
                      color: "$white",
                      fontWeight: "400",
                    }}
                  >
                    {subtitle}
                  </Text>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </AccordionWrapper>
    </>
  );
};

export default ImageAccordion;
