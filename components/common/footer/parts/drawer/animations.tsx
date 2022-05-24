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

export const primaryDrawer = {
  // hidden: {
  //   x: "-100%",
  //   transition: {
  //     type: "linear",
  //     duration: 0.4,
  //   },
  // },
  // visible: {
  //   x: 0,
  //   transition: {
  //     type: "linear",
  //     duration: 0.4,
  //   },
  // },
};

export const conditionalDrawer = {
  hidden: {
    x: "-100%",
    opacity: 0,
    transition: {
      type: "linear",
      duration: 0.4,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "linear",
      duration: 0.4,
      opacity: {
        duration: 0,
      },
    },
  },
  exit: {
    x: "-100%",
    transition: {
      type: "linear",
      duration: 0.4,
    },
  },
};
