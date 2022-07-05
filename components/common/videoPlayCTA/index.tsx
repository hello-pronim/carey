import React from "react";
import { styled } from "@styles/stitches";
import Play from "@components/common/icons/play";
import { Text } from "@components/common";

const VideoCTA = styled("div", {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  bottom: 0,
  left: 0,
  bg: "$navy",
  p: 16,
  zIndex: 10,
  columnGap: 10,
  transition: "background ease 200ms",
  cursor: "pointer",
  "@media (hover: hover)": {
    "&:hover": {
      bg: "$crestBlue",
    },
  },
  "&&&": {
    span: {
      position: "relative",
      top: "0.1em",
      color: "$white",
      fontSize: "14px",
      lineHeight: "20px",
      "@min768": {
        fontSize: "18px",
        lineHeight: "28px",
      },
    },
  },
  "@min375": {
    p: 18,
  },
  "@min768": {
    p: 20,
    columnGap: 24,
  },
  "@min1024": {
    p: 35,
  },
});

type VideoPlayCTAProps = {
  onClick: () => void;
  label: string;
  css?: any;
};

const VideoPlayCTA = ({ onClick, label, css }: VideoPlayCTAProps) => {
  return (
    <VideoCTA onClick={onClick} css={css}>
      <Play width={33.33} />
      <Text variant="Heading-xSmall">{label}</Text>
    </VideoCTA>
  );
};

export default VideoPlayCTA;
