import React from "react";
import { BreadCrumb, Button, Container, Image } from "@components/common";
import { PreFooter } from "@components/common";
import TextBlock from "@components/common/textBlock/index";

import TextBlockImage from "public/assets/img/text_block_img.png";

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
      <Container type="unbound">
        <TextBlock
          title="Transition to Middle School"
          primaryText="The transitions from Junior School and to Senior School are managed carefully and sensitively for our Year 7s and Year 9s."
          secondaryText="Before their first or last day arrives they will already feel a part of their new Carey environment. Our Middle School is separate but not isolated from our Junior and Senior Schools, allowing for cross-age activities and connections. "
          image={TextBlockImage}
          action={
            <Button
              arrow
              label="View more on the transition"
              type="solid"
              theme="light"
              variant="secondary"
              scale="md"
              href="#"
            />
          }
          textPosition="left" // can be optional(left by default)
        />
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
