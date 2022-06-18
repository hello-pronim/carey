import React from "react";
import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
// import { Wrapper } from "./styles";
// import { Container } from "@components/common";
//import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

//export const AspectRatio = AspectRatioPrimitive;

const Box = styled("div", {});

const Application = ({}) => {
  return (
    <>
      <Box
        css={{
          width: 300,
          borderRadius: 6,
          overflow: "hidden",
          color: `red${blackA.blackA7}`,
        }}
      ></Box>
    </>
  );
};

export default Application;
