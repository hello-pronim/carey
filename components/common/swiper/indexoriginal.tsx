// KEEN SLIDER DOCUMENTATION - https://keen.github.io/keen-slider/

import React, { useState } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import { Wrapper, Track, Slide, Pagination, Dot } from "./styles";

const Swiper = ({ children, ...props }) => {
  const [opacities, setOpacities] = useState<number[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const ResizePlugin: KeenSliderPlugin = (slider) => {
    const observer = new ResizeObserver(function () {
      slider.update();
      console.log(slider);
    });
    slider.on("created", () => {
      observer.observe(slider.container);
    });
    slider.on("destroyed", () => {
      observer.unobserve(slider.container);
    });
  };

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: children.length,
      loop: true,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion
        );
        setOpacities(new_opacities);
      },
      created() {
        setLoaded(true);
      },
    },
    [ResizePlugin]
  );

  if (children) {
    return (
      <Wrapper>
        <Track ref={sliderRef}>
          {children.map((child, idx) => {
            return (
              <Slide key={idx} animate={{ opacity: opacities[idx] }}>
                {child}
              </Slide>
            );
          })}
        </Track>
        {loaded && instanceRef.current && (
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
        )}
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default Swiper;
