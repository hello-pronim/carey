import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Text } from "@components/common";
import {
  AccordionWrapper,
  AccordionItem,
  AccordionImage,
  AccordionContent,
} from "./styles";
import getFullPath from "@utils/getFullPath";

const ImageAccordion = ({ accordionData, navigation }) => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseOver = (index: any) => {
    setActiveIndex(index);
  };

  const handleItemClick = (pageSlug: string) => {
    if (!pageSlug) return;
    router.push(getFullPath(navigation, pageSlug));
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
              onClick={() => handleItemClick(pageLink?.[0]?.uri ?? "")}
            >
              <AccordionImage
                css={{
                  transform: `scale(${activeIndex === index ? "1.1" : "1"})`,
                }}
              >
                <Image
                  src={campusAccordionImage?.[0]?.url ?? ""}
                  alt={title ?? ""}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={`${xPoint} ${yPoint}`}
                />
              </AccordionImage>

              <AccordionContent>
                {title && (
                  <Text
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
