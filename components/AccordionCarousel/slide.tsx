import React, { useState } from "react";
import Image from "next/image";
import Player from "react-player";
import { VideoPlayCTA, Modal, Video, Text } from "@components/common";
import {
  SlideContent,
  SlideContainer,
  SlideImage,
  SlideVideo,
  ModalVideoWrapper,
} from "./styles";

const AccordionSlide = ({ accordion }) => {
  const { title, lifeVideoButtonLabel, peopleTitle, lifeHeroImage } = accordion;
  const xPoint = lifeHeroImage?.[0]?.focalPoint?.[0] * 100 + "%";
  const yPoint = lifeHeroImage?.[0]?.focalPoint?.[1] * 100 + "%";
  const [playing, setPlaying] = useState<boolean>(false);
  const [modalActive, setModalActive] = useState<boolean>(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  return (
    <>
      <SlideContainer onMouseEnter={togglePlay} onMouseLeave={togglePlay}>
        <SlideContent
          css={{
            visibility: playing ? "hidden" : "visible",
            opacity: playing ? 0 : 1,
          }}
        >
          {title && (
            <Text as="h3" variant="Heading-Small">
              {title}
            </Text>
          )}
          {peopleTitle && (
            <Text as="p" variant="Body-Regular">
              {peopleTitle}
            </Text>
          )}
        </SlideContent>

        <SlideImage
          css={{
            visibility: playing ? "hidden" : "visible",
            opacity: playing ? 0 : 1,
          }}
        >
          {lifeHeroImage?.[0]?.url && (
            <Image
              src={lifeHeroImage?.[0]?.url}
              alt={title}
              layout="fill"
              objectFit="cover"
              objectPosition={`${xPoint} ${yPoint}`}
            />
          )}
        </SlideImage>

        <VideoPlayCTA
          onClick={() => setModalActive(!modalActive)}
          label={lifeVideoButtonLabel ?? ""}
          css={{
            visibility: playing ? "visible" : "hidden",
            opacity: playing ? 1 : 0,
            transition: "all 0.3s ease-in",
          }}
        />

        <SlideVideo>
          <Player
            playing={playing}
            playsInline
            muted
            loop
            playIcon={<></>}
            className="react-player"
            width="100%"
            height="100%"
            url={accordion.lifeVideoLoop ?? ""}
          />
        </SlideVideo>
      </SlideContainer>

      <Modal active={modalActive} setModalActive={setModalActive}>
        <ModalVideoWrapper>
          <Video playing={true} url={accordion.lifeVideoLoop ?? ""} />
        </ModalVideoWrapper>
      </Modal>
    </>
  );
};

export default AccordionSlide;
