//@ts-nocheck
// KEEN SLIDER DOCUMENTATION - https://keen.github.io/keen-slider/

import React, { useState } from "react";
// import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import { Wrapper, Track, Slide, Pagination, Dot } from "./styles";
import Slider from "react-slick";
const Swiper = ({ children, ...props }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (children) {
    return (
      <Wrapper>
        <Slider {...settings}>
          {children.map((child, idx) => {
            return <Slide key={idx}>{child}</Slide>;
          })}
        </Slider>
        {/* {loaded && instanceRef.current && (
          <Pagination>
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <Dot
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  active={currentSlide === idx}
                ></Dot>
              );
            })}
          </Pagination>
        )} */}
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default Swiper;
