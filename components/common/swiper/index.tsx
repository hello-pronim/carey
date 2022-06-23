// KEEN SLIDER DOCUMENTATION - https://keen.github.io/keen-slider/

import React, { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { Wrapper, Track, Slide, Pagination, Dot } from "./styles";

const images = [
  "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
];

const Swiper = () => {
  const [opacities, setOpacities] = React.useState<number[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: images.length,
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
  });

  return (
    <Wrapper>
      <Track ref={sliderRef}>
        {images.map((src, idx) => (
          <Slide key={idx} animate={{ opacity: opacities[idx] }}>
            <Image
              alt=""
              src={src}
              layout="responsive"
              width={800}
              height={500}
            />
          </Slide>
        ))}
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
};

export default Swiper;
