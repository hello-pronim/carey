import React, { useMemo, useState, Fragment, useRef, useEffect } from "react";
import { styled } from "@styles/stitches";
import { useMedia, useWindowSize } from "react-use";
import { Container, Modal, Video, VideoPlayCTA } from "@components/common";
import Image from "next/image";
import Swiper from "@components/common/swiper";

const ImageLeft = styled("div", {
  position: "relative",
  width: "100%",
  "@min1024": {
    gridColumn: "2 / span 5",
    transform: "translateY(50%)",
  },
  "@min1440": {
    gridColumn: "1 / span 6",
  },
  "@min1920": {
    gridColumn: "2 / span 5",
  },
  "> span": {
    height: "100% !important",
    span: { height: "100% !important" },
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
  "> span": {
    height: "100% !important",
    span: { height: "100% !important" },
  },
  "@min1024": {
    gridColumn: "7 / span 5",
  },
});

const ImageRightLower = styled("div", {
  boxSizing: "border-box",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  overflow: "hidden",
  "> span": {
    width: "100%",
    height: "100% !important",
    span: { height: "100% !important", width: "100%" },
  },
  "@min1024": {
    gridColumn: "7 / span 5",
    alignSelf: "end",
    paddingRight: "5em",
  },
});

const VideoWrapper = styled("div", {
  gridColumn: "2 / span 10",
  gridRow: 1,
});

const ThreeUpModule = ({ __typename, image1, image2, image3, ...props }) => {
  const Primary = useRef(null);
  const WindowDimensions = useWindowSize();
  const isMobile = useMedia("(max-width: 1024px)", false);
  const [image1src] = image1;
  const [image2src] = image2;
  const [image3src] = image3;
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
    <Container
      innerCSS={{
        rowGap: 16,
        "@min1440": { rowGap: 24 },
        "@min1660": { rowGap: 36 },
        "@min1920": { rowGap: 40 },
      }}
    >
      {__typename === "generalComponents_inlineGallery3upVideo_BlockType" && (
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
          {__typename ===
            "generalComponents_inlineGallery3upVideo_BlockType" && (
            <VideoPlayCTA
              onClick={() => setModalActive(!modalActive)}
              label={"Watch our latest video"}
            />
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
            maxHeight: isMobile && primaryDimensions.height,
          }}
        >
          <Image
            alt={props.captionImage2}
            src={image2src.url}
            width={image2src.width}
            height={image2src.height}
            layout="responsive"
            objectFit="cover"
          />
        </ImageRight>
        <ImageRightLower
          css={{
            maxHeight: isMobile && primaryDimensions.height,
          }}
        >
          <Image
            alt={props.captionImage3}
            src={image3src.url}
            width={image3src.width}
            height={image3src.height}
            layout="responsive"
            objectFit="cover"
          />
        </ImageRightLower>
      </ConditionalWrapper>
    </Container>
  );
};

export default ThreeUpModule;
