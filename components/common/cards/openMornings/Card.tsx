import React from "react";
import { Button, Container } from "@components/common";
import { ActionWrapper, Card, Description, Heading, Wrapper } from "./styles";

const OpenMorningsCard = ({
  title,
  description,
  href = "#",
  image,
  size = "small",
}) => {
  return (
    <Card>
      <Wrapper>
        <Heading>{title}</Heading>
        <Container innerCSS={{ mx: 0 }}>
          <Description css={{ gridColumn: "1 / span 8" }}>
            {description}
          </Description>
        </Container>
        <ActionWrapper>
          <Button
            arrow
            label="Attend an Open Morning"
            type="outline"
            theme="transparent"
            scale="md"
            href={href}
          />
        </ActionWrapper>
      </Wrapper>
    </Card>
  );
};

export default OpenMorningsCard;
