import { Image } from "@components/common";
import InvokeElement from "@utils/invokeElement";
import { v4 as uuid } from "uuid";
import { parseDocument } from "htmlparser2";
import { Container as OuterContainer } from "@components/common";
import {
  Container,
  Content,
  ImageWrapper,
  TextWidgetWrapper,
  Wrapper,
} from "./styles";
import RichText from "@utils/richTextRenderer";

const TextBlock = (props) => {
  const parsedHTML = parseDocument(props.bodyText);
  return (
    <OuterContainer type="unbound">
      <Wrapper layout={props.layout}>
        <TextWidgetWrapper>
          <Container>
            <Content>
              {parsedHTML.children.map((component: any) => (
                <InvokeElement
                  key={uuid()}
                  el={component}
                  type={component?.name}
                  map={RichText}
                />
              ))}
            </Content>
          </Container>
        </TextWidgetWrapper>
        <ImageWrapper>
          <Image
            alt="PreFooter Image"
            src={props.image?.[0].url}
            width={props.image?.[0].width}
            height={props.image?.[0].height}
            layout="responsive"
            objectFit="cover"
          />
        </ImageWrapper>
      </Wrapper>
    </OuterContainer>
  );
};

export default TextBlock;
