import { styled } from "@styles/stitches";
import Player, { ReactPlayerProps } from "react-player";

const Wrapper = styled("div", {
  position: "relative",
  pt: "56.25%",
  width: "100%",
  ".react-player": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
});

const Video = (props: ReactPlayerProps) => {
  return (
    <Wrapper>
      <Player className="react-player" width="100%" height="100%" {...props} />
    </Wrapper>
  );
};

export default Video;
