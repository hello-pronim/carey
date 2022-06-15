import React from "react";
import { Image } from "@components/common";
import { PreFooter } from "@components/common";

import { Wrapper } from "./styles";

const Test = () => {
  return (
    <Wrapper>
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
