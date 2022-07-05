import React from "react";
import { useSwiper } from "swiper/react";

import ArrowRight from "@components/common/icons/arrowRight";

import {
  CarouselScrollbarWrapper,
  ProgressBar,
  ActiveProgress,
  ArrowsContainer,
  ArrowLeftWrappers,
} from "./styles";

const CarouselScrollbar = ({ activeIndex, total }) => {
  const swiper = useSwiper();

  const handlePrev = () => {
    swiper.slidePrev();
  };

  const handleNext = () => {
    swiper.slideNext();
  };

  return (
    <CarouselScrollbarWrapper>
      <ProgressBar>
        <ActiveProgress
          css={{ width: `${((activeIndex + 1) / total) * 100}%` }}
        />
      </ProgressBar>

      <ArrowsContainer>
        <ArrowLeftWrappers>
          <ArrowRight onClick={handlePrev} width={20} />
        </ArrowLeftWrappers>
        <ArrowRight onClick={handleNext} width={20} />
      </ArrowsContainer>
    </CarouselScrollbarWrapper>
  );
};

export default CarouselScrollbar;
