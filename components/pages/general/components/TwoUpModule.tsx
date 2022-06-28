import React, { useMemo, useState, Fragment, useRef, useEffect } from "react";
import { styled } from "@styles/stitches";
import { useMedia, useWindowSize } from "react-use";
import { Modal, Video } from "@components/common";
import { Text } from "@components/common";
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

const TwoUpModule = ({ __typename, image1, image2, ...props }) => {
  const Primary = useRef(null);
  const WindowDimensions = useWindowSize();
  const isMobile = useMedia("(max-width: 1024px)", false);
  const [image1src] = image1;
  const [image2src] = image2;
  const [modalActive, setModalActive] = useState(false);
  const [primaryDimensions, setPrimaryDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (Primary.current) {
      const { width, height } = Primary.current.getBoundingClientRect();
      setPrimaryDimensions({ width, height });
    }
    // Needed `primary.current` to load correctly initially,
    // so no change on reload warning not relevent here.

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Primary.current, WindowDimensions]);

  const ConditionalWrapper = useMemo(() => {
    if (isMobile) return Swiper;
    return Fragment;
  }, [isMobile]);

  return (
    <>
      {__typename === "generalComponents_images2upVideo_BlockType" && (
        <Modal active={modalActive} setModalActive={setModalActive}>
          <VideoWrapper>
            <Video playing={true} url={props.videoUrl} />
          </VideoWrapper>
        </Modal>
      )}
      <ConditionalWrapper>
        <ImageLeft ref={Primary}>
          {__typename === "generalComponents_images2upVideo_BlockType" && (
            <VideoCTA onClick={() => setModalActive(!modalActive)}>
              <Play width={33.33} />
              <Text variant="Heading-xSmall">Watch our latest video</Text>
            </VideoCTA>
          )}
          <Image
            alt={props.captionImage1}
            src={image1src.url}
            width={image1src.width}
            height={image1src.height}
            layout="responsive"
            objectFit="cover"
          />
        </ImageLeft>
        <ImageRight
          css={{
            maxHeight: primaryDimensions.height,
          }}
        >
          <Image
            alt={props.captionImage2}
            src={image2src.url}
            layout="responsive"
            objectFit="cover"
            width={image2src.width}
            height={image2src.height}
          />
        </ImageRight>
      </ConditionalWrapper>
    </>
  );
};

export default TwoUpModule;
