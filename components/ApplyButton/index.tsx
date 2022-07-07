import React from "react";
import { Text } from "@components/common";
import HeroButtonArrow from "@components/common/icons/HeroArrow";
import { useGetFullPath } from "@hooks/useGetFullPath";

import { Button, ButtonWrapper } from "./styles";

const ApplyButton = ({ data }) => {
  const getFullPath = useGetFullPath();

  return (
    <>
      {data.buttonLabel && (data.buttonUrl || data.buttonLink?.[0]) && (
        <ButtonWrapper
          href={data.buttonUrl || getFullPath(data?.buttonLink?.[0])}
        >
          <Button>
            <HeroButtonArrow />
            <Text variant={"Heading-xSmall"}>{data?.buttonLabel}</Text>
          </Button>
        </ButtonWrapper>
      )}
    </>
  );
};

export default ApplyButton;
