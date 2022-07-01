import React from "react";
import { SwiperSlide } from "swiper/react";

import AccordionSlide from "./slide";
import { CustomSwiper } from "./styles";
import "swiper/css";

const AccordionCarousel = ({ accordionData }) => {
  // const swiperRef = React.useRef(null);

  if (!accordionData) return <></>;

  return (
    <>
      <CustomSwiper
        slidesPerView={1}
        spaceBetween={0}
        loop
        observer
        observeParents
        loopedSlides={accordionData.length}
        breakpoints={{
          768: {
            loopedSlides: accordionData.length,
            slidesPerView: 3,
            spaceBetween: 0,
            loop: true,
          },
        }}
      >
        {accordionData?.map((accordion, id) => {
          return (
            <SwiperSlide key={`${accordion.title}-${id}`}>
              <AccordionSlide accordion={accordion} />
            </SwiperSlide>
          );
        })}
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
