import React from "react";
import { Wrapper, InnerGrid, Bumper, Content, ImageWrapper } from "./styles";
import { parseDocument } from "htmlparser2";
import { Text } from "@components/common";
import Image from "next/image";

const General = ({ props }) => {
  const { overHeadline, headline, image } = props;
  const parsedHTML = parseDocument(props.bodyText);

  return (
    <Wrapper>
      <Bumper css={{ bg: "$crestYellow" }} />
      <InnerGrid
        css={{
          backgroundColor: "rgb(21,72,121)",
          bg: "linear-gradient(142deg, rgba(21,72,121,1) 0%, rgba(1,101,166,1) 15%, rgba(38,56,92,1) 97%)",
        }}
      >
        <Content>
          <div>
            <Text
              as="h6"
              variant="Heading-Overline"
              css={{ textTransform: "uppercase" }}
            >
              {overHeadline}
            </Text>
            <Text as="h2" variant="Heading-xLarge">
              {headline}
            </Text>
          </div>
          <Text as="p" variant="Heading-Small">
            {parsedHTML.children.map(({ children }: any) => {
              return children?.map((text) => text.data);
            })}
          </Text>
        </Content>

        {image.length ? (
          <ImageWrapper>
            <Image
              alt="principal"
              src={image[0]?.url}
              width={image[0]?.width}
              height={image[0]?.height}
              layout="responsive"
              objectFit="cover"
              priority
            />
          </ImageWrapper>
        ) : null}
      </InnerGrid>
      <Bumper css={{ bg: "$darkBlue" }} />
    </Wrapper>
  );
};

export default General;
