import React, { useState } from "react";
import { styled, theme } from "@styles/stitches";
import { motion } from "framer-motion";
import Button from "@components/common/button/button";
import { AnimatePresence } from "framer-motion";
import OperatorIcon from "@components/common/icons/operatorIcon";

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

const AccordionItem = styled("div", {
  width: "100%",
});
const Div = styled("span", {
  display: "flex",
  alignItems: "center",
});
const ContentWrraper = styled(motion.div, {});
const SVGWrraper = styled("div", {});
const Title = styled("div", {
  fontSize: "22px",
  fontWeight: 500,
  "@media screen and (max-width: 1440px)": {
    fontSize: "18px",
  },
});
const ContentBlock = styled("div");
const ContentSecondBlock = styled("div", {
  padding: "2.5rem",
  background: "#FFFFFF",
  marginTop: "16px",
});
const Number = styled("span", {
  width: "36px",
  height: "36px",
  "@media screen and (max-width: 1440px)": {
    width: "26px",
    height: "26px",
  },
  borderRadius: "100%",
  border: "1px solid #051B3F",
  display: "flex",
  marginRight: "24px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
});
const Dot = styled("div", {
  padding: "3px",
  borderRadius: "100%",
  border: "1px solid",
  backgroundColor: "#051B3F",
});
const TitleWrraper = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  "&:hover": {
    span: {
      transition: "0.3s all",
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
  borderBottom: "1px solid #B3CBDE",
  fontFamily: `${theme.fonts.poppins}`,
  flexDirection: "row",
  justifyContent: "space-between",
  cursor: "pointer",
  backgroundColor: "transparent",
  padding: "1rem .5rem",
  transition: "0.3s all",
  "&:hover": {
    div: {
      svg: {
        backgroundColor: "#FFFF",
        borderRadius: "100%",
      },
    },
  },
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
  const [accordions, setAccordions] = useState<any>(props?.accordions);

  const changeActiveAccordion = (index) => {
    const changedAccordions = [...accordions];
    changedAccordions[index].isOpened = !changedAccordions[index].isOpened;
    setAccordions(changedAccordions);
  };

  return (
    <div style={{ gridColumn: "2 / span 6" }}>
      {accordions?.length
        ? accordions?.map((item, index) => {
            return (
              <AccordionItem key={item.index}>
                <AccordionTitle onClick={() => changeActiveAccordion(index)}>
                  <TitleWrraper>
                    {props.accordionSetType === "numbered" && (
                      <Number>{index + 1}</Number>
                    )}
                    {props.accordionSetType === "ticked" && <Dot />}
                    <Title>{item.headline}</Title>
                  </TitleWrraper>
                  {props.accordionSetType === "plain" ? (
                    <SVGWrraper>
                      {item.isOpened ? (
                        <OperatorIcon type="minus" />
                      ) : (
                        <OperatorIcon type="plus" />
                      )}
                    </SVGWrraper>
                  ) : (
                    <Div>
                      {item.isOpened ? (
                        <OperatorIcon type="minus" />
                      ) : (
                        <OperatorIcon type="plus" />
                      )}
                    </Div>
                  )}
                </AccordionTitle>
                <AnimatePresence>
                  {item.isOpened && (
                    <ContentWrraper
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
                        {item.buttonText &&
                          (item.buttonEntry || item.buttonURL) && (
                            <ButtonWrapper>
                              <Button
                                arrow={item.buttonArrow}
                                label={item.buttonText}
                                color={item.buttonColor}
                                type="solid"
                                theme="light"
                                scale="sm"
                                href={
                                  item.buttonEntry?.[0]?.uri || item.buttonUrl
                                }
                              />
                            </ButtonWrapper>
                          )}
                      </AccordionContent>
                    </ContentWrraper>
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
