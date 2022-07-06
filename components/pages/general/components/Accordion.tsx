import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { styled, theme } from "@styles/stitches";
import { motion, AnimatePresence } from "framer-motion";
import { Text, Button, Container } from "@components/common";
import OperatorIcon from "@components/common/icons/operatorIcon";
import { parseDocument } from "htmlparser2";
import InvokeElement from "@utils/invokeElement";
import RichText from "@utils/richTextRenderer";
import { useGetFullPath } from "@hooks/useGetFullPath";

const AccordionWrapper = styled("div", {
  gridColumn: "1 / span 2",
  "@min768": {
    gridColumn: "1 / span 7",
  },
  "@min1024": {
    gridColumn: "2 / span 10",
  },
  "@min1440": {
    gridColumn: "1 / span 7",
  },
  "@min1920": {
    gridColumn: "2 / span 6",
  },
});
const AccordionItem = styled("div", {
  width: "100%",
});

const Div = styled("span", {
  display: "flex",
  alignItems: "center",
});

const ContentWrapper = styled(motion.div, {
  overflow: "hidden",
});

const SVGWrapper = styled("div", {
  "> svg": {
    transition: "0.5s all",
  },
});

const ContentSecondBlock = styled("div", {
  padding: "2.5rem",
  background: "#FFFFFF",
  marginTop: "16px",
});

const Number = styled("span", {
  width: "36px",
  height: "36px",
  "> span": {
    position: "relative",
    top: "0.1em",
  },
  "@media screen and (max-width: 1440px)": {
    width: "26px",
    height: "26px",
  },
  borderRadius: "100%",
  border: "1px solid #051B3F",
  display: "flex",
  marginRight: "10px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  transition: "0.5s all",
});

const Dot = styled("div", {
  padding: "3px",
  borderRadius: "100%",
  border: "1px solid",
  backgroundColor: "#051B3F",
  marginRight: "40px",
});

const TitleWrapper = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  "&:hover": {
    "> span": {
      backgroundColor: "#051B3F",
      "> span": { color: "white" },
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
  alignItems: "center",
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
  marginLeft: "40px",
});

const Accordions = (props) => {
  const getFullPath = useGetFullPath();
  const [accordions, setAccordions] = useState<any>(props?.accordions);

  const changeActiveAccordion = (index) => {
    const changedAccordions = [...accordions];
    const layout = changedAccordions?.[index]?.accordionLayout;
    const blockIndex = layout.findIndex(
      (el) => el.__typename === blockType("Heading")
    );
    layout[blockIndex].isOpened = !layout?.[blockIndex].isOpened;
    setAccordions(changedAccordions);
  };

  const blockType = (type) => {
    return `accordionLayout_${type}_BlockType`;
  };

  const getAttr = (index, key, type) => {
    const layout = accordions?.[index]?.accordionLayout;
    if (layout) {
      const blockIndex = layout.findIndex(
        (el) => el.__typename === blockType(type)
      );
      return layout[blockIndex]?.[key];
    }
    return false;
  };

  const ParseHTML = ({ html }) => {
    const parsedHTML = parseDocument(html);
    return (
      <>
        {parsedHTML.children.map((component: any) => (
          <InvokeElement
            key={uuid()}
            el={component}
            type={component?.name}
            map={RichText}
          />
        ))}
      </>
    );
  };

  return (
    <Container>
      <AccordionWrapper>
        {accordions?.length
          ? accordions?.map((item, index) => {
              return (
                <AccordionItem key={index}>
                  <AccordionTitle onClick={() => changeActiveAccordion(index)}>
                    <TitleWrapper>
                      {props.accordionSetType === "numbered" && (
                        <Number>
                          <Text variant="Body-Large">{index + 1}</Text>
                        </Number>
                      )}
                      {props.accordionSetType === "ticked" && <Dot />}
                      <Text as="h2" variant="Heading-Small">
                        {getAttr(index, "headline", "Heading")}
                      </Text>
                    </TitleWrapper>
                    {props.accordionSetType === "plain" ? (
                      <SVGWrapper>
                        {getAttr(index, "isOpened", "Heading") ? (
                          <OperatorIcon type="minus" />
                        ) : (
                          <OperatorIcon type="plus" />
                        )}
                      </SVGWrapper>
                    ) : (
                      <Div>
                        {getAttr(index, "isOpened", "Heading") ? (
                          <OperatorIcon type="minus" />
                        ) : (
                          <OperatorIcon type="plus" />
                        )}
                      </Div>
                    )}
                  </AccordionTitle>
                  <AnimatePresence>
                    {getAttr(index, "isOpened", "Heading") && (
                      <ContentWrapper
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        <AccordionContent>
                          {getAttr(index, "bodyText", "content") && (
                            <ParseHTML
                              html={getAttr(index, "bodyText", "content")}
                            />
                          )}
                          {getAttr(index, "breakOutBlock", "breakOut") && (
                            <ContentSecondBlock>
                              <ParseHTML
                                html={getAttr(
                                  index,
                                  "breakOutBlock",
                                  "breakOut"
                                )}
                              />
                            </ContentSecondBlock>
                          )}
                          {getAttr(index, "buttonText", "button") &&
                            (getAttr(index, "buttonEntry", "button") ||
                              getAttr(index, "buttonUrl", "button")) && (
                              <ButtonWrapper>
                                <Button
                                  arrow={getAttr(index, "arrowed", "button")}
                                  label={getAttr(index, "buttonText", "button")}
                                  theme={getAttr(
                                    index,
                                    "buttonTheme",
                                    "button"
                                  )}
                                  type={getAttr(index, "buttonType", "button")}
                                  scale={getAttr(index, "buttonSize", "button")}
                                  href={
                                    getFullPath(
                                      getAttr(
                                        index,
                                        "buttonEntry",
                                        "button"
                                      )?.[0]
                                    ) || getAttr(index, "buttonUrl", "button")
                                  }
                                />
                              </ButtonWrapper>
                            )}
                        </AccordionContent>
                      </ContentWrapper>
                    )}
                  </AnimatePresence>
                </AccordionItem>
              );
            })
          : ""}
      </AccordionWrapper>
    </Container>
  );
};

export default Accordions;
