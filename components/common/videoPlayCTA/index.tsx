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
  p: 18,
  zIndex: 10,
  columnGap: 24,
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
    },
  },
  "@min375": {
    p: 20,
  },
  "@min768": {
    p: 36,
  },
  "@min1024": {
    p: 44,
  },
});

type VideoPlayCTAProps = {
  onClick: () => void;
  label: string;
};

const VideoPlayCTA = ({ onClick, label }: VideoPlayCTAProps) => {
  return (
    <VideoCTA onClick={onClick}>
      <Play width={33.33} />
      <Text variant="Heading-xSmall">{label}</Text>
    </VideoCTA>
  );
};

export default VideoPlayCTA;
