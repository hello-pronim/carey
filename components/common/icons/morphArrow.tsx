import React, { useEffect } from "react";
import { styled } from "@styles/stitches";
import { motion, useAnimation } from "framer-motion";

const Wrapper = styled(motion.div, {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  height: 24,
  width: 24,
});

const Active = styled(motion.svg, {
  position: "absolute",
});

const Rest = styled(motion.svg, {
  position: "absolute",
  transformOrigin: "100% 50%",
});

const activeStates = {
  init: {
    x: -6,
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },
  toggle: {
    opacity: 1,
    x: 2,
    transition: {
      delay: 0.2,
      opacity: {
        delay: 0.1,
      },
    },
  },
};

const restStates = {
  init: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
    },
  },
  toggle: {
    opacity: 0,
    // x: 3,
  },
};

const MorphArrow = ({ hovered, ...props }) => {
  const restController = useAnimation();
  const activeController = useAnimation();

  useEffect(() => {
    if (hovered === true) {
      restController.start("toggle");
      activeController.start("toggle");
    }
    if (hovered === false) {
      restController.start("init");
      activeController.start("init");
    }
  }, [hovered, activeController, restController]);

  return (
    <Wrapper>
      <Active
        variants={activeStates}
        initial="init"
        animate={activeController}
        transition={{ duration: 0.2 }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 5L13.59 6.41L18.17 11H2V13H18.17L13.58 17.59L15 19L22 12L15 5Z"
          fill="#051B3F"
        />
      </Active>
      <Rest
        variants={restStates}
        initial="init"
        animate={restController}
        transition={{ duration: 0.2 }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.41 5.81641L8 7.22641L12.58 11.8164L8 16.4064L9.41 17.8164L15.41 11.8164L9.41 5.81641Z"
          fill="#051B3F"
        />
      </Rest>
    </Wrapper>
  );
};

export default MorphArrow;
