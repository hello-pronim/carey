import Button from "@components/common/button/button";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { accordion, accordionInner } from "./animations";
import {
  AccordionItem,
  AccordionTitle,
  AccordionContent,
  Div,
  Title,
  ButtonWrapper,
  TitleWrraper,
  Number,
  // Dot,
  ContentSecondBlock,
} from "./styles";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionItem>
      <AccordionTitle onClick={() => setIsActive(!isActive)}>
        <TitleWrraper>
          <Number>1</Number>
          {/* <Dot />
           */}
          <Title>{title}</Title>
        </TitleWrraper>
        <Div>{isActive ? "-" : "+"}</Div>
      </AccordionTitle>
      <AnimatePresence>
        {isActive && (
          <Div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={accordion}
          >
            <AccordionContent
              variants={accordionInner}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {content}
              <ContentSecondBlock>{content}</ContentSecondBlock>
              <ButtonWrapper>
                <Button
                  arrow
                  label="Apply online"
                  type="solid"
                  theme="light"
                  scale="sm"
                  href="#"
                />
              </ButtonWrapper>
            </AccordionContent>
          </Div>
        )}
      </AnimatePresence>
    </AccordionItem>
  );
};

export default Accordion;
