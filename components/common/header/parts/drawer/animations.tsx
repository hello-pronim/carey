export const drawer = {
  hidden: {
    x: "-100%",
    transition: {
      type: "linear",
      duration: 0.4,
    },
  },
  visible: {
    x: "-20px",
    transition: {
      type: "spring",
      duration: 0.75,
    },
  },
};

export const innerDrawers = {
  hidden: (i) => ({
    x: "-100%",
    opacity: i * 0,
    transition: {
      type: "linear",
      duration: 0.4,
    },
  }),
  visible: (i) => ({
    x: 0,
    opacity: i * 1,
    transition: {
      type: "linear",
      duration: 0.4,
      delay: i * 0.4,
    },
  }),
};
