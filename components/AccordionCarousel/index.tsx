import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import AccordionSlide from "./slide";
import { CustomSwiper, SliderProgress } from "./styles";
import "swiper/css";
import CarouselScrollbar from "@components/CarouselScrollbar";

const AccordionCarousel = ({ accordionData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!accordionData) return <></>;

  return (
    <>
      <CustomSwiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        loop
        observer
        observeParents
        loopedSlides={accordionData.length}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        breakpoints={{
          768: {
            loopedSlides: accordionData.length,
            slidesPerView: 2,
            spaceBetween: 0,
            loop: true,
          },
          1024: {
            loopedSlides: accordionData.length,
            slidesPerView: 3,
            spaceBetween: 0,
            loop: true,
          },
        }}
      >
        {accordionData?.map((accordion, id) => (
          <SwiperSlide key={`${accordion.title}-${id}`}>
            <AccordionSlide accordion={accordion} />
          </SwiperSlide>
        ))}

        <SliderProgress>
          <CarouselScrollbar
            activeIndex={activeIndex}
            total={accordionData.length}
          />
        </SliderProgress>
      </CustomSwiper>
    </>
  );
};

export default AccordionCarousel;
