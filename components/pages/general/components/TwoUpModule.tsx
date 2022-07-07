import React, { useMemo, useState, Fragment, useRef, useEffect } from "react";
import { styled } from "@styles/stitches";
import { Text } from "@components/common";
import { useMedia, useWindowSize } from "react-use";
import {
  Modal,
  Video,
  Image,
  Container,
  VideoPlayCTA,
} from "@components/common";
// import Image from "next/image";
import Swiper from "@components/common/swiper";

const LeftWrapper = styled("div", {
  "@min1024": {
    gridColumn: "2 / span 7",
  },
  "@min1440": {
    gridColumn: "1 / span 8",
  },
  "@min1920": {
    gridColumn: "2 / span 7",
  },
  boxSizing: "border-box",
});

const RightWrapper = styled("div", {
  boxSizing: "border-box",
  "@min1024": {
    gridColumn: "9 / span 3",
  },
});

const CaptionWrapper = styled("div", {
  pt: 8,
  "@min1024": {
    pt: 16,
  },
});

const ImageLeft = styled("div", {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  maxHeight: 327,
  "@min480": {
    maxHeight: 460,
  },
  "@min1024": {
    maxHeight: 465,
  },
  "@min1440": {
    maxHeight: 520,
  },
  "@min1920": {
    maxHeight: 600,
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
    alignSelf: "end",
    maxHeight: 336,
  },
  "@min1920": {
    maxHeight: 440,
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
    <Container>
      {__typename === "generalComponents_images2upVideo_BlockType" && (
        <Modal active={modalActive} setModalActive={setModalActive}>
          <VideoWrapper>
            <Video playing={true} url={props.videoUrl} />
          </VideoWrapper>
          <></>
        </Modal>
      )}
      <ConditionalWrapper>
        <LeftWrapper>
          <ImageLeft ref={Primary}>
            {__typename === "generalComponents_images2upVideo_BlockType" && (
              <VideoPlayCTA
                onClick={() => setModalActive(!modalActive)}
                label={"Watch our latest video"}
              />
            )}
            {image1src?.url && (
              <Image
                alt={props.captionImage1}
                src={image1src.url}
                width={image1src.width}
                height={image1src.height}
                enableSkeleton={true}
                layout="responsive"
                objectFit="cover"
              />
            )}
          </ImageLeft>
          {props.captionImage1 && (
            <CaptionWrapper>
              <Text css={{ color: "$navy700" }} variant="Body-xxSmall">
                {props.captionImage1}
              </Text>
            </CaptionWrapper>
          )}
        </LeftWrapper>
        <RightWrapper>
          <ImageRight
            css={{
              maxHeight: isMobile && primaryDimensions.height,
            }}
          >
            {image2src?.url && (
              <Image
                alt={props.captionImage2}
                src={image2src.url}
                width={image2src.width}
                height={image2src.height}
                enableSkeleton={true}
                layout="responsive"
                objectFit="cover"
              />
            )}
          </ImageRight>
          {props.captionImage2 && (
            <CaptionWrapper>
              <Text css={{ color: "$navy700" }} variant="Body-xxSmall">
                {props.captionImage2}
              </Text>
            </CaptionWrapper>
          )}
        </RightWrapper>
      </ConditionalWrapper>
    </Container>
  );
};

export default TwoUpModule;
