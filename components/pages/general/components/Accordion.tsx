import React, { useState } from "react";
import { styled, theme } from "@styles/stitches";
import { motion } from "framer-motion";
import Button from "@components/common/button/button";
import { AnimatePresence } from "framer-motion";
import { v4 as uuid } from "uuid";

const AccordionItem = styled("div", {
  width: "100%",
});

const accordion = {
  hidden: {
    height: 0,
    overflow: "hidden",
    transition: {
      when: "after-children",
      ease: "easeInOut",
      duration: 0.6,
    },
  },
  visible: {
    height: "auto",
    transition: {
      when: "before-children",
      ease: "easeInOut",
      duration: 0.6,
    },
  },
};

const accordionInner = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Div = styled(motion.div, {});

const Title = styled("div", {
  fontSize: "$headingSmall",
  fontWeight: 500,
  "@media screen and (max-width: 1440px)": {
    fontSize: "$headingXSmall",
  },
  marginLeft: "24px",
});

const ContentBlock = styled("div");

const ContentSecondBlock = styled("div", {
  padding: "2.5rem",
  background: "#FFFFFF",
  marginTop: "56px",
});

const Number = styled("span", {
  padding: "10px 16px 6px 16px",
  borderRadius: "100%",
  border: "1px solid #051B3F",
});

// const Dot = styled("div", {
//     padding: "3px",
//     borderRadius: "100%",
//     border: "1px solid",
//     backgroundColor: "#051B3F",
// });

const TitleWrraper = styled("div", {
  display: "flex",
  alignItems: "center",
  "&:hover": {
    span: {
      backgroundColor: "#051B3F",
      color: "white",
    },
  },
});

const ButtonWrapper = styled("div", {
  paddingTop: "2rem",
});

const AccordionTitle = styled("div", {
  color: "#051B3F",
  display: "flex",
  fontFamily: `${theme.fonts.poppins}`,
  flexDirection: "row",
  justifyContent: "space-between",
  cursor: "pointer",
  backgroundColor: "transparent",
  padding: "1rem",
});

const AccordionContent = styled(motion.div, {
  fontFamily: "$poppins",
  fontWeight: "400px",
  fontSize: "$bodyRegular",
  "@media screen and (max-width: 1440px)": {
    fontSize: "16px",
  },
  lineHeight: "160%",
  letterSpacing: "0.01em",
  color: "#051B3F",
  padding: "1rem",
  marginLeft: "60px",
});

const Accordions = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div style={{ gridColumn: "2 / span 6" }}>
      {props?.accordions?.length
        ? props?.accordions?.map((item, index) => {
            return (
              <AccordionItem key={uuid}>
                <AccordionTitle onClick={() => setIsActive(!isActive)}>
                  <TitleWrraper>
                    <Number>{index + 1}</Number>
                    {/* <Dot /> */}
                    <Title>{item.headline}</Title>
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
                        {item.contentBlock && (
                          <ContentBlock
                            dangerouslySetInnerHTML={{
                              __html: item.contentBlock,
                            }}
                          ></ContentBlock>
                        )}
                        {item.breakOutBlock && (
                          <ContentSecondBlock
                            dangerouslySetInnerHTML={{
                              __html: item.breakOutBlock,
                            }}
                          ></ContentSecondBlock>
                        )}
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
          })
        : ""}
    </div>
  );
};

export default Accordions;
