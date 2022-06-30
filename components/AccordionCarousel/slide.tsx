import React, { useState } from "react";
import Image from "next/image";
import Player from "react-player";
import { SlideContainer, SlideImage, SlideVideo } from "./styles";

const AccordionSlide = ({ accordion }) => {
  const { title, lifeHeroImage } = accordion;
  const xPoint = lifeHeroImage?.[0]?.focalPoint?.[0] * 100 + "%";
  const yPoint = lifeHeroImage?.[0]?.focalPoint?.[1] * 100 + "%";
  const [playing, setPlaying] = useState<boolean>(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  return (
    <SlideContainer onMouseEnter={togglePlay} onMouseLeave={togglePlay}>
      <SlideImage
        css={{
          visibility: playing ? "hidden" : "visible",
          opacity: playing ? 0 : 1,
        }}
      >
        <Image
          src={lifeHeroImage?.[0]?.url ?? ""}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition={`${xPoint} ${yPoint}`}
        />
      </SlideImage>

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
          url={accordion.lifeVideoLoop}
        />
      </SlideVideo>
    </SlideContainer>
  );
};

export default AccordionSlide;
