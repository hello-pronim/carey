import React from "react";
import { Container, Image } from "@components/common";
import { PreFooter } from "@components/common";
import OpenMorningsCard from "@components/common/cards/openMornings/Card";
import EnrolmentCard from "@components/common/cards/enrolments/Card";

import { ImageWrapper, Wrapper } from "./styles";

const Test = () => {
  return (
    <Wrapper>
      <Container>
        <OpenMorningsCard
          title="Open Mornings"
          description="We invite you to visit us to explore our school and discover why a Carey education is right for your family."
          href="#"
          size="small"
        />
      </Container>
      <Container>
        <OpenMorningsCard
          title="Open Mornings"
          description="We invite you to visit us to explore our school and discover why a Carey education is right for your family."
          href="#"
          size="large"
        />
      </Container>
      <Container>
        <OpenMorningsCard
          title="Open Mornings"
          description="We invite you to visit us to explore our school and discover why a Carey education is right for your family."
          href="#"
          size="large"
          type="landscape"
        />
      </Container>
      <Container>
        <OpenMorningsCard
          title="Open Mornings"
          description="We invite you to visit us to explore our school and discover why a Carey education is right for your family."
          href="#"
          size="large"
          type="application-form"
        />
      </Container>
      <Container>
        <EnrolmentCard
          title="Open Mornings"
          description="We invite you to visit us to explore our school and discover why a Carey education is right for your family."
          href="#"
          size="small"
        />
      </Container>
      <Container>
        <EnrolmentCard
          title="Open Mornings"
          description="We invite you to visit us to explore our school and discover why a Carey education is right for your family."
          href="#"
          size="large"
        />
      </Container>
      <Container>
        <EnrolmentCard
          title="Open Mornings"
          description="We invite you to visit us to explore our school and discover why a Carey education is right for your family."
          href="#"
          size="large"
          type="landscape"
        />
      </Container>
      <Container>
        <EnrolmentCard
          title="Open Mornings"
          description="We invite you to visit us to explore our school and discover why a Carey education is right for your family."
          href="#"
          size="large"
          type="application-form"
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
