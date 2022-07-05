import React from "react";
import { BreadCrumb, Container, Image } from "@components/common";
import { PreFooter } from "@components/common";

import { BreadCrumbWrapper, ImageWrapper, Wrapper } from "./styles";

const Test = () => {
  const crumbs = [
    { name: "Parent", path: "/" },
    // { name: "Child1", path: "/" },
    // { name: "Child2", path: "/" },
    // { name: "Child3", path: "/" },
    // { name: "Child4", path: "/" },
    { name: "Test", path: "/test" },
  ];

  return (
    <Wrapper>
      <Container>
        <BreadCrumbWrapper>
          <BreadCrumb crumbs={crumbs} pt={0} />
        </BreadCrumbWrapper>
      </Container>
      <Container>
        <ImageWrapper>
          <Image
            src="https://images.unsplash.com/photo-1629363447922-1f421b470828"
            alt="Image by Tim Schmidbauer on Unsplash"
            width={500}
            height={275}
            placeholder="empty"
            layout="responsive"
            fallback="random thing"
            objectFit="cover"
            enableSkeleton={true}
            priority
            unoptimized
            // debug="true"
          />
        </ImageWrapper>
      </Container>
      <PreFooter />
    </Wrapper>
  );
};

export default Test;
