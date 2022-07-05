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

  console.log(accordionData);

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
          // console.log(swiper);
        }}
        breakpoints={{
          768: {
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

// const swiperRef = React.useRef(null);

// return (
//   <>
//     <div id="previousButton" onClick={() => swiperRef.current.swiper.slidePrev()} />
//     <div id="nextButton" onClick={() => swiperRef.current.swiper.slideNext()} />
//     <Swiper
//       ref={swiperRef}
//     >
//       <SwiperSlide>
//         Slide 1
//       </SwiperSlide>
//       <SwiperSlide>
//         Slide 2
//       </SwiperSlide>
//     </Swiper>
//   </>
// )
