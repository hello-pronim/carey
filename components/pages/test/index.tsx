import React from "react";
import { Button, Container, Image } from "@components/common";
import { PreFooter } from "@components/common";
import OpenMorningsCard from "@components/common/cards/openMornings/Card";
import EnrolmentCard from "@components/common/cards/enrolments/Card";
import TextBlock from "@components/common/textBlock/index";

import TextBlockImage from "public/assets/img/text_block_img.png";

import { ImageWrapper, Wrapper } from "./styles";

const Test = () => {
  return (
    <Wrapper>
      <Container>
        <OpenMorningsCard
          title="Open Mornings"
          description="We invite you to visit us to explore our school and discover why a Carey education is right for your family."
          backgroundImage="assets/img/bg_card_blue.png"
          studentImage="/assets/img/junior_img.png"
          href="#"
          size="small"
        />
      </Container>
      <Container>
        <OpenMorningsCard
          title="Open Mornings"
          description="We invite you to visit us to explore our school and discover why a Carey education is right for your family."
          backgroundImage="assets/img/bg_card_blue.png"
          studentImage="/assets/img/junior_img.png"
          href="#"
          size="large"
        />
      </Container>
      <Container>
        <OpenMorningsCard
          title="Open Mornings"
          description="We invite you to visit us to explore our school and discover why a Carey education is right for your family."
          backgroundImage="assets/img/bg_card_blue.png"
          studentImage="/assets/img/junior_img.png"
          href="#"
          size="large"
          type="landscape"
        />
      </Container>
      <Container>
        <OpenMorningsCard
          title="Open Mornings"
          description="We invite you to visit us to explore our school and discover why a Carey education is right for your family."
          backgroundImage="assets/img/bg_card_blue.png"
          studentImage="/assets/img/junior_img.png"
          href="#"
          size="large"
          type="application-form"
        />
      </Container>
      <Container>
        <EnrolmentCard
          title="Enrolment"
          description="Carey is an open-entry, inclusive and diverse co-educational school. We invite you to apply to enrol at ELC, Junior School, Middle and Senior School."
          backgroundImage="assets/img/bg_card_yellow.png"
          studentImage="/assets/img/junior_img_1.png"
          href="#"
          size="small"
        />
      </Container>
      <Container>
        <EnrolmentCard
          title="Enrolment"
          description="Carey is an open-entry, inclusive and diverse co-educational school. We invite you to apply to enrol at ELC, Junior School, Middle and Senior School."
          backgroundImage="assets/img/bg_card_yellow.png"
          studentImage="/assets/img/junior_img_1.png"
          href="#"
          size="large"
        />
      </Container>
      <Container>
        <EnrolmentCard
          title="Enrolment"
          description="Carey is an open-entry, inclusive and diverse co-educational school. We invite you to apply to enrol at ELC, Junior School, Middle and Senior School."
          backgroundImage="assets/img/bg_card_yellow.png"
          studentImage="/assets/img/junior_img_1.png"
          href="#"
          size="large"
          type="landscape"
        />
      </Container>
      <Container>
        <EnrolmentCard
          title="Enrolment"
          description="Carey is an open-entry, inclusive and diverse co-educational school. We invite you to apply to enrol at ELC, Junior School, Middle and Senior School."
          backgroundImage="assets/img/bg_card_yellow.png"
          studentImage="/assets/img/junior_img_1.png"
          href="#"
          size="large"
          type="application-form"
        />
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
