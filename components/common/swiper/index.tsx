import React from "react";
import { Wrapper } from "./styles";
import { Swiper as SwiperRoot, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Swiper = ({ children, ...props }) => {
  if (children) {
    return (
      <Wrapper>
        <SwiperRoot
          pagination={true}
          modules={[EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
        >
          {children.map((child, idx) => {
            return <SwiperSlide key={idx}>{child}</SwiperSlide>;
          })}
        </SwiperRoot>
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default Swiper;
