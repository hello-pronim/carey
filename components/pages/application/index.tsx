import React from "react";
import Hero from "@components/Hero";
import { Container } from "@components/common";
import { Text, Accordians } from "@components/common";
import ApplyResumeButton from "@components/common/applyResumeButton";
import Graphic from "@public/assets/GraphicC.svg";
import { Div } from "@components/Hero/styles";
import {
  LeftContent,
  RightContent,
  Content,
  VisibleMobile,
  HiddenMobile,
} from "./styles";

const Application = ({ pageData }) => {
  return (
    <>
      {pageData.applyOnlineBanner?.length > 0 && (
        <Hero
          type="applyOnline"
          overHeadline={pageData.applyOnlineBanner?.[0]?.preText}
          headline={pageData.applyOnlineBanner?.[0]?.headline}
          contentText={pageData.applyOnlineBanner?.[0].subText}
          enableCta={true}
          image={Graphic}
        />
      )}
      <Container
        outerCSS={{
          pt: 25,
          pb: 100,
          background: "$background",
        }}
      >
        <LeftContent>
          <Div
            css={{
              maxWidth: 560,
              "@max1200": {
                maxWidth: "100%",
              },
            }}
          >
            {pageData.instructionsBlock.length > 0 && (
              <>
                <Text as="h2" variant="Heading-Large" css={{ mb: 16 }}>
                  {pageData.instructionsBlock?.[0]?.headline}
                </Text>
                <Text
                  variant="Body-Regular"
                  dangerouslySetInnerHTML={{
                    __html: pageData.instructionsBlock?.[0]?.richText,
                  }}
                />
              </>
            )}
            <Accordians
              items={pageData.concertina.map((item: any) => ({
                title: item.intro,
                details: item.details,
              }))}
            />
            <Text as="h2" variant="Heading-Large" css={{ mb: 16, mt: 80 }}>
              How much does it cost
            </Text>
            <Text as="p" variant="Body-Regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non
            </Text>
          </Div>
          <HiddenMobile>
            <ApplyResumeButton
              outerCSS={{
                mt: 80,
              }}
              resumeBttnTheme="light"
            />
          </HiddenMobile>
        </LeftContent>
        <RightContent>
          {pageData.applicationSupportBox && (
            <Content>
              <Text as="h2" variant="Heading-Small" css={{ mb: 16 }}>
                Application Support
              </Text>
              <Text
                variant="Body-Regular"
                css={{ pb: 30 }}
                dangerouslySetInnerHTML={{
                  __html: pageData.applicationSupportBox,
                }}
              />
            </Content>
          )}
          <VisibleMobile>
            <ApplyResumeButton
              outerCSS={{
                mt: 80,
              }}
              resumeBttnTheme="light"
            />
          </VisibleMobile>
        </RightContent>
      </Container>
    </>
  );
};

export default Application;
