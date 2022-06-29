import React, { useState } from "react";
import { Text } from "@components/common";
import { AccordionWrapper, AccordionItem, AccordionContent } from "./styles";

const ImageAccordion = ({ accordionData, ...props }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseOver = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <>
      <AccordionWrapper>
        {accordionData?.map((item, index) => {
          const { title, subtitle, campusAccordionImage } = item;
          const xPoint = campusAccordionImage?.[0]?.focalPoint?.[0] * 100 + "%";
          const yPoint = campusAccordionImage?.[0]?.focalPoint?.[1] * 100 + "%";

          return (
            <AccordionItem
              key={title}
              css={{
                backgroundImage: `url(${campusAccordionImage?.[0]?.url})`,
                backgroundPosition: `${xPoint} ${yPoint}`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                "@min768": {
                  flex: `${activeIndex === index ? "1.5" : "1"}`,
                },
              }}
              onMouseOver={() => handleMouseOver(index)}
            >
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
