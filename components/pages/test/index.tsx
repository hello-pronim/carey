import React from "react";
import { Image } from "@components/common";
import { PreFooter } from "@components/common";
import OpenMorningsCard from "@components/common/cards/openMornings/Card";

import { Wrapper } from "./styles";

const Test = () => {
  return (
    <Wrapper>
      <OpenMorningsCard
        title="Open Mornings"
        description="We invite you to visit us to explore our school and discover why a Carey education is right for your family."
        background="assets/img/open_mornings_img.png"
        href="#"
        size="large"
      />
      <Image
        src="https://images.unsplash.com/photo-1629363447922-1f421b470828"
        alt="Image by Tim Schmidbauer on Unsplash"
        width={500}
        height={275}
        placeholder="empty"
        layout="responsive"
        fallback="random thing"
        objectFit="cover"
        priority
        unoptimized
      />
      <PreFooter />
    </Wrapper>
  );
};

export default Test;
