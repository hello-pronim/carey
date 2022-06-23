import React, { useMemo, useState, Fragment, useRef, useEffect } from "react";
import { styled } from "@styles/stitches";
import { useMedia, useWindowSize } from "react-use";
// import { v4 as uuid } from "uuid";
import { Modal, Video } from "@components/common";
import { Text } from "@components/common";
import LeftImage from "public/assets/img/2upleft.png";
import RightImage from "public/assets/img/2upRight.png";
import Image from "next/image";
import Play from "@components/common/icons/play";
import Swiper from "@components/common/swiper";

const ImageLeft = styled("div", {
  position: "relative",
  width: "100%",
  "@min1024": {
    gridColumn: "1 / span 8",
  },
  "@min1440": {
    gridColumn: "2 / span 7",
  },
  boxSizing: "border-box",
});

const ImageRight = styled("div", {
  boxSizing: "border-box",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  overflow: "hidden",
  "@min1024": {
    gridColumn: "9 / span 3",
    alignSelf: "end",
  },
});

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
  [`${Text}`]: {
    position: "relative",
    top: "0.1em",
    color: "$white",
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

const VideoWrapper = styled("div", {
  gridColumn: "2 / span 10",
  gridRow: 1,
});

const TwoUpModule = ({ type = "video", ...props }) => {
  const WindowDimensions = useWindowSize();
  const [modalActive, setModalActive] = useState(false);
  const [primaryDimensions, setPrimaryDimensions] = useState({
    width: 0,
    height: 0,
  });
  const isMobile = useMedia("(max-width: 1024px)", false);
  const Primary = useRef(null);
  const ConditionalWrapper = useMemo(() => {
    if (isMobile) return Swiper;
    return Fragment;
  }, [isMobile]);

  useEffect(() => {
    if (Primary.current) {
      const { width, height } = Primary.current.getBoundingClientRect();
      setPrimaryDimensions({ width, height });
    }
  }, [WindowDimensions]);
  console.log(primaryDimensions);
  return (
    <>
      {type === "video" && (
        <Modal active={modalActive} setModalActive={setModalActive}>
          <VideoWrapper>
            <Video
              playing={true}
              url="https://www.youtube.com/watch?v=NJDCUP8m75g"
            />
          </VideoWrapper>
        </Modal>
      )}
      <ConditionalWrapper>
        <ImageLeft ref={Primary}>
          <VideoCTA onClick={() => setModalActive(!modalActive)}>
            <Play width={33.33} />
            <Text variant="Heading-xSmall">Watch our latest video</Text>
          </VideoCTA>
          <Image alt="" src={LeftImage} layout="responsive" />
        </ImageLeft>
        <ImageRight
          css={{
            width: isMobile && primaryDimensions.width,
            height: isMobile && primaryDimensions.height,
          }}
        >
          <Image
            alt=""
            src={RightImage}
            layout="responsive"
            objectFit="cover"
          />
        </ImageRight>
      </ConditionalWrapper>
    </>
  );
};

export default TwoUpModule;
