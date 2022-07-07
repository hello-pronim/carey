import React, { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import { Swiper as SwiperRoot, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Swiper = ({ children, ...props }) => {
  const [hasCaptions, setHasCaptions] = useState(false);

  useEffect(() => {
    if (children.length > 0) {
      children.forEach(
        (child) =>
          Array.isArray(child.props.children) &&
          !hasCaptions &&
          setHasCaptions(true)
      );
    }
  }, [children, hasCaptions]);

  if (children) {
    return (
      <Wrapper hasCaptions={hasCaptions}>
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
